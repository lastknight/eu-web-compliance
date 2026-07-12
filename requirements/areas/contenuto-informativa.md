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
