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
