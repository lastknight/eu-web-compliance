# euwc-scan — Run 1 evidence scanner

The automated first pass of the [EU Web Compliance](../../README.md) method. It drives a
pristine Chromium through the four consent scenarios, captures an immutable evidence
bundle, and emits the interview questionnaire **prefilled with what a machine can
observe**. It is the engine behind Run 1; the interview and the verdicts of Run 2 are
built on the bundle it produces.

> **Founding principle: a scan confirms a presence, never an absence.** A `FAIL` means the
> scan *saw* a violation. `NOT-OBSERVED` means no technical signal touched the point — it
> is **not** a pass, and it is not evidence the thing does not exist. Everything a machine
> cannot see (a CRM, a DPA, an encrypted backup) is decided with the client in the
> interview, never inferred from silence.

## What it does

- **Gates first.** The scan starts from the 16 level-1 gate answers (`yes` / `no` /
  `dontknow`), which set the active perimeter. `dontknow` keeps an area on in conservative
  mode and flags it for the interview. With no gates file it runs in **url-only** degraded
  triage: every gate is left "to ask".
- **Four tagged scenarios, each in an isolated context** (state never leaks between them):
  `clean` (no interaction — the pre-consent baseline), `accept`, `refuse`, `manage`.
- **Immutable evidence per scenario**: request log (host, method, resource type, decoded
  query, initiator), cookie jar, client storage (localStorage / sessionStorage /
  IndexedDB), fingerprinting API hits, full HAR, screenshot. Every JSON carries a sha256
  integrity hash.
- **Automated verdicts** for the 🟢 machine-observable checks of Area C (pre-consent
  trackers) and Area D (banner): `C-01`..`C-08`, `C-13`, `D-01`, `D-02`.
- **Prefilled level-0 answers** of the interview (which CMP, which pixels, analytics,
  session recording, remote fonts/CAPTCHA, languages, third-party hosts), each tagged with
  the check IDs that produced it and the minimal action left to the client.

IDs are the language-neutral layer: the report re-attaches to the same check and question
IDs as the checklist and the interview, so a report can be rendered in any language without
touching the engine.

## Install

```bash
npm install
npx playwright install chromium
```

## Use

```bash
# Gated scan (recommended)
node scan.js --url https://example.com --gates gates.example.json --out ./scan-output

# URL-only triage (no gates — every gate left "to ask")
node scan.js --url https://example.com

# A subset of scenarios
node scan.js --url https://example.com --only clean,refuse
```

Output in `--out`:

- `scan-report.json` — machine-readable report (gates, per-scenario summary, verdicts, prefill, evidence manifest)
- `questionnaire.md` — the human-readable, prefilled interview questionnaire
- `<scenario>/` — the immutable evidence bundle for each scenario

## What this is not: honest limits

- **Coverage is Area C and D plus level-0 prefill.** The other areas are populated by the
  interview and Run 2, not by this pass.
- **The classifier is a seed knowledge base**, not the full filter lists (EasyPrivacy,
  Disconnect, DDG Tracker Radar). It is high-signal but not exhaustive; unknown third
  parties are reported as `unknown`, never silently dropped. Contributions welcome.
- **One page, one run.** It scans the URL you give it, not the whole site. Multi-page
  crawling, authenticated areas and the mobile SDK surface are out of scope here.
- **Geolocation of hosts is documentary.** The scan lists third-party hosts; where the data
  physically resides is confirmed at intake.
- **CMP interaction is best-effort.** Known CMPs are driven by selector; unknown banners by
  text match (EN + IT). A control the scan cannot find is reported as `NOT-OBSERVED`, which
  is a prompt to check by hand — not a verdict.

Reference implementations this builds on: EDPB Website Auditing Tool, EDPS Website Evidence
Collector, testssl.sh, Blacklight.

## Layout

```
scan.js              CLI entry
lib/
  gates.js           gate answers → active areas + perimeter
  scenarios.js       the four-scenario runner
  evidence.js        capture + immutable JSON writers
  cmp.js             CMP detection + accept/reject/manage
  classify.js        host / url / cookie classification
  prefill.js         evidence → verdicts + level-0 answers
  report.js          scan-report.json + questionnaire.md
knowledge/
  trackers.json      tracker/pixel endpoints + categories
  cmp.json           CMP fingerprints + consent controls
```
