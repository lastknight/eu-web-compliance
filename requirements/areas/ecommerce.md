## Area L: E-commerce

**Area applies if**: the site sells goods or services online (checkout with payment, catalogue with cart, paid subscriptions). If the site does not conclude online sales, the whole area is out of scope and its checks are not executed.

### L-01 Account not mandatory to purchase
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Do not make account creation a mandatory condition for purchasing unless a genuinely necessary, documented limited purpose requires it (e.g. subscription needing recurring authenticated interactions, or a closed community with verified access requirements), and when an account is imposed retain the written assessment proving its necessity.
- **Acceptance**: Documentary intake check cross-referenced with the purchase-flow review; if checkout forces account creation (see G-13), the written assessment identifying the limited purpose and legal basis must exist; flag if the account is mandatory with no retained justification.
- **Legal**: GDPR Art. 6(1)(b) (strict interpretation, CJEU C-252/21 Meta v Bundeskartellamt), Art. 5(2) accountability, Art. 5(1)(c) minimisation; EDPB Recommendations 2/2025; CNIL guidance.

### L-02 Post-sale services without a permanent account
- **Level**: SHOULD
- **Applies-if**: always (within Area L)
- **Requirement**: Provide accessory and post-sale services (order tracking, pre-shipment changes, returns, exchanges, complaints, warranties, exercise of rights) without imposing a permanent account, using time-limited single-use links, secure forms, customer service contact, or email links.
- **Acceptance**: Review of returns, tracking and support flows plus intake check; post-sale services must be reachable without login via form, email or specific link; flag if a return, tracking or complaint requires account creation or login.
- **Legal**: GDPR Art. 6(1)(b) and 6(1)(f) (necessity/balancing not met), Art. 11 (no obligation to maintain identification beyond purpose), Art. 12(6) (identification by other means); EDPB Recommendations 2/2025.

### L-03 No storage of full card data on merchant systems
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Never store full card data (PAN, CVV) in clear text or persist it on merchant systems; collect card details through PSP-hosted fields (iframe, hosted fields, redirect) so the PAN is replaced by a token and never transits the controller's servers.
- **Acceptance**: Inspect the payment page to confirm card fields are served from a PSP iframe/domain and are not native inputs posting to the merchant server; analyse the HAR on submission to verify the PAN does not transit to controller hosts; detect the PSP from domains and scripts.
- **Legal**: GDPR Art. 32 (technical measures proportionate to risk), Art. 5(1)(f) integrity and confidentiality, Art. 25 by design.

### L-04 Card-on-file only with separate active consent
- **Level**: MUST
- **Applies-if**: card saving for future purchases is offered
- **Requirement**: Save payment data for future reuse only with active, specific consent separate from the transaction, collected via a non-pre-ticked checkbox and revocable, and never as a default setting.
- **Acceptance**: Walk the checkout up to the payment step without completing it; verify the card-saving option is a separate, non-pre-selected checkbox not required to pay; flag if the card is saved by default or consent is bundled with order acceptance.
- **Legal**: GDPR Art. 6(1)(a) and Art. 7 (free, specific, distinguishable, revocable consent); EDPB Recommendations 02/2021; Conseil d'Etat 10 December 2020.

### L-05 Post-purchase marketing within the soft-spam boundary
- **Level**: MUST
- **Applies-if**: post-purchase email marketing is sent
- **Requirement**: Send promotional emails to customers under soft spam only within Art. 130(4) limits (same controller, products or services similar to those purchased, opt-out offered at email collection and in every subsequent message), and require consent for any communication outside this boundary.
- **Acceptance**: Documentary intake check and flow review; assess product scope of campaigns versus purchased products, presence of opt-out at email collection, and exclusion from soft-spam flows of anyone who only created an account without purchasing; cross-reference the unsubscribe verified in G-11.
- **Legal**: Codice Privacy Art. 130(4) (soft spam), GDPR Art. 6(1)(a) for anything exceeding the exception, Art. 21(2)-(3) (objection to marketing).

### L-06 Abandoned-cart email requires consent
- **Level**: MUST
- **Applies-if**: abandoned-cart recovery emails are sent
- **Requirement**: Base abandoned-cart recovery emails on consent, not on soft spam, since no completed sale exists to trigger the soft-spam exception.
- **Acceptance**: Test with an auditor-controlled disposable email: add a product to the cart and enter the email at checkout without completing the order, then observe whether recovery emails arrive and verify the declared basis; flag if cart emails are sent without consent.
- **Legal**: GDPR Art. 6(1)(a) (consent), Codice Privacy Art. 130 (unsolicited communications, outside the Art. 130(4) exception), GDPR Art. 5(1)(b) purpose limitation.

