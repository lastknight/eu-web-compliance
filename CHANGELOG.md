# Changelog

Check and source IDs are immutable, forever: never recycled, never renumbered, never reordered. Deprecated items keep their ID and are marked, not deleted. Insertions between existing checks use dotted suffixes (`O-18.1`, `O-18.2`), never renumbering.

**Per-ID change tracking.** From v2.1 onward, every release entry lists what happened to each touched identifier, human readable, under these headings:

- **Added**: `E-16: new check on X [S12]`
- **Changed**: `E-12: risk raised from MEDIUM to HIGH (CNIL enforcement action, 2026)` (say WHAT changed and WHY)
- **Deprecated**: `A-17: superseded by A-19; kept in table, marked DEPRECATED`
- **Sources**: `S96 added: <name>` / `S95 caveat updated: <reason>` (source IDs are never removed)

If you cited an ID in a report, this file is where you find out what happened to it since.

## Public release (2026-07-12)

- Repository made public. Dual license activated: CC BY 4.0 (content) + MIT (code).

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
