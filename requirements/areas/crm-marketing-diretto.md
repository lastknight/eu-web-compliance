## Area K: CRM, Newsletter and Direct Marketing

**Area applies if**: the site or app does email marketing or newsletters, does lead generation, or uses a CRM to manage contacts, customers or prospects. If none of these apply, the area is out of scope.

### K-01 Consent proof synchronized site-to-CRM
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Sync marketing consent from the site to the CRM so that every contact carries complete proof: capture date, time, collection method, and the text or version of the privacy notice in force at the moment of collection.
- **Acceptance**: Export a sample of CRM contacts and verify the proof fields are present (timestamp, source, notice version); reconcile them against the source form logs.
- **Legal**: GDPR Art. 7(1), Art. 5(2). Extends C-10 (CMP-side proof).

### K-02 B2C opt-in before electronic marketing
- **Level**: MUST
- **Applies-if**: the site does B2C email marketing (sending email, SMS or promotional messages to natural persons)
- **Requirement**: Send promotional email, SMS or messages to natural persons only after prior opt-in consent that is freely given, specific and documented; block any send to a contact lacking a recorded opt-in.
- **Acceptance**: Intake on how the list was collected plus a test subscription; verify no send is dispatched without a registered opt-in.
- **Legal**: Codice Privacy (D.lgs. 196/2003) Art. 130(1) and (2); GDPR Art. 6(1)(a), Art. 7.

### K-03 B2B legitimate interest documented and role-relevant
- **Level**: MUST
- **Applies-if**: the site does B2B prospecting toward professionals relying on legitimate interest as the legal basis
- **Requirement**: When marketing to professionals on legitimate interest, keep a documented Legitimate Interest Assessment (LIA) and ensure the solicitation is relevant to the recipient's role; exclude generic addresses (info@, contact@) from the personal-data perimeter.
- **Acceptance**: Documentary review of the LIA plus sampling of campaign subject matter against recipient roles.
- **Legal**: GDPR Art. 6(1)(f), Art. 5(2). Note: the Italian Garante reads B2B marketing to named professional emails restrictively; consent is the safer basis.

### K-04 Soft spam exception conditions all met
- **Level**: MUST
- **Applies-if**: the site relies on the soft spam exception to send without consent
- **Requirement**: Use soft spam without consent only when all conditions hold: the recipient is already a customer, the email was collected in the context of a sale, the promotion concerns similar products or services of the same controller, and a simple free opt-out was offered at collection and in every message; do not treat mere account creation without a purchase as triggering the exception.
- **Acceptance**: Intake on the soft-spam list origin plus verification that the "customer" flag derives from a real purchase and that the offer concerns similar products.
- **Legal**: Codice Privacy Art. 130(4). See G-07 (form side).

### K-05 Defined retention for leads, prospects and lapsed customers
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Define retention for leads, prospects and lapsed customers so the active prospecting base is deleted or anonymized within a maximum term from the end of the relationship or the last meaningful contact.
- **Acceptance**: Export the CRM with last-contact date; count inactive records past the threshold and verify a configured retention policy exists.
- **Legal**: GDPR Art. 5(1)(e). Benchmark: CNIL 3 years from end of commercial relationship or last contact.

### K-06 Separation of active base from legal-obligation archive
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Keep data retained for legal obligations (invoices, accounting) in a separate archive with restricted access and never reuse it for marketing.
- **Acceptance**: Intake on the archive architecture plus verification that send lists do not draw from the accounting archive.
- **Legal**: GDPR Art. 6(1)(c), Art. 5(1)(e).

### K-07 No purchased or scraped lists without valid basis
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Do not use purchased lists or data harvested from public sources (web, social, directories) for prospecting without a valid legal basis and an Art. 14 notice; treat bought lists as a red flag.
- **Acceptance**: Intake on list provenance plus verification of supplier contracts and upstream consent proof; check that the Art. 14 notice was sent.
- **Legal**: GDPR Art. 14, Art. 6, Art. 5(1)(a) and (b). See B-11.

### K-08 List hygiene: bounces, suppression, double opt-in
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Maintain list hygiene by handling bounces (removing hard bounces), suppressing invalid addresses, and applying double opt-in for new subscriptions.
- **Acceptance**: Bounce and hard-bounce metrics from the ESP; double opt-in test with a disposable email (as in G-06).
- **Legal**: GDPR Art. 5(1)(d). Double opt-in see G-06.

### K-09 Opt-out propagated to all systems
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Process opt-out without undue delay and propagate it to ALL systems (CRM, ESP, advertising platforms and custom audiences), not only to the single list it came from.
- **Acceptance**: Test unsubscribe on one channel and verify the contact is suppressed in the other connected systems as well.
- **Legal**: GDPR Art. 21(2) and (3), Art. 7(3); Codice Privacy Art. 130. Extends H-03.

### K-10 Persistent suppression list surviving reimports
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Keep a persistent suppression list so contacts who opted out or were deleted stay suppressed and do not reappear after reimports, synchronizations or new uploads.
- **Acceptance**: Intake on the suppression mechanism plus a test: reimport a list containing a suppressed contact and verify it remains excluded.
- **Legal**: GDPR Art. 21, Art. 5(1)(a).

### K-11 Role-based access control with access logging
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Enforce role-based access control on CRM data so each user sees only the data needed for their function, with access logging.
- **Acceptance**: Review the CRM role and permission matrix plus verify an access audit log exists.
- **Legal**: GDPR Art. 32, Art. 5(1)(f), Art. 25 (by default).

### K-12 Data quality and deduplication
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Keep data accurate and up to date, merge duplicate records, and standardize fields.
- **Acceptance**: CRM export: count duplicates (email and phone), measure the rate of stale fields; run a periodic quality audit.
- **Legal**: GDPR Art. 5(1)(d).

### K-13 Partner data sharing requires named-partner consent
- **Level**: MUST
- **Applies-if**: always (within area activation)
- **Requirement**: Share data with partners only under specific consent naming the partner; do not rely on generic "to third parties" consent.
- **Acceptance**: Intake on recipient partners plus verification that the sharing consent names the partners and is recorded for each.
- **Legal**: GDPR Art. 6, Art. 7, Art. 13(1)(e). See B-05.

### K-14 Granular preference center
- **Level**: SHOULD
- **Applies-if**: always (within area activation)
- **Requirement**: Provide a customer-accessible granular preference center allowing choice by channel (email, SMS, phone), by purpose, and by partner sharing.
- **Acceptance**: Verify the preference center exists and works; test granular modification of choices.
- **Legal**: GDPR Art. 7(3), Art. 21.
