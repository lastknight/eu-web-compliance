#!/usr/bin/env node
// render.js — turn a scan-report.json into a self-contained, theme-aware HTML report.
// Utilitarian forensic-report treatment: verdicts read at a glance (semantic colour +
// severity stripe), summary before detail. No webfonts (CSP-safe, self-contained).
//
// Usage:
//   node render.js <scan-report.json> [--out report.html] [--fragment inner.html]
// --fragment writes a <style>+content body (no <html>/<head>) for embedding.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const VERDICT = {
  PASS: { label: 'PASS', tone: 'pass' },
  FAIL: { label: 'FAIL', tone: 'fail' },
  WARN: { label: 'WARN', tone: 'warn' },
  'NOT-OBSERVED': { label: 'NOT OBSERVED', tone: 'nobs' },
};
const ORDER = { FAIL: 0, WARN: 1, 'NOT-OBSERVED': 2, PASS: 3 };

const AREA_NAMES = {
  A: 'Legal documents', B: 'Privacy notice', C: 'Pre-consent trackers', D: 'Cookie banner / CMP',
  E: 'Third parties & transfers', F: 'Technical security', G: 'Forms & consent', H: 'Data subject rights',
  I: 'Governance', J: 'Data breaches', K: 'CRM & direct marketing', L: 'E-commerce',
  M: 'AI features', N: 'Voice channels', O: 'DSA / DMA / DFA',
};

