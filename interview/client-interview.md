The client interview does not start from a blank sheet, and it does not start from the scan either: it starts from the gates. Founding principle: **a technical scan can confirm a presence, never an absence**. If the site shows no trace of a CRM it does not mean the CRM does not exist; the public surface of the site is a fraction of the reality of the processing (many companies have little or nothing on the site and all the real processing elsewhere).

The standard flow has four steps. **First: the 16 level 1 gate questions**, to ask the client before anything else (five minutes, even by phone or email): they switch entire areas on or off and tell the scan where to look and which external properties exist (CRM, newsletter platform, app, voice channels). **Second: the technical scan**, which starts with the perimeter already informed by the gates and pre-fills the level 0 answers, those a machine can observe on its own (CMP, pixels, third parties, forms, languages, hosting), with the evidence attached. **Third: the real interview**, only on the active areas: the client confirms the pre-filled answers and fills in the level 2 detail questions. **Fourth: the second verification pass**, which assigns each answer a verdict of CONFIRMED, DISPROVEN or NOT VERIFIABLE with the supporting evidence. Answers that extend the perimeter (newsletter platform, CRM, mobile app, PSP) add properties and vendors to the scan: for vendors only public documents are consulted, on the client's own properties active tests are run only with a written mandate.

There is also a **fast mode** (URL only, zero preliminary questions): the scan starts blind, proposes the answers to the gates it manages to observe and leaves all the others open, marking them "to ask". Useful for a triage or a presale; for a real audit the risk is forgetting entire areas, because what cannot be seen from the site stays invisible.

## Level 1 · Gate questions (asked first)

A single entry for each recurring gate, with the best phrasing. The "If yes, activates" column lists all the areas and blocks that answer switches on.

| ID | Question | If yes, activates | Extends the perimeter? |
|----|---------|--------------|------------------------|
| Q-G-01 | Do you have a newsletter or do email marketing? On which platform? Do you use double opt-in and do you have verifiable opt-in for the historical list? | Area K, newsletter section of Area B (B-11, B-14), ESP platform as vendor (Area E), unsubscribe and List-Unsubscribe (H-03, H-10, G-06) | Yes (ESP platform) |
| Q-G-02 | Do you do lead generation? Through which channels (forms, landing pages, lead ads, list purchase or enrichment)? | Art. 14 privacy notice (B-11), Area K, lead gen platforms (Area E) | Yes (lead platforms) |
| Q-B-11 | Do you use a CRM or marketing automation (HubSpot, Salesforce, Mailchimp)? Does the site's data flow into it automatically and is it declared as a recipient? Do you share data with commercial partners? | Area K (including third-party sharing K-13), recipients and vendors of Area E (B-05, B-12) | Yes (CRM and partners) |
| Q-L-01 | Do you sell goods or services online, with cart, checkout and payment on the site? | Area L, PSP and payment gateway (I-02), guest checkout (G-13) | Yes (e-commerce, PSP) |
| Q-A-05 | Are there channels beyond the website (mobile app, campaign landing pages, points of sale, telephone contact) with their own notices or separate tracking surfaces? | Consistency of multi-channel notices, mobile SDK surface, IDFA/Android ID, GPS (C-12) | Yes (third-party properties) |
| Q-G-10 | Does your audience include minors? How do you verify age and collect parental consent? | Age gate and parental consent Art. 8 GDPR (G-09), enhanced protection of minors Art. 28 DSA (O-11) | No |
| Q-I-04 | Do you do advertising (Google Ads, Meta, TikTok, LinkedIn)? Do you use custom audiences or upload contact lists to the platforms? | Advertising pixels of Area C (C-01, C-05), custom audiences and uploaded lists | Yes (ad platforms) |
| Q-B-08 | Do you do profiling, scoring, lead scoring, automated personalization of content or prices, or fully automated decisions with effects on people? | Automated decisions Art. 22 (B-10), DPIA (M-13, I-09), voice bot scoring (N-11) | No |
| Q-B-05 | Has a DPO been appointed, internal or external? If not, does a mandatory case under Art. 37 apply? | DPO block in policy (B-02), staffed and reachable contact point (H-02) | No |
| Q-M-01 | Does the site integrate a chatbot, LLM assistants, generation of synthetic content, or use user inputs for training? With which provider or model? | Area M, opt-out from training (M-15), transparency Art. 50 AI Act | Yes (AI provider) |
| Q-N-01 | Do you make outbound calls for commercial purposes? Are they automated (voice bot, IVR) or with a human operator? | Area N, consent for automated ones (N-01), announcement of AI nature (N-03), voice biometrics (N-09, N-10), training on recordings (N-06) | Yes (voice provider) |
| Q-O-02 | Do you host user-generated content (comments, reviews, forums, uploads), are you a platform or a marketplace, do you sell on third-party stores or personalize prices and offers? | DSA Area O (notice-and-action O-05, statement of reasons O-06, recommender O-10, platform obligations O-12), DMA rights toward gatekeepers (O-13), Digital Fairness Act radar (O-14) | Yes (marketplace, gatekeeper) |
| Q-B-13 | Is the site managed or developed by an external agency, or do you rely on suppliers (hosting, CRM, ESP) that process data on your behalf? | Processor appointment Art. 28 (B-16), data breach clause in the DPAs (J-04) | Yes (external processors) |
| Q-I-01 | How many sites and domains do you manage? Do they share infrastructure and policy or does each have its own? | Cross-comparison between domains on policy, hosting/ASN and CMP (I-01) | Yes (additional domains) |
| Q-I-08 | Is the data controller established outside the EU? | Representative in the Union Art. 27 GDPR (I-05), legal representative Art. 13 DSA (O-03) | No |
| Q-D-13 | Do you use particular patterns on the banner: blocking cookie wall, paid alternative (consent-or-pay), or the IAB TCF framework with vendor list? | Consent-or-pay assessment EDPB 08/2024 (D-06), granularity per individual vendor and TCF vendor list (D-05) | Yes (TCF vendor list) |

