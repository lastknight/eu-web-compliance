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
