# EU Web Compliance Requirements

Machine-readable requirements for building EU-compliant websites and web apps. Derived from the EU Web Compliance Checklist v2.0 (2026-07-12), consolidated from 35 catalogued sources (EU and national authorities, official audit tools, law firms, vendors).

**How to use with an AI coding agent**: drop this file into your project context (e.g. next to your agent instructions file) and instruct the agent to treat every applicable requirement as part of the spec. Requirement levels follow RFC 2119: MUST items are legal obligations under EU law (missing one is a violation), SHOULD items are grounded in regulator guidance and case law, MAY items are best practice. Check the Applies-if condition of each item and the "Area applies if" gate of each section against your project before applying it.

**Scope**: GDPR and ePrivacy as the core, plus AI Act (chatbots, generated content), DSA (user-generated content, platforms, marketplaces), DMA (business-user awareness) and the upcoming Digital Fairness Act (forward-looking design constraints).

**Each requirement has a stable ID** (for example C-03). Reference these IDs in issues, commits and reviews.

---

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

## Area B: Privacy Notice Content (Art. 13/14)

**Area applies if**: always (any website or web app processing personal data must publish a compliant privacy notice; individual checks may narrow by condition).

### B-01 Data controller identity and direct contact
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Identify the data controller in the privacy notice by full legal name and provide at least one direct contact channel (email or certified email/PEC, and a postal address), not a generic "contact us".
- **Acceptance**: Extract the controller identity and contact fields from the policy and confirm they match the site footer, VAT/company registration data; fail if the controller cannot be identified or no direct contact is given.
- **Legal**: GDPR Art. 13(1)(a), Art. 14(1)(a).

### B-02 Data Protection Officer contacts
- **Level**: MUST
- **Applies-if**: a DPO has been appointed or is mandatory under Art. 37 (public authority, large-scale regular and systematic monitoring, or large-scale processing of special categories).
- **Requirement**: When a DPO is appointed or required, publish the DPO with dedicated contact details in the privacy notice.
- **Acceptance**: Extract the DPO block from the policy and, via intake, establish whether a DPO is required or appointed; fail if required/appointed but absent or without dedicated contacts.
- **Legal**: GDPR Art. 13(1)(b), Art. 14(1)(b), Art. 37(1), Art. 37(7).

### B-03 Purposes with explicit legal basis
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Enumerate each processing purpose and state its own explicit legal basis per purpose, never cumulatively or generically.
- **Acceptance**: Build a purpose/legal-basis table from the policy and flag any purpose lacking a basis or carrying a generic basis.
- **Legal**: GDPR Art. 13(1)(c), Art. 14(1)(c).

### B-04 Legitimate interest specified
- **Level**: MUST
- **Applies-if**: a purpose relies on legitimate interest as its legal basis.
- **Requirement**: Where the legal basis is legitimate interest, state the concrete interest pursued (e.g. "network security", "fraud prevention"), backed by a documented LIA, not an empty formula.
- **Acceptance**: Extract every occurrence of "legitimate interest" in the policy and verify each is qualified with a specific interest.
- **Legal**: GDPR Art. 13(1)(d), Art. 14(2)(b).

### B-05 Recipients consistent with actual processors
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: List the recipients or categories of recipients, including the actual destination of form data (CRM, email marketing software, hosting), and keep them consistent with the real external processors.
- **Acceptance**: Extract declared recipients and diff against the technical third-party inventory (Area E); flag any technically active recipient not declared.
- **Legal**: GDPR Art. 13(1)(e), Art. 14(1)(e).

### B-06 Extra-EU/EEA transfers with safeguard
- **Level**: MUST
- **Applies-if**: transfers of personal data outside the EU/EEA are present (including hosting or infrastructure on servers outside the EU).
- **Requirement**: Declare each extra-EU/EEA transfer naming the specific safeguard (adequacy decision, SCC, BCR, Data Privacy Framework) and how to obtain a copy; a bare "we may transfer data" is insufficient.
- **Acceptance**: Extract the transfers section and diff against the geolocation/jurisdiction of the third-party domains detected (Area E); fail if a transfer is undeclared or lacks a named safeguard.
- **Legal**: GDPR Art. 13(1)(f), Art. 14(1)(f), Chapter V Arts. 44-49.

### B-07 Retention periods per data category
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: State the retention period, or an objective determining criterion, for each category of data; "for the time necessary" without a criterion is not sufficient.
- **Acceptance**: Map each data category to a retention period or criterion and flag vague formulas.
- **Legal**: GDPR Art. 13(2)(a), Art. 14(2)(a).

### B-08 Full list of data subject rights
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: List all data subject rights, including access, rectification, erasure, restriction, portability, objection, withdrawal of consent, and the right to lodge a complaint with the supervisory authority (Garante).
- **Acceptance**: Check the policy for presence of each individual right, with a specific flag on consent withdrawal and on the complaint to the supervisory authority.
- **Legal**: GDPR Art. 13(2)(b-d), Art. 14(2)(c-e), Arts. 15-22, Art. 7(3), Art. 77.

### B-09 Statutory/contractual requirement to provide data
- **Level**: MUST
- **Applies-if**: data is collected directly and its provision is a legal or contractual requirement (e.g. a form conditions a service or fulfils a legal obligation).
- **Requirement**: State whether providing the data is a statutory or contractual requirement and explain the consequences of failing to provide it.
- **Acceptance**: Extract the relevant statement and correlate with the mandatory fields of the detected forms (Area G).
- **Legal**: GDPR Art. 13(2)(e).

### B-10 Automated decision-making and profiling disclosed
- **Level**: MUST
- **Applies-if**: the site performs automated decision-making or profiling (scoring, personalization, dynamic pricing).
- **Requirement**: Declare the existence of automated decision-making and profiling, including the logic involved, its significance, and the consequences for the data subject.
- **Acceptance**: Extract the profiling section and, via intake, confirm coverage of scoring/personalization/dynamic pricing where present.
- **Legal**: GDPR Art. 13(2)(f), Art. 14(2)(g), Art. 22, Art. 15(1)(h).

### B-11 Art. 14 notice for indirectly collected data
- **Level**: MUST
- **Applies-if**: personal data is collected from third parties (list enrichment, data brokers, public sources).
- **Requirement**: Provide an Art. 14 notice stating the source of the data (and whether from publicly accessible sources) and the categories of data collected.
- **Acceptance**: Via intake, establish whether lists are purchased/enriched, then extract the source declaration from the policy; fail if data has third-party origin but source and categories are undeclared.
- **Legal**: GDPR Art. 14(2)(f), Art. 14(1)(d).

### B-12 Policy vs technical reality consistency
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure every tracker and third party detected by the technical scan is covered in the privacy notice; tools such as Facebook Pixel and LinkedIn Insight Tag must be explicitly declared in the notice and banner.
- **Acceptance**: Diff the technical inventory (Area E) against the entities and purposes cited in the policy; flag every active third party not declared.
- **Legal**: GDPR Art. 5(1)(a), Art. 13(1)(e-f).

### B-13 Valid legal basis established and documented per data type
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Establish and document a valid legal basis for every type of data processed, not merely assert it in the policy; the choice must be recorded and motivated, with Art. 9 conditions for special categories.
- **Acceptance**: Via intake, request the Art. 30 records of processing and compare the basis declared in the policy against the basis documented in the register; fail on any processing without one of the six lawful bases or without a documented, motivated choice.
- **Legal**: GDPR Art. 6, Art. 9, Art. 5(2), Art. 30.

### B-14 Active notification of substantial policy changes
- **Level**: MUST
- **Applies-if**: a policy change introduces new purposes or changes the legal basis.
- **Requirement**: Actively notify users of substantial policy changes through a proactive channel (email, in-app notice) before further processing, rather than silently changing the update date; re-obtain consent where the purpose changes (see Area G).
- **Acceptance**: Via intake, review the policy change-management process and verify a notification mechanism (banner/email) and a version history exist (see A-08).
- **Legal**: GDPR Art. 13(3), Art. 14(4), Art. 12, Art. 5(1)(a); EDPB Transparency Guidelines WP260 rev.01.

### B-15 Types/categories of personal data enumerated
- **Level**: SHOULD
- **Applies-if**: direct collection under Art. 13 (for indirect collection the categories are a MUST under Art. 14(1)(d), see B-11).
- **Requirement**: Enumerate clearly the types/categories of personal data collected (e.g. name, email, phone) so the notice is genuinely intelligible.
- **Acceptance**: Extract the data types cited in the policy and diff against the actual fields of the detected forms (Area G).
- **Legal**: GDPR Art. 12(1); EDPB Transparency Guidelines WP260 rev.01 (recommended for Art. 13 direct collection).

### B-16 Processors designated under Art. 28
- **Level**: MUST
- **Applies-if**: the site is managed by an external agency or external processors are present (agency with backoffice/hosting access, CRM, email marketing platform).
- **Requirement**: Designate every party processing data on the controller's behalf as a processor via a binding written Art. 28 contract, aligned with the recipients declared in the notice (B-05) and the third parties detected (Area E).
- **Acceptance**: Via intake, request the Art. 28 contracts for external processors and compare against the declared recipients and the technical third-party inventory (Area E); fail if an active processor lacks a contract.
- **Legal**: GDPR Art. 28(3).

## Area C: Cookies and Pre-Consent Trackers

**Area applies if**: always. The scope covers any storage of or access to information on the user's terminal (cookies, localStorage, IndexedDB, invisible pixels, flash cookies, IDFA/Android ID, system identifiers, fingerprinting), not just classic HTTP cookies. Scans must run on a virgin browser profile with no banner interaction, repeated across distinct states (pre-consent, post-consent, options management, reject) and compared.

### C-01 No non-technical cookies before banner interaction
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Set no non-technical cookie before the user performs a positive interaction with the consent banner.
- **Acceptance**: With a headless browser on a clean profile and zero clicks, dump the cookie jar and classify entries via knowledge base and filter lists; confirm no non-technical cookie is present, distinguishing cookies set via the Set-Cookie header from those set via JavaScript document.cookie.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code (D.lgs. 196/2003); Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-02 No network requests to tracking/advertising domains pre-consent
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Issue no network request toward tracking or advertising domains before consent is given.
- **Acceptance**: Capture the full pre-consent HAR and match request hosts against EasyPrivacy, Fanboy-Annoyance, Disconnect, and DDG Tracker Radar; record URL, host, resource type, decoded query parameters, and the originating call stack, and confirm no tracking/advertising request fired.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Arts. 44-49 GDPR (for any resulting extra-EU transfer of IP and navigation metadata).

### C-03 No identifiers in localStorage, sessionStorage, or IndexedDB pre-consent
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Write no tracking identifier to localStorage, sessionStorage, or IndexedDB before consent.
- **Acceptance**: Dump client storage via CDP pre-consent across all frames, recording each entry's origin (domain), write timestamp, and purpose classification from the knowledge base; confirm no identifier is present.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-04 No active fingerprinting techniques pre-consent
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Do not run fingerprinting techniques (canvas, font enumeration, audio context) before consent.
- **Acceptance**: Instrument the relevant JS APIs (canvas.toDataURL, font enumeration, AudioContext) pre-consent and detect canvas fingerprinting; confirm no fingerprinting activity fires before consent.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-05 Platform pixels inactive pre-consent
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Keep platform advertising pixels (Meta, TikTok, X, LinkedIn, Google Ads) inactive until consent is given, obtaining verifiable prior consent before installing Facebook Business Tools for EU businesses.
- **Acceptance**: Match the pre-consent HAR against the known pixel endpoints (Meta, TikTok, X, LinkedIn, Google Ads) and confirm none fired before consent.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-06 Google Consent Mode configured correctly
- **Level**: SHOULD
- **Applies-if**: Google Consent Mode is in use.
- **Requirement**: Configure Consent Mode so advertising tags fire only after consent; if advanced mode is used, evaluate the cookieless pre-consent pings and declare them in the privacy policy.
- **Acceptance**: Inspect the dataLayer and compare pre-consent versus post-consent HAR toward Google endpoints; confirm no non-exempt tag fires before consent and that advanced-mode pings are documented in the policy.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Garante cookie guidelines 10 June 2021, doc-web 9677876. (Consent Mode is one possible mechanism, not itself a legal obligation.)

### C-07 No tracker fires after REJECT
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: After the user rejects, fire no tracker, so that rejection is effective and not merely cosmetic.
- **Acceptance**: Run a second headless pass that clicks reject and then repeats checks C-01 through C-05; tag the "reject" scenario and compare it against the pre-consent state, confirming no tracker starts.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-08 Cookie duration proportionate
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Keep cookie lifetimes proportionate and flag profiling cookies whose duration exceeds 12-13 months.
- **Acceptance**: Analyze expiry from the cookie jar, compute remaining lifetime in days, classify session versus persistent (treat expires 'Infinity' as session), and flag profiling cookies above the 12-13 month threshold.
- **Legal**: Art. 5(1)(c) and 5(1)(e) GDPR (data minimisation and storage limitation); 12-13 month threshold per Garante cookie guidelines 10 June 2021, doc-web 9677876 (practice indication, not a statutory limit).

### C-09 Technical cookies genuinely technical
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure cookies labelled technical are technical by real purpose, and never classify a profiling cookie as technical to bypass consent.
- **Acceptance**: Apply heuristics on name/duration/domain plus knowledge-base matching (exact, name, or domain match) and cross-review against the cookie policy; confirm no profiling cookie is masked as technical.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-10 Collected consent recorded and reconstructable
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Record collected consent so it can be reconstructed with date, time, preferences, and the notice shown (via CMP cookie and IAB TC String where present).
- **Acceptance**: Decode the TC String / CMP cookie after a choice and verify that both consent and rejection are persisted.
- **Legal**: Art. 7(1) GDPR (demonstrability of consent); Art. 5(2) GDPR (accountability).

