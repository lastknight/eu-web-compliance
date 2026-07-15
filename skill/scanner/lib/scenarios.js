// scenarios.js — run the four tagged scenarios of the method, each in a pristine,
// isolated browser context so state never leaks between them:
//   clean   — no interaction at all (the pre-consent baseline; the one that matters most)
//   accept  — accept-all clicked
//   refuse  — reject-all clicked
//   manage  — preferences panel opened (partial-choice surface)
// Each scenario records its own HAR and produces its own evidence bundle.

import { join } from 'node:path';
import {
  FINGERPRINT_INIT, instrumentRequests, captureStorage,
  captureFingerprints, captureLanguages, writeEvidence,
} from './evidence.js';
import { detectCmp, act, consentCookieNames } from './cmp.js';

export const SCENARIOS = ['clean', 'accept', 'refuse', 'manage'];

const dwell = (ms) => new Promise((r) => setTimeout(r, ms));

async function settle(page, timeoutMs) {
  try { await page.waitForLoadState('networkidle', { timeout: timeoutMs }); }
  catch { /* busy sites never idle — fall through to a fixed dwell */ }
  await dwell(1500);
}

async function cookieJar(context) {
  const cookies = await context.cookies().catch(() => []);
  return cookies.map((c) => ({
    name: c.name, domain: c.domain, path: c.path, expires: c.expires,
    httpOnly: c.httpOnly, secure: c.secure, sameSite: c.sameSite,
    source: c.expires && c.expires > 0 ? 'persistent' : 'session',
  }));
}

// Run one scenario. Returns a summary; writes evidence files under outDir/<name>/.
export async function runScenario(browser, { url, name, outDir, navTimeout = 30000 }) {
  const dir = join(outDir, name);
  const store = { requests: [] };
  const context = await browser.newContext({
    recordHar: { path: join(dir, 'network.har'), content: 'omit' },
    ignoreHTTPSErrors: true,
    userAgent: undefined,
    viewport: { width: 1366, height: 900 },
  });
  await context.addInitScript(FINGERPRINT_INIT);
  instrumentRequests(context, store);

  const page = await context.newPage();
  let navError = null;
  try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: navTimeout }); }
  catch (e) { navError = String(e).slice(0, 160); }
  await settle(page, 8000);

  const requestHosts = new Set(store.requests.map((r) => r.host).filter(Boolean));
  const cmp = await detectCmp(page, requestHosts);

  // Baseline scenario captures pre-consent — no interaction. Others act first.
  let action = null;
  if (name !== 'clean') {
    const map = { accept: 'accept', refuse: 'reject', manage: 'manage' };
    action = await act(page, cmp, map[name]);
    await settle(page, 6000);
  }

  const [cookies, storage, fingerprints, languages] = await Promise.all([
    cookieJar(context), captureStorage(page), captureFingerprints(page), captureLanguages(page),
  ]);

  await page.screenshot({ path: join(dir, 'screenshot.png'), fullPage: false }).catch(() => {});

  const reqSha = writeEvidence(dir, 'requests', { scenario: name, url, count: store.requests.length, requests: store.requests });
  const cookSha = writeEvidence(dir, 'cookies', { scenario: name, url, count: cookies.length, cookies });
  const stoSha = writeEvidence(dir, 'storage', { scenario: name, url, ...storage });
  const fpSha = writeEvidence(dir, 'fingerprints', { scenario: name, url, count: fingerprints.length, calls: fingerprints });

  await context.close();

  return {
    scenario: name,
    url,
    navError,
    cmp: { id: cmp.id, name: cmp.name, tcf: cmp.tcf, via: cmp.via, consentCookies: consentCookieNames(cmp) },
    action,
    counts: {
      requests: store.requests.length,
      requestHosts: requestHosts.size,
      cookies: cookies.length,
      storageOrigins: storage.origins.length,
      fingerprintCalls: fingerprints.length,
    },
    languages,
    evidence: {
      requests: reqSha, cookies: cookSha, storage: stoSha, fingerprints: fpSha,
      har: join(dir, 'network.har'), screenshot: join(dir, 'screenshot.png'),
    },
    // raw data kept in-memory for the prefill stage (not re-read from disk)
    _raw: { requests: store.requests, cookies, storage, fingerprints },
  };
}

export async function runAllScenarios(browser, { url, outDir, only, navTimeout }) {
  const list = only && only.length ? only : SCENARIOS;
  const results = {};
  for (const name of list) {
    results[name] = await runScenario(browser, { url, name, outDir, navTimeout });
  }
  return results;
}