## Level 0 · Answers pre-filled by the scan

Rows grouped in area order. "Pre-filled by" cites the checks that populate the answer; "The client only needs to" indicates the minimum action required.

| ID | Question | Pre-filled by | The client only needs to |
|----|---------|-----------------|----------------------|
| Q-A-03 | In how many languages are the site and the notices? | A-04, A-07 | Confirm and say who handles the translations |
| Q-A-04 | Are the notices HTML or downloadable PDFs? | A-06 | Confirm |
| Q-B-04 | Who is the controller and which contacts are exposed? | B-01 | Confirm or correct |
| Q-B-06 | Which types of data do you collect and do you list them in the notice? | B-15 | Confirm or supplement |
| Q-B-14 | Where is the site hosted and which suppliers are outside the EU/EEA? | B-06 | Confirm and indicate the safeguard for each |
| Q-C-01, Q-D-01 | Which CMP do you use and who configures it? | C-10, D-01 | Confirm, say who maintains it and the last revision |
| Q-C-02 | Do you use Google Consent Mode, basic or advanced? | C-06 | Confirm and say who set up the tags |
| Q-C-03 | Do you use Google Analytics and in which GDPR configuration? | C-14 | Confirm, attach the DPA and the retention setting |
| Q-C-06, Q-E-10 | Which advertising and remarketing pixels are active and do they fire post-consent? | C-05, C-02, C-07, E-15 | Confirm and say where they are declared |
| Q-C-07, Q-G-09 | Do you use session recording or heatmaps and do you mask the form fields? | C-02, G-10 | Confirm |
| Q-D-05 | Is Reject all at the first level with the same visibility as Accept, including on mobile? | D-02, D-12, D-15 | Confirm |
| Q-D-06 | Is Accept repeated in more places than Reject? | D-16 | Confirm |
| Q-D-07 | Does closing with the X or scrolling fire the trackers? | D-03, D-07 | Confirm |
| Q-D-08 | For how long do you keep the choice and does the banner respect the 6 months? | D-09, D-13 | Confirm |
| Q-D-09 | Is there a permanent access point to reopen the preferences and withdraw? | D-08 | Confirm |
| Q-D-10 | Do you respect the browser's GPC and DNT signals? | D-08, D-13 | Confirm |
| Q-D-11 | Does the banner summarize the purposes with a link to the cookie policy? | D-11 | Confirm |
| Q-D-12 | In which languages are the banner and the notice? | D-17 | Confirm |
| Q-E-06 | In which countries does the data physically reside? | E-02 | Confirm or supplement |
| Q-E-11, Q-E-12, Q-F-07 | Are the fonts remote or self-hosted and do you use a third-party CAPTCHA? | E-04, E-07 | Confirm and evaluate EU alternatives |
| Q-G-07 | Is marketing consent separated from the other consents? | G-03 | Confirm |
| Q-G-08, Q-O-12 | Do the emails have one-click unsubscribe and List-Unsubscribe, and is unsubscribing as simple as subscribing? | G-11, O-14, H-03 | Confirm and state the processing times |
| Q-G-11 | Does any form collect special categories of data? | G-08 | Confirm and indicate the basis and safeguards |
| Q-H-04 | Can you export the data in JSON or CSV for portability? | H-08 | Confirm |
| Q-H-09 | Does the notice list all the rights, withdrawal and the complaint to the Garante (the Italian DPA)? | H-14 | Confirm |
| Q-L-02 | Does the checkout allow purchase as a guest? | L-01, G-13 | Confirm and attach the assessment if the account is imposed |
| Q-L-04 | Are returns, tracking and support manageable without an account? | L-02 | Confirm |
| Q-L-05 | Are the card fields hosted by the PSP (iframe/redirect) and does the PAN never transit your systems? | L-03 | Confirm |
| Q-L-06 | Is saving the card a separate opt-in and not pre-selected? | L-04 | Confirm |
| Q-L-08 | Do you send cart recovery emails and on what basis? | L-06 | Confirm and indicate the basis |
| Q-L-10 | Do you publish reviews and which author data do you display? | L-08 | Confirm and indicate the basis and purchase verification |
| Q-L-11 | Do the conversion tags respect the banner rejection? | L-09 | Confirm |
| Q-L-14 | Do you offer wishlists or personalized recommendations and on what basis? | L-12 | Confirm and indicate the basis |
| Q-M-08 | Does the policy describe processing via AI, training and the limits of the model? | M-09 | Confirm |
| Q-N-05 | Does the bot declare itself automated at the start of the call? | N-03 | Confirm |
| Q-N-08 | Does the bot recognize the opt-out by voice and via DTMF and propagate it? | N-07, N-08 | Confirm |
| Q-O-07 | Is the advertising labeled and do you use an algorithmic recommender? | O-10 | Confirm and attach the disclosure in the T&C |

