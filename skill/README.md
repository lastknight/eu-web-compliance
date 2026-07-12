# Automation skill (in development)

The automated layer of the method:

- **Entry point: the gates.** The skill starts by asking (or receiving) the 16 gate questions, each answered **yes / no / don't know**. "Don't know" is a first class answer: it keeps the area active in conservative mode, flags the question for the interview, and asks the scan to try to inform it. Only an explicit "no" switches an area off. URL-only mode (zero gate answers) is supported as degraded triage: every gate the scan cannot observe stays open and marked "to ask".
- **Run 1**: Playwright based scan of the target site (clean profile, pre/post consent scenarios), its perimeter informed by the gate answers, evidence as immutable JSON (HAR, cookie jar, storage, screenshots), output = the interview questionnaire prefilled with evidence.
- **Run 2**: takes the filled questionnaire, verifies every verifiable answer (CONFERMATO / SMENTITO / NON VERIFICABILE), extends the perimeter to declared vendors (public documents only; active tests on client properties strictly under written mandate), produces the per area report.

**Language design**: the skill itself (instructions, check catalog, spec) is English only. Its outputs (gate questions, the interview document, verdicts, the final report) render in whatever language the user speaks to it. Check and question IDs are the language neutral layer: a questionnaire filled in Italian re-attaches to the same checks, and the report can come out in any language without touching the engine.

Reference implementations it builds on: EDPB Website Auditing Tool, EDPS Website Evidence Collector, testssl.sh. Ships as a Claude Code skill plus standalone scripts.
