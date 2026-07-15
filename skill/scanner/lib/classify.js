// classify.js — classify request hosts, URLs and cookies against the knowledge base.
// This is the seed classifier; an external filter list can be layered on via loadFilterList.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KB = JSON.parse(readFileSync(join(__dirname, '..', 'knowledge', 'trackers.json'), 'utf8'));

// host -> registrable-ish suffix match: check exact, then progressively shorter parent domains.
function lookupHost(host) {
  if (!host) return null;
  const h = host.toLowerCase().replace(/^www\d?\./, (m) => m); // keep www; KB has explicit www keys
  if (KB.domains[host]) return { host, ...KB.domains[host], match: 'exact' };
  if (KB.domains[h]) return { host: h, ...KB.domains[h], match: 'exact' };
  // parent-domain match: a.b.tracker.com -> tracker.com
  const parts = host.toLowerCase().split('.');
  for (let i = 1; i < parts.length - 1; i++) {
    const parent = parts.slice(i).join('.');
    if (KB.domains[parent]) return { host: parent, ...KB.domains[parent], match: 'domain' };
  }
  return null;
}

// Full-URL classification: pixel-path signals take precedence (they prove a *fire*, not just a load).
export function classifyUrl(url) {
  let host = '';
  // no `new URL()` in some sandboxes downstream; parse defensively
  const m = /^[a-z]+:\/\/([^/:?#]+)/i.exec(url);
  host = m ? m[1] : '';
  const pixel = KB.pixelPaths.find((p) => url.includes(p.match));
  const byHost = lookupHost(host);
  if (pixel) {
    return {
      host,
      vendor: pixel.vendor,
      category: byHost?.category || 'advertising-pixel',
      consent: byHost?.consent || 'required',
      signal: pixel.signal,
      match: 'pixel-path',
      isTracker: true,
    };
  }
  if (byHost) return { host, ...byHost, isTracker: byHost.consent !== 'technical', signal: null };
  return { host, vendor: null, category: 'unknown', consent: 'unknown', match: 'none', isTracker: false, signal: null };
}

export function isFirstParty(host, siteHost) {
  if (!host || !siteHost) return false;
  const reg = (h) => h.toLowerCase().split('.').slice(-2).join('.');
  return reg(host) === reg(siteHost);
}

// Cookie classification: heuristic on known names + duration.
const KNOWN_COOKIE_PREFIXES = {
  '_ga': { vendor: 'Google', category: 'analytics', consent: 'exempt-conditional' },
  '_gid': { vendor: 'Google', category: 'analytics', consent: 'exempt-conditional' },
  '_gcl': { vendor: 'Google', category: 'advertising', consent: 'required' },
  '_fbp': { vendor: 'Meta', category: 'advertising-pixel', consent: 'required' },
  '_fbc': { vendor: 'Meta', category: 'advertising-pixel', consent: 'required' },
  'fr': { vendor: 'Meta', category: 'advertising', consent: 'required' },
  'IDE': { vendor: 'Google', category: 'advertising', consent: 'required' },
  'test_cookie': { vendor: 'Google', category: 'advertising', consent: 'required' },
  '_hj': { vendor: 'Hotjar', category: 'session-recording', consent: 'required' },
  'MUID': { vendor: 'Microsoft', category: 'advertising', consent: 'required' },
  'li_sugr': { vendor: 'LinkedIn', category: 'advertising-pixel', consent: 'required' },
  'bcookie': { vendor: 'LinkedIn', category: 'social', consent: 'required' },
  'personalization_id': { vendor: 'X (Twitter)', category: 'advertising', consent: 'required' },
  '_tt': { vendor: 'TikTok', category: 'advertising-pixel', consent: 'required' },
};

export function classifyCookie(cookie, siteHost) {
  const name = cookie.name || '';
  for (const [prefix, meta] of Object.entries(KNOWN_COOKIE_PREFIXES)) {
    if (name === prefix || name.startsWith(prefix)) {
      return { ...meta, match: 'name', firstParty: isFirstParty(cookie.domain, siteHost) };
    }
  }
  const byDomain = lookupHost((cookie.domain || '').replace(/^\./, ''));
  if (byDomain) return { vendor: byDomain.vendor, category: byDomain.category, consent: byDomain.consent, match: 'domain', firstParty: isFirstParty(cookie.domain, siteHost) };
  return { vendor: null, category: 'unclassified', consent: 'unknown', match: 'none', firstParty: isFirstParty(cookie.domain, siteHost) };
}

// Remaining lifetime in days from a cookie's `expires` (Playwright: seconds epoch, -1 = session).
export function cookieDurationDays(cookie, nowMs) {
  if (!cookie.expires || cookie.expires < 0) return { days: null, kind: 'session' };
  const ms = cookie.expires * 1000;
  const days = Math.round((ms - nowMs) / 86400000);
  return { days, kind: 'persistent' };
}

export const fingerprintApis = KB.fingerprintApis;
export const knowledgeBase = KB;