## Level 2 · Detail questions per area

Detail questions only, for the areas activated by level 1. Gate and pre-filled questions are above.

### Area A · Legal documents: presence and reachability

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-A-01 | Who drafted the notices, when were they updated and with what revision process? | A-05 | Last update date extracted from the policy vs declared date; the process is proven by an internal SOP |
| Q-A-02 | Do you keep the version history with the effective dates? | A-08 | Change history linked on the site; non-public history via repository or CMS with versioning |
| Q-A-06 | Do you notify users of substantial changes to the policies and through which channel? | B-14 | Notification mechanism (banner/email); the CRM channel requires evidence of the internal process |

### Area B · Content of the privacy notice (Art. 13/14)

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-B-01 | Do you have a record of processing activities (Art. 30) and can we receive an extract? | B-13 | Comparison of the legal bases in the record with those declared in the policy |
| Q-B-02 | For each purpose, what is the legal basis and where is it documented? | B-13 | Purpose/basis table of the policy (B-03) vs justification in the Art. 30 record |
| Q-B-03 | Who drafted the notice and with what legal support? Is it aligned with the record? | Documentary | Documentary verification at intake |
| Q-B-07 | For which purposes do you use legitimate interest and have you carried out an LIA? | B-04 | Occurrences of legitimate interest in the policy (each qualified) and request of the LIA document |
| Q-B-12 | Do you have the list of recipients and processors? Does it match the third parties loaded by the site? | B-12, B-05 | Automatic diff between the technical inventory of third parties (Area E) and the declared recipients |
| Q-B-15 | Which form fields are mandatory and what happens if the user does not provide them? | B-09 | Correlation between the policy declaration and the mandatory fields of the detected forms (Area G) |
| Q-B-16 | Do you notify users of changes of purpose or basis, through which channel, and do you keep the version history? | B-14 | Presence of a notification mechanism and of the version history (linked to A-08) |

