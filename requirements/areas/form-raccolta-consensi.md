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
