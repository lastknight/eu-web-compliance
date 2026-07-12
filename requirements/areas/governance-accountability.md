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