### Area C · Cookies and pre-consent trackers

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-C-04 | Where do you keep the consent proof and can you reconstruct it per individual user? | C-10 | TC String/CMP cookie persisted client-side; server storage and retention to be documented |
| Q-C-05 | Do you use a measurement you consider exempt from consent and with what configuration? | C-11, C-14 | Does the tracker fire pre-consent? Does it apply IP masking? The exemption conditions are declared |
| Q-C-10 | Who has access to the tag manager and is there an approval process for new tags? | Documentary | List of GTM users and approval procedure, not observable from the scan |

### Area D · Cookie banner and CMP: design and behavior

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-D-02 | Is the banner customized relative to the CMP template, by whom and with what legal review? | Documentary | Documentary verification at intake |
| Q-D-04 | Have you done A/B testing or optimized for the acceptance rate? | D-02, D-10 | The test is not verifiable, but a banner optimized to push acceptance shows up as asymmetry or dark pattern |

### Area E · Third parties, extra-EU transfers and supply chain

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-E-01 | Do you have the list of suppliers with a signed Art. 28 DPA for each and who maintains it? | E-01, E-11 | Cross-check of the declared list with the technical inventory; every third party without a DPA is a finding |
| Q-E-02 | Is the web agency that accesses the backoffice or receives the data appointed as a processor? | E-11 | Art. 28 contract/appointment, cross-checked with hosting and first-party domains (E-08) |
| Q-E-03 | For each supplier do you have the list of sub-processors and are you informed of and authorized them? | E-12 | List of sub-processors and authorization mechanism; mention in the notice |
| Q-E-04 | Do you have a supplier assessment procedure and an audit plan for high-risk vendors? | E-13 | Pre-onboarding vendor assessment procedure and audit plan with evidence of the last cycle |
| Q-E-05 | For suppliers outside the EEA, which transfer mechanism and do you have a TIA for SCCs? | E-03, E-14 | Observed transfers (E-02) and US suppliers (DPF Active on dataprivacyframework.gov) vs documented mechanism |

### Area F · Technical security (Art. 32)

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-F-01 | Who manages the infrastructure and who has privileged access to servers and databases? | Documentary (F-14) | Technical org chart, list of privileged accounts and permission model; if an agency, cross-check with Art. 28 appointment |
| Q-F-02 | Is there a patching process with an SLA for critical patches and who is responsible? | F-04, F-09 | Documentary process with SLA; if the detected versions are known to be vulnerable, patching is effectively ineffective |
| Q-F-03 | Is the data encrypted at rest, with which algorithm and key management? Does it apply to backups too? | Documentary (F-12) | Evidence of encryption of database, file store and backups with key management and rotation |
| Q-F-04 | Where are the backups, how often do you test restores and how do you propagate deletions? | Documentary | Backup policy, evidence of the last restore test, propagation of deletions |
| Q-F-05 | How are passwords stored (bcrypt, scrypt, Argon2) and is MFA active on privileged accounts? | Documentary (F-13) | Hashing algorithm and MFA; a recovery that sends the old password in cleartext reveals non-hashed storage |
| Q-F-06 | Is there a least-privilege roles/permissions model and are the logs kept and for how long? | Documentary (F-14) | Need-to-know model, presence and retention of access logs to data and administrative functions |
| Q-F-08 | Where do you apply pseudonymization or anonymization and how do you separate the re-identification information? | Documentary (F-16) | Documentary verification of where data is pseudonymized and how the additional information is kept |
| Q-F-09 | Have you had data breaches or incidents? Notified to the Garante (the Italian DPA) (Art. 33) and to the data subjects (Art. 34)? | Documentary | Breach register (Art. 33(5)) and documentation of the notifications made |
| Q-F-10 | Do you carry out periodic security audits or penetration tests, at what cadence and by whom? | Documentary | Reports of the last audits and pen tests with date, scope and supplier |
| Q-F-11 | Does the staff that processes data receive periodic data protection training? | Documentary | Training plan and evidence of delivery (registers, dates, contents) |