### C-11 Every tracker classified by purpose and consent exemption
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Classify every tracker by purpose and by consent exemption, treating consent as the rule and exemption as the exception (exempt: technical, authentication and security, cart and billing, interface personalisation such as language, load balancing, paywall, audience measurement under Garante conditions; consent-required: personalised and non-personalised advertising, social sharing, any other non-exempt tracker), and show a cookie notice plus banner except in the three permitted omission cases (only technical or first-party analytics cookies; only third-party analytics cookies with identifiability-reducing measures such as IP masking and no cross-referencing with other data of the third party; both together).
- **Acceptance**: Run automatic knowledge-base classification with a confidence level (Validated/Reliable/Informative), then apply a human verdict on ambiguous categories; the exempt audience-measurement case requires manual verification of its conditions.
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC; Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876; classification per CNIL taxonomy and EDPB Website Auditing Tool categories.

### C-12 Scope extended to cookie-equivalent trackers
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Extend detection scope to cookie-equivalent trackers: invisible pixels and web beacons, flash cookies (local shared objects), terminal storage APIs (IndexedDB, IDFA, Android ID, GPS), software- or OS-generated identifiers, and terminal fingerprints.
- **Acceptance**: Detect pixels/beacons via filter lists, dump localStorage/IndexedDB via CDP, instrument fingerprinting, and for IDFA/Android ID/GPS verify the app/SDK side declared in intake (mobile surface handled separately).
- **Legal**: Art. 5(3) ePrivacy Directive 2002/58/EC (technologically neutral); Art. 122 Italian Privacy Code; Garante cookie guidelines 10 June 2021, doc-web 9677876.

### C-13 Verification across distinct tagged scenarios
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Conduct verification across distinct tagged scenarios (pre-consent, post-consent, options management, reject), comparing what is stored and transmitted in each state.
- **Acceptance**: Automatically execute the four scenarios (clean profile; accept; manage options with a partial choice; reject) with evidence per state (cookie jar, HAR, storage, screenshot); consent may be pre-set via cookie for the "consent granted" scenario.
- **Legal**: Art. 7(1) GDPR (demonstrability); Art. 5(2) GDPR (accountability).

### C-14 Google Analytics configured in a compliant mode
- **Level**: MUST
- **Applies-if**: Google Analytics is in use.
- **Requirement**: Configure Google Analytics compliantly: sign the Data Processing Amendment/Terms with Google as processor, limit user and event data retention, and, if invoking the analytics exemption, apply IP masking with no cross-referencing or sharing of data with other Google products and no remarketing.
- **Acceptance**: Inspect the GA configuration (data retention setting, presence of DPA/Data Processing Terms), verify IP masking in measurement calls via HAR, and check data-sharing flags and remarketing signals; exemption conditions require manual verification.
- **Legal**: Art. 28 GDPR (controller-processor agreement); Art. 5(1)(e) GDPR (storage limitation); Art. 122 Italian Privacy Code and Art. 5(3) ePrivacy Directive 2002/58/EC (consent required if exemption conditions per Garante cookie guidelines 10 June 2021, doc-web 9677876, are not met).

## Area D: Cookie Banner and CMP: Design and Behavior

**Area applies if**: the site installs or reads cookies or other non-technical tracking tools (non-anonymized analytics, marketing, profiling, social plugins, third-party trackers) that require consent under Art. 5(3) Directive 2002/58/EC and Art. 122 Legislative Decree 196/2003. A site using only technical or strictly necessary cookies does not need a banner and none of these checks apply.

### D-01 Consent banner present on all pages
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Display a consent-collection banner or interface on every page and block all non-technical scripts upstream until the user makes a choice, so no non-technical tracker fires before consent.
- **Acceptance**: Detect banner presence via known CMP selectors (OneTrust, Iubenda, Cookiebot, CookieYes, Usercentrics) plus DOM heuristics (high z-index overlay with cookie/privacy text); cross-reference the Area C tracker inventory. Non-technical trackers present with no banner is a finding.
- **Legal**: Art. 5(3) Directive 2002/58/EC (ePrivacy); Art. 122 Legislative Decree 196/2003 (Privacy Code); Art. 4(11) GDPR; Garante Cookie Guidelines 10 June 2021 (doc-web 9677876).

### D-02 "Reject all" at first layer with equal prominence
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Provide a "Reject all" (or equivalent) control at the banner's first layer with the same visual prominence (size, color, contrast, position) and the same interaction cost (same number of clicks) as "Accept all".
- **Acceptance**: Screenshot the first layer plus DOM/CSS analysis of the buttons (size, contrast, color, click count to reject vs accept) and an LLM vision verdict on parity; flag if "Reject" is absent from the first layer or reachable only via the preferences panel.
- **Legal**: Art. 4(11) GDPR; Art. 7 GDPR; Recital 42 GDPR; Garante Cookie Guidelines 10 June 2021 (doc-web 9677876); EDPB Guidelines 03/2022 on deceptive design patterns; CNIL enforcement on cookie-banner dark patterns.

### D-03 Closing (X) and continued browsing not treated as consent
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Do not treat the banner's close (X) button, silence, or continued navigation as consent; these must leave non-technical trackers off.
- **Acceptance**: Close the banner with the X (or wait without choosing) and re-run the Area C checks C-01..C-05; if non-technical trackers fire after closing, the X was wrongly treated as consent.
- **Legal**: Art. 4(11) GDPR; Recital 32 GDPR; Art. 5(3) Directive 2002/58/EC; Art. 122 Legislative Decree 196/2003; CJEU C-673/17 Planet49; Garante Cookie Guidelines 10 June 2021 (doc-web 9677876).

### D-04 No pre-selected or pre-activated controls in the preferences panel
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Set all checkboxes and toggles for non-technical purposes to off by default in the second-layer preferences panel, requiring an affirmative user action to enable them.
- **Acceptance**: Inspect the preferences-panel DOM for the `checked` attribute on checkboxes and `on`/`aria-checked` state on toggles for non-technical categories; flag any pre-activated control.
- **Legal**: Art. 4(11) GDPR; Art. 7(2) GDPR; Art. 25(2) GDPR; CJEU C-673/17 Planet49; EDPB Guidelines 03/2022 (deceptive snugness).

### D-05 Per-purpose granularity with independent toggles
- **Level**: MUST
- **Applies-if**: always (within Area D); per-vendor granularity applies-if the site uses the IAB TCF framework
- **Requirement**: Provide independent toggles for each tracking category (strictly necessary, functional, analytics, marketing) in the second layer, and where IAB TCF is used, granularity per individual vendor, so the user can accept and reject purposes separately.
- **Acceptance**: Count and classify the toggles in the preferences panel; flag if a single cumulative control exists or if categories matching the trackers detected in Area C are missing.
- **Legal**: Art. 4(11) GDPR; Recital 43 GDPR; Garante Cookie Guidelines 10 June 2021 (doc-web 9677876).

### D-06 No cookie wall
- **Level**: SHOULD
- **Applies-if**: always (within Area D); dedicated case-by-case assessment applies-if a paid alternative (consent-or-pay) is offered
- **Requirement**: Keep site content accessible without consenting to non-technical trackers; do not gate content behind acceptance, and treat any consent-or-pay model as requiring separate dedicated assessment.
- **Acceptance**: Browse with the banner ignored/closed and verify content stays usable rather than blocked by an access-preventing overlay; report any paid alternative for consent-or-pay analysis.
- **Legal**: Art. 7(4) GDPR; Recital 43 GDPR; EDPB Opinion 08/2024 on consent-or-pay.

### D-07 No scroll-consent
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Do not activate trackers on page scroll and do not treat scrolling as consent.
- **Acceptance**: Programmatically scroll the page without any click on the banner, then re-run Area C checks C-01..C-05; if scrolling fires non-technical trackers, the finding is confirmed.
- **Legal**: Art. 4(11) GDPR; Art. 5(3) Directive 2002/58/EC; Art. 122 Legislative Decree 196/2003; Garante Cookie Guidelines 10 June 2021 (doc-web 9677876).

### D-08 Withdrawal as easy as granting via a persistent preferences access point
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Provide a persistent, always-available preferences access point reachable from every page (typically a footer link or floating icon labeled "Cookie preferences") that reopens the choice panel, making withdrawal no harder than granting.
- **Acceptance**: Multi-page crawl for a preferences-management link/widget (text like "Cookie preferences", "Manage consent", CMP reopen); verify it actually reopens the panel; check that GPC/DNT headers are honored where declared.
- **Legal**: Art. 7(3) GDPR; Recital 42 GDPR; EDPB Guidelines 03/2022 on deceptive design patterns.

### D-09 Banner not re-prompted persistently after a rejection
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Do not re-prompt the banner at every visit after a rejection; store the user's choice (consent or rejection) for a reasonable period, indicated by the Garante and CNIL as at least 6 months, unless the processing changes significantly.
- **Acceptance**: Simulate multiple successive sessions after a rejection and verify the banner does not reappear with a choice request within the expected window; inspect the lifetime of the cookie/record storing the rejection.
- **Legal**: Art. 7 GDPR; Art. 4(11) GDPR; EDPB Guidelines 03/2022 (continuous prompting); Garante and CNIL guidance.

### D-10 Non-manipulative wording and design
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Avoid dark patterns in banner text and design: no guilt-tripping, no false urgency, no misleading linguistic or color hierarchies, no confusing or double-negative wording.
- **Acceptance**: Extract the banner texts and styles plus an LLM verdict against the EDPB deceptive-pattern taxonomy (overloading, skipping, stirring, obstructing, fickle, left in the dark).
- **Legal**: Art. 5(1)(a) GDPR; Art. 4(11) GDPR; EDPB Guidelines 03/2022 on deceptive design patterns; CNIL enforcement on cookie-banner dark patterns.

### D-11 Two-layer information: short first-layer notice plus link to full cookie policy
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Present a concise summary of purposes at the banner's first layer and a working link to the detailed cookie policy at the second layer, so consent is informed before collection.
- **Acceptance**: Verify the banner contains a concise purpose summary and a functioning link (HTTP 200) to the extended cookie policy and to the up-to-date list of processors/third parties.
- **Legal**: Art. 12(1) GDPR; Art. 13 GDPR; Art. 122 Legislative Decree 196/2003; CNIL enforcement on cookie-banner dark patterns.

### D-12 Banner present and compliant on mobile viewport
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Ensure the banner meets the same parity, granularity, and legibility guarantees on mobile viewport as on desktop (buttons not pushed off-screen or overlapped, preferences panel openable).
- **Acceptance**: Re-run the D-01..D-05 scan with a mobile viewport and emulation (user-agent, touch); compare button parity and preferences-panel accessibility against desktop.
- **Legal**: Art. 7(2) GDPR; Art. 12(1) GDPR; EDPB Guidelines 03/2022 on deceptive design patterns.

### D-13 User choices stored and not re-solicited every page or every close visit
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Persist and respect the user's expressed choice within and across sessions, without re-presenting the banner on every navigated page or every close-in-time revisit, and honor automated signals (GPC/DNT) where declared.
- **Acceptance**: Navigate several pages in one session after expressing a choice plus a second close-in-time session; verify the banner does not reappear with a choice request and that tracker state stays consistent with the stored choice; inspect the choice-state cookie/record.
- **Legal**: Art. 5(3) Directive 2002/58/EC; Art. 7 GDPR; GPC/DNT (recommendation, not obligation, in Italian law).

### D-14 Global "Accept all" allowed only if all purposes are presented before that click
- **Level**: MUST
- **Applies-if**: always (within Area D)
- **Requirement**: Permit a one-click "Accept all" only when all purposes (or tracking categories) are listed or immediately accessible before that button, so blanket consent stays informed and specific.
- **Acceptance**: Inspect the banner's first layer to verify purposes/categories are listed or immediately accessible before the "Accept all" button; flag if global consent precedes purpose presentation.
- **Legal**: Art. 4(11) GDPR; Art. 13 GDPR.

### D-15 Reject-button label explicit and unambiguous
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Label the reject control with explicit, unambiguous wording ("Reject", "Reject all"), not misleading or conditioned formulations (e.g. "I decline non-essential purposes").
- **Acceptance**: Extract the banner buttons' text labels plus an LLM clarity verdict; flag if the reject button uses ambiguous, conditioned, or non-explicit wording instead of a clear "Reject"/"Reject all".
- **Legal**: Art. 4(11) GDPR; Art. 12(1) GDPR; CNIL enforcement on cookie-banner dark patterns.

### D-16 "Accept" not repeated while "Reject" appears once
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Do not multiply "Accept" controls in the banner while showing "Reject" only once, as this imbalance steers the choice.
- **Acceptance**: Count acceptance and rejection controls in the DOM at the first layer and in the preferences panel; flag if "Accept" occurrences exceed "Reject" occurrences.
- **Legal**: Art. 4(11) GDPR; CNIL enforcement on cookie-banner dark patterns.

### D-17 Banner and cookie policy in the language of the service and user
- **Level**: SHOULD
- **Applies-if**: always (within Area D)
- **Requirement**: Provide the banner and cookie policy in the language of the service and the user (for a site aimed at the Italian public, in Italian), avoiding language discontinuity that prevents comprehension.
- **Acceptance**: Auto-detect the language of the banner text and policy link and compare it with the site's prevailing language (`lang` attribute, content); flag any mismatch.
- **Legal**: Art. 12(1) GDPR; Art. 13 GDPR; Art. 14 GDPR; EDPB Guidelines 03/2022 (language discontinuity).

### D-18 Neutral explanation of consequences per control
- **Level**: MAY
- **Applies-if**: always (within Area D)
- **Requirement**: Provide a neutral explanation of the consequences when the user activates/deactivates a control or grants/withdraws consent, supporting an informed choice.
- **Acceptance**: Manually verify that each preferences-panel toggle is accompanied by a short neutral description of the effect of enabling/disabling that category.
- **Legal**: Art. 12(1) GDPR; Art. 5(1)(a) GDPR; EDPB Guidelines 03/2022 (explaining consequences, best practice).

