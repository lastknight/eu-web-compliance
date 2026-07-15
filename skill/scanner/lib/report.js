// report.js — assemble the machine-readable scan report and the human-readable,
// prefilled interview questionnaire. IDs are the language-neutral layer: the report
// re-attaches to the same check and question IDs the checklist and interview use.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function buildReport({ url, siteHost, startedIso, gates, results, findings, scannerVersion }) {
  const scenarioSummary = {};
  for (const [name, r] of Object.entries(results)) {
    scenarioSummary[name] = {
      navError: r.navError, cmp: r.cmp, action: r.action, counts: r.counts,
      evidence: {
        requests: r.evidence.requests, cookies: r.evidence.cookies,
        storage: r.evidence.storage, fingerprints: r.evidence.fingerprints,
        har: r.evidence.har, screenshot: r.evidence.screenshot,
      },
    };
  }
  return {
    method: 'eu-web-compliance / Run 1 (scan)',
    scannerVersion,
    target: { url, siteHost },
    startedIso,
    disclaimer: 'A scan confirms presence, never absence. FAIL = a violation was observed. NOT-OBSERVED = no technical signal touched the point; it is not a pass. Documentary points are for the interview (Run 2).',
    gates,
    scenarios: scenarioSummary,
    checks: findings.checks,
    prefill: findings.prefill,
  };
}

function verdictBadge(v) {
  return { PASS: '✅ PASS', FAIL: '❌ FAIL', WARN: '⚠️ WARN', 'NOT-OBSERVED': '◻️ NOT-OBSERVED' }[v] || v;
}

export function buildQuestionnaireMarkdown(report) {
  const L = [];
  L.push(`# Interview questionnaire — prefilled by scan`);
  L.push('');
  L.push(`**Target**: ${report.target.url}  `);
  L.push(`**Scanned**: ${report.startedIso}  `);
  L.push(`**Mode**: ${report.gates.mode}  `);
  L.push(`**Scanner**: v${report.scannerVersion}`);
  L.push('');
  L.push('> A scan confirms a presence, never an absence. The verdicts below are the machine-observable layer (Run 1). Everything documentary is confirmed with the client in the interview and adjudicated in Run 2.');
  L.push('');

  L.push('## Active perimeter (from the gates)');
  L.push('');
  L.push(`- **Active areas**: ${report.gates.activeAreas.join(', ')}`);
  if (report.gates.conservativeAreas.length) L.push(`- **Kept on by "don't know" (verify)**: ${report.gates.conservativeAreas.join(', ')}`);
  if (report.gates.perimeter.length) L.push(`- **External properties / vendors to add**: ${report.gates.perimeter.join('; ')}`);
  if (report.gates.toAsk.length) L.push(`- **Gates still to ask**: ${report.gates.toAsk.join(', ')}`);
  L.push('');

  L.push('## Automated verdicts (Area C · pre-consent trackers, Area D · banner)');
  L.push('');
  L.push('| Check | Verdict | What the scan saw | Evidence |');
  L.push('|-------|---------|-------------------|----------|');
  for (const [id, c] of Object.entries(report.checks)) {
    L.push(`| ${id} | ${verdictBadge(c.verdict)} | ${(c.summary || '').replace(/\|/g, '\\|')} | ${c.evidence || '—'} |`);
  }
  L.push('');

  L.push('## Level 0 · Answers prefilled by the scan');
  L.push('');
  L.push('| Question | Prefilled value | From | The client only needs to |');
  L.push('|----------|-----------------|------|--------------------------|');
  for (const [id, p] of Object.entries(report.prefill)) {
    const val = Array.isArray(p.value) ? (p.value.length ? p.value.join(', ') : '(none observed)')
      : typeof p.value === 'object' ? JSON.stringify(p.value)
      : String(p.value);
    L.push(`| ${id} | ${val.replace(/\|/g, '\\|').slice(0, 300)} | ${(p.prefilledFrom || []).join(', ')} | ${p.clientAction} |`);
  }
  L.push('');
  L.push('---');
  L.push('_Next: the client fills the level-1 gates (if not already) and the level-2 detail questions for the active areas; Run 2 verifies every answer against this evidence (CONFIRMED / DISPROVEN / NOT VERIFIABLE)._');
  return L.join('\n');
}

export function writeReports(outDir, report) {
  const jsonPath = join(outDir, 'scan-report.json');
  const mdPath = join(outDir, 'questionnaire.md');
  writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  writeFileSync(mdPath, buildQuestionnaireMarkdown(report));
  return { jsonPath, mdPath };
}