### Area G · Forms, data collection and consents

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-G-03 | Do the lists contain purchased or enriched contacts? How have you complied with Art. 14 and how do people object? | G-14 | Documentary: list origin, Art. 14 notice sent before first contact, objection mechanism |
| Q-G-04 | Do you do B2B prospecting? On what basis and is the solicitation relevant to the recipient's role? | G-14 | Documentary: declared basis, legitimate interest balancing test, relevance to the role |
| Q-G-06 | Where do you record the consent proof and would you be able to reconstruct it for a single subscriber? | G-12 | Documentary: backend register/log with timestamp, method, purpose, version; for cookies the CMP record |

### Area H · Data subject rights and channels of exercise

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-H-01 | Who handles the data subject requests? Is there a written procedure with SLA and register? | H-04 | Live Art. 15 test for the real SLA; written DSAR procedure and register as documentary proof |
| Q-H-02 | How many requests in the last year, in how much time and did you use the two-month extension? | H-04, H-13 | Timed access test cross-checked with the DSAR register requested from the client |
| Q-H-03 | Can you extract all of a person's data from all systems in a commonly used format? | H-06 | Export function in the account area and end-to-end test on all declared systems (extends the perimeter) |
| Q-H-05 | How do you verify the identity of the requester and what additional information do you ask for? | Documentary | Identity verification procedure, proportionate and not excessive |
| Q-H-10 | When you erase or rectify, do you communicate the action to the third-party recipients (Art. 19)? | H-11 | Documentary procedure for communication to recipients, including propagation to backups and sub-processors |
| Q-H-11 | Do you have a mechanism to restrict (freeze) the processing without erasing? | H-09 | Freezing procedure that keeps the data while blocking its use |

### Area I · Governance, accountability and data lifecycle

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-I-06 | Is the Art. 30 record built on data mapping and can we receive an extract? | E-01 | Comparison between the record and the inventory inferred from the scan (Area G forms, Area E third parties, Area C cookies) |
| Q-I-07 | Who is the privacy contact, is the DPO independent, without conflicts and reporting to top management? | B-02, H-02 | DPO contact extracted and verified; independence and reporting lines are documentary |
| Q-I-09 | Have you carried out a DPIA for the high-risk processing, with what methodology? | G-10 | DPIA correlated with the high-risk technical signals; if the signals are present and the DPIA is missing, it is a finding |
| Q-I-10 | For processing based on legitimate interest have you carried out and documented an LIA before starting? | Documentary | LIAs correlated with the bases declared in Area B to identify processing without a balancing test |
| Q-I-11 | Do you have an Art. 28 DPA with every supplier and do you periodically verify its compliance? | E-01 | Third-party inventory as a list of presumed processors; the gap with the DPAs present is the finding |
| Q-I-12 | Do you have a breach management procedure and the Art. 33(5) register? | Documentary | Data breach procedure and breach register, not observable via scan |
| Q-I-13 | Is there a retention plan per category and is deletion at expiry automatic? | B-07, C-08 | Terms declared in the policy vs effective durations (cookies in C-08) and evidence of the retention jobs |
| Q-I-14 | Do you apply privacy by design and by default? Who validates the new forms and processing? | G-02, G-05 | Marketing consents opt-out by default (G-02) and minimized form fields (G-05); documentary validation |
| Q-I-15 | Does the staff with access to data receive periodic training with a learning check? | Documentary | Training plan, materials and evidence of participation and check |
| Q-I-16 | At what cadence do you review policy, record and retention plan and do you have an audit program? | A-05, A-08 | Last update date of the policy vs detected technologies; cadence and audit are documentary |

