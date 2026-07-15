// evidence.js — capture and persist immutable evidence for one scenario.
// Evidence types: request log (with initiator + decoded query), cookie jar, client
// storage (localStorage / sessionStorage / IndexedDB), fingerprinting API hits,
// screenshot. HAR is recorded at context level by the caller. Each JSON file is
// written with a sha256 integrity hash so the bundle is tamper-evident.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

// Init script injected before any page script runs: instruments the fingerprinting
// APIs so a pre-consent canvas/audio/font probe is recorded rather than inferred.
export const FINGERPRINT_INIT = `
(() => {
  window.__fpCalls = window.__fpCalls || [];
  const rec = (api) => { try { window.__fpCalls.push({ api, ts: Date.now() }); } catch(e){} };
  const wrap = (obj, name, api) => {
    if (!obj || !obj[name]) return;
    const orig = obj[name];
    obj[name] = function(...a){ rec(api); return orig.apply(this, a); };
  };
  try { wrap(HTMLCanvasElement.prototype, 'toDataURL', 'canvas.toDataURL'); } catch(e){}
  try { wrap(HTMLCanvasElement.prototype, 'toBlob', 'canvas.toBlob'); } catch(e){}
  try { wrap(CanvasRenderingContext2D.prototype, 'getImageData', 'canvas.getImageData'); } catch(e){}
  try { if (window.AudioContext) wrap(AudioContext.prototype, 'createAnalyser', 'audio.createAnalyser'); } catch(e){}
  try { if (document.fonts && document.fonts.check) { const o = document.fonts.check.bind(document.fonts); document.fonts.check = function(...a){ rec('fonts.check'); return o(...a); }; } } catch(e){}
  try { if (navigator.getBattery) { const o = navigator.getBattery.bind(navigator); navigator.getBattery = function(...a){ rec('navigator.getBattery'); return o(...a); }; } } catch(e){}
})();
`;

// Attach a request recorder to a context. Mutates `store.requests`.
export function instrumentRequests(context, store) {
  store.requests = store.requests || [];
  context.on('request', (req) => {
    let host = '';
    const m = /^[a-z]+:\/\/([^/:?#]+)/i.exec(req.url());
    host = m ? m[1] : '';
    let query = '';
    const qi = req.url().indexOf('?');
    if (qi >= 0) query = req.url().slice(qi + 1, qi + 1 + 512);
    store.requests.push({
      url: req.url().slice(0, 1024),
      host,
      method: req.method(),
      resourceType: req.resourceType(),
      query,
      initiator: (req.frame()?.url() || '').slice(0, 256),
    });
  });
}

export async function captureStorage(page) {
  const out = { origins: [] };
  const frames = page.frames();
  for (const frame of frames) {
    const data = await frame.evaluate(async () => {
      const dump = { localStorage: {}, sessionStorage: {}, indexedDB: [] };
      try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); dump.localStorage[k] = String(localStorage.getItem(k)).slice(0, 200); } } catch (e) {}
      try { for (let i = 0; i < sessionStorage.length; i++) { const k = sessionStorage.key(i); dump.sessionStorage[k] = String(sessionStorage.getItem(k)).slice(0, 200); } } catch (e) {}
      try { if (indexedDB.databases) { const dbs = await indexedDB.databases(); dump.indexedDB = dbs.map((d) => d.name).filter(Boolean); } } catch (e) {}
      return dump;
    }).catch(() => null);
    if (!data) continue;
    const has = Object.keys(data.localStorage).length || Object.keys(data.sessionStorage).length || data.indexedDB.length;
    if (has) out.origins.push({ origin: frame.url().slice(0, 256), ...data });
  }
  return out;
}

export async function captureFingerprints(page) {
  const calls = [];
  for (const frame of page.frames()) {
    const fc = await frame.evaluate(() => window.__fpCalls || []).catch(() => []);
    for (const c of fc) calls.push({ ...c, origin: frame.url().slice(0, 200) });
  }
  return calls;
}

export async function captureLanguages(page) {
  return page.evaluate(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || null;
    const hreflang = [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.getAttribute('hreflang'));
    const switcher = [...document.querySelectorAll('a[href]')]
      .filter((a) => /\/(en|it|fr|de|es)(\/|$)/i.test(a.getAttribute('href') || ''))
      .map((a) => a.getAttribute('href')).slice(0, 20);
    return { htmlLang, hreflang: [...new Set(hreflang)], localeLinks: [...new Set(switcher)] };
  }).catch(() => ({ htmlLang: null, hreflang: [], localeLinks: [] }));
}

function sha256(obj) {
  return createHash('sha256').update(JSON.stringify(obj)).digest('hex');
}

// Write one immutable evidence JSON. Returns { file, sha256 }.
export function writeEvidence(dir, name, payload) {
  mkdirSync(dir, { recursive: true });
  const body = { _capturedName: name, ...payload };
  const record = { integrity: 'sha256', sha256: sha256(body), data: Object.freeze(body) };
  const file = join(dir, `${name}.json`);
  writeFileSync(file, JSON.stringify(record, null, 2));
  return { file, sha256: record.sha256 };
}
