// prefill.js — turn scenario evidence into (1) automated verdicts for the 🟢 Area C/D
// checks and (2) the level-0 answers of the interview questionnaire, each answer carrying
// the evidence that produced it. A scan confirms presence, never absence: FAIL means the
// scan *saw* a violation; the absence of a signal is reported as NOT-OBSERVED, never as PASS
// for anything the client alone can attest.

import { classifyUrl, classifyCookie, cookieDurationDays, isFirstParty } from './classify.js';

const V = { PASS: 'PASS', FAIL: 'FAIL', WARN: 'WARN', NOBS: 'NOT-OBSERVED' };

function trackersInRequests(requests, siteHost) {
  const seen = new Map();
  for (const r of requests) {
    if (!r.host || isFirstParty(r.host, siteHost)) continue;
    const c = classifyUrl(r.url);
    if (c.isTracker || c.signal) {
      const key = `${c.vendor || c.host}:${c.category}`;
      if (!seen.has(key)) seen.set(key, { vendor: c.vendor, host: c.host, category: c.category, consent: c.consent, signal: c.signal, sample: r.url });
    }
  }
  return [...seen.values()];
}

function nonTechnicalCookies(cookies, siteHost, nowMs) {
  const out = [];
  for (const c of cookies) {
    const cl = classifyCookie(c, siteHost);
    if (cl.consent === 'required' || cl.consent === 'exempt-conditional') {
      const dur = cookieDurationDays(c, nowMs);
      out.push({ name: c.name, domain: c.domain, vendor: cl.vendor, category: cl.category, consent: cl.consent, durationDays: dur.days, kind: dur.kind });
    }
  }
  return out;
}

