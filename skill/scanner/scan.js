#!/usr/bin/env node
// scan.js — Run 1 of the EU Web Compliance method.
// Drives a pristine Chromium through the four consent scenarios, captures an immutable
// evidence bundle, and emits the interview questionnaire prefilled with what a machine
// can observe. A scan confirms presence, never absence.
//
// Usage:
//   node scan.js --url https://example.com [--gates gates.json] [--out ./out]
//                [--only clean,refuse] [--nav-timeout 30000]
//
// gates.json: { "Q-G-01": "yes", "Q-B-11": "no", "Q-M-01": "dontknow", ... }
// With no --gates, the scan runs in url-only degraded triage: every gate is "to ask".

import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { resolveGates } from './lib/gates.js';
import { runAllScenarios, SCENARIOS } from './lib/scenarios.js';
import { buildFindings } from './lib/prefill.js';
import { buildReport, writeReports } from './lib/report.js';

const VERSION = '0.1.0';

function parseArgs(argv) {
  const a = { out: './scan-output', navTimeout: 30000, only: null, gates: null, url: null };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    const next = () => argv[++i];
    if (k === '--url') a.url = next();
    else if (k === '--gates') a.gates = next();
    else if (k === '--out') a.out = next();
    else if (k === '--only') a.only = next().split(',').map((s) => s.trim()).filter(Boolean);
    else if (k === '--nav-timeout') a.navTimeout = parseInt(next(), 10);
    else if (k === '--version') { console.log(VERSION); process.exit(0); }
    else if (k === '--help' || k === '-h') { printHelp(); process.exit(0); }
  }
  return a;
}

function printHelp() {
  console.log(`euwc-scan v${VERSION} — Run 1 evidence scanner
  --url <url>            target site (required)
  --gates <file.json>    level-1 gate answers (yes/no/dontknow); omit for url-only triage
  --out <dir>            output directory (default ./scan-output)
  --only <list>          subset of scenarios: ${SCENARIOS.join(',')}
  --nav-timeout <ms>     navigation timeout (default 30000)`);
}

function hostOf(url) {
  const m = /^[a-z]+:\/\/([^/:?#]+)/i.exec(url);
  return m ? m[1] : url.replace(/^https?:\/\//, '').split('/')[0];
}

async function main() {
  const args = parseArgs(process.argv);
  if (!args.url) { printHelp(); process.exit(1); }
  if (!/^https?:\/\//i.test(args.url)) args.url = 'https://' + args.url;

  const siteHost = hostOf(args.url);
  const outDir = resolve(args.out);
  mkdirSync(outDir, { recursive: true });

  let gateAnswers = {};
  if (args.gates) {
    try { gateAnswers = JSON.parse(readFileSync(args.gates, 'utf8')); }
    catch (e) { console.error(`Could not read gates file: ${String(e).slice(0, 120)}`); process.exit(1); }
  }
  const gates = resolveGates(gateAnswers);

  // Deterministic timestamp source for the run (single read).
  const startMs = Date.now();
  const startedIso = new Date(startMs).toISOString();

  console.error(`euwc-scan v${VERSION}`);
  console.error(`target : ${args.url}`);
  console.error(`mode   : ${gates.mode}  |  active areas: ${gates.activeAreas.join(', ')}`);
  console.error(`scenarios: ${(args.only || SCENARIOS).join(', ')}`);
  console.error('launching chromium…');

  const browser = await chromium.launch();
  let results;
  try {
    results = await runAllScenarios(browser, { url: args.url, outDir, only: args.only, navTimeout: args.navTimeout });
  } finally {
    await browser.close();
  }

  const findings = buildFindings(results, siteHost, startMs);
  const report = buildReport({ url: args.url, siteHost, startedIso, gates, results, findings, scannerVersion: VERSION });
  const { jsonPath, mdPath } = writeReports(outDir, report);

  // Console summary
  console.error('\n── verdicts ──');
  for (const [id, c] of Object.entries(findings.checks)) {
    console.error(`  ${id.padEnd(6)} ${c.verdict.padEnd(13)} ${c.summary}`);
  }
  console.error(`\nreport      : ${jsonPath}`);
  console.error(`questionnaire: ${mdPath}`);
  console.error(`evidence     : ${outDir}/<scenario>/`);
}

main().catch((e) => { console.error('scan failed:', e); process.exit(1); });
