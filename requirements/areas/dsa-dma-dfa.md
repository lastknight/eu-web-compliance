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