### Area J · Data breaches: preparedness and notification

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-J-01 | How would you become aware of a breach? Do you have monitoring and alerting, and who receives the alerts? | J-01 | Probe on /.well-known/security.txt and channel in the policy only verify external reception; detection is documentary |
| Q-J-02 | Is there a written incident response plan and when was it last tested? | Documentary | Plan document (roles, escalation, containment) and date of last revision or test |
| Q-J-03 | Who decides what to notify to the Garante (the Italian DPA) within 72 hours and do you have a template ready? | Documentary | Written notification procedure and pre-filled template for the Garante's online channel |
| Q-J-05 | Do you have a criterion for high risk (Art. 34) and a communication template for the data subjects? | Documentary | Risk threshold criterion and template with the protective actions for the users |
| Q-J-06 | Is the data at rest encrypted (premise of the Art. 34(3)(a) exemption)? | F-12 | Reuse of check F-12; documentary evidence of encryption at rest and key management |
| Q-J-07 | Do you keep a register of all breaches, including the non-notified ones with justification (Art. 33(5))? | Documentary | Register with date, nature, data and data subjects, assessment, reasoned decision; distinct from the Art. 30 record |
| Q-J-08 | Which logs do you have for forensic investigation, how long do you keep them and with what root cause analysis? | Documentary | Evidence of the logs and retention (relies on F-14) and root cause procedure |
| Q-J-09 | Do you review breach trends and bring them to top management for corrective actions? | Documentary | Periodic reporting, internal recipients of the outcomes and evidence of the corrective actions |
| Q-J-10 | Have you already suffered breaches and how did you handle them (Art. 33, Art. 34, measures)? | Documentary | Incident history with notifications, communications and measures, verifiable in the register (Q-J-07) |
| Q-J-11 | Do you have cyber insurance coverage or an activatable incident response provider? | Documentary | Cyber policy and contract or retainer with the incident response and forensics provider |

### Area K · CRM, newsletter and direct marketing

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-K-02 | How was the list built: subscriptions, soft spam, purchased lists, collection from web/social? | K-04, K-07 | Supplier contracts for the purchased lists and consent proof; the client's soft spam flag derives from a real purchase |
| Q-K-03 | Does the consent collected on the site flow into the CRM with the complete proof? | K-01 | Export of a sample from the CRM: timestamp, source, notice version fields reconciled with the form logs |
| Q-K-04 | Do you distinguish B2C (consent) from B2B (legitimate interest) and do you have the LIA for the B2B? | K-03 | LIA document and sampling of the subject of the B2B campaigns against the recipients' role |
| Q-K-05 | When a contact unsubscribes, does the opt-out propagate to all systems and survive re-imports? | K-09, K-10 | Test unsubscription propagated to the other systems; re-import of a list with a suppressed contact |
| Q-K-06 | Which retention for leads, prospects and former customers, and who deletes the inactive ones? | K-05 | CRM export with last-contact date: count of inactives beyond threshold vs configured policy |
| Q-K-08 | Who accesses the CRM and with which permissions (RBAC) and access logs? | K-11 | Review of the CRM roles/permissions matrix and verification of the audit log |

### Area L · E-commerce

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-L-03 | Do you offer subscriptions or access to closed communities and with what requirements (invitation, referral, status)? | Documentary | Documentation of the access requirements supporting the necessity of the imposed account (L-01) |
| Q-L-12 | How do you distinguish the retention of order data from that of tax documents? | Documentary | Retention matrix distinguishing contractual basis (order) from legal obligation (tax document) |
| Q-L-13 | Do customer accounts have a decommissioning policy for inactivity and after how long? | L-11, H-05 | Inactive account policy and presence of self-service deletion in the account settings |

