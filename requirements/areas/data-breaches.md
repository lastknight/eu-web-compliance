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
