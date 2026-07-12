## Area M: AI Features on the Site (GDPR + AI Act)

**Area applies if**: the site integrates at least one of: a chatbot or conversational assistant, LLM-based features (generative search, summarization, drafting), generation or manipulation of content (text, images, audio, video), or profiling or AI-assisted automated decisions. If none are present, mark the area as out of scope in the report.

### M-01 Chatbot discloses it is an AI system
- **Level**: SHOULD
- **Applies-if**: the site includes a chatbot or conversational assistant
- **Requirement**: Make the chatbot clearly and distinguishably declare that it is an AI system no later than the user's first interaction, unless its artificial nature is obvious from context.
- **Acceptance**: Open the chat widget headless and inspect the first message/label and the launcher DOM for an explicit AI-nature declaration presented before user input.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(1) and Art. 50(5). Obligation applicable from 2 August 2026.

### M-02 Synthetic outputs machine-readable and detectable
- **Level**: SHOULD
- **Applies-if**: the site generates synthetic content (text, images, audio, video)
- **Requirement**: Mark synthetic outputs generated on the site in a machine-readable format and make them concretely detectable as artificial using robust, interoperable solutions (watermarking, metadata, provenance).
- **Acceptance**: Download a sample output for each modality and verify presence of metadata/watermark (C2PA, EXIF/XMP fields, textual marking) via a parser.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(2). Applicable from 2 August 2026; for generative systems placed on the market earlier, marking expected by 2 December 2026.

### M-03 Deep fake disclosure
- **Level**: SHOULD
- **Applies-if**: the site generates or manipulates deep fake images, audio, or video
- **Requirement**: Attach a clear and distinguishable disclosure to deep fake media at first exposure (persistent visual label, opening disclaimer, audible notice); the obligation is attenuated for manifestly artistic or satirical works.
- **Acceptance**: Manually review the generated content and verify the presence and persistence of the label or disclaimer.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(4) first subparagraph and Art. 50(5). Applicable from 2 August 2026.

### M-04 AI text on matters of public interest labeled
- **Level**: SHOULD
- **Applies-if**: the site publishes AI-generated or manipulated text to inform the public on matters of public interest
- **Requirement**: Label AI-generated or manipulated text published to inform the public on matters of public interest clearly as artificial and not buried in terms and conditions; exempt only where subject to substantial human review with editorial responsibility held by a natural or legal person.
- **Acceptance**: Intake on the editorial workflow plus sample review of generated articles to verify labeling or a human-review process.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50(4) second subparagraph. Applicable from 2 August 2026.

### M-05 No prohibited AI practices
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure the AI system does not fall into any practice prohibited by AI Act Art. 5: subliminal manipulation or deceptive techniques that distort behavior, exploitation of vulnerabilities, social scoring, emotion recognition in the workplace or education, or biometric categorization of sensitive data.
- **Acceptance**: Intake on the system's purposes and persuasive mechanisms plus documentary analysis of the design against the Art. 5 list.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 5. Prohibition effective since 2 February 2025.

### M-06 AI Act risk classification documented
- **Level**: SHOULD
- **Applies-if**: always (within this area)
- **Requirement**: Document the system's AI Act risk classification in a memo that justifies the category (typically limited risk for a conversational chatbot) and verifies it does not cross into high risk (Annex III) or prohibited practices.
- **Acceptance**: Intake: request the classification memo and verify its consistency with the actual system use detected during the scan.
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 6 and Art. 50; Annex III. Preparatory to obligations applicable from 2 August 2026.

### M-07 Legal basis per LLM processing phase
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Document a distinct legal basis for each LLM processing phase: user input and prompts, output generation, and any use of prompts to train or improve the model.
- **Acceptance**: Intake plus privacy policy analysis: map the AI processing phases and the legal basis declared for each.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 6(1) and, where special categories are involved, Art. 9(2). Extends B-03 to the AI lifecycle.