### Area M · AI features on the site (GDPR + AI Act)

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-M-04 | For what purpose is the AI system used and with what persuasive mechanisms (Art. 5 AI Act exclusion)? | Documentary | Design and purpose documentation analyzed against the prohibited practices of Art. 5 AI Act |
| Q-M-05 | Have you classified the risk of the AI system and produced a classification memo? | Documentary | Classification memo verified for consistency with the real use detected in the scan |
| Q-M-06 | On what basis do you process prompts, outputs and any use for training, and are the phases distinct? | Documentary | Analysis of the policy to map the AI processing phases and the basis for each, supplemented at intake |
| Q-M-09 | How do you handle rectification and erasure referring to the model's outputs? | M-10 | Agreed rectification test on an output with personal data, not reduced to erasure alone |
| Q-M-10 | How do you measure and correct the accuracy of the outputs beyond the disclaimers? | Documentary | Documentation of the process for measuring, correcting and updating the sources |
| Q-M-12 | Do the contracts with the AI suppliers define provider/deployer roles, Art. 50 and Art. 28 DPA? | Documentary | Contracts, role mapping and signed DPAs cross-checked with the third-party inventory (E-01), extends the perimeter |

### Area N · Voice channels and automated calls

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-N-03 | How was the consent of the numbers called with an automated system collected and where is the proof? | N-01 | Sample extraction from the campaign list and verification of the existence and date of the proof for each number |
| Q-N-04 | Do you consult the Registro Pubblico delle Opposizioni (Italian public opt-out register) before every campaign and how often? | N-02 | Comparison of the campaign list against the most recent RPO output and verification of the consultation date |
| Q-N-06 | Do you record the calls, with what prior notice, for how long and who listens back? | N-04, N-05 | Transcription of the opening for the recording disclaimer and verification of the deletion job at 6 months |
| Q-N-11 | Have you carried out a DPIA for the voice bot system? | N-12 | DPIA of the voice system verified on recording, transcription, biometrics and automated decisions |
| Q-N-12 | Where are the audio, transcriptions and CRM of the voice channel hosted, and do you have the DPA with the supplier? | N-13 | Localization of the storage systems and presence of the DPA, with a cross-check on the supplier inventory (Area E) |

### Area O · Beyond the GDPR: DSA, DMA, Digital Fairness Act

| ID | Question | Downstream verification | How it is verified |
|----|---------|-------------------|-------------------|
| Q-O-03 | What is the size of the company in headcount and turnover? | O-07 | Company records or financial statements; micro or small enterprise (fewer than 50 employees, up to 10M) is exempt from Arts. 20-28 DSA |
| Q-O-05 | Who manages the moderation of third-party content and with what tools, and is there a reporting channel? | O-04, O-05 | Notice-and-action mechanism detected by the crawler; moderation policies extracted from the T&C, internal process to be asked |
| Q-O-06 | When you remove a content item, does the user receive a statement of reasons and information on remedies (Art. 17)? | O-06 | Statement of reasons template and documentary review of the process (internal complaint, ADR, appeal) |
| Q-O-10 | Are you already extracting the transactional data via the gatekeepers' APIs (Art. 6(10) DMA)? | Documentary | Documentary verification at intake, extends the perimeter to external data channels |
| Q-O-13 | Do you engage influencers or affiliates and is the sponsored content labeled as commercial? | Documentary | List of influencers and affiliates and agreements; labeling verifiable only on the known sponsored pages |

## The second pass: verification of the answers

Every client answer returns in the report with a blunt verdict. CONFIRMED when the scan confirms it with evidence (the HAR shows the declared pixel, the TC String persists, the policy cites the recipient). DISPROVEN when the evidence contradicts the statement. NOT VERIFIABLE when the answer is documentary and no technical signal touches it (encrypted backups, training, breach register): it stays valid but rests only on the statement, and must be marked as such.

The main findings arise from the discrepancies between declared and detected. The textbook case is check B-12: the recipients listed in the notice against the third parties the site actually loads. Every third party that appears in the technical inventory but not in the policy, and every declared recipient that no script confirms, is a gap to explain. The same logic applies to the legal bases (policy vs Art. 30 record), to retention (declared terms vs effective duration of the cookies in C-08) and to the DPAs (technical third parties vs Art. 28 appointments present). The report reads like this: first the declared-vs-detected gaps, ordered by severity, then the non-verifiable answers to safeguard with documentation, finally the confirmations.
