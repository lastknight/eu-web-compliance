# Source catalog / Catalogo fonti

Every check in the checklist cites its sources by ID (e.g. `[G1]`, `[S45]`). This file is the complete catalog: primary law (N), Italian DPA (G), EDPB/EDPS (E), case law (J), technical tools (T) and the 35 ingested source checklists (S) with provenance, ingestion date and known caveats.

Engagement rule: legal bases derive from primary law, authorities and case law only; vendor and community sources are cited for breadth and support, never alone as the ground of a finding. Catalog entries below are kept in Italian (working language of the project); source names and links are original.

---
Ogni check cita le proprie fonti per ID. Regola di ingaggio: le basi giuridiche derivano dalla normativa primaria (N), dalle autorità (G, E, S di tipo authority) e dalla giurisprudenza (J); le fonti vendor e community si citano come supporto e ampiezza, mai da sole a fondamento di un finding.

### Normativa (N)

| ID | Fonte |
|----|-------|
| N1 | Regolamento (UE) 2016/679 (GDPR) |
| N2 | D.lgs. 196/2003 (Codice Privacy) come modificato dal D.lgs. 101/2018, in particolare Artt. 122 e 130 |
| N3 | Direttiva 2002/58/CE (ePrivacy), Art. 5(3) |
| N4 | Decisione di adeguatezza EU-US Data Privacy Framework, luglio 2023 |
| N5 | Regolamento (UE) 2024/1689 (AI Act), in particolare Artt. 5 e 50 |
| N6 | Regolamento (UE) 2022/2065 (Digital Services Act) |
| N7 | Regolamento (UE) 2022/1925 (Digital Markets Act) |

### Garante Privacy (G)

| ID | Fonte |
|----|-------|
| G1 | Linee guida cookie e altri strumenti di tracciamento, 10 giugno 2021, doc-web 9677876 |
| G2 | Provvedimento su Google Analytics (trasferimenti USA), giugno 2022 |
| G3 | Linee guida in materia di attività promozionale e contrasto allo spam, 4 luglio 2013 |

### EDPB / EDPS / WP29 (E)

| ID | Fonte |
|----|-------|
| E1 | Guidelines on Transparency under Regulation 2016/679 (WP260 rev.01) |
| E2 | EDPB Guidelines 05/2020 on consent |
| E3 | EDPB Guidelines 03/2022 on deceptive design patterns (vedi anche [S47]) |
| E4 | EDPB Opinion 08/2024 su consent-or-pay |

### Giurisprudenza (J)

| ID | Fonte |
|----|-------|
| J1 | CGUE, C-673/17, Planet49 (2019): no caselle pre-selezionate |
| J2 | CGUE, C-311/18, Schrems II (2020): invalidazione Privacy Shield, requisiti trasferimenti |
| J3 | LG München I, 3 O 17493/20 (gennaio 2022): Google Fonts remoti = trasferimento illecito di IP |

### Tool e riferimenti tecnici (T)

| ID | Fonte |
|----|-------|
| T1 | Playwright, playwright.dev |
| T2 | EasyPrivacy (easylist.to), Disconnect (disconnect.me), DuckDuckGo Tracker Radar |
| T3 | testssl.sh |
| T4 | MDN HTTP Observatory |
| T5 | dataprivacyframework.gov, elenco organizzazioni aderenti |

### Source checklists (S)

Checklist e documenti operativi estratti integralmente e catalogati. Provenienza: "fornita da Matteo" = fonte seed passata a mano; "discovery workflow" = trovata dalla discovery automatica sul perimetro web; "deep dive discovery" = trovata dal deep dive su CRM, AI, voce, e-commerce, accountability, dark patterns; "discovery DSA/DMA/DFA" = giro dedicato alle norme oltre il GDPR.

