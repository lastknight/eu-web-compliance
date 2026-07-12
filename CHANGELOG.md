# Changelog

Check IDs are immutable: never recycled, never renumbered. Deprecated checks are marked, not deleted.

## v2.1 (2026-07-12)

- **English becomes the canonical language.** All 15 checklist areas and the interview kit translated; file slugs renamed to English. Italian editions preserved as `.it.md` files, linked from the index. Convention ready for more languages (`.fr.md`, `.de.md`).
- **Interview kit** (`interview/client-interview.md`): three tier questionnaire, 16 gate questions (yes / no / don't know), 37 scan-prefilled answers, 84 detail questions per area, with thematic sub-headers.
- **Gates-first method**: the gate questions precede the scan (a scan confirms presence, never absence); URL-only mode documented as degraded triage.
- **"What this is not: honest limits" section**: named gaps (AI Act partial, dark patterns at taxonomy level, accessibility absent), floor-not-ceiling framing, PRs as the completion mechanism.
- README: problem-first intro, three audiences with auditors first, one click rendered-view index, badges.

## v2.0 (2026-07-12)

- Initial consolidated release: 15 areas, 206 checks, built from 35 catalogued sources (1,075 extracted requirements).
- Two axis classification (binding: OBBLIGO/RACCOMANDATO/PLUS; risk: CRITICO/ALTO/MEDIO/BASSO), conditional checks and areas.
- English requirements file (RFC 2119) for AI assisted development, same IDs as the checklist.
- Source catalog with provenance, ingestion dates and caveats.