## Area E: Third Parties, Non-EU Transfers and Supply Chain

**Area applies if**: the site loads any third-party resource (script, pixel, font, iframe, CDN, tag manager) or relies on any external processor (hosting, CDN, email, payment gateway, web agency). In practice this is always true for production websites; individual checks carry their own conditional activation.

### E-01 Complete inventory of third-party domains
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Build and maintain a complete inventory of every third-party domain contacted during rendering, both before and after consent, classified by function (analytics, advertising, social, CDN, font, captcha, embed, tag manager).
- **Acceptance**: Capture multi-page HAR pre and post consent, aggregate requests by eTLD+1, distinguish first-party from third-party, classify against a knowledge base and filter lists (Tracker Radar/EasyPrivacy), record the call stack originating each request for attribution, and cross-check with technology fingerprinting (e.g. Wappalyzer-style detection).
- **Legal**: GDPR Art. 30(1)(d) (record of recipients), Art. 5(2) (accountability).

### E-02 Geolocation and jurisdiction of each third party and of the site hosting
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Determine the geolocation and jurisdiction of every third-party provider and of the site hosting to surface de facto non-EEA transfers, since a contacted domain may resolve to infrastructure outside the EU even when the provider is European.
- **Acceptance**: For every eTLD+1 in the E-01 inventory, perform DNS resolution, WHOIS, ASN lookup and IP geolocation, and cross-reference with a knowledge base of known providers (controller, registered office, processing locations).
- **Legal**: GDPR Arts. 44-49 (Chapter V, transfers to third countries).

### E-03 US providers: active Data Privacy Framework certification
- **Level**: MUST
- **Applies-if**: US providers detected
- **Requirement**: Verify active Data Privacy Framework adherence for the exact legal entity of each detected US provider, and never presume certification.
- **Acceptance**: For each US provider found in E-02, match the legal name against the official list of participating organizations on dataprivacyframework.gov, confirming "Active" status and the coverage scope (HR/non-HR data).
- **Legal**: GDPR Art. 45 and the DPF adequacy decision (EU-US Data Privacy Framework, July 2023); Schrems II C-311/18.

### E-04 Remote fonts served from external CDN instead of self-hosted
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Self-host web fonts instead of loading them from an external CDN, because serving from fonts.googleapis.com/fonts.gstatic.com transmits the user IP to Google on every page with no technical necessity.
- **Acceptance**: Match HAR against fonts.googleapis.com, fonts.gstatic.com and other known font CDNs, and verify whether the same font is also served locally from the first-party domain.
- **Legal**: ePrivacy Directive 2002/58/EC Art. 5(3), Codice Privacy Art. 122, GDPR Chapter V; LG München I 3 O 17493/20 (Google Fonts, German case law, indicative not binding in Italy).

### E-05 Google Analytics version and configuration
- **Level**: MUST
- **Applies-if**: Google Analytics present
- **Requirement**: Detect the Google Analytics version and configuration (IP anonymization, retention period, Google Signals/remarketing, data sharing with Google) and ensure GA4 is configured for data minimization and declared.
- **Acceptance**: Detect from HAR (endpoints google-analytics.com/collect, g/collect, parameters tid, gcs, npa) and inspect the tag configuration for IP anonymization, remarketing/Signals flags and data retention settings.
- **Legal**: GDPR Art. 5(1)(c) (minimization), Art. 25 (data protection by default), Chapter V; Garante measure on Google Analytics (June 2022).

### E-06 Compliant third-party embeds
- **Level**: SHOULD
- **Applies-if**: third-party embeds present
- **Requirement**: Load third-party embeds compliantly by using YouTube nocookie mode, on-demand map loading and two-click social widgets so the third party is only contacted after user action.
- **Acceptance**: Detect known iframes and scripts (youtube.com vs youtube-nocookie.com, Google Maps, Facebook/X/LinkedIn buttons) in HAR and DOM, and verify whether the embed loads at page load or behind a click-to-load placeholder; social links on the page signal possible integrations.
- **Legal**: ePrivacy Directive Art. 5(3); Garante guidelines on cookies and tracking tools.

### E-07 CAPTCHA transfer assessment
- **Level**: SHOULD
- **Applies-if**: reCAPTCHA present
- **Requirement**: Where reCAPTCHA is used, assess the transfer to Google and evaluate alternatives that do not transfer to the US (Cloudflare Turnstile, hCaptcha, Friendly Captcha).
- **Acceptance**: Detect the scripts (www.google.com/recaptcha, hcaptcha.com, challenges.cloudflare.com/turnstile) and the pages they load on, and verify whether loading occurs before or after consent.
- **Legal**: ePrivacy Directive Art. 5(3), GDPR Chapter V.

### E-08 CDN and infrastructure services identified and covered by Art. 28 contract
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Identify all CDN and infrastructure services (CDN, hosting, error tracking, transactional email, payment gateways) and ensure each is covered by an Art. 28 processing contract, including services invisible to the user.
- **Acceptance**: Detect CDN/infrastructure via response headers (Server, Via, CF-Ray, X-Served-By), DNS CNAME and ASN, and detect known payment endpoints (stripe.com, paypal.com); DPA existence is verified at intake by cross-referencing the client vendor list.
- **Legal**: GDPR Art. 28.

### E-09 Tag manager: loaded tags reconciled with declared and authorized tags
- **Level**: SHOULD
- **Applies-if**: tag manager present
- **Requirement**: Reconcile the tags actually loaded by the tag manager against those declared and authorized, to close the gap that lets container editors inject third parties without a developer.
- **Acceptance**: Detect the GTM container (googletagmanager.com/gtm.js?id=GTM-XXXX), extract tags from the public container if accessible, and compare with third parties actually observed in HAR and with the client-declared list.
- **Legal**: GDPR Art. 5(2) (accountability), ePrivacy Directive Art. 5(3).

### E-10 Third-party scripts loaded over HTTP or from abandoned/expired/registrable domains
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure no third-party script is loaded over HTTP or from an abandoned, expired or registrable domain, since cleartext scripts can be tampered with in transit and expired domains enable arbitrary code injection.
- **Acceptance**: For each third-party script in E-01, verify the scheme (http vs https), resolve the hosting domain via DNS, and flag domains that do not resolve or are for sale (parking page, NXDOMAIN, expired WHOIS).
- **Legal**: GDPR Art. 32 (integrity), Art. 5(1)(f).

### E-11 Signed Art. 28 DPA with every detected processor, including the web agency
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure a compliant Art. 28 DPA is signed with every processor handling personal data on the controller's behalf (analytics, CRM, email, hosting, CDN, captcha, payment gateway), explicitly including the web agency that develops or manages the site and accesses the backoffice or form data.
- **Acceptance**: Not automatable from the site side: request the list of processors with signed DPAs at intake and cross-reference with the E-01 technical inventory; every detected third party lacking a DPA is a finding.
- **Legal**: GDPR Art. 28(3).

### E-12 Sub-processor list per provider, with authorization and privacy notice mention
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Maintain, for each provider, the up-to-date list of sub-processors used only with controller authorization (specific or general with right to object) and information, and ensure the privacy notice mentions the use of sub-processors.
- **Acceptance**: Documentary verification at intake: for each primary processor, confirm presence of the current sub-processor list and the authorization/change-notification mechanism, and check that the site privacy notice mentions the use of sub-processors.
- **Legal**: GDPR Art. 28(2) and 28(4), Art. 13(1)(e).