function styles() {
  return `
:root {
  color-scheme: light dark;
  --paper: #ffffff;
  --sunken: #f4f6f9;
  --ink: #14181f;
  --ink-soft: #454f5e;
  --ink-faint: #7c8697;
  --line: #e2e7ee;
  --line-strong: #cfd6e0;
  --accent: #2f4a7c;
  --accent-soft: #eef2f8;
  --pass: #1f8a52;   --pass-bg: #e7f3ec;
  --fail: #c8352f;   --fail-bg: #fbeae9;
  --warn: #9a6710;   --warn-bg: #fbf1df;
  --nobs: #5a6675;   --nobs-bg: #eef1f5;
  --shadow: 0 1px 2px rgba(20,24,31,.04), 0 8px 24px rgba(20,24,31,.05);
  --sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, ui-serif, serif;
  --mono: ui-monospace, "SF Mono", "SFMono-Regular", "JetBrains Mono", Menlo, Consolas, monospace;
}
@media (prefers-color-scheme: dark) {
  :root {
    --paper: #14171d; --sunken: #1b1f27; --ink: #e9edf3; --ink-soft: #aeb8c6; --ink-faint: #737e8e;
    --line: #262c36; --line-strong: #333b47; --accent: #8fb0e6; --accent-soft: #1d2530;
    --pass: #57c98a; --pass-bg: #16281f; --fail: #f0857f; --fail-bg: #2c1917;
    --warn: #e0b062; --warn-bg: #2a2113; --nobs: #93a0b1; --nobs-bg: #1e242d;
    --shadow: 0 1px 2px rgba(0,0,0,.3), 0 10px 30px rgba(0,0,0,.35);
  }
}
:root[data-theme="light"] {
  --paper:#ffffff; --sunken:#f4f6f9; --ink:#14181f; --ink-soft:#454f5e; --ink-faint:#7c8697;
  --line:#e2e7ee; --line-strong:#cfd6e0; --accent:#2f4a7c; --accent-soft:#eef2f8;
  --pass:#1f8a52; --pass-bg:#e7f3ec; --fail:#c8352f; --fail-bg:#fbeae9;
  --warn:#9a6710; --warn-bg:#fbf1df; --nobs:#5a6675; --nobs-bg:#eef1f5;
}
:root[data-theme="dark"] {
  --paper:#14171d; --sunken:#1b1f27; --ink:#e9edf3; --ink-soft:#aeb8c6; --ink-faint:#737e8e;
  --line:#262c36; --line-strong:#333b47; --accent:#8fb0e6; --accent-soft:#1d2530;
  --pass:#57c98a; --pass-bg:#16281f; --fail:#f0857f; --fail-bg:#2c1917;
  --warn:#e0b062; --warn-bg:#2a2113; --nobs:#93a0b1; --nobs-bg:#1e242d;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--sunken); color: var(--ink); font-family: var(--sans);
  line-height: 1.55; -webkit-font-smoothing: antialiased; }
.wrap { max-width: 920px; margin: 0 auto; padding: clamp(20px, 4vw, 56px) clamp(16px, 4vw, 40px); }
.sheet { background: var(--paper); border: 1px solid var(--line); border-radius: 14px;
  box-shadow: var(--shadow); overflow: hidden; }
.pad { padding: clamp(22px, 4vw, 44px); }
.eyebrow { font-family: var(--mono); font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--accent); font-weight: 600; }
h1 { font-family: var(--serif); font-weight: 600; letter-spacing: -.01em; text-wrap: balance;
  margin: 10px 0 4px; font-size: clamp(26px, 4.4vw, 40px); line-height: 1.08; }
.target { font-family: var(--mono); color: var(--ink-soft); font-size: 15px; word-break: break-all; }
.meta { display: flex; flex-wrap: wrap; gap: 6px 18px; margin-top: 16px;
  font-family: var(--mono); font-size: 12.5px; color: var(--ink-faint); }
.meta b { color: var(--ink-soft); font-weight: 600; }
.head { border-bottom: 1px solid var(--line); background:
  linear-gradient(180deg, var(--accent-soft), transparent 90%); }

/* summary tiles */
.tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 22px; }
@media (max-width: 560px) { .tiles { grid-template-columns: repeat(2, 1fr); } }
.tile { border: 1px solid var(--line); border-radius: 11px; padding: 14px 16px; background: var(--paper);
  display: flex; flex-direction: column; gap: 2px; position: relative; }
.tile .n { font-family: var(--mono); font-size: 30px; font-weight: 600; line-height: 1;
  font-variant-numeric: tabular-nums; }
.tile .k { font-size: 11.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-faint); }
.tile.pass { background: var(--pass-bg); border-color: transparent; } .tile.pass .n { color: var(--pass); }
.tile.fail { background: var(--fail-bg); border-color: transparent; } .tile.fail .n { color: var(--fail); }
.tile.warn { background: var(--warn-bg); border-color: transparent; } .tile.warn .n { color: var(--warn); }
.tile.nobs { background: var(--nobs-bg); border-color: transparent; } .tile.nobs .n { color: var(--nobs); }

section { border-top: 1px solid var(--line); }
.sec-h { font-family: var(--serif); font-size: 19px; font-weight: 600; margin: 0 0 3px; }
.sec-d { color: var(--ink-faint); font-size: 13.5px; margin: 0 0 18px; }

/* perimeter chips */
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-family: var(--mono); font-size: 12.5px; padding: 4px 10px; border-radius: 999px;
  border: 1px solid var(--line-strong); color: var(--ink-soft); background: var(--paper); white-space: nowrap; }
.chip.on { background: var(--accent); border-color: var(--accent); color: #fff; }
:root[data-theme="dark"] .chip.on { color: #0e1116; }
.chip.cons { border-style: dashed; color: var(--warn); border-color: var(--warn); background: transparent; }
.field { margin-top: 16px; }
.field .lbl { font-size: 11.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 7px; }
.vlist { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.vlist li { font-family: var(--mono); font-size: 13px; color: var(--ink-soft); }

/* verdict cards */
.checks { display: flex; flex-direction: column; gap: 9px; }
.check { display: grid; grid-template-columns: auto 1fr auto; align-items: start; gap: 14px;
  padding: 13px 16px 13px 14px; border: 1px solid var(--line); border-radius: 11px; background: var(--paper);
  border-left-width: 4px; }
.check.pass { border-left-color: var(--pass); }
.check.fail { border-left-color: var(--fail); }
.check.warn { border-left-color: var(--warn); }
.check.nobs { border-left-color: var(--nobs); }
.cid { font-family: var(--mono); font-weight: 600; font-size: 13.5px; color: var(--ink);
  padding-top: 1px; min-width: 44px; }
.csum { font-size: 14px; color: var(--ink-soft); }
.cev { font-family: var(--mono); font-size: 11.5px; color: var(--ink-faint); margin-top: 4px; word-break: break-all; }
.pill { font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: .04em; padding: 3px 9px;
  border-radius: 999px; white-space: nowrap; align-self: center; }
.pill.pass { background: var(--pass-bg); color: var(--pass); }
.pill.fail { background: var(--fail-bg); color: var(--fail); }
.pill.warn { background: var(--warn-bg); color: var(--warn); }
.pill.nobs { background: var(--nobs-bg); color: var(--nobs); }

/* prefill table */
.tscroll { overflow-x: auto; border: 1px solid var(--line); border-radius: 11px; }
table { border-collapse: collapse; width: 100%; font-size: 13px; }
th, td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--line); vertical-align: top; }
th { font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-faint); font-weight: 600;
  background: var(--sunken); position: sticky; top: 0; }
tr:last-child td { border-bottom: none; }
td.q { font-family: var(--mono); font-weight: 600; color: var(--ink); white-space: nowrap; }
td.v { color: var(--ink-soft); } td.v .none { color: var(--ink-faint); font-style: italic; }
td.from { font-family: var(--mono); color: var(--ink-faint); font-size: 12px; }
.note { border-top: 1px solid var(--line); color: var(--ink-faint); font-size: 12.5px; line-height: 1.6; }
.note b { color: var(--ink-soft); }
.foot { margin-top: 18px; text-align: center; color: var(--ink-faint); font-family: var(--mono); font-size: 11.5px; }
`;
}

