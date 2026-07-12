## Area A: Legal Documents, Presence and Reachability

### A-01 Privacy policy present and linked from every page footer
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Publish a privacy policy and link it from the footer of every page of the site, ensuring the link resolves to a working page (HTTP 200, not a 404 or empty page).
- **Acceptance**: Multi-page crawl; on every page find at least one link whose text or href contains "privacy", follow it, and confirm the target returns HTTP 200 with non-empty content.
- **Legal**: GDPR Art. 13, GDPR Art. 14, GDPR Art. 12(1).

### A-02 Cookie policy present and linked from footer and cookie banner
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Publish a cookie policy, either distinct from the privacy policy or clearly identifiable as a dedicated section, and link it from both the footer and the cookie banner.
- **Acceptance**: Crawl for a cookie policy link in the footer and in the banner DOM; confirm the banner link points to a reachable document (HTTP 200).
- **Legal**: Art. 122 Italian Privacy Code (D.Lgs. 196/2003), Art. 5(3) Directive 2002/58/EC (ePrivacy), Italian Garante cookie guidelines 10 June 2021 (doc-web 9677876).

### A-03 Policies reachable within two clicks, no login or forced download
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Make the policies reachable in at most two clicks from the home page, without requiring authentication, paywall, or a forced file download.
- **Acceptance**: Crawl to measure path depth from root to the document; confirm no login form or redirect to a downloadable file appears in the path.
- **Legal**: GDPR Art. 12(1).

### A-04 Policy language matches the site target audience
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Provide the policy in the language in which the site addresses its users, so the document is intelligible to the target audience.
- **Acceptance**: Auto-detect the page language (html lang attribute plus text detection) and compare it against the detected language of the policy text; they must match.
- **Legal**: GDPR Art. 12(1).

### A-05 Last-updated date present and not anachronistic versus detected technologies
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Include a last-updated date in the policy and keep it consistent with the technologies actually deployed on the site, avoiding references to retired tools or omission of active trackers.
- **Acceptance**: Regex-extract the update date from the text and cross-check against the Area E technical inventory (e.g. flag if the policy still cites Universal Analytics while GA4 is detected, or omits an active tracker).
- **Legal**: GDPR Art. 12, GDPR Art. 13.

### A-06 Policies served as readable HTML, not PDF-only or image or JS-only
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Serve the policies as textual HTML returning HTTP 200, avoiding PDF-only delivery, text-as-image, or content loaded exclusively via non-indexable JavaScript.
- **Acceptance**: Check the document HTTP status, confirm Content-Type is text/html, extract the text, and verify it exceeds a minimum readable-character threshold.
- **Legal**: GDPR Art. 12(1).

### A-07 Per-language policy for multilingual sites
- **Level**: MUST
- **Applies-if**: the site has multilingual areas or versions
- **Requirement**: For each language served by the site, provide the policy in that corresponding language rather than redirecting to a version in another language.
- **Acceptance**: Crawl per locale (hreflang, language selector, subdomains, or /it /en paths); for each locale confirm a policy exists in the expected language.
- **Legal**: GDPR Art. 12(1).

### A-08 Policy versioned with date and retained change history
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Version each policy with a date and keep prior versions reconstructible, so it can be shown which notice was in force at any given time.
- **Acceptance**: Extract the date and any version number from the text; check for a "change history" section or linked archived versions; if absent, flag for client confirmation on internal retention of the version history.
- **Legal**: GDPR Art. 5(2), GDPR Art. 12(1).
