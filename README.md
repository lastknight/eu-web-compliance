# EU Web Compliance

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0-blue">
  <img alt="Checks" src="https://img.shields.io/badge/checks-206-brightgreen">
  <img alt="Areas" src="https://img.shields.io/badge/areas-15-brightgreen">
  <img alt="Sources" src="https://img.shields.io/badge/sources-35_catalogued-orange">
  <img alt="Scope" src="https://img.shields.io/badge/scope-GDPR_·_ePrivacy_·_AI_Act_·_DSA_·_DMA-8A2BE2">
  <img alt="Status" src="https://img.shields.io/badge/status-private_preview-lightgrey">
  <img alt="License" src="https://img.shields.io/badge/license-CC_BY_4.0_%2B_MIT_(planned)-yellow">
  <img alt="AI agent ready" src="https://img.shields.io/badge/AI_agent-ready-black">
</p>

**A practical map for running a legal digital business in the EU.** One checklist, three ways to use it: audit an existing website, interview a client without drowning them, or hand it to an AI coding agent so compliance gets built in from the first commit.

It covers GDPR and ePrivacy at the core, and extends to the AI Act (chatbots, generated content), the DSA (user generated content, platforms, marketplaces), the DMA (your rights as a business user of Big Tech) and the upcoming Digital Fairness Act (deceptive design, forward looking).

> **Status**: private preview. Checklist text is currently in Italian, requirements are in English. Full English translation of the checklist is on the roadmap before public release.

## Table of contents

