# EU Web Compliance — Landing copy (final)

> Hero angle: dev-first. Language: EN only. Target: GitHub Pages at lastknight.github.io/eu-web-compliance.
> This is the copy deck. Graphics/HTML built separately.

---

## HERO

**Eyebrow:** Open · sourced · free — CC BY 4.0 + MIT

**Headline:**
EU compliance, as a spec file your AI agent can read.

**Subhead:**
An open, sourced framework for GDPR, ePrivacy, the AI Act, the DSA and the DMA. Drop one file into your repo and privacy by design lands from the first commit — no law degree required. A human checklist for the auditors and lawyers who need one too.

**Primary CTA:** Get the spec file →   (links to requirements/EU-WEB-COMPLIANCE.md)
**Secondary CTA:** Read on GitHub

**Badge strip:** 206 checks · 15 areas · 35 sources · GDPR · ePrivacy · AI Act · DSA · DMA · public beta · AI-agent ready

---

## PROBLEM

Most GDPR checklists are legal essays with nothing you can test, or technical scanners with no legal grounding. This welds the two. Every single check has a stable ID, the exact article behind it, a binding level, a risk level, and a concrete test — so you can cite it in a report, a ticket, or a commit.

---

## THREE DOORS

Pick your door.

### 🧑‍💻 Developers — you don't need to read the law.
Download one file, drop it next to your `CLAUDE.md` / `AGENTS.md`, add one line: *"Treat every applicable requirement in EU-WEB-COMPLIANCE.md as part of the spec."* Your coding agent now knows that account deletion must exist, that no tracker fires before consent, that consent boxes can't be pre-ticked — and 200 other things you'd otherwise learn from a fine.
→ Get EU-WEB-COMPLIANCE.md

### ⚖️ Lawyers & DPOs — sourced, article by article.
Use it as a plain document, no git needed. Every claim traces to primary law, regulator guidance or case law — never a blog. Two axes tell a client "this is the law" (OBBLIGO) from "this is what a prudent operator does" (RACCOMANDATO). The strongest deliverable is the discrepancy: what the site declares versus what the scan observes.
→ Read the checklist

### 📋 Auditors & consultants — 206 checks sounds insane. It never happens.
That's the whole point of the method. Gate questions switch off entire areas; automation runs the scan and the verification. The human part is a 20-to-40-question conversation, most of it pre-answered before you sit down with the client.
→ See the method

---

## WHAT'S INSIDE

**The checklist** — 15 areas, 206 checks, with legal bases, tests, risk and binding levels. Areas A–J always apply; K–O wake up only if the business matches (CRM, e-commerce, AI features, voice, DSA/DMA/DFA). You never face all 206 at once.

**The requirements** — the same 206 items as machine-readable RFC 2119 rules (MUST / SHOULD / MAY), one file, built to feed an AI coding agent. Each item has an `Applies-if` condition and an `Acceptance` line that doubles as a test spec.

*The 15 areas:* Legal documents · Privacy notice content · Pre-consent trackers · Cookie banner & CMP · Third parties & transfers · Technical security · Forms & consent · Data subject rights · Governance · Data breaches · CRM & direct marketing · E-commerce · AI features · Voice channels · DSA/DMA/DFA

---

## THE METHOD IN FIVE STEPS

A scan confirms presence, never absence. That's why the questions come first.

1. **Gates (5 min)** — 10–16 questions switch areas on and off and reveal what the site can't show.
2. **Run 1 · Scan** — an automated pass collects evidence: trackers before consent, banner behavior, security headers, third-party domains, forms.
3. **Interview (20–40 Q)** — what remains, per area, most of it prefilled with evidence. The document is also the exchange format.
4. **Run 2 · Verify** — answers get checked against evidence. Double opt-in? We subscribe a test address. Each answer: CONFIRMED / CONTRADICTED / NEEDS DOCUMENTS.
5. **Report** — per area, findings cite check IDs and legal bases; the headline findings are the discrepancies.

---

## HONEST LIMITS

**What this is not.** A floor, not a ceiling: following it means your app isn't openly against the law, not "compliant in every possible reading" — distrust anyone who promises that. Not a certification, not legal advice. Accessibility isn't covered yet; the AI Act only where it touches a website. The gaps aren't a secret to discover — they're an invitation to open a PR.

---

## PROOF

Built by consolidating 1,075 requirements from 35 catalogued sources — EU and national authorities, official audit tools, case law — every legal reference human-verified. Vendor sources never ground a legal claim alone. Stable IDs, forever: `O-18` stays `O-18` for life, even if deprecated.

Curated by Matteo Flora. A compliance engineering tool, not legal advice: for decisions with legal consequences, involve a qualified professional.

---

## FINAL CTA

Free and open. Use it in client work, ship it in your product, translate it. Just keep the attribution.
**Star on GitHub** · **Download ZIP** · **Get the spec file**

Dual licensed: docs under CC BY 4.0, code under MIT.
