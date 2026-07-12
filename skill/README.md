# Automation skill (in development)

The automated layer of the method:

- **Run 1**: Playwright based scan of the target site (clean profile, pre/post consent scenarios), evidence as immutable JSON (HAR, cookie jar, storage, screenshots), output = the interview questionnaire prefilled with evidence.
- **Run 2**: takes the filled questionnaire, verifies every verifiable answer (CONFERMATO / SMENTITO / NON VERIFICABILE), extends the perimeter to declared vendors (public documents only; active tests on client properties strictly under written mandate), produces the per area report.

Reference implementations it builds on: EDPB Website Auditing Tool, EDPS Website Evidence Collector, testssl.sh. Ships as a Claude Code skill plus standalone scripts.
