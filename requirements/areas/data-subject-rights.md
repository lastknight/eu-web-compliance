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