- [Why this exists](#why-this-exists)
- [What you have in your hands](#what-you-have-in-your-hands)
- [Where to start](#where-to-start)
  - [🧑‍💻 I am a developer](#-i-am-a-developer-and-i-know-nothing-about-eu-law)
  - [⚖️ I am a lawyer or a DPO](#%EF%B8%8F-i-am-a-lawyer-or-a-dpo-and-i-do-not-use-ai-agents-or-github)
  - [📋 I am an auditor or consultant](#-i-am-an-auditor-or-consultant-and-206-checks-sounds-insane)
- [The method in five minutes](#the-method-in-five-minutes)
- [Design principles](#design-principles)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)

---

## Why this exists

Most GDPR checklists are either legal essays with nothing testable, or technical scanners with no legal grounding. This project welds the two together. Every single item has:

- a **stable ID** (like `C-03`) you can cite in reports, tickets and commits;
- a **precise legal basis** (the actual article: GDPR, ePrivacy, AI Act, DSA, national law);
- a **binding level**: is this a hard legal obligation, a regulator recommendation, or just good practice?
- a **risk level** if it is missing, calibrated on real enforcement;
- a **concrete automated test**: what a script or a reviewer actually checks;
- **source citations** to a catalogued corpus of 35 sources (EU and national authorities, official audit tools, law firms, case law), so you can verify we did not make it up.

It was built by consolidating and rewriting 1,075 requirements extracted from those sources, then verifying every legal reference. The source catalog, including known weaknesses of each source, is in [`sources/SOURCES.md`](sources/SOURCES.md).

## What you have in your hands

| Piece | What it is | Who it is for |
|-------|-----------|---------------|
| [`checklist/`](checklist/) | 15 area files, 206 checks: the full audit checklist with legal bases, tests, risk and binding levels | Auditors, DPOs, lawyers |
| [`requirements/EU-WEB-COMPLIANCE.md`](requirements/EU-WEB-COMPLIANCE.md) | The same 206 items as machine readable requirements (RFC 2119: MUST / SHOULD / MAY), in English, in one file | Developers and AI coding agents |
| [`interview/`](interview/) | The client interview kit: a three tier questionnaire that turns 200+ questions into a 20 to 40 question conversation | Auditors and consultants |
| [`sources/SOURCES.md`](sources/SOURCES.md) | The full source catalog with IDs, provenance, ingestion dates and caveats | Anyone checking our homework |
| [`skill/`](skill/) | The automation layer (crawler + AI agent skill), in development | Technical users |

**The 15 areas.** A through J always apply: legal documents, privacy notice content, pre consent trackers, cookie banner design, third parties and transfers, technical security, forms and consent, data subject rights, governance, data breaches. K through O are conditional and only wake up if the business matches: CRM and direct marketing, e-commerce, AI features, voice channels, DSA/DMA/DFA.

**You never face all 206 checks at once.** That is the whole point of the method below.

---

## Where to start

Pick your door.

### 🧑‍💻 I am a developer (and I know nothing about EU law)

You do not need to read the law. That is what this repo is for.

1. Download **one file**: [`requirements/EU-WEB-COMPLIANCE.md`](requirements/EU-WEB-COMPLIANCE.md).
2. Drop it into your project, next to your agent instructions file (`CLAUDE.md`, `AGENTS.md`, whatever your tool uses), and add one line to those instructions: *"Treat every applicable requirement in EU-WEB-COMPLIANCE.md as part of the spec."*
3. That is it. Your AI coding agent now knows that account deletion must exist, that no tracker may fire before consent, that consent checkboxes cannot be pre ticked, that session cookies need the right flags, and 200 other things you would otherwise learn from a fine.

How to read an item: **MUST** means a legal obligation (missing it is a violation, not a style issue). **SHOULD** is grounded in regulator guidance and case law. **MAY** is good practice. Every item has an `Applies-if` condition: if your project has no newsletter, the newsletter items simply do not apply. Every item has an `Acceptance` line telling you how to verify it, which doubles as a test spec.

If you are building something new: read the MUST items of areas C (trackers), F (security) and G (forms) before you write your first form or add your first analytics script. Twenty minutes, honestly.

### ⚖️ I am a lawyer or a DPO (and I do not use AI agents or GitHub)

You can use this as a plain document. Two ways to get it without touching git: click the green **Code** button on the repository page and choose **Download ZIP**, or simply click any file in [`checklist/`](checklist/) to read it in the browser, rendered like a normal document.

Start with the checklist areas, not with the requirements file (that one is for developers). Each area file gives you: the rationale, the legal bases with article numbers, then a table of checks. The two columns that matter most for legal work:

- **Vincolo** (binding level): OBBLIGO is a direct legal obligation; RACCOMANDATO rests on authority guidelines, case law or consolidated practice; PLUS is best practice with no legal duty. This is the axis you use to tell a client "this is the law" versus "this is what a prudent operator does".
- **Rischio** (risk if absent): CRITICO to BASSO, calibrated on sanction exposure and actual enforcement activity, not on theoretical severity.

Every claim is sourced. The bracketed IDs like `[G1]` or `[S45]` point to the catalog in [`sources/SOURCES.md`](sources/SOURCES.md): primary law, Garante and CNIL decisions, EDPB guidelines, court cases. Vendor sources are never used alone to ground a legal statement; the catalog also lists each source's known weaknesses.

The strongest deliverable this method produces is the **discrepancy**: what the company declares (in its privacy notice, or in the interview) versus what the technical scan actually observes. That gap is where the legal exposure lives.

### 📋 I am an auditor or consultant (and 206 checks sounds insane)

Correct, it would be. You are not supposed to run 206 checks by hand or ask a client hundreds of questions. The method exists precisely so that never happens. Read [The method](#the-method-in-five-minutes) below: your work funnels through gates and automation, and the human part is a 20 to 40 question conversation, most of it pre answered before you sit down with the client.

Practical navigation, if GitHub is new to you: this page you are reading is the front door. The blue links open folders and documents; every document renders in the browser like a formatted DOC. Nothing here needs to be installed or compiled. If you want everything on your machine: green **Code** button, **Download ZIP**, unzip, open the files in anything that reads text.

---

## The method in five minutes

The audit is a loop with one human step in the middle. Cognitive load is engineered down at every stage.

```
RUN 1 (machine)          HUMAN (interview)          RUN 2 (machine)           OUTPUT
scan the site      →     10-16 gate questions   →   verify every answer   →   report with verdicts
prefill answers          + only the questions       against evidence;         per area, discrepancies
from evidence            for ACTIVE areas,          extend the scan to        first, every finding
                         most already prefilled     declared vendors          with ID + legal basis
```

**1. First pass: the scan (Run 1).** An automated pass over the target site collects evidence: cookies and trackers before consent, banner behaviour, security headers, third party domains, forms. This alone answers a big slice of the questionnaire ("which consent tool do you use?", "is Google Analytics active?"): those answers get **prefilled with evidence attached**, and the client only confirms or corrects them.

**2. The gates.** Before any detail, 10 to 16 **gate questions** decide which areas exist at all: Do you send newsletters? Do you sell online? Do you run a CRM? Any chatbot or AI features? Outbound calls? User generated content? Every "no" switches off an entire area. A brochure site without marketing typically activates well under half of the catalog.

**3. The interview.** What remains is a 20 to 40 question conversation, organized per area, with stable IDs (`Q-C-03`). The interview document is also the **exchange format**: fill in the answers, feed the document back.

**4. Second pass: verification (Run 2).** Here is the part clients do not expect: answers get checked. The client says double opt-in is active? We subscribe a test address. They say unsubscribe is processed immediately? We test it. They say they use Mailchimp? We fetch Mailchimp's DPA and subprocessor list, and their named vendors enter the scan perimeter (public documents only for vendors; active testing on client properties strictly under written mandate). Every verifiable answer gets a verdict: **CONFERMATO** (confirmed), **SMENTITO** (contradicted by evidence), **NON VERIFICABILE** (needs documents).

**5. The report.** Organized per area, findings cite check IDs and legal bases, and the headline findings are the discrepancies: declared versus observed. A finding that reads "you state X in your privacy notice, your website demonstrably does Y, violating Art. Z" does not need rhetorical help.

### The two axes, one more time

Everything in the report is classified on two independent axes, because "how illegal is it" and "how dangerous is it" are different questions:

| | Meaning | Example |
|---|---|---|
| **OBBLIGO** / MUST | The law says so. Missing = violation. | No tracker before consent (ePrivacy Art. 5(3)) |
| **RACCOMANDATO** / SHOULD | Regulators or courts say so. Missing = arguable risk. | Reject button with equal prominence at first layer |
| **PLUS** / MAY | Maturity signal. Missing = nothing, having it = credibility. | Neutral explanation of consent consequences |

Risk (CRITICO / ALTO / MEDIO / BASSO) then says how exposed you are in practice, based on what authorities actually sanction.

---

## Design principles

- **Stable IDs, forever.** A check ID is never recycled or renumbered. Deprecated checks are marked, not deleted. Your three year old report still means something.
- **Sources or it did not happen.** Legal statements trace to primary law, authorities and case law. The catalog lists every source with provenance, date and known caveats, including the ones we ingested and found to be partly wrong.
- **Vendor neutral.** Tools are referenced (the EDPB's own auditing tool, the EDPS evidence collector, Playwright, testssl.sh), never imposed. Map the tests to your own stack if you have one.
- **Conditional by construction.** Obligations that only apply to platforms, marketplaces or gatekeepers are gated, not mixed in. A corporate brochure site is not a VLOP and this checklist knows it.
- **Human in the loop.** Machines collect evidence and verify claims; the audit judgment and the client relationship stay human.

## Contributing

The most valuable contributions are legal and factual, not code:

- **A new relevant source** (an authority decision, an EDPB guideline, a court case): open an issue with the "New source" template. Sources get a catalog ID and every derived check cites it.
- **A check that is wrong or outdated** (the law changed, a decision superseded a practice): open an issue with the "Check correction" template, citing the check ID and your source.
- **Translations and clarity fixes**: pull requests welcome.

Ground rules: check IDs are immutable; legal claims need a citable source; vendor sources never ground a legal statement alone.

## Roadmap

- [x] Checklist v2.0: 15 areas, 206 checks, full source catalog
- [x] English requirements file for AI assisted development
- [x] Three tier interview kit
- [ ] Full English translation of the checklist
- [ ] `skill/`: the automated Run 1 / Run 2 (crawler + agent skill for Claude Code and compatible tools)
- [ ] Public release

## License

Planned dual license at public release: documentation and checklist content under **CC BY 4.0**, code (skill, scripts) under **MIT**. Until then: all rights reserved, private preview.

## Authorship and disclaimer

Curated by [Matteo Flora](https://matteoflora.com), built with heavy use of AI agents on a corpus of 35 catalogued sources, every legal reference human verified. This is a compliance engineering tool, not legal advice: for decisions with legal consequences, involve a qualified professional who can assess your specific situation.