### M-08 Guard against special-category data in prompts
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Adopt measures to prevent prompts from collecting or processing special categories (Art. 9) without an adequate basis and safeguards, and warn the user not to enter special or sensitive data in the prompt.
- **Acceptance**: Test interaction with the chatbot using synthetic sensitive input; verify presence of warnings, filters, or refusals; inspect the widget's privacy notice.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 9(1); fairness Art. 5(1)(a). Complementary to G-08 (forms) on the conversational channel.

### M-09 Privacy notice covers AI processing
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure the privacy notice explicitly covers AI processing: whether and how user inputs are used for training, which data are processed for which purpose, and the model's capabilities and limits, including the probabilistic nature of the output.
- **Acceptance**: LLM extraction from the privacy policy: verify presence of a section on AI processing, use for training, and model limits.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 13; Art. 5(1)(a). AI-specific extension of Area B.

### M-10 Data subject rights over model outputs
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Make data subject rights exercisable over model outputs, including rectification and erasure of inaccurate or unwanted personal data in outputs; do not reduce rectification to erasure merely because it is technically more convenient.
- **Acceptance**: Intake on the output-request handling process plus an agreed test of a rectification request on an output containing personal data.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 16, Art. 17, Art. 12(2). Complements Area H channels (H-01, H-05) on the AI plane.

### M-11 Output accuracy actively maintained
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Maintain output accuracy with substantive measures (measurement, correction, source updates); a disclaimer about possible inaccuracy alone does not satisfy the accuracy principle.
- **Acceptance**: Intake: request documentation of the output-accuracy measurement and correction process, in addition to the disclaimer text.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 5(1)(d) and Art. 5(1)(a).

### M-12 DPIA for AI processing
- **Level**: MUST
- **Applies-if**: the AI involves profiling or large-scale processing
- **Requirement**: Carry out a DPIA on the AI processing, with documented DPO involvement and mitigation of identified risks, and schedule its periodic review.
- **Acceptance**: Intake: request a copy and date of the DPIA, the DPO's opinion, and evidence of risk mitigation.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 35 (in particular Art. 35(1) and 35(3)).

### M-13 Art. 22 safeguards for automated decisions
- **Level**: MUST
- **Applies-if**: the system makes automated decisions with legal or similarly significant effects
- **Requirement**: Put in place Art. 22 safeguards (permitted basis, human intervention, right to contest and to express one's own view), in addition to declaring the logic and consequences in the policy.
- **Acceptance**: Intake on the automated decision-making processes plus verification that an effective human-intervention and contestation channel exists.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 22. Complementary to B-10.

### M-14 No risk transfer to the user in terms
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Do not use terms and conditions to transfer compliance responsibility for prompt data to the user (no clause making the user responsible for their own inputs); the controller must assume personal inputs will arrive.
- **Acceptance**: LLM extraction from the T&C and chatbot disclaimers: search for clauses that offload responsibility for entered data onto the user.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 5(1)(a) (fairness).

### M-15 Opt-out for training on user inputs
- **Level**: SHOULD
- **Applies-if**: user inputs are used for training
- **Requirement**: Where prompts and feedback are used to train or improve the model on the basis of legitimate interest, offer a clear opt-out and inform the user of that use in a demonstrable way.
- **Acceptance**: Interact with the service: verify presence of a training opt-out control and its related notice before or during use.
- **Legal**: GDPR (Reg. EU 2016/679) Art. 6(1)(f).

### M-16 Provider/deployer roles and AI supplier contracts
- **Level**: MUST
- **Applies-if**: always (within this area)
- **Requirement**: Ensure contracts with AI system suppliers map the provider/deployer roles for each system in use and include the Art. 50 transparency obligations (marked and detectable outputs) and, where the supplier processes personal data on the controller's behalf, a DPA under Art. 28.
- **Acceptance**: Intake: request the AI supplier contracts, the role mapping, and the signed DPAs; cross-check against the third-party inventory (E-01).
- **Legal**: AI Act (Reg. EU 2024/1689) Art. 50 (provider/deployer allocation); GDPR (Reg. EU 2016/679) Art. 28. The DPA part is a MUST; the Art. 50 part becomes enforceable from 2 August 2026.