function tile(n, k, tone) { return `<div class="tile ${tone}"><span class="n">${n}</span><span class="k">${esc(k)}</span></div>`; }

function render(report) {
  const checks = Object.values(report.checks || {}).sort((a, b) => (ORDER[a.verdict] - ORDER[b.verdict]) || a.id.localeCompare(b.id));
  const counts = { PASS: 0, FAIL: 0, WARN: 0, 'NOT-OBSERVED': 0 };
  for (const c of checks) counts[c.verdict] = (counts[c.verdict] || 0) + 1;
  const g = report.gates || {};
  const areaChip = (a, cons) => `<span class="chip on ${cons ? 'cons' : ''}" title="${esc(AREA_NAMES[a] || '')}">${esc(a)} · ${esc((AREA_NAMES[a] || '').split(' ')[0])}</span>`;

  const checkCards = checks.map((c) => {
    const t = (VERDICT[c.verdict] || {}).tone || 'nobs';
    return `<div class="check ${t}">
      <div class="cid">${esc(c.id)}</div>
      <div><div class="csum">${esc(c.summary)}</div>${c.evidence ? `<div class="cev">${esc(c.evidence)}</div>` : ''}</div>
      <span class="pill ${t}">${esc((VERDICT[c.verdict] || {}).label || c.verdict)}</span>
    </div>`;
  }).join('\n');

  const prefillRows = Object.entries(report.prefill || {}).map(([id, p]) => {
    let v = Array.isArray(p.value) ? (p.value.length ? p.value.join(', ') : '<span class="none">none observed</span>')
      : (p.value && typeof p.value === 'object') ? Object.entries(p.value).map(([k, val]) => `${k}: ${Array.isArray(val) ? (val.join(', ') || '—') : val}`).join(' · ')
      : (p.value === '' || p.value == null) ? '<span class="none">—</span>' : esc(String(p.value));
    if (!/^<span/.test(v) && Array.isArray(p.value)) v = esc(v);
    return `<tr><td class="q">${esc(id)}</td><td class="v">${v}</td><td class="from">${esc((p.prefilledFrom || []).join(', '))}</td><td class="v">${esc(p.clientAction || '')}</td></tr>`;
  }).join('\n');

  const cmp = report.scenarios?.clean?.cmp || report.scenarios?.accept?.cmp || {};
  const dt = new Date(report.startedIso);
  const when = isNaN(dt) ? report.startedIso : dt.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';

  return `<div class="wrap"><div class="sheet">
  <div class="head pad">
    <div class="eyebrow">EU Web Compliance · Run 1 · Evidence scan</div>
    <h1>Compliance scan report</h1>
    <div class="target">${esc(report.target?.url || '')}</div>
    <div class="meta">
      <span><b>Scanned</b> ${esc(when)}</span>
      <span><b>Mode</b> ${esc(g.mode || '—')}</span>
      <span><b>CMP</b> ${esc(cmp.name || 'none')}</span>
      <span><b>Scanner</b> v${esc(report.scannerVersion || '')}</span>
    </div>
    <div class="tiles">
      ${tile(counts.FAIL, 'Fail', 'fail')}
      ${tile(counts.WARN, 'Warn', 'warn')}
      ${tile(counts['NOT-OBSERVED'], 'Not observed', 'nobs')}
      ${tile(counts.PASS, 'Pass', 'pass')}
    </div>
  </div>

  <section class="pad">
    <div class="sec-h">Active perimeter</div>
    <div class="sec-d">Set by the gates. A scan confirms a presence, never an absence — “don’t know” keeps an area on (dashed) for the interview.</div>
    <div class="chips">${(g.activeAreas || []).map((a) => areaChip(a, (g.conservativeAreas || []).includes(a))).join('')}</div>
    ${(g.perimeter || []).length ? `<div class="field"><div class="lbl">External properties / vendors to add</div><ul class="vlist">${g.perimeter.map((p) => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
    ${(g.toAsk || []).length ? `<div class="field"><div class="lbl">Gates still to ask</div><ul class="vlist"><li>${g.toAsk.map(esc).join(' · ')}</li></ul></div>` : ''}
  </section>

  <section class="pad">
    <div class="sec-h">Automated verdicts</div>
    <div class="sec-d">Area C (pre-consent trackers) and Area D (banner). Ordered by attention: fails first. NOT OBSERVED is not a pass.</div>
    <div class="checks">${checkCards}</div>
  </section>

  <section class="pad">
    <div class="sec-h">Level 0 · Prefilled by the scan</div>
    <div class="sec-d">Interview answers a machine can observe. Each is tagged with the checks that produced it and what the client must still do.</div>
    <div class="tscroll"><table>
      <thead><tr><th>Question</th><th>Prefilled value</th><th>From</th><th>Client action</th></tr></thead>
      <tbody>${prefillRows || '<tr><td colspan="4" class="v"><span class="none">no level-0 answers observed</span></td></tr>'}</tbody>
    </table></div>
  </section>

  <div class="pad note">
    <b>How to read this.</b> ${esc(report.disclaimer || '')} The full evidence bundle (requests, cookies, storage, fingerprints, HAR, screenshot — each sha256-hashed) sits beside this report, one folder per scenario. Next: the client fills the gates and the level-2 detail questions for the active areas; Run 2 adjudicates every answer (Confirmed / Disproven / Not verifiable).
  </div>
</div>
<div class="foot">${esc(report.method || 'eu-web-compliance')} — generated from scan-report.json</div>
</div>`;
}

function main() {
  const argv = process.argv.slice(2);
  const src = argv.find((a) => !a.startsWith('--'));
  if (!src) { console.error('usage: node render.js <scan-report.json> [--out report.html] [--fragment inner.html]'); process.exit(1); }
  const outIdx = argv.indexOf('--out');
  const fragIdx = argv.indexOf('--fragment');
  const out = outIdx >= 0 ? argv[outIdx + 1] : join(dirname(src), 'report.html');
  const report = JSON.parse(readFileSync(src, 'utf8'));
  const inner = `<style>${styles()}</style>\n${render(report)}`;
  const full = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Compliance scan — ${esc(report.target?.siteHost || '')}</title></head><body>${inner}</body></html>`;
  writeFileSync(out, full);
  console.error(`report.html → ${out}`);
  if (fragIdx >= 0) { writeFileSync(argv[fragIdx + 1], inner); console.error(`fragment → ${argv[fragIdx + 1]}`); }
}

main();