// results: { clean, accept, refuse, manage } (any subset). siteHost: registrable host of target.
export function buildFindings(results, siteHost, nowMs) {
  const clean = results.clean?._raw;
  const refuse = results.refuse?._raw;
  const accept = results.accept?._raw;
  const checks = {};
  const prefill = {};
  const ev = (scenario, kind) => `${scenario}/${kind}.json`;

  const mk = (id, verdict, summary, evidence, extra = {}) => ({ id, verdict, summary, evidence, ...extra });

  // ---- Area C: pre-consent trackers (baseline = clean scenario) ----
  if (clean) {
    const preTrackers = trackersInRequests(clean.requests, siteHost);
    const prePixels = preTrackers.filter((t) => t.category === 'advertising-pixel');
    const preCookies = nonTechnicalCookies(clean.cookies, siteHost, nowMs);
    const preStorage = clean.storage.origins.filter((o) => !isFirstParty((/https?:\/\/([^/]+)/.exec(o.origin) || [])[1], siteHost));
    const preFp = clean.fingerprints;

    checks['C-01'] = preCookies.length
      ? mk('C-01', V.FAIL, `${preCookies.length} non-technical cookie(s) set before any interaction`, ev('clean', 'cookies'), { cookies: preCookies })
      : mk('C-01', V.PASS, 'No non-technical cookie observed before interaction', ev('clean', 'cookies'));

    checks['C-02'] = preTrackers.length
      ? mk('C-02', V.FAIL, `${preTrackers.length} tracking domain(s) contacted pre-consent`, ev('clean', 'requests'), { trackers: preTrackers })
      : mk('C-02', V.PASS, 'No request to known tracking domains pre-consent', ev('clean', 'requests'));

    checks['C-03'] = preStorage.length
      ? mk('C-03', V.WARN, `Third-party client storage populated pre-consent on ${preStorage.length} origin(s) — verify identifiers`, ev('clean', 'storage'), { origins: preStorage.map((o) => o.origin) })
      : mk('C-03', V.PASS, 'No third-party client storage populated pre-consent', ev('clean', 'storage'));

    checks['C-04'] = preFp.length
      ? mk('C-04', V.FAIL, `${preFp.length} fingerprinting API call(s) pre-consent`, ev('clean', 'fingerprints'), { calls: preFp })
      : mk('C-04', V.PASS, 'No instrumented fingerprinting API called pre-consent', ev('clean', 'fingerprints'));

    checks['C-05'] = prePixels.length
      ? mk('C-05', V.FAIL, `Advertising pixel(s) active pre-consent: ${prePixels.map((p) => p.vendor).join(', ')}`, ev('clean', 'requests'), { pixels: prePixels })
      : mk('C-05', V.PASS, 'No platform advertising pixel fired pre-consent', ev('clean', 'requests'));
  }

  // C-07: after refusal, no tracker fires
  if (refuse) {
    const postRefuse = trackersInRequests(refuse.requests, siteHost);
    const refuseCookies = nonTechnicalCookies(refuse.cookies, siteHost, nowMs);
    const acted = results.refuse?.action?.method && results.refuse.action.method !== 'not-found';
    if (!acted) {
      checks['C-07'] = mk('C-07', V.NOBS, 'Reject control not found — refusal path could not be exercised', ev('refuse', 'requests'), { action: results.refuse?.action });
    } else {
      checks['C-07'] = (postRefuse.length || refuseCookies.length)
        ? mk('C-07', V.FAIL, `${postRefuse.length} tracker(s) / ${refuseCookies.length} non-technical cookie(s) after refusal`, ev('refuse', 'requests'), { trackers: postRefuse, cookies: refuseCookies })
        : mk('C-07', V.PASS, 'No tracker fired after refusal', ev('refuse', 'requests'));
    }
  }

  // C-08: cookie duration (evaluate on accept scenario where persistent cookies exist)
  const durScenario = accept || clean;
  if (durScenario) {
    const longlived = nonTechnicalCookies(durScenario.cookies, siteHost, nowMs)
      .filter((c) => c.kind === 'persistent' && c.durationDays != null && c.durationDays > 400);
    checks['C-08'] = longlived.length
      ? mk('C-08', V.WARN, `${longlived.length} profiling cookie(s) exceed ~13 months`, ev(accept ? 'accept' : 'clean', 'cookies'), { cookies: longlived })
      : mk('C-08', V.PASS, 'No profiling cookie beyond the ~13-month indication', ev(accept ? 'accept' : 'clean', 'cookies'));
  }

  // C-13: distinct scenarios executed
  const ran = Object.keys(results);
  checks['C-13'] = mk('C-13', ran.length >= 4 ? V.PASS : V.WARN,
    `Scenarios executed: ${ran.join(', ')}`, null, { scenarios: ran });

  // ---- Area D: cookie banner / CMP ----
  const cmp = results.clean?.cmp || results.accept?.cmp;
  if (cmp) {
    checks['D-01'] = cmp.id !== 'unknown'
      ? mk('D-01', V.PASS, `CMP detected: ${cmp.name}`, null, { cmp: cmp.name, tcf: cmp.tcf })
      : mk('D-01', cmp.tcf ? V.WARN : V.NOBS, cmp.tcf ? 'Unknown IAB TCF CMP present' : 'No known CMP fingerprinted', null, { tcf: cmp.tcf });
    const rejectFound = results.refuse?.action?.method && results.refuse.action.method !== 'not-found';
    checks['D-02'] = rejectFound
      ? mk('D-02', V.PASS, 'A reject-all control was present and clickable', null, { method: results.refuse.action.method })
      : mk('D-02', V.WARN, 'No first-level reject-all control found (verify manually)', null, { action: results.refuse?.action });
  }

  // ---- Level 0 prefilled answers ----
  const put = (id, value, from, action = 'Confirm') => { prefill[id] = { value, prefilledFrom: from, clientAction: action }; };

  if (cmp) put('Q-C-01/Q-D-01', cmp.name, ['D-01'], 'Confirm, say who maintains it and the last revision');
  if (results.accept?._raw) {
    const postPixels = trackersInRequests(results.accept._raw.requests, siteHost).filter((t) => /advertising/.test(t.category));
    put('Q-C-06/Q-E-10', postPixels.map((p) => p.vendor).filter(Boolean), ['C-05', 'C-02'], 'Confirm and say where they are declared');
    const analytics = trackersInRequests(results.accept._raw.requests, siteHost).filter((t) => t.category === 'analytics');
    put('Q-C-03', analytics.map((a) => a.vendor).filter(Boolean), ['C-14'], 'Confirm, attach the DPA and the retention setting');
    const rec = trackersInRequests(results.accept._raw.requests, siteHost).filter((t) => t.category === 'session-recording');
    put('Q-C-07/Q-G-09', rec.map((r) => r.vendor).filter(Boolean), ['C-02', 'G-10'], 'Confirm');
    const fonts = trackersInRequests(results.accept._raw.requests, siteHost).filter((t) => t.category === 'fonts');
    const captcha = trackersInRequests(results.accept._raw.requests, siteHost).filter((t) => t.category === 'captcha');
    put('Q-E-11/Q-E-12/Q-F-07', { remoteFonts: fonts.map((f) => f.vendor), captcha: captcha.map((c) => c.vendor) }, ['E-04', 'E-07'], 'Confirm and evaluate EU alternatives');
  }
  const langs = results.clean?.languages || results.accept?.languages;
  if (langs) {
    const count = new Set([langs.htmlLang, ...langs.hreflang].filter(Boolean)).size || (langs.localeLinks.length ? '≥2 (from locale links)' : 1);
    put('Q-A-03', count, ['A-04', 'A-07'], 'Confirm and say who handles the translations');
  }
  // Q-B-14 hosting / non-EU suppliers: list distinct third-party hosts (geolocation is a documentary step)
  if (results.accept?._raw || results.clean?._raw) {
    const raw = (results.accept?._raw || results.clean?._raw);
    const thirdHosts = [...new Set(raw.requests.map((r) => r.host).filter((h) => h && !isFirstParty(h, siteHost)))].slice(0, 40);
    put('Q-B-14', thirdHosts, ['B-06'], 'Confirm and indicate the safeguard for each non-EU supplier');
  }

  return { checks, prefill, verdictLegend: V };
}
