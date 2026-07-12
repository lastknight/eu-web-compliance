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