### E-13 Vendor compliance assessment before onboarding and periodic audits for high-risk vendors
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Assess each provider's sufficient guarantees (competence, reliability, security measures) before engagement and maintain periodic audits or inspections for high-risk vendors.
- **Acceptance**: Documentary verification at intake: confirm existence of a pre-onboarding vendor assessment procedure (review of the provider's privacy policy and security measures) and a periodic audit plan for high-risk vendors, with evidence of the last cycle performed.
- **Legal**: GDPR Art. 28(1) (sufficient guarantees), Art. 28(3)(h) (audits and inspections), Art. 5(2) (accountability).

### E-14 Documented transfer mechanism per third country with Transfer Impact Assessment
- **Level**: MUST
- **Applies-if**: non-EEA transfers detected
- **Requirement**: Ensure every detected non-EEA transfer rests on a valid documented safeguard (adequacy decision, or SCC supplemented by a Transfer Impact Assessment per Schrems II, or BCR for intra-group transfers) recorded in the register, not presumed.
- **Acceptance**: Documentary verification at intake cross-referenced with E-02 geolocation: for each destination third country, confirm presence of the documented transfer mechanism and, where SCC are used, of the TIA; technically observed non-EEA transfers without a documented safeguard are findings.
- **Legal**: GDPR Arts. 44-49, Arts. 45/46/47; Schrems II C-311/18; DPF adequacy decision for the US.

### E-15 Advertising and remarketing pixels loaded only after consent, declared, with opt-out instructions
- **Level**: MUST
- **Applies-if**: advertising or remarketing pixels present
- **Requirement**: Ensure advertising and remarketing pixels (Facebook/Meta Pixel, LinkedIn Insight Tag, Google Ads) fire only after consent, are declared in the privacy and cookie policies, and include opt-out instructions.
- **Acceptance**: Detect known endpoints from HAR/DOM (connect.facebook.net/fbevents.js, snap.licdn.com, px.ads.linkedin.com, googleadservices.com, googlesyndication.com) and verify whether the fire occurs before or after consent; presence of notice and opt-out in the privacy notice is verified at intake by cross-referencing Area B.
- **Legal**: ePrivacy Directive Art. 5(3), Codice Privacy Art. 122, GDPR Art. 13 (information on recipients and purposes), Chapter V.

## Area F: Technical Security (Art. 32)

### F-01 HTTPS everywhere with HTTP redirect
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Serve every page over HTTPS, redirect all HTTP requests to HTTPS, and eliminate mixed content.
- **Acceptance**: Crawl the scheme of every page; confirm HTTP access follows the full redirect chain to a final HTTPS destination; confirm no mixed-content warnings appear in the browser console.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-02 Modern TLS configuration
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Enforce TLS 1.2 as the minimum version, use modern cipher suites, and serve a valid certificate that is not near expiry.
- **Acceptance**: Run testssl.sh or the SSL Labs API to enumerate supported protocols and ciphers, analyze the certificate (validity, expiry, chain), and check for known cryptographic vulnerabilities graded by severity.
- **Legal**: GDPR Art. 32.

### F-03 HSTS enabled
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Send the Strict-Transport-Security header, ideally with preload, to force encrypted connections and prevent downgrade and HTTPS-stripping attacks.
- **Acceptance**: Header check for the presence and parameters of Strict-Transport-Security (max-age, includeSubDomains, preload).
- **Legal**: GDPR Art. 32.

### F-04 Security headers
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Set CSP, X-Content-Type-Options, and X-Frame-Options/frame-ancestors to defend against XSS and clickjacking, and avoid informative server banners.
- **Acceptance**: Header check with MDN HTTP Observatory-style scoring; detect the HTTP security headers, the server/application banner, and any reverse proxy.
- **Legal**: GDPR Art. 32.

### F-05 Referrer-Policy configured
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Configure a Referrer-Policy that prevents leaking URLs containing sensitive parameters (tokens, emails, IDs in query strings) to third parties.
- **Acceptance**: Header check on the Referrer-Policy value plus analysis of the Referer header on outgoing requests in the HAR toward third-party domains.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-06 Secure session cookies
- **Level**: SHOULD
- **Applies-if**: session cookies are present [COND]
- **Requirement**: Set the Secure, HttpOnly, and SameSite attributes on every session cookie.
- **Acceptance**: Analyze each session cookie's attributes for presence of Secure, presence of HttpOnly, and the SameSite value ('unspecified' if absent).
- **Legal**: GDPR Art. 32.

### F-07 Forms POST over HTTPS with no personal data in GET
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure login, contact, and checkout forms POST only to HTTPS endpoints and never transmit personal data in GET/query strings.
- **Acceptance**: Analyze each form's action attribute across all frames (flag if it starts with 'http:'); inspect the method (GET vs POST) and verify via HAR that no personal data travels in a query string.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-08 No sensitive files exposed
- **Level**: MUST
- **Applies-if**: always (intrusive probing requires written client authorization)
- **Requirement**: Ensure no sensitive files or listings are reachable, including .git, .env, backups, dumps, and directory listings.
- **Acceptance**: HTTP probe a short, non-intrusive list of known paths (.git/config, .env, /backup, *.sql, directory index) and verify the returned status and content-type.
- **Legal**: GDPR Art. 32.

### F-09 Error pages reveal no internals
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Ensure 404 and error pages do not reveal stack traces, absolute paths, or software names and versions.
- **Acceptance**: Probe a non-existent page and analyze the response body for stack traces, absolute paths, and software names and versions.
- **Legal**: GDPR Art. 32.

### F-10 Email authentication (SPF, DKIM, DMARC)
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Configure SPF, DKIM, and DMARC records for the domain to prevent email spoofing and phishing against data subjects.
- **Acceptance**: DNS TXT queries for SPF, DKIM (known selectors), and DMARC records, verifying syntax and policy (p=none/quarantine/reject).
- **Legal**: GDPR Art. 32.

### F-11 Login form hardening
- **Level**: SHOULD
- **Applies-if**: a login area is present [COND] (test only with written client authorization)
- **Requirement**: Prevent user enumeration through error messages and response timing, and apply perceptible rate limiting to defend against credential stuffing and brute force.
- **Acceptance**: Light, non-intrusive test (2-3 requests) comparing messages and response times between an existing and a non-existing user; observe whether a block occurs after repeated failed attempts.
- **Legal**: GDPR Art. 32.

### F-12 Encryption of personal data at rest and backups
- **Level**: SHOULD
- **Applies-if**: always (back-end; verified by documentation, not by web scan)
- **Requirement**: Encrypt personal data at rest (AES-256) across database, file store, and backups with equal robustness.
- **Acceptance**: Not externally observable; documentary intake review of database, file store, and backup encryption, algorithm, and key management, flagged as a point to confirm with the client.
- **Legal**: GDPR Art. 32(1)(a), Art. 32(1)(b); cf. Art. 34(3)(a).

### F-13 Password hashing with bcrypt/scrypt/Argon2
- **Level**: MUST
- **Applies-if**: always (back-end; verified by documentation/code, not by web scan)
- **Requirement**: Hash account passwords with bcrypt, scrypt, or Argon2, never storing them in clear text and never using fast unsalted hashes (MD5, unsalted SHA-1).
- **Acceptance**: Not externally observable; documentary/code intake review of the credential hashing algorithm. Indirect indicator: a password-recovery flow that emails the old password in clear text reveals unhashed storage.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-14 Least-privilege access control and access logging
- **Level**: MUST
- **Applies-if**: always (back-end; verified by documentation, not by web scan)
- **Requirement**: Restrict access to personal data on a need-to-know basis and log all access, especially administrative access, to support incident reconstruction and accountability.
- **Acceptance**: Not externally observable; documentary intake review of the role/permission model (least privilege), presence and retention of access logs to data and admin functions, and MFA on privileged accounts.
- **Legal**: GDPR Art. 32, Art. 32(1)(b), Art. 5(2).

### F-15 Patching process with defined SLA
- **Level**: SHOULD
- **Applies-if**: always (back-end/process; verified by documentation, not by web scan)
- **Requirement**: Operate a formalized patching process with a defined SLA that closes critical security patches within 48 hours.
- **Acceptance**: Not reliably observable externally; documentary intake review of a patching process with an SLA (critical-patch window, owner, tracking). Indirect indicator: software versions detected in F-04/F-09 are known to be vulnerable.
- **Legal**: GDPR Art. 32, Art. 32(1)(d).

### F-16 Pseudonymization/anonymization where feasible
- **Level**: SHOULD
- **Applies-if**: always (back-end/process; verified by documentation, not by web scan)
- **Requirement**: Apply pseudonymization or anonymization of personal data by default in processing design wherever technically possible.
- **Acceptance**: Not externally observable; documentary intake review of where data is pseudonymized or anonymized (analytics, logs, test/dev environments, reporting datasets) and how separation of the additional re-identification information is managed.
- **Legal**: GDPR Art. 32(1)(a), Art. 25.

## Area G: Forms, Data Collection and Consent

### G-01 Inventory of all site forms
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Produce a complete inventory of every form on the site, recording for each one the collected fields, the method (GET/POST), the destination endpoint, and the apparent purpose.
- **Acceptance**: A DOM crawl over all in-scope pages extracts every form element, its inputs (type, name, required), associated labels, action attribute, method, and any third-party endpoint, aggregated into a catalogue of forms with typed fields.
- **Legal**: GDPR Art. 30 (records of processing), GDPR Art. 5(2) (accountability).

### G-02 No pre-selected consent checkboxes
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure no consent checkbox is pre-ticked (no `checked` attribute) and no consent toggle is active by default; the initial state must be non-consenting.
- **Acceptance**: Static DOM inspection of every form confirms that each consent-linked checkbox, radio, or toggle lacks the `checked` attribute and starts in the off state; any pre-flagged consent is flagged.
- **Legal**: GDPR Art. 4(11), GDPR Art. 7, GDPR Art. 25(2) (by default), CJEU C-673/17 Planet49.

### G-03 Separate consent per distinct purpose
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Collect marketing consent via its own dedicated checkbox, never bundled with registration, terms of service, or other consents, so each purpose can be accepted independently.
- **Acceptance**: Form-structure analysis counts the consent checkboxes, maps each to its accompanying text, and detects any single checkbox covering multiple heterogeneous purposes (e.g. "I accept the terms and consent to marketing"), with an LLM verdict on the texts.
- **Legal**: GDPR Art. 7(2), EDPB Guidelines 05/2020 on consent (specific and granular).

### G-04 Privacy notice at the point of collection
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Present a link to the full privacy notice or an inline short notice within each form, visible before submission, stating at least the purpose and pointing to the extended notice.
- **Acceptance**: For each form from G-01, search the form container for a link whose text or href contains "privacy" or "informativa", or for inline notice text; flag forms with no reference to a privacy notice.
- **Legal**: GDPR Art. 13 (information at collection), GDPR Art. 12 (accessibility).

### G-05 Data minimisation of required fields
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure every mandatory field is justified by the form's stated purpose and that defaults are the most protective, avoiding excessive required fields (e.g. date of birth required for a simple newsletter, or gender at account creation).
- **Acceptance**: Extract the `required` fields from each form, associate them with the form's apparent purpose (G-01), and obtain an LLM verdict on the proportionality of each mandatory field to that purpose; each field must be justifiable individually.
- **Legal**: GDPR Art. 5(1)(c) (minimisation), GDPR Art. 25(2) (by default), EDPB Recommendations 2/2025 (account forms).

### G-06 Double opt-in for newsletter subscription
- **Level**: SHOULD
- **Applies-if**: newsletter is active
- **Requirement**: Require email confirmation before activating a newsletter subscription, so the address is verified and consent is provable before any content is sent.
- **Acceptance**: A test subscription with an auditor-controlled disposable email verifies that a confirmation email arrives and that, without clicking confirmation, the address receives no content; the two-step flow is detected.
- **Legal**: GDPR Art. 7(1) (demonstrability of consent), Garante Guidelines on spam, 4 July 2013.

### G-07 Marketing consent not conditioning the service
- **Level**: MUST
- **Applies-if**: a form includes a marketing consent
- **Requirement**: Ensure the primary service (registration, download, request) is obtainable without ticking the marketing consent, except for the soft-spam case under Art. 130(4), and never make the marketing checkbox mandatory.
- **Acceptance**: A test submission of the form without ticking the marketing consent succeeds; flag if the form blocks submission or makes the marketing checkbox mandatory.
- **Legal**: GDPR Art. 7(4) (no conditioning), Art. 130(4) Italian Privacy Code (soft spam), Garante Guidelines on spam 2013.

### G-08 No special-category fields without explicit consent
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Do not collect special-category data (health, sexual orientation, religious or political beliefs, biometric data, trade-union membership) in any form without a dedicated explicit consent and adequate safeguards.
- **Acceptance**: LLM classification of each form's fields (label, name, placeholder, select options) identifies those collecting special-category data; for each, verify the presence of a dedicated, distinct explicit consent.
- **Legal**: GDPR Art. 9 (prohibition save exceptions), GDPR Art. 9(2)(a) (explicit consent).

### G-09 Age gate and parental consent for minors
- **Level**: MUST
- **Applies-if**: the audience includes minors
- **Requirement**: Implement an age gate at the entry of registration flows and, below the threshold (14 years in Italy), a mechanism to collect and reasonably verify parental consent.
- **Acceptance**: Documentary intake verification cross-checked with a review of registration flows confirms an age check before collection and, below threshold, a parental consent and verification mechanism; not deducible from the site side alone.
- **Legal**: GDPR Art. 8, Art. 2-quinquies Italian Privacy Code (14-year threshold in Italy).

### G-10 Form data travels only to the controller
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure form input travels only to the controller, with no POST or copy to undeclared third parties and no session-replay or keystroke-logging script capturing input before submission.
- **Acceptance**: Fill the form with marked synthetic data and inspect the HAR during typing and at submission for requests to third-party hosts carrying field contents; detect known session-recording/replay and keystroke-capture scripts via lists and signatures.
- **Legal**: GDPR Art. 5(1)(a) (transparency and fairness), GDPR Art. 6 (no legal basis), GDPR Art. 32 (security).

### G-11 One-click unsubscribe in marketing emails
- **Level**: MUST
- **Applies-if**: marketing emails are active
- **Requirement**: Include in every marketing email a functioning one-click unsubscribe / marketing opt-out link, processed promptly, with a `List-Unsubscribe` header (ideally one-click per RFC 8058), and make the sender identifiable.
- **Acceptance**: A test subscription to a marketing communication verifies, in the received email, a visible unsubscribe link and the `List-Unsubscribe` header (and `List-Unsubscribe-Post` for one-click); executing the flow confirms the link acts in a single step and that emails stop.
- **Legal**: GDPR Art. 7(3) (withdrawal as easy as giving), GDPR Art. 21(2)-(3) (objection to direct marketing), Art. 130 Italian Privacy Code, ePrivacy Directive 2002/58/EC Art. 5(3).

### G-12 Documented record of every consent collected
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Record every collected consent with date, time, method, purpose, and the version of the privacy notice in force at the moment of collection, for both form consents and cookie-banner consents.
- **Acceptance**: Documentary intake verification confirms a backend consent register/log storing, per consent, timestamp, collection method, purpose, and privacy-notice version reference; for cookies, inspection of the CMP cookie/record that stores the timestamped choice.
- **Legal**: GDPR Art. 7(1) (demonstrability), GDPR Art. 5(2) (accountability).

### G-13 Guest checkout on e-commerce
- **Level**: SHOULD
- **Applies-if**: the site is an e-commerce
- **Requirement**: Allow one-off purchases to complete without creating an account, offering a genuine choice between account and guest, and never force registration as the only path nor interpose it with deceptive design between cart and payment.
- **Acceptance**: Walk the checkout with a product in the cart and verify an explicit guest-purchase option exists before or as an alternative to registration; flag if the only way to pay is account creation or if registration is interposed as a mandatory step between cart and payment.
- **Legal**: GDPR Art. 6(1)(b) (contractual necessity, restrictive reading), GDPR Art. 25, GDPR Art. 5(1)(c), GDPR Art. 5(1)(a), CJEU C-252/21 Meta v. Bundeskartellamt, EDPB Recommendations 2/2025.

### G-14 Legal basis and transparency for B2B prospecting and third-party lists
- **Level**: MUST
- **Applies-if**: B2B prospecting or purchased/third-party-enriched lists are used
- **Requirement**: Ensure B2B prospecting on legitimate interest is relevant to the recipient's role, that contacts not collected directly receive Art. 14 information about the prospecting use and can object before the first send, and that generic impersonal addresses (info@, contact@) are not treated as individual contacts.
- **Acceptance**: Documentary intake verification confirms the origin of the lists (direct collection vs purchase/third-party enrichment), the existence of the Art. 14 notice sent before first contact, role-relevance for B2B contacts, and exclusion of generic addresses from individual consent flows.
- **Legal**: GDPR Art. 6(1)(f) (legitimate interest), GDPR Art. 14 (information for data not collected from the data subject), GDPR Art. 21(2)-(3) (objection to marketing), Art. 130 Italian Privacy Code.

## Area H: Data Subject Rights and Exercise Channels

**Area applies if**: always (any website or web app processing personal data must let data subjects exercise their rights as easily as they provided the data; individual checks may narrow by condition).

### H-01 Working dedicated channel for exercising rights
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Provide a dedicated, reachable channel (email or form) named in the privacy notice for exercising data subject rights, with clear instructions on how to submit a request, and ensure it actually delivers rather than merely being cited.
- **Acceptance**: Extract the contact (email/form URL) from the policy, confirm deliverability (domain MX records, no immediate bounce), and verify the form is present and reachable.
- **Legal**: GDPR Art. 12(2), Arts. 15-22.

### H-02 Reachable published DPO contact
- **Level**: MUST
- **Applies-if**: a DPO has been appointed ([COND: DPO appointed]).
- **Requirement**: When a DPO is appointed, publish a reachable, actively monitored DPO contact that the data subject can use to exercise rights, not a dead generic address.
- **Acceptance**: Extract the DPO contact from the policy and verify MX/deliverability as in H-01.
- **Legal**: GDPR Art. 38(4), Art. 37(7).

### H-03 One-click functioning unsubscribe with List-Unsubscribe header
- **Level**: MUST
- **Applies-if**: a newsletter or direct marketing is active ([COND: newsletter or direct marketing active]).
- **Requirement**: Provide a free, immediate one-click unsubscribe in every marketing message and implement the List-Unsubscribe / List-Unsubscribe-Post headers as its technical enactment.
- **Acceptance**: Perform a test signup with a dedicated email, inspect SMTP headers (List-Unsubscribe, List-Unsubscribe-Post), run the unsubscribe flow, and confirm sends actually stop.
- **Legal**: GDPR Art. 21(3), Italian Privacy Code Art. 130, RFC 8058, Garante anti-spam Guidelines 4 July 2013.

### H-04 Timely response to an Art. 15 request
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Respond to a data subject access request without undue delay and in any case within one month, extendable to two months for complexity with a stated justification.
- **Acceptance**: Run a client-agreed test access request with a timer, measuring time to response and completeness of the reply.
- **Legal**: GDPR Art. 12(3).

### H-05 Self-service account deletion or clear instructions
- **Level**: SHOULD
- **Applies-if**: the service has user accounts ([COND: service with user accounts]).
- **Requirement**: For account-based services, provide a self-service "Delete my account" function by design, or otherwise clear instructions leading to effective erasure through the general channel.
- **Acceptance**: Review the account flow (if in scope) for a deletion function in user settings and detect a "Delete account" pattern in the account-area DOM.
- **Legal**: GDPR Art. 17.

### H-06 Access right: copy of data in a common electronic format
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: On an access request made electronically, provide a copy of the data in a commonly used electronic format, and where the service has accounts offer a self-service "Export my data" function as the by-design enactment.
- **Acceptance**: Detect an export/data-copy function in the account area (pattern "Export my data", export endpoint/API) and verify the output is a commonly used electronic format; completeness verdict is manual.
- **Legal**: GDPR Art. 15, Art. 15(3).

### H-07 Rectification and completion: editable user profile
- **Level**: SHOULD
- **Applies-if**: the service has user accounts ([COND: service with user accounts]).
- **Requirement**: For account-based services, provide editable profile settings so the data subject can rectify inaccurate data and complete incomplete data; otherwise provide a rectification request channel in the policy.
- **Acceptance**: Detect editable profile fields in the account area (contact/identity edit form) and confirm changes are actually saved; with no account, verify the rectification request channel in the policy.
- **Legal**: GDPR Art. 16.

### H-08 Portability: export in a structured machine-readable format
- **Level**: MUST
- **Applies-if**: processing is based on consent or contract and carried out by automated means ([COND: consent- or contract-based processing by automated means]).
- **Requirement**: Where portability applies, let the data subject receive the data they provided in a structured, commonly used, machine-readable format (JSON or CSV), not a PDF or screenshot, and transmit it to another controller.
- **Acceptance**: Detect the export endpoint/function in the account area and inspect content-type and format (JSON/CSV vs unstructured); verify the export includes the user-provided data.
- **Legal**: GDPR Art. 20.

### H-09 Restriction: processing-freeze mechanism
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Implement a mechanism to restrict ("freeze") processing of an account or record, preserving the data without further processing and distinct from erasure, for the cases in Art. 18.
- **Acceptance**: Not observable via front-end scan; verify by documentation and process review that a suspension/freeze mechanism exists that retains data while blocking its use.
- **Legal**: GDPR Art. 18.

### H-10 Right to object, including direct marketing at any time
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Allow objection to processing based on Art. 6(1)(e) or (f) including profiling, and cease marketing processing on an unconditional objection to direct marketing made at any time.
- **Acceptance**: Detect a marketing preference center and objection channel in the policy plus an unsubscribe link in every marketing email (linked to H-03), and verify the marketing objection is presented as unconditional.
- **Legal**: GDPR Art. 21, Art. 21(2)-(3).

### H-11 Notification to recipients of rectification, erasure or restriction
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Communicate every rectification, erasure or restriction to each recipient the data was disclosed to, unless impossible or disproportionate, and inform the data subject of the recipients if requested.
- **Acceptance**: Not observable via front-end; verify by documentation and process review that a procedure propagates rectification/erasure/restriction to third-party recipients (including technical propagation to backups and sub-processors).
- **Legal**: GDPR Art. 19, Art. 17(2).

### H-12 Identity verification of the requester before disclosing data
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Verify the requester's identity before disclosing data, requesting proportionate additional information only where there is reasonable doubt, to avoid undue disclosure to third parties.
- **Acceptance**: Not observable via scan; verify by documentation and process review that a proportionate, non-excessive identification procedure exists.
- **Legal**: GDPR Art. 12(6), Art. 5(1)(f), Art. 32.

### H-13 Register of requests and responses with dates and details
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Keep a register of data subject requests recording the channel, receipt date, response date and content, right type, outcome and any extension, to demonstrate compliance with the deadlines.
- **Acceptance**: Not observable via front-end; verify by documentation that a data subject request register with date, right type, outcome and timing exists and is maintained.
- **Legal**: GDPR Art. 12(3), Art. 5(2).

### H-14 Notice listing all rights, including consent withdrawal and complaint to the DPA
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: In the privacy notice, list all data subject rights (access, rectification, erasure, restriction, objection, portability) and state the right to withdraw consent at any time where processing is consent-based and the right to lodge a complaint with the supervisory authority.
- **Acceptance**: Scan the privacy policy for the enumeration of Arts. 15-22 rights, the mention of the right to withdraw consent, and the right to complain to the supervisory authority; completeness verdict is manual.
- **Legal**: GDPR Art. 13(2)(b), Art. 13(2)(c), Art. 7(3), Art. 13(2)(d).

## Area I: Governance, Accountability and Data Life Cycle

**Area applies if**: always. The website is the visible surface, but compliance rests on an organizational backbone that a technical scan only sees indirectly. This area covers intake scoping (I-01, I-02) plus the accountability documents required under Art. 5(2); most checks are not observable from the front-end and are verified on a documentary basis with the client, then cross-referenced with technical evidence collected in other areas (third-party inventory in Area E, cookie durations in Area C, form minimization in Area G, policy dates in Area A).

### I-01 Perimeter scoping: number of sites and domains, shared infrastructure and policies
- **Level**: MAY
- **Applies-if**: always (intake scoping step, not a compliance control)
- **Requirement**: Enumerate every site and domain in scope and determine whether they share the same infrastructure and the same policies, because distinct domains with distinct policies or infrastructures are separate processing operations that must be audited separately.
- **Acceptance**: Intake questionnaire listing in-scope domains, cross-checked via crawl (same privacy policy served? same hosting/ASN? same CMP?) to confirm or refute the answers; a single policy covering heterogeneous domains is a signal of incoherence.
- **Legal**: GDPR Art. 30 (records of processing), Art. 5(2) (accountability).

### I-02 Perimeter scoping: e-commerce/PSP, mobile apps, advertising custom audiences
- **Level**: MAY
- **Applies-if**: always (intake scoping step, not a compliance control)
- **Requirement**: Identify whether the scope includes e-commerce with a payment service provider handling payment data, connected mobile apps, and advertising with custom audiences or list uploads, since each opens a separate processing surface (high-risk payment flows, out-of-browser SDK trackers, list uploads to ad platforms).
- **Acceptance**: Intake questionnaire plus verification of correlated technical signals (checkout and PSP endpoints in the crawl, store links for apps, advertising pixels detected in Area C).
- **Legal**: Codice Privacy Art. 122 and Art. 130 (e-commerce and advertising processing surfaces).

### I-03 Record of processing activities maintained and up to date
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Maintain a written record of processing activities built on complete data mapping, containing all Art. 30 elements (purposes, categories of data subjects and data, recipients, non-EU transfers, retention terms, security measures) and reviewed regularly.
- **Acceptance**: Not observable from the front-end: request an extract of the record from the client and compare it against the processing inventory inferred from the scan (forms in Area G, third parties in Area E, cookies in Area C); real processing operations not recorded are the finding.
- **Legal**: GDPR Art. 30 (including Art. 30(4), availability to the authority), Art. 5(2).

### I-04 Accountability owner identified and DPO appointed with published contact where mandatory
- **Level**: MUST
- **Applies-if**: always for the accountability owner; DPO mandatory if public authority, large-scale regular and systematic monitoring, or large-scale processing of special categories
- **Requirement**: Assign a clear, demonstrable accountability owner with defined reporting lines, and where a DPO is mandatory appoint an independent, conflict-free DPO who reports to top management, is reachable by staff, and whose contact is communicated and published in the privacy notice.
- **Acceptance**: Extract the DPO contact from the policy (linked to B-02 and H-02) and use an intake question to determine whether a mandatory case applies (large scale, special categories, systematic monitoring); if due and absent, or present with a dead contact, it is a finding. Verdict on necessity is semi-automatic.
- **Legal**: GDPR Art. 24, Art. 5(2), Art. 37 (including 37(1) mandatory cases and 37(7) publication of contact), Arts. 38-39.

### I-05 EU representative appointed where controller is established outside the EU
- **Level**: MUST
- **Applies-if**: controller established outside the EU (offering goods/services to, or monitoring, EU data subjects)
- **Requirement**: Where the controller is not established in the Union but offers goods or services to EU data subjects or monitors their behaviour, designate in writing an EU representative in a Member State and state their contact in the privacy notice.
- **Acceptance**: Determine the controller's jurisdiction (footer/policy address, company registry, hosting geolocation as an indicator) and search the policy for the EU-representative clause when the controller is extra-EU.
- **Legal**: GDPR Art. 27.

### I-06 DPIA conducted before starting high-risk processing
- **Level**: MUST
- **Applies-if**: high-risk processing present (large-scale profiling, systematic monitoring, large-scale special categories)
- **Requirement**: Conduct and document a data protection impact assessment, using a recognized methodology (WP29 criteria, CNIL method), before starting any processing likely to result in a high risk to rights and freedoms, and retain it as accountability evidence.
- **Acceptance**: Intake question on the existence of a DPIA plus correlation with high-risk technical signals detected (profiling trackers, session recording in G-10, advertising with custom audiences); if the signals exist and the DPIA is missing, it is a finding.
- **Legal**: GDPR Art. 35, Art. 5(2), Art. 24.

### I-07 Privacy by design and by default: most protective defaults and schema minimization
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Integrate data protection from the design stage and by default so that only data necessary for each purpose is processed: marketing consents opt-out by default, most restrictive settings preselected, minimized collected fields, and the principle weighed when selecting services and products.
- **Acceptance**: Partially automatic: verify that marketing consents are opt-out by default (linked to G-02), that form fields are minimized (G-05), and that preselected settings are the most protective; the remainder (schema-level minimization) is documentary.
- **Legal**: GDPR Art. 25 (25(1) by design, 25(2) by default).

### I-08 Per-category retention policy with automatic deletion or anonymization at expiry
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Implement a per-category retention plan with a mechanism that automatically deletes or anonymizes data at expiry (retention jobs, record TTL), covering all data categories and reviewed regularly, rather than merely declaring terms in the policy.
- **Acceptance**: Intake question on the existence of a retention plan and automated deletion plus comparison of the terms declared in the policy (B-07) against the effective durations detected (cookie lifetimes in C-08); the gap is the finding.
- **Legal**: GDPR Art. 5(1)(e) (storage limitation), Art. 17 (erasure).

### I-09 Staff data protection training and awareness
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Run a training program with induction and periodic refresher training for all staff, advanced training for critical roles (DPO, access and records management), and evidence that staff complete and understand it via tests or questionnaires.
- **Acceptance**: Not observable via scan: documentary verification of a periodic training plan, materials, and participation evidence for staff with access to data.
- **Legal**: GDPR Art. 32 (organizational security measures), Art. 39(1)(b) (DPO monitoring of awareness and training).

### I-10 Periodic review of policies, record and retention plan
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Review policies, the record of processing and the retention plan on a defined cadence and at every substantial change to processing or the transfer landscape, through a review-and-approval process that also extends to the notices given to data subjects, reinforced by internal audits and external checks.
- **Acceptance**: Semi-automatic: read the policy last-updated date (linked to A-05 and A-08) and compare it against the technologies actually detected; intake question on the review cadence of the record and the retention plan.
- **Legal**: GDPR Art. 5(2).

### I-11 Legitimate Interest Assessment completed before processing
- **Level**: MUST
- **Applies-if**: legitimate interest used as a legal basis
- **Requirement**: Where processing relies on legitimate interest, carry out and document a Legitimate Interest Assessment (purpose, necessity and balancing test) before starting the processing, since without it the legality of the balancing is not demonstrable and the legal basis remains unproven.
- **Acceptance**: Not observable via scan: intake question on which processing operations rely on legitimate interest (correlated with the legal bases declared in the notice, Area B) and request for the relevant LIAs.
- **Legal**: GDPR Art. 6(1)(f), Art. 5(2).

### I-12 Art. 28 processor contracts and due diligence
- **Level**: MUST
- **Applies-if**: external processors present
- **Requirement**: Bind every processor acting on the controller's behalf (hosting, CDN, email sending, analytics, CRM, PSP) with an Art. 28 contract containing all mandatory clauses (subject-matter, duration, nature, purpose, instructions, confidentiality, security, sub-processors, assistance, deletion, audit), and perform due diligence on their technical and organizational measures with periodic review of contract compliance.
- **Acceptance**: Semi-automatic: the Area E third-party inventory provides the list of presumed processors; for each, verify documentarily the existence of a DPA and its clauses. The gap between technical third parties and contracts present is the finding.
- **Legal**: GDPR Art. 28 (including 28(1) sufficient guarantees, 28(3) mandatory clauses), Art. 32.

### I-13 Data breach management procedure with notification and register
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Maintain a data breach procedure to detect, assess, escalate and notify incidents to the supervisory authority within 72 hours, communicate high-risk breaches to data subjects without undue delay, and document all breaches in an internal register regardless of notification.
- **Acceptance**: Not observable via scan: documentary verification of a breach procedure (detection, assessment, escalation, 72-hour notification) and of the breach register.
- **Legal**: GDPR Art. 33 (including 33(1) 72-hour notification and 33(5) register), Art. 34.

## Area J: Data Breaches: Preparedness and Notification

### J-01 Breach detection with monitoring and alerting
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Implement breach detection with monitoring and alerting over access and systems that process personal data, and expose an external reporting channel so incidents can be surfaced before harm occurs.
- **Acceptance**: Documentary intake review of detection tooling and procedures (SIEM, log review, anomalous-access alerting, on-call routing). Externally observable part: HTTP probe of /.well-known/security.txt (RFC 9116) and check for a policy-declared channel to report vulnerabilities and incidents, verifying the Contact and Expires fields of the file.
- **Legal**: GDPR Art. 32(1)(b), Art. 32(1)(d), Art. 33(1), Recital 87.

### J-02 Documented incident response plan with containment
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Maintain a written incident response plan with roles, an escalation chain, and a containment phase (for example isolating a system or blocking access until the vulnerability is resolved).
- **Acceptance**: Documentary intake review confirming the plan exists (roles, escalation chain, containment criteria and procedures, timelines, internal and external contacts) and recording its last revision or test date.
- **Legal**: GDPR Art. 32(1)(c), Art. 24(1), Recital 87; EDPB Guidelines 9/2022.

### J-03 Notification procedure to the supervisory authority within 72 hours
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Establish a written procedure to notify the supervisory authority within 72 hours, with assigned owners, a chosen channel, and a pre-filled notification template, and require processors to inform the controller without undue delay.
- **Acceptance**: Documentary intake review of the written procedure (who assesses, who decides, who notifies), the channel used toward the supervisory authority, the pre-filled notification template, and breach clauses in Art. 28 processor agreements (obligation and timing for reporting to the controller).
- **Legal**: GDPR Art. 33(1), Art. 33(2), Art. 33(4), Recitals 85-87; Art. 83(4).

### J-04 Communication procedure to data subjects for high-risk breaches
- **Level**: MUST
- **Applies-if**: a breach entails a high risk to the rights and freedoms of data subjects
- **Requirement**: Maintain a procedure to communicate a breach to affected data subjects without undue delay in clear language, with a documented criterion for deciding when risk is high and the protective measures they can take, accounting for the Art. 34(3) exemptions.
- **Acceptance**: Documentary intake review of the communication procedure (high-risk threshold, channel to data subjects, template stating protective actions) and of the exemption preconditions (encryption of data at rest, see F-12).
- **Legal**: GDPR Art. 34(1), Art. 34(2), Art. 34(3), Recitals 86 and 88; EDPB Guidelines 9/2022.

### J-05 Register of all breaches, including non-notified incidents
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Keep and maintain a register of all personal data breaches, including incidents that were not notified, recording facts, effects, and remedial actions.
- **Acceptance**: Documentary intake review confirming the breach register exists and captures its fields (date and time, nature, data and data subjects involved, risk assessment, decision to notify or not with reasoning, measures taken). It is distinct from the Art. 30 records of processing (see I-03).
- **Legal**: GDPR Art. 33(5), Art. 5(2).

### J-06 Complete notification content per Art. 33(3)
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Prepare a notification template covering all Art. 33(3) elements: nature of the breach, categories and approximate number of data subjects and of records, DPO contact, likely consequences, and measures taken or proposed.
- **Acceptance**: Mainly documentary intake review that the notification template covers every point of Art. 33(3). Observable and automatable part: presence and reachability of the DPO contact in policy (reusing the extraction from B-02/H-02), since without a contactable DPO point (b) cannot be satisfied.
- **Legal**: GDPR Art. 33(3)(a), Art. 33(3)(b), Art. 33(3)(c), Art. 33(3)(d).

### J-07 Forensic investigation and prevention of recurrence
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Run a forensic investigation of each incident (where, when, how, which data, who was involved) and update measures to prevent recurrence through a root-cause and lessons-learned process.
- **Acceptance**: Documentary intake review of forensic capability (existence, granularity, and retention of logs sufficient to reconstruct an incident), the root-cause analysis procedure, and the mechanism for updating measures after an incident. Forensic capability relies on Area F logging (see F-14).
- **Legal**: GDPR Art. 33(5), Art. 32(1)(d), Art. 24(1); EDPB Guidelines 9/2022.

### J-08 Periodic breach trend monitoring and reporting to senior management
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Monitor breach trends over time, identify recurring patterns, and report outcomes to senior management so that objectives and corrective actions are driven by the trends.
- **Acceptance**: Documentary intake review of periodic breach reporting (trends, metrics, aggregated incidents), the internal recipients of the outcomes (senior management), and evidence that the results generate corrective actions.
- **Legal**: GDPR Art. 5(2), Art. 24(1).

## Area K: CRM, Newsletter and Direct Marketing

**Area applies if**: the site or app does email marketing or newsletters, does lead generation, or uses a CRM to manage contacts, customers or prospects. If none of these apply, the area is out of scope.

### K-01 Consent proof synchronized site-to-CRM
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Sync marketing consent from the site to the CRM so that every contact carries complete proof: capture date, time, collection method, and the text or version of the privacy notice in force at the moment of collection.
- **Acceptance**: Export a sample of CRM contacts and verify the proof fields are present (timestamp, source, notice version); reconcile them against the source form logs.
- **Legal**: GDPR Art. 7(1), Art. 5(2). Extends C-10 (CMP-side proof).

### K-02 B2C opt-in before electronic marketing
- **Level**: MUST
- **Applies-if**: the site does B2C email marketing (sending email, SMS or promotional messages to natural persons)
- **Requirement**: Send promotional email, SMS or messages to natural persons only after prior opt-in consent that is freely given, specific and documented; block any send to a contact lacking a recorded opt-in.
- **Acceptance**: Intake on how the list was collected plus a test subscription; verify no send is dispatched without a registered opt-in.
- **Legal**: Codice Privacy (D.lgs. 196/2003) Art. 130(1) and (2); GDPR Art. 6(1)(a), Art. 7.

### K-03 B2B legitimate interest documented and role-relevant
- **Level**: MUST
- **Applies-if**: the site does B2B prospecting toward professionals relying on legitimate interest as the legal basis
- **Requirement**: When marketing to professionals on legitimate interest, keep a documented Legitimate Interest Assessment (LIA) and ensure the solicitation is relevant to the recipient's role; exclude generic addresses (info@, contact@) from the personal-data perimeter.
- **Acceptance**: Documentary review of the LIA plus sampling of campaign subject matter against recipient roles.
- **Legal**: GDPR Art. 6(1)(f), Art. 5(2). Note: the Italian Garante reads B2B marketing to named professional emails restrictively; consent is the safer basis.

### K-04 Soft spam exception conditions all met
- **Level**: MUST
- **Applies-if**: the site relies on the soft spam exception to send without consent
- **Requirement**: Use soft spam without consent only when all conditions hold: the recipient is already a customer, the email was collected in the context of a sale, the promotion concerns similar products or services of the same controller, and a simple free opt-out was offered at collection and in every message; do not treat mere account creation without a purchase as triggering the exception.
- **Acceptance**: Intake on the soft-spam list origin plus verification that the "customer" flag derives from a real purchase and that the offer concerns similar products.
- **Legal**: Codice Privacy Art. 130(4). See G-07 (form side).

### K-05 Defined retention for leads, prospects and lapsed customers
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Define retention for leads, prospects and lapsed customers so the active prospecting base is deleted or anonymized within a maximum term from the end of the relationship or the last meaningful contact.
- **Acceptance**: Export the CRM with last-contact date; count inactive records past the threshold and verify a configured retention policy exists.
- **Legal**: GDPR Art. 5(1)(e). Benchmark: CNIL 3 years from end of commercial relationship or last contact.

### K-06 Separation of active base from legal-obligation archive
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Keep data retained for legal obligations (invoices, accounting) in a separate archive with restricted access and never reuse it for marketing.
- **Acceptance**: Intake on the archive architecture plus verification that send lists do not draw from the accounting archive.
- **Legal**: GDPR Art. 6(1)(c), Art. 5(1)(e).

### K-07 No purchased or scraped lists without valid basis
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Do not use purchased lists or data harvested from public sources (web, social, directories) for prospecting without a valid legal basis and an Art. 14 notice; treat bought lists as a red flag.
- **Acceptance**: Intake on list provenance plus verification of supplier contracts and upstream consent proof; check that the Art. 14 notice was sent.
- **Legal**: GDPR Art. 14, Art. 6, Art. 5(1)(a) and (b). See B-11.

### K-08 List hygiene: bounces, suppression, double opt-in
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Maintain list hygiene by handling bounces (removing hard bounces), suppressing invalid addresses, and applying double opt-in for new subscriptions.
- **Acceptance**: Bounce and hard-bounce metrics from the ESP; double opt-in test with a disposable email (as in G-06).
- **Legal**: GDPR Art. 5(1)(d). Double opt-in see G-06.

### K-09 Opt-out propagated to all systems
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Process opt-out without undue delay and propagate it to ALL systems (CRM, ESP, advertising platforms and custom audiences), not only to the single list it came from.
- **Acceptance**: Test unsubscribe on one channel and verify the contact is suppressed in the other connected systems as well.
- **Legal**: GDPR Art. 21(2) and (3), Art. 7(3); Codice Privacy Art. 130. Extends H-03.

### K-10 Persistent suppression list surviving reimports
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Keep a persistent suppression list so contacts who opted out or were deleted stay suppressed and do not reappear after reimports, synchronizations or new uploads.
- **Acceptance**: Intake on the suppression mechanism plus a test: reimport a list containing a suppressed contact and verify it remains excluded.
- **Legal**: GDPR Art. 21, Art. 5(1)(a).

### K-11 Role-based access control with access logging
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Enforce role-based access control on CRM data so each user sees only the data needed for their function, with access logging.
- **Acceptance**: Review the CRM role and permission matrix plus verify an access audit log exists.
- **Legal**: GDPR Art. 32, Art. 5(1)(f), Art. 25 (by default).

### K-12 Data quality and deduplication
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Keep data accurate and up to date, merge duplicate records, and standardize fields.
- **Acceptance**: CRM export: count duplicates (email and phone), measure the rate of stale fields; run a periodic quality audit.
- **Legal**: GDPR Art. 5(1)(d).

### K-13 Partner data sharing requires named-partner consent
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Share data with partners only under specific consent naming the partner; do not rely on generic "to third parties" consent.
- **Acceptance**: Intake on recipient partners plus verification that the sharing consent names the partners and is recorded for each.
- **Legal**: GDPR Art. 6, Art. 7, Art. 13(1)(e). See B-05.

### K-14 Granular preference center
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Provide a customer-accessible granular preference center allowing choice by channel (email, SMS, phone), by purpose, and by partner sharing.
- **Acceptance**: Verify the preference center exists and works; test granular modification of choices.
- **Legal**: GDPR Art. 7(3), Art. 21.

## Area L: E-commerce

**Area applies if**: the site sells goods or services online (checkout with payment, catalogue with cart, paid subscriptions). If the site does not conclude online sales, the whole area is out of scope and its checks are not executed.

### L-01 Account not mandatory to purchase
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Do not make account creation a mandatory condition for purchasing unless a genuinely necessary, documented limited purpose requires it (e.g. subscription needing recurring authenticated interactions, or a closed community with verified access requirements), and when an account is imposed retain the written assessment proving its necessity.
- **Acceptance**: Documentary intake check cross-referenced with the purchase-flow review; if checkout forces account creation (see G-13), the written assessment identifying the limited purpose and legal basis must exist; flag if the account is mandatory with no retained justification.
- **Legal**: GDPR Art. 6(1)(b) (strict interpretation, CJEU C-252/21 Meta v Bundeskartellamt), Art. 5(2) accountability, Art. 5(1)(c) minimisation; EDPB Recommendations 2/2025; CNIL guidance.

### L-02 Post-sale services without a permanent account
- **Level**: SHOULD
- **Applies-if**: always (within Area L)
- **Requirement**: Provide accessory and post-sale services (order tracking, pre-shipment changes, returns, exchanges, complaints, warranties, exercise of rights) without imposing a permanent account, using time-limited single-use links, secure forms, customer service contact, or email links.
- **Acceptance**: Review of returns, tracking and support flows plus intake check; post-sale services must be reachable without login via form, email or specific link; flag if a return, tracking or complaint requires account creation or login.
- **Legal**: GDPR Art. 6(1)(b) and 6(1)(f) (necessity/balancing not met), Art. 11 (no obligation to maintain identification beyond purpose), Art. 12(6) (identification by other means); EDPB Recommendations 2/2025.

### L-03 No storage of full card data on merchant systems
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Never store full card data (PAN, CVV) in clear text or persist it on merchant systems; collect card details through PSP-hosted fields (iframe, hosted fields, redirect) so the PAN is replaced by a token and never transits the controller's servers.
- **Acceptance**: Inspect the payment page to confirm card fields are served from a PSP iframe/domain and are not native inputs posting to the merchant server; analyse the HAR on submission to verify the PAN does not transit to controller hosts; detect the PSP from domains and scripts.
- **Legal**: GDPR Art. 32 (technical measures proportionate to risk), Art. 5(1)(f) integrity and confidentiality, Art. 25 by design.

### L-04 Card-on-file only with separate active consent
- **Level**: MUST
- **Applies-if**: card saving for future purchases is offered
- **Requirement**: Save payment data for future reuse only with active, specific consent separate from the transaction, collected via a non-pre-ticked checkbox and revocable, and never as a default setting.
- **Acceptance**: Walk the checkout up to the payment step without completing it; verify the card-saving option is a separate, non-pre-selected checkbox not required to pay; flag if the card is saved by default or consent is bundled with order acceptance.
- **Legal**: GDPR Art. 6(1)(a) and Art. 7 (free, specific, distinguishable, revocable consent); EDPB Recommendations 02/2021; Conseil d'Etat 10 December 2020.

### L-05 Post-purchase marketing within the soft-spam boundary
- **Level**: MUST
- **Applies-if**: post-purchase email marketing is sent
- **Requirement**: Send promotional emails to customers under soft spam only within Art. 130(4) limits (same controller, products or services similar to those purchased, opt-out offered at email collection and in every subsequent message), and require consent for any communication outside this boundary.
- **Acceptance**: Documentary intake check and flow review; assess product scope of campaigns versus purchased products, presence of opt-out at email collection, and exclusion from soft-spam flows of anyone who only created an account without purchasing; cross-reference the unsubscribe verified in G-11.
- **Legal**: Codice Privacy Art. 130(4) (soft spam), GDPR Art. 6(1)(a) for anything exceeding the exception, Art. 21(2)-(3) (objection to marketing).

### L-06 Abandoned-cart email requires consent
- **Level**: MUST
- **Applies-if**: abandoned-cart recovery emails are sent
- **Requirement**: Base abandoned-cart recovery emails on consent, not on soft spam, since no completed sale exists to trigger the soft-spam exception.
- **Acceptance**: Test with an auditor-controlled disposable email: add a product to the cart and enter the email at checkout without completing the order, then observe whether recovery emails arrive and verify the declared basis; flag if cart emails are sent without consent.
- **Legal**: GDPR Art. 6(1)(a) (consent), Codice Privacy Art. 130 (unsolicited communications, outside the Art. 130(4) exception), GDPR Art. 5(1)(b) purpose limitation.

### L-07 Loyalty and profiling on separate consent, not via account
- **Level**: MUST
- **Applies-if**: a loyalty programme or profiling is present
- **Requirement**: Base activity tracking for loyalty, personalised content or a loyalty programme on consent and an active choice separate from the purchase process, and do not impose it through the account.
- **Acceptance**: Review the loyalty enrolment flow and consents; verify loyalty tracking is triggered by a distinct consent and not by a flag bundled with registration or the order; cross-reference detected trackers (see Area C) to confirm profiling does not start without consent.
- **Legal**: GDPR Art. 6(1)(a), ePrivacy Directive Art. 5(3) for terminal tracking, GDPR Art. 7 (separate, non-conditioning consent); EDPB Recommendations 2/2025.

### L-08 Reviews with defined basis and minimised exposure
- **Level**: SHOULD
- **Applies-if**: buyer product reviews are published
- **Requirement**: Publish buyer reviews on a defined legal basis and minimise exposed data, showing no full surname, email or unnecessary identifier publicly, with a notice on the use of the contribution and, where reviews are marked verified, provable linkage to a real purchase.
- **Acceptance**: Crawl product pages with reviews and extract the personal data shown next to each review; flag emails, full surnames or other unnecessary public identifiers; verify the legal basis and purchase-verification mechanism in intake.
- **Legal**: GDPR Art. 5(1)(c) minimisation, Art. 6(1)(a) or 6(1)(f) with balancing, Art. 13 (information).

### L-09 Conversion tags fire only after consent
- **Level**: MUST
- **Applies-if**: conversion tags or transaction tracking to ad platforms are used
- **Requirement**: Fire purchase events and transaction data (order value, products, email or phone, including hashed) to advertising platforms (Meta CAPI, Google Ads enhanced conversions, server-side tracking) only after consent, and declare them in the privacy notice.
- **Acceptance**: Complete a test order in two runs, consent granted and consent refused; analyse the HAR on order confirmation for purchase/conversion events and transactional data sent to ad platforms; flag if the conversion tag fires despite refusal or pre-consent.
- **Legal**: ePrivacy Directive Art. 5(3), Codice Privacy Art. 122, GDPR Art. 6 for the transfer to the third party, Recital 26 (hashed data remain personal).

### L-10 Separate bases and retention for order data and tax documents
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Govern order data and tax documents as distinct bases and retention periods: delete or anonymise contractual-basis order data at the end of necessity (execution, warranty, limitation), while keeping invoices and accounting documents under legal obligation in a separate, access-restricted archive for tax purposes only.
- **Acceptance**: Documentary intake check for a retention matrix that, for the same customer, distinguishes order data (contractual basis, deletion at end of necessity) from tax documents (legal obligation, separate access-restricted archive); flag if the only criterion applied is ten-year retention of the whole profile.
- **Legal**: GDPR Art. 6(1)(b) and 6(1)(c) (distinct bases), Art. 5(1)(b) purpose limitation, Art. 5(1)(e) storage limitation, Recital 41; Italian Civil Code Art. 2220 and D.P.R. 600/1973 Art. 22 (ten years).

### L-11 Dismissal of inactive or orphan accounts
- **Level**: SHOULD
- **Applies-if**: a customer account is available
- **Requirement**: Do not keep inactive or orphan accounts indefinitely in an active database: define an inactivity period after which accounts are deleted or anonymised, and treat in-account order history as a service on distinct consent separate from the purchase core.
- **Acceptance**: Intake check of the inactive-account policy (time threshold, deletion or anonymisation action) and review of account settings for self-service deletion (see H-05); flag if no dismissal criterion for dormant accounts exists.
- **Legal**: GDPR Art. 5(1)(e) storage limitation, Art. 17 erasure, Art. 6(1)(a) for order history as a consent-based service.

### L-12 Wishlist and recommendations on a defined basis
- **Level**: SHOULD
- **Applies-if**: wishlist or personalised recommendations are offered
- **Requirement**: Base wishlists, saved lists and browsing history used for recommendations or profiling on a defined legal basis (consent, or legitimate interest with a documented balancing test), with a privacy notice and a possibility to object.
- **Acceptance**: Review wishlist and recommendation features and cross-reference detected trackers (see Area C); verify profiling use of history rests on consent or a documented legitimate-interest balancing in intake, and that the notice declares the purpose and the right to object.
- **Legal**: GDPR Art. 6(1)(a) or 6(1)(f) with balancing, ePrivacy Directive Art. 5(3) for tracked history, GDPR Art. 13 (information); EDPB Recommendations 2/2025.

## Area M: AI Features on the Site (GDPR + AI Act)

**Area applies if**: the site integrates at least one of: a chatbot or conversational assistant, LLM-based features (generative search, summarization, drafting), generation or manipulation of content (text, images, audio, video), or profiling or AI-assisted automated decisions. If none are present, mark the area as out of scope in the report.

### M-01 Chatbot discloses it is an AI system
- **Level**: SHOULD
- **Applies-if**: the site includes a chatbot or conversational assistant
- **Requirement**: Make the chatbot clearly and distinguishably declare that it is an AI system no later than the user's first interaction, unless its artificial nature is obvious from context.
- **Acceptance**: Open the chat widget headless and inspect the first message/label and the launcher DOM for an explicit AI-nature declaration presented before user input.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(1) and Art. 50(5). Obligation applicable from 2 August 2026.

### M-02 Synthetic outputs machine-readable and detectable
- **Level**: SHOULD
- **Applies-if**: the site generates synthetic content (text, images, audio, video)
- **Requirement**: Mark synthetic outputs generated on the site in a machine-readable format and make them concretely detectable as artificial using robust, interoperable solutions (watermarking, metadata, provenance).
- **Acceptance**: Download a sample output for each modality and verify presence of metadata/watermark (C2PA, EXIF/XMP fields, textual marking) via a parser.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(2). Applicable from 2 August 2026; for generative systems placed on the market earlier, marking expected by 2 December 2026.

### M-03 Deep fake disclosure
- **Level**: SHOULD
- **Applies-if**: the site generates or manipulates deep fake images, audio, or video
- **Requirement**: Attach a clear and distinguishable disclosure to deep fake media at first exposure (persistent visual label, opening disclaimer, audible notice); the obligation is attenuated for manifestly artistic or satirical works.
- **Acceptance**: Manually review the generated content and verify the presence and persistence of the label or disclaimer.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(4) first subparagraph and Art. 50(5). Applicable from 2 August 2026.

### M-04 AI text on matters of public interest labeled
- **Level**: SHOULD
- **Applies-if**: the site publishes AI-generated or manipulated text to inform the public on matters of public interest
- **Requirement**: Label AI-generated or manipulated text published to inform the public on matters of public interest clearly as artificial and not buried in terms and conditions; exempt only where subject to substantial human review with editorial responsibility held by a natural or legal person.
- **Acceptance**: Intake on the editorial workflow plus sample review of generated articles to verify labeling or a human-review process.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(4) second subparagraph. Applicable from 2 August 2026.

### M-05 No prohibited AI practices
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure the AI system does not fall into any practice prohibited by AI Act Art. 5: subliminal manipulation or deceptive techniques that distort behavior, exploitation of vulnerabilities, social scoring, emotion recognition in the workplace or education, or biometric categorization of sensitive data.
- **Acceptance**: Intake on the system's purposes and persuasive mechanisms plus documentary analysis of the design against the Art. 5 list.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 5. Prohibition effective since 2 February 2025.

### M-06 AI Act risk classification documented
- **Level**: SHOULD
- **Applies-if**: always (within this area)
- **Requirement**: Document the system's AI Act risk classification in a memo that justifies the category (typically limited risk for a conversational chatbot) and verifies it does not cross into high risk (Annex III) or prohibited practices.
- **Acceptance**: Intake: request the classification memo and verify its consistency with the actual system use detected during the scan.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 6 and Art. 50; Annex III. Preparatory to obligations applicable from 2 August 2026.

### M-07 Legal basis per LLM processing phase
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Document a distinct legal basis for each LLM processing phase: user input and prompts, output generation, and any use of prompts to train or improve the model.
- **Acceptance**: Intake plus privacy policy analysis: map the AI processing phases and the legal basis declared for each.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 6(1) and, where special categories are involved, Art. 9(2). Extends B-03 to the AI lifecycle.

### M-08 Guard against special-category data in prompts
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Adopt measures to prevent prompts from collecting or processing special categories (Art. 9) without an adequate basis and safeguards, and warn the user not to enter special or sensitive data in the prompt.
- **Acceptance**: Test interaction with the chatbot using synthetic sensitive input; verify presence of warnings, filters, or refusals; inspect the widget's privacy notice.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 9(1); fairness Art. 5(1)(a). Complementary to G-08 (forms) on the conversational channel.

### M-09 Privacy notice covers AI processing
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure the privacy notice explicitly covers AI processing: whether and how user inputs are used for training, which data are processed for which purpose, and the model's capabilities and limits, including the probabilistic nature of the output.
- **Acceptance**: LLM extraction from the privacy policy: verify presence of a section on AI processing, use for training, and model limits.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 13; Art. 5(1)(a). AI-specific extension of Area B.

### M-10 Data subject rights over model outputs
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Make data subject rights exercisable over model outputs, including rectification and erasure of inaccurate or unwanted personal data in outputs; do not reduce rectification to erasure merely because it is technically more convenient.
- **Acceptance**: Intake on the output-request handling process plus an agreed test of a rectification request on an output containing personal data.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 16, Art. 17, Art. 12(2). Complements Area H channels (H-01, H-05) on the AI plane.

### M-11 Output accuracy actively maintained
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Maintain output accuracy with substantive measures (measurement, correction, source updates); a disclaimer about possible inaccuracy alone does not satisfy the accuracy principle.
- **Acceptance**: Intake: request documentation of the output-accuracy measurement and correction process, in addition to the disclaimer text.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 5(1)(d) and Art. 5(1)(a).

### M-12 DPIA for AI processing
- **Level**: MUST
- **Applies-if**: the AI involves profiling or large-scale processing
- **Requirement**: Carry out a DPIA on the AI processing, with documented DPO involvement and mitigation of identified risks, and schedule its periodic review.
- **Acceptance**: Intake: request a copy and date of the DPIA, the DPO's opinion, and evidence of risk mitigation.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 35 (in particular Art. 35(1) and 35(3)).

### M-13 Art. 22 safeguards for automated decisions
- **Level**: MUST
- **Applies-if**: the system makes automated decisions with legal or similarly significant effects
- **Requirement**: Put in place Art. 22 safeguards (permitted basis, human intervention, right to contest and to express one's own view), in addition to declaring the logic and consequences in the policy.
- **Acceptance**: Intake on the automated decision-making processes plus verification that an effective human-intervention and contestation channel exists.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 22. Complementary to B-10.

### M-14 No risk transfer to the user in terms
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Do not use terms and conditions to transfer compliance responsibility for prompt data to the user (no clause making the user responsible for their own inputs); the controller must assume personal inputs will arrive.
- **Acceptance**: LLM extraction from the T&C and chatbot disclaimers: search for clauses that offload responsibility for entered data onto the user.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 5(1)(a) (fairness).

### M-15 Opt-out for training on user inputs
- **Level**: SHOULD
- **Applies-if**: user inputs are used for training
- **Requirement**: Where prompts and feedback are used to train or improve the model on the basis of legitimate interest, offer a clear opt-out and inform the user of that use in a demonstrable way.
- **Acceptance**: Interact with the service: verify presence of a training opt-out control and its related notice before or during use.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 6(1)(f).

### M-16 Provider/deployer roles and AI supplier contracts
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure contracts with AI system suppliers map the provider/deployer roles for each system in use and include the Art. 50 transparency obligations (marked and detectable outputs) and, where the supplier processes personal data on the controller's behalf, a DPA under Art. 28.
- **Acceptance**: Intake: request the AI supplier contracts, the role mapping, and the signed DPAs; cross-check against the third-party inventory (E-01).
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50 (provider/deployer allocation); GDPR (Reg. EU 2016/679) Art. 28. The DPA part is a MUST; the Art. 50 part becomes enforceable from 2 August 2026.

## Area N: Voice Channels and Automated Calls

**Area applies if**: the client performs outbound telephone prospecting, uses conversational voice bots or IVR, or integrates virtual voice assistants. If none of these apply, the whole area is out of scope.

### N-01 Prior consent for automated calls without operator
- **Level**: MUST
- **Applies-if**: area active (automated calls without a human operator)
- **Requirement**: Ensure every number dialed by an automated system without an operator has prior, freely given, specific, informed and unambiguous consent, and store per-contact proof of that consent.
- **Acceptance**: Sample numbers from the campaign list and confirm a consent proof record with a date exists for each; flag any number lacking a record. Note that in Italy this consent requirement for fully automated calls applies to B2B as well as B2C, legitimate interest is not a valid basis, and ambiguous cases (sole traders, professionals at home) are treated as B2C.
- **Legal**: Art. 130(1) Italian Privacy Code (D.lgs. 196/2003); GDPR Art. 7(1), Art. 5(2).

### N-02 Filter list against the Public Opposition Register (RPO)
- **Level**: MUST
- **Applies-if**: area active
- **Requirement**: Filter each campaign list against the Public Opposition Register before every campaign and treat RPO enrollment as a revocation of previously given telemarketing consents.
- **Acceptance**: Compare the campaign list against the most recent RPO result; verify the consultation date falls within the validity window and that no opposed numbers remain in the dispatched file. RPO removes oppositions but does not replace the consent required by N-01.
- **Legal**: L. 5/2018; DPR 149/2018.

### N-03 Bot discloses its artificial nature at call start
- **Level**: SHOULD
- **Applies-if**: area active (automated voice bot)
- **Requirement**: Have the voice bot announce it is an AI system within the first 10 seconds, audibly and not masked by music, repeated on every re-call, with an immediate opt-out offer, and retain a recording of the announcement as proof.
- **Acceptance**: Transcribe the first 10 seconds of the recording and detect the AI-nature disclosure; check announcement volume against any background music; verify the announcement is present across a sample of re-calls. The Art. 50 AI Act transparency obligation becomes binding on 2 August 2026; before that date it is defensible anticipatory alignment.
- **Legal**: AI Act Art. 50 (Reg. EU 2024/1689); GDPR Art. 21.

### N-04 Recording notice given before recording starts
- **Level**: MUST
- **Applies-if**: area active (calls are recorded)
- **Requirement**: Provide a recording notice (purpose, retention period, rights) before recording begins, consistent with the public privacy policy.
- **Acceptance**: Transcribe the call opening and detect the recording disclaimer before the first recorded segment; compare it against the public privacy policy. Full notice content follows the mandatory elements already verified in Area B (B-01..B-10); here verify up-front delivery on the voice channel.
- **Legal**: GDPR Art. 13.

### N-05 Limited retention of recordings and transcripts
- **Level**: MUST
- **Applies-if**: area active (calls are recorded)
- **Requirement**: Limit retention of audio recordings and transcripts with automatic deletion by default (CNIL reference: 6 months), permit exceptions only for documented litigation, and anonymize any transcript kept beyond that period.
- **Acceptance**: Inspect the system retention policy and verify an automatic deletion job at 6 months for both audio and transcripts; flag recordings past the threshold without a litigation flag. Audio and transcript must share the same retention; longer transcript retention is allowed only if anonymized and commercially justified. The 6-month figure is a defensible CNIL benchmark, not statute; the limitation principle itself is the MUST.
- **Legal**: GDPR Art. 5(1)(e), Art. 25.

### N-06 Separate consent for human review of recordings
- **Level**: MUST
- **Applies-if**: human re-listening or labeling of recordings occurs [COND]
- **Requirement**: Base any human re-listening of conversations for model improvement or QA on separate, specific consent, and provide reviewers only pseudonymized data under a contractual ban on re-identification.
- **Acceptance**: Documentary check of the re-listening consent flow and the contract with the review provider; test for a dedicated opt-in distinct from the call consent. Human review and transcript labeling are not covered by contract performance and need an autonomous basis, normally consent with per-purpose opt-in.
- **Legal**: GDPR Art. 6(1)(a), Art. 7, Art. 28, Art. 32; EDPB Guidelines 02/2021.

### N-07 In-call opt-out recognized by voice and keypad
- **Level**: MUST
- **Applies-if**: area active
- **Requirement**: Recognize an in-call opt-out automatically both by voice (NLU on typical refusal phrases) and by keypad (DTMF), and confirm it immediately during the conversation.
- **Acceptance**: End-to-end test of the bot with refusal phrases ("stop", "take me off the list", "do not call me again") and with the opt-out key; verify recognition and immediate voice confirmation within the same call.
- **Legal**: GDPR Art. 21.

### N-08 Opt-out propagates across all campaigns
- **Level**: MUST
- **Applies-if**: area active
- **Requirement**: Propagate every opt-out to all campaigns (not just the current one), update a centralized suppression list and the CRM, send a durable written confirmation (SMS or email with a permanent opposition link), and retain proof.
- **Acceptance**: Verify that an opted-out number is blocked across multiple CRM campaigns; check that the written confirmation is sent and that a timestamped proof record exists. Retain proof at least 3 years from the last interaction for accountability.
- **Legal**: GDPR Art. 21, Art. 5(2).

### N-09 Explicit consent for voiceprint identification
- **Level**: MUST
- **Applies-if**: identification or authentication via voiceprint is used [COND]
- **Requirement**: When the voice is used to uniquely identify the user, treat the processing as biometric under Art. 9, base it on explicit consent, and offer a non-biometric alternative identification method.
- **Acceptance**: Documentary review of the voiceprint enrollment flow for a dedicated explicit consent and a non-biometric alternative option. Mere content verification or command execution does not trigger Art. 9.
- **Legal**: GDPR Art. 9(2)(a), Art. 4(14), Art. 7; EDPB Guidelines 02/2021.

### N-10 Voice models kept and matched locally, user-triggered
- **Level**: SHOULD
- **Applies-if**: voice biometrics is active [COND]
- **Requirement**: Generate, store and compare voice models only on the local device, activate biometric recognition on user initiative each use (keyword or confirmation), and never through permanent analysis of overheard voices.
- **Acceptance**: Architectural review of where voice models reside and are compared (local vs server) and of the recognition activation trigger. Apply dedicated template protection standards (e.g. ISO/IEC 24745); do not subject uninformed bystanders to biometric processing. This is authority best practice, defensible but not a precise statutory rule.
- **Legal**: GDPR Art. 25, Art. 32; EDPB Guidelines 02/2021.

### N-11 Safeguards for automated decisions with legal or significant effects
- **Level**: MUST
- **Applies-if**: the bot assigns a score or makes decisions with legal or similarly significant effects [COND]
- **Requirement**: For solely automated bot decisions with significant effects (score assignment affecting credit or insurance, rejecting an application, initiating litigation), guarantee human intervention, the right to contest, and information about the logic involved.
- **Acceptance**: Map the decisions the bot makes and classify them by effect; verify a human intervention and contestation mechanism exists for the qualifying ones. Qualifying a prospect, booking an appointment or offering a deal does not trigger Art. 22.
- **Legal**: GDPR Art. 22.

### N-12 DPIA for the voice bot / voice assistant system
- **Level**: SHOULD
- **Applies-if**: area active
- **Requirement**: Carry out a DPIA for the voice bot / voice assistant system covering recording, transcription, any biometrics, and automated decisions.
- **Acceptance**: Request the voice system DPIA from the client and verify it covers recording, transcription, any biometrics, and automated decision-making. The EDPB considers it very likely voice services meet the mandatory-DPIA criteria (systematic monitoring, new technologies, potentially sensitive data, vulnerable subjects).
- **Legal**: GDPR Art. 35; EDPB Guidelines 02/2021.

### N-13 EU hosting and signed DPA with the voice bot provider
- **Level**: MUST
- **Applies-if**: area active
- **Requirement**: Host voice-channel audio, transcripts and CRM in the EU (or under documented Chapter V safeguards), and ensure the voice bot provider is covered by a signed DPA governing the chain of responsibility.
- **Acceptance**: Verify the storage location of audio/transcript/CRM systems and the presence of a signed DPA with the voice AI provider; cross-check with the Area E vendor inventory. Transfers and processors are already covered in Area E (E-02, E-03, E-08) and B-06; here it applies to the specific voice flows, often on third-party SaaS platforms.
- **Legal**: GDPR Art. 28, Chapter V; AI Act (Reg. EU 2024/1689).

### N-14 Public privacy policy mentions voice AI, recording and biometrics
- **Level**: MUST
- **Applies-if**: area active
- **Requirement**: Update the public privacy policy to mention voice AI, call recording, and any biometric processing, matching what the bot actually does.
- **Acceptance**: LLM extraction from the privacy policy and verification of sections on automated calls / voice AI, recording and biometrics; diff against the bot's real functions. Extends the Area B completeness check (B-03, B-10, B-12) to the voice channel.
- **Legal**: GDPR Art. 13, Art. 14.

## Area O: Beyond GDPR: DSA, DMA, Digital Fairness Act

**Area applies if**: the site is in scope for at least one of DSA/DMA/DFA. DSA applies only if the site hosts third-party content (comments, reviews, UGC, forums, uploads) or is an online platform/marketplace; a showcase site publishing only its own content is out of scope. DMA creates rights (not obligations) for sites that are business users of a gatekeeper (selling on marketplaces, publishing apps, running pages/accounts, or buying Meta/Google Ads). DFA is a proposal under consultation and is not yet in force (forward-looking radar only).

### O-01 Single electronic point of contact for authorities
- **Level**: MUST
- **Applies-if**: site hosts third-party content
- **Requirement**: Publish a single electronic point of contact reachable by electronic means for competent authorities, stating the languages accepted for communication.
- **Acceptance**: Crawl policy/legal/T&C pages and confirm an electronic contact address and declared language for authority communication are present; LLM verdict.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 11; in Italy the interlocutor is AGCOM, Digital Services Coordinator.

### O-02 User point of contact not solely automated
- **Level**: MUST
- **Applies-if**: site hosts third-party content
- **Requirement**: Provide a direct, rapid, user-friendly point of contact for users that is not limited to automated tools (a chatbot must not be the only channel).
- **Acceptance**: Crawl and confirm a user contact channel (email/form) distinct from a chatbot-only option is present; LLM verdict.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 12.

### O-03 EU legal representative for non-EU providers
- **Level**: MUST
- **Applies-if**: site hosts third-party content and the provider is not established in the EU
- **Requirement**: Appoint and clearly indicate a reachable legal representative in the Union responsible for DSA compliance.
- **Acceptance**: Intake question on establishment plus verification that a legal representative is indicated in the T&C/policy; manual review.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 13.

### O-04 Transparent terms and conditions on moderation
- **Level**: MUST
- **Applies-if**: site hosts third-party content
- **Requirement**: Publish transparent terms and conditions describing content moderation policy, any algorithmic tools used, and available means of redress, in clear and accessible language.
- **Acceptance**: Extract T&C and use an LLM verdict on the presence of moderation/redress clauses; manual verification.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 14.

### O-05 Notice-and-action mechanism for illegal content
- **Level**: MUST
- **Applies-if**: site hosts third-party content
- **Requirement**: Provide an easy and accessible notice-and-action mechanism that lets any person flag content they consider illegal.
- **Acceptance**: Detect a content-flagging form/flow on UGC pages; LLM verdict.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 16.

### O-06 Statement of reasons for content restrictions
- **Level**: MUST
- **Applies-if**: site hosts third-party content
- **Requirement**: Provide a statement of reasons for every content restriction or removal, indicating the available remedies (internal complaint, ADR, judicial review).
- **Acceptance**: Documentary review of the statement-of-reasons template plus an intake question on the process.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 17.

### O-07 Internal complaint-handling system
- **Level**: MUST
- **Applies-if**: service is an online platform, except micro or small enterprises (Recommendation 2003/361/EC: fewer than 50 staff and up to EUR 10M turnover)
- **Requirement**: Provide an internal complaint-handling system, accessible for at least six months, allowing users to contest moderation decisions.
- **Acceptance**: Detect a complaint/appeal flow in user areas plus an intake question on enterprise size.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 20; exemption for micro/small enterprises under Art. 19 (Arts. 20-28).

### O-08 Priority handling of trusted flagger notices
- **Level**: MUST
- **Applies-if**: service is an online platform, except micro or small enterprises
- **Requirement**: Handle notices submitted by trusted flaggers designated by the Digital Services Coordinator with priority.
- **Acceptance**: Intake question on the internal process for prioritizing notices.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 22; in Italy trusted flaggers are designated by AGCOM (e.g. PermessoNegato APS, AGCOM resolution 299/25/CONS).

### O-09 Interface free of dark patterns
- **Level**: MUST
- **Applies-if**: service is an online platform
- **Requirement**: Design the entire service interface without dark patterns; do not deceive or manipulate users' choices.
- **Acceptance**: Screenshot key flows and run an LLM vision verdict against a dark pattern taxonomy; extends D-10 to the whole UI.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 25 (broader than the cookie banner covered in Area D, D-02/D-10).

### O-10 Advertising and recommender system transparency
- **Level**: MUST
- **Applies-if**: service is an online platform, except micro or small enterprises
- **Requirement**: Make each advertisement identifiable with declared advertiser and targeting parameters, and disclose the main parameters of recommender systems in the T&C with an option to modify them.
- **Acceptance**: Detect ad labels and a "why am I seeing this" panel; extract T&C on the recommender; LLM verdict.
- **Legal**: DSA (Regulation (EU) 2022/2065) Arts. 26 and 27.

### O-11 Enhanced protection of minors
- **Level**: MUST
- **Applies-if**: online platform accessible to minors
- **Requirement**: Provide enhanced protection for minors, prohibiting targeted advertising when there is reasonable certainty the user is a minor, with privacy and safety measures.
- **Acceptance**: Intake question on a minor audience plus review of advertising flows and age assurance.
- **Legal**: DSA (Regulation (EU) 2022/2065) Art. 28; coordinates with GDPR Art. 8 (Area G, G-09).

### O-12 Trader traceability on marketplaces
- **Level**: MUST
- **Applies-if**: B2C marketplace
- **Requirement**: Collect and verify traders' identifying data before activity (Know Your Business Customer), design the interface to facilitate traders' information obligations, and warn consumers about illegal offers.
- **Acceptance**: Review the seller onboarding flow and detect identifying fields and pre-contractual disclosures.
- **Legal**: DSA (Regulation (EU) 2022/2065) Arts. 30, 31, 32.

### O-13 Awareness of DMA rights toward gatekeepers
- **Level**: MAY
- **Applies-if**: the company is a business user of a gatekeeper (marketplace, app store, ad platform)
- **Requirement**: Exercise DMA rights toward gatekeepers by claiming free, real-time, high-quality access to platform-generated data via API (e.g. Amazon SP-API, Meta, Apple App Data Transfer), relying on the absence of anti-steering restrictions and on the requirement for effective consent before gatekeepers combine data for targeted advertising.
- **Acceptance**: Intake question on which gatekeepers are used (marketplace, app store, ad platform) plus mapping of available data-request channels.
- **Legal**: DMA (Regulation (EU) 2022/1925) Art. 6(10) and prohibitions on anti-steering and cross-service data combination.

### O-14 Digital Fairness Act radar
- **Level**: MAY
- **Applies-if**: site with sales, sign-up, or a consumer-facing interface
- **Requirement**: Run a preventive gap analysis on dark patterns, addictive design, deceptive personalization of offers and prices, drip pricing, and easy cancellation (unsubscribing as simple as subscribing), treating it as a forward-looking radar rather than a conformity verdict.
- **Acceptance**: Detect subscription traps (asymmetry between sign-up and cancellation), drip pricing at checkout, and price personalization; LLM verdict framed as radar, not a conformity verdict.
- **Legal**: Digital Fairness Act (proposal under consultation, closed 24 October 2025, not yet in force); current floor in Directive 2005/29/EC (unfair commercial practices) and Directive 2011/83/EU (consumer rights); web-side already covered on consent in Area D and on unsubscribe in H-03.
