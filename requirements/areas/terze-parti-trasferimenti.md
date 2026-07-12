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
