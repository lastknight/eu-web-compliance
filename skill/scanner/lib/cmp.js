// cmp.js — detect the Consent Management Platform and drive its accept / reject / manage
// controls. Detection is by global JS variable, loaded script host, or DOM selector; a
// generic text-matching fallback covers unknown banners (EN + IT).

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CMP = JSON.parse(readFileSync(join(__dirname, '..', 'knowledge', 'cmp.json'), 'utf8'));

// Detect which CMP is present. `requestHosts` is the set of hosts seen so far.
export async function detectCmp(page, requestHosts = new Set()) {
  for (const cmp of CMP.cmps) {
    // global variable?
    const hasGlobal = await page.evaluate(
      (globals) => globals.some((g) => typeof window[g] !== 'undefined'),
      cmp.detect.globals || []
    ).catch(() => false);
    // script host?
    const hasHost = (cmp.detect.hosts || []).some((h) => [...requestHosts].some((rh) => rh.includes(h)));
    // DOM selector?
    let hasDom = false;
    for (const sel of cmp.detect.selectors || []) {
      if (await page.$(sel).catch(() => null)) { hasDom = true; break; }
    }
    if (hasGlobal || hasHost || hasDom) {
      const tcf = await page.evaluate(() => typeof window.__tcfapi === 'function').catch(() => false);
      return { id: cmp.id, name: cmp.name, via: { hasGlobal, hasHost, hasDom }, tcf, def: cmp };
    }
  }
  // Unknown CMP — is there *a* banner at all?
  const tcf = await page.evaluate(() => typeof window.__tcfapi === 'function').catch(() => false);
  return { id: 'unknown', name: tcf ? 'Unknown TCF CMP' : 'Unknown / none', via: {}, tcf, def: null };
}

async function clickFirst(page, selectors = []) {
  for (const sel of selectors) {
    const el = await page.$(sel).catch(() => null);
    if (el) {
      const visible = await el.isVisible().catch(() => false);
      if (visible) {
        await el.click({ timeout: 4000 }).catch(() => {});
        return sel;
      }
    }
  }
  return null;
}

// Generic fallback: find a clickable element whose text matches one of the phrases.
async function clickByText(page, phrases = []) {
  const handle = await page.evaluateHandle((phraseList) => {
    const els = [...document.querySelectorAll('button, a, [role="button"], input[type="button"], input[type="submit"]')];
    const norm = (s) => (s || '').trim().toLowerCase();
    for (const el of els) {
      const t = norm(el.innerText || el.textContent || el.value);
      if (!t) continue;
      for (const p of phraseList) {
        if (t === p || t.includes(p)) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) return el;
        }
      }
    }
    return null;
  }, phrases).catch(() => null);
  if (!handle) return null;
  const el = handle.asElement();
  if (!el) return null;
  await el.click({ timeout: 4000 }).catch(() => {});
  return 'text-match';
}

// action: 'accept' | 'reject' | 'manage'
export async function act(page, cmp, action) {
  if (cmp.def && cmp.def[action]) {
    const sel = await clickFirst(page, cmp.def[action]);
    if (sel) return { action, method: 'selector', selector: sel };
  }
  const phrases = CMP.genericBanner[`${action}Text`] || [];
  const hit = await clickByText(page, phrases);
  if (hit) return { action, method: 'text-match', selector: null };
  return { action, method: 'not-found', selector: null };
}

// Read the raw consent/TC cookies the CMP persists (proof of consent, C-10).
export function consentCookieNames(cmp) {
  const base = cmp.def?.consentCookie || [];
  return [...new Set([...base, 'euconsent-v2'])];
}

export const cmpCatalogue = CMP;