| ID | Fonte | Publisher | Tipo | Provenienza | Ingestione | Item |
|----|-------|-----------|------|-------------|------------|------|
| S1 | [GDPR Compliance Checklist for Data Controllers](https://gdpr.eu/checklist/) | GDPR.eu | autorità | discovery workflow | 2026-07-12 | 19 |
| S2 | [GDPR Checklist for Data Controllers & Processors](https://gdprchecklist.io/) | gdprchecklist.io | community | discovery workflow | 2026-07-12 | 38 |
| S3 | [GDPR Website Compliance Checklist](https://www.truendo.com/en/blog/gdpr-website-checklist) | TRUENDO | vendor | discovery workflow | 2026-07-12 | 29 |
| S4 | [EDPB Website Auditing Tool (WAT)](https://www.edpb.europa.eu/our-work-tools/our-documents/support-pool-experts-projects/edpb-website-auditing-tool_en) | European Data Protection Board | autorità | discovery workflow | 2026-07-12 | 33 |
| S5 | [CNIL - Cookies et autres traceurs : comment mettre mon site web en conformité](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | CNIL | autorità | discovery workflow | 2026-07-12 | 37 |
| S6 | [EDPB Website Auditing Tool (WAT) - Documentazione utente](https://code.europa.eu/edpb/website-auditing-tool) | European Data Protection Board | autorità | discovery workflow | 2026-07-12 | 17 |
| S7 | [Website Evidence Collector (WEC) - EDPS](https://code.europa.eu/EDPS/website-evidence-collector) | European Data Protection Supervisor | tool | discovery workflow | 2026-07-12 | 16 |
| S8 | [Blacklight , The Markup's Real-Time Website Privacy Inspector](https://themarkup.org/blacklight) | The Markup | tool | discovery workflow | 2026-07-12 | 9 |
| S9 | [GDPR Compliance Checklist](https://www.iubenda.com/en/blog/gdpr-compliance-checklist/) | Iubenda | vendor | discovery workflow | 2026-07-12 | 16 |
| S10 | [GDPR Compliance Checklist for Websites](https://www.cookieyes.com/blog/gdpr-checklist-for-websites/) | CookieYes | vendor | discovery workflow | 2026-07-12 | 75 |
| S11 | [GDPR Compliance Checklist for Developers (2026)](https://gist.github.com/ryuno2525/a361a2c60a6c1f46357f71a64d563a0c) | ryuno2525 | community | discovery workflow | 2026-07-12 | 135 |
| S40 | [La prospection commerciale par courrier electronique](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique) | CNIL | autorità | deep dive discovery | 2026-07-12 | 25 |
| S41 | [RGPD en pratique: maitrisez votre relation client](https://www.cnil.fr/fr/rgpd-en-pratique-maitrisez-votre-relation-client) | CNIL | autorità | deep dive discovery | 2026-07-12 | 23 |
| S42 | [Article 50: Transparency Obligations for Providers and Deployers of Certain AI Sys](https://artificialintelligenceact.eu/transparency-rules-article-50/) | Future of Life Institute | NGO | deep dive discovery | 2026-07-12 | 29 |
| S43 | [Report of the work undertaken by the ChatGPT Taskforce](https://www.edpb.europa.eu/our-work-tools/our-documents/other/report-work-undertaken-chatgpt-taskforce_en) | European Data Protection Board | autorità | deep dive discovery | 2026-07-12 | 56 |
| S44 | [La prospection commerciale par automates d'appel](https://www.cnil.fr/fr/la-prospection-commerciale-par-automates-dappel) | CNIL | autorità | deep dive discovery | 2026-07-12 | 15 |
| S45 | [EDPB Guidelines 02/2021 on virtual voice assistants (Version 2.0)](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022021-virtual-voice-assistants_en) | European Data Protection Board | autorità | deep dive discovery | 2026-07-12 | 72 |
| S46 | [EDPB Recommendations 2/2025 sulla base giuridica per imporre la creazione di accou](https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/recommendations-22025-legal-basis-requiring_en) | European Data Protection Board | autorità | deep dive discovery | 2026-07-12 | 35 |
| S47 | [EDPB Guidelines 03/2022 on Deceptive design patterns in social media platform inte](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en) | European Data Protection Board | autorità | deep dive discovery | 2026-07-12 | 50 |
| S48 | [ICO Accountability Framework (Accountability toolkit, Data protection audit framew](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/accountability-framework-self-assessment/) | Information Commissioner's Office | autorità | deep dive discovery | 2026-07-12 | 76 |
| S49 | [Privacy Impact Assessment (PIA)](https://www.cnil.fr/en/privacy-impact-assessment-pia) | CNIL | autorità | deep dive discovery | 2026-07-12 | 7 |
| S50 | [Dark patterns in cookie banners: the CNIL issues a formal notice to website publis](https://www.cnil.fr/en/dark-patterns-cookie-banners-cnil-issues-formal-notice-website-publishers) | CNIL | autorità | deep dive discovery | 2026-07-12 | 11 |
| S51 | [CNIL - Tag E-commerce](https://www.cnil.fr/fr/tag/e-commerce) | CNIL | autorità | deep dive discovery | 2026-07-12 | 12 |
| S60 | [DSA Compliance: Key Obligations for Hosting Providers, Platforms and Marketplaces ](https://www.deleporte-wentz-avocat.com/en/actualite-dsa-compliance-key-obligations-for-hosting-providers-platforms-and-marketplaces-operating-in-the-eu-part-1) | Deleporte Wentz Avocat | studio legale | discovery DSA/DMA/DFA | 2026-07-12 | 25 |
| S61 | [AGCOM - Digital Services Act (piattaforme online)](https://www.agcom.it/competenze/piattaforme-online/digital-service-act) | Autorita per le Garanzie nelle Comunicazioni | autorità | discovery DSA/DMA/DFA | 2026-07-12 | 15 |
| S62 | [About the Digital Markets Act (DMA)](https://digital-markets-act.ec.europa.eu/about-dma_en) | Commissione Europea | istituzione UE | discovery DSA/DMA/DFA | 2026-07-12 | 11 |
| S63 | [DMA Developer Portal - Data Access (Article 6(10))](https://digital-markets-act.ec.europa.eu/developer-portal/data-access_en) | Commissione Europea | istituzione UE | discovery DSA/DMA/DFA | 2026-07-12 | 8 |
| S64 | [Review of EU consumer law (Digital Fairness Act e Fitness Check)](https://commission.europa.eu/law/law-topic/consumer-protection-law/review-eu-consumer-law_en) | European Commission, DG Justice and Consumers | istituzione UE | discovery DSA/DMA/DFA | 2026-07-12 | 10 |
| S65 | [Digital Fairness Act: consultazione pubblica aperta (Commissione UE)](https://digital-strategy.ec.europa.eu/en/consultations/commission-launches-open-consultation-forthcoming-digital-fairness-act) | European Commission, DG Digital Strategy | istituzione UE | discovery DSA/DMA/DFA | 2026-07-12 | 7 |
| S90 | [CRM Checklist for Success: Pre-implementation, Adoption, and Post-implementation C](https://www.vtiger.com/blog/crm-checklist/) | Vtiger | vendor | fornita da Matteo | 2026-07-12 | 40 |
| S91 | [Checklist per l'audit del CRM: 9 segnali che la tua piattaforma sta frenando la cr](https://www.guanxi.it/revops/audit-crm-checklist-in-9-punti/) | Guanxi S.r.l. | vendor | fornita da Matteo | 2026-07-12 | 9 |
| S92 | [EU AI Act Compliance Checklist: Step-by-Step](https://scytale.ai/resources/eu-ai-act-compliance-checklist/) | Scytale | vendor | fornita da Matteo | 2026-07-12 | 14 |
| S93 | [RGPD, AI Act, Bloctel: la checklist appels automatisés conforme en 2026](https://voice-pilot.ai/blog/rgpd-appels-automatises) | Voice Pilot | vendor | fornita da Matteo | 2026-07-12 | 73 |
| S94 | [GDPR Compliance Checklist: 15 things to know](https://www.iubenda.com/en/blog/gdpr-compliance-checklist/) | iubenda | vendor | fornita da Matteo | 2026-07-12 | 16 |
| S95 | [GDPR per siti web: la checklist](https://www.privacyos.com/gdpr-siti-web-la-checklist/) | PrivacyOS | vendor | fornita da Matteo | 2026-07-12 | 12 |

**Caveat noti sulle fonti**
- [S9] e [S94] sono la stessa checklist Iubenda, ingerita due volte per vie indipendenti (discovery automatica e seed manuale): le citazioni sono equivalenti.
- [S95] cita ancora il Privacy Shield come garanzia valida per i trasferimenti USA: superato da Schrems II [J2] e dal Data Privacy Framework [N4]. La fonte si usa per gli spunti tecnici, non sui trasferimenti.
- [S90] e [S91] sono checklist di adozione CRM e RevOps senza riferimenti normativi: usate solo per l'angolo data quality e consent sync, mai come fonte legale.
- [S93] contiene meccaniche specifiche del telemarketing francese (Bloctel, Loi Hamon) non applicabili fuori dalla Francia: estratti solo i principi universali.
- [S42] anticipa specifiche del Code of Practice AI Act in bozza: da riverificare alla pubblicazione finale.
- [S43] è un report interim EDPB: posizioni preliminari, non pregiudicano gli esiti delle istruttorie.
- [S64] e [S65] riguardano il Digital Fairness Act in consultazione: criteri emergenti, non obblighi vigenti.