### L-07 Loyalty and profiling on separate consent, not via account
- **Level**: MUST
- **Applies-if**: a loyalty programme or profiling is present
- **Requirement**: Base activity tracking for loyalty, personalised content or a loyalty programme on consent and an active choice separate from the purchase process, and do not impose it through the account.
- **Acceptance**: Review the loyalty enrolment flow and consents; verify loyalty tracking is triggered by a distinct consent and not by a flag bundled with registration or the order; cross-reference detected trackers (see Area C) to confirm profiling does not start without consent.
- **Legal**: GDPR Art. 6(1)(a), ePrivacy Directive Art. 5(3) for terminal tracking, GDPR Art. 7 (separate, non-conditioning consent); EDPB Recommendations 2/2025.

### L-08 Reviews with defined basis and minimised exposure
- **Level**: SHOULD
- **Applies-if**: buyer product reviews are published
- **Requirement**: Publish buyer reviews on a defined legal basis and minimise exposed data, showing no full surname, email or unnecessary identifier publicly, with a notice on the use of the contribution and, where reviews are marked verified, provable linkage to a real purchase.
- **Acceptance**: Crawl product pages with reviews and extract the personal data shown next to each review; flag emails, full surnames or other unnecessary public identifiers; verify the legal basis and purchase-verification mechanism in intake.
- **Legal**: GDPR Art. 5(1)(c) minimisation, Art. 6(1)(a) or 6(1)(f) with balancing, Art. 13 (information).

### L-09 Conversion tags fire only after consent
- **Level**: MUST
- **Applies-if**: conversion tags or transaction tracking to ad platforms are used
- **Requirement**: Fire purchase events and transaction data (order value, products, email or phone, including hashed) to advertising platforms (Meta CAPI, Google Ads enhanced conversions, server-side tracking) only after consent, and declare them in the privacy notice.
- **Acceptance**: Complete a test order in two runs, consent granted and consent refused; analyse the HAR on order confirmation for purchase/conversion events and transactional data sent to ad platforms; flag if the conversion tag fires despite refusal or pre-consent.
- **Legal**: ePrivacy Directive Art. 5(3), Codice Privacy Art. 122, GDPR Art. 6 for the transfer to the third party, Recital 26 (hashed data remain personal).

### L-10 Separate bases and retention for order data and tax documents
- **Level**: MUST
- **Applies-if**: always (within Area L)
- **Requirement**: Govern order data and tax documents as distinct bases and retention periods: delete or anonymise contractual-basis order data at the end of necessity (execution, warranty, limitation), while keeping invoices and accounting documents under legal obligation in a separate, access-restricted archive for tax purposes only.
- **Acceptance**: Documentary intake check for a retention matrix that, for the same customer, distinguishes order data (contractual basis, deletion at end of necessity) from tax documents (legal obligation, separate access-restricted archive); flag if the only criterion applied is ten-year retention of the whole profile.
- **Legal**: GDPR Art. 6(1)(b) and 6(1)(c) (distinct bases), Art. 5(1)(b) purpose limitation, Art. 5(1)(e) storage limitation, Recital 41; Italian Civil Code Art. 2220 and D.P.R. 600/1973 Art. 22 (ten years).

### L-11 Dismissal of inactive or orphan accounts
- **Level**: SHOULD
- **Applies-if**: a customer account is available
- **Requirement**: Do not keep inactive or orphan accounts indefinitely in an active database: define an inactivity period after which accounts are deleted or anonymised, and treat in-account order history as a service on distinct consent separate from the purchase core.
- **Acceptance**: Intake check of the inactive-account policy (time threshold, deletion or anonymisation action) and review of account settings for self-service deletion (see H-05); flag if no dismissal criterion for dormant accounts exists.
- **Legal**: GDPR Art. 5(1)(e) storage limitation, Art. 17 erasure, Art. 6(1)(a) for order history as a consent-based service.

### L-12 Wishlist and recommendations on a defined basis
- **Level**: SHOULD
- **Applies-if**: wishlist or personalised recommendations are offered
- **Requirement**: Base wishlists, saved lists and browsing history used for recommendations or profiling on a defined legal basis (consent, or legitimate interest with a documented balancing test), with a privacy notice and a possibility to object.
- **Acceptance**: Review wishlist and recommendation features and cross-reference detected trackers (see Area C); verify profiling use of history rests on consent or a documented legitimate-interest balancing in intake, and that the notice declares the purpose and the right to object.
- **Legal**: GDPR Art. 6(1)(a) or 6(1)(f) with balancing, ePrivacy Directive Art. 5(3) for tracked history, GDPR Art. 13 (information); EDPB Recommendations 2/2025.
