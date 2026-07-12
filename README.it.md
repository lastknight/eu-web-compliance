# EU Web Compliance

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.1-blue">
  <img alt="Checks" src="https://img.shields.io/badge/checks-206-brightgreen">
  <img alt="Areas" src="https://img.shields.io/badge/areas-15-brightgreen">
  <img alt="Sources" src="https://img.shields.io/badge/sources-35_catalogued-orange">
  <img alt="Scope" src="https://img.shields.io/badge/scope-GDPR_·_ePrivacy_·_AI_Act_·_DSA_·_DMA-8A2BE2">
  <img alt="Status" src="https://img.shields.io/badge/status-public_beta-brightgreen">
  <img alt="License" src="https://img.shields.io/badge/license-CC_BY_4.0_%2B_MIT-yellow">
  <img alt="AI agent ready" src="https://img.shields.io/badge/AI_agent-ready-black">
</p>

> 🌍 This document is also available in [English](README.md).

**Fare impresa nell'UE è difficile.** Non perché le regole siano ostili, ma perché sono tantissime, stratificate e intrecciate tra loro: GDPR, ePrivacy, AI Act, DSA, DMA, e altre in arrivo. Conoscere bene quel corpo normativo è un lavoro a tempo pieno, e il costo di non conoscerlo ricade con più forza su chi non può permettersi un ufficio compliance.

Questo progetto esiste per colmare quel divario, per tre tipi di pubblico:

- **Auditor e consulenti**, il primo pubblico di riferimento: una vista a 360 gradi sulla postura di compliance di un'azienda, con un metodo che incanala 206 controlli in un incarico gestibile e guidato dalle evidenze, invece di un interrogatorio.
- **Avvocati e DPO**: un riferimento articolo per articolo, con le fonti, da cui attingere, dove ogni affermazione risale alla legge primaria, alle linee guida delle autorità o alla giurisprudenza, e mai al blog di qualcuno.
- **Sviluppatori**: uno spec file pronto da dare in pasto agli strumenti di coding assistito da AI. La compliance smette di essere un adeguamento a posteriori che costa giorni se non mesi di rework: privacy by design e by default vengono adottate fin dal primo commit, senza leggere un solo articolo di legge.

Copre GDPR ed ePrivacy al centro, e si estende all'AI Act (chatbot, contenuti generati), al DSA (contenuti generati dagli utenti, piattaforme, marketplace), al DMA (i tuoi diritti come business user delle Big Tech) e all'imminente Digital Fairness Act (deceptive design, in prospettiva).

> **Stato**: private preview. L'inglese è la lingua canonica; ogni area della checklist e il kit di intervista sono disponibili anche in italiano (i file `.it.md`, linkati come "it" nell'indice qui sotto). Altre lingue benvenute via PR.

## Indice

- [Perché esiste](#perché-esiste)
- [Cosa non è: limiti onesti](#cosa-non-è-limiti-onesti)
- [Cosa hai tra le mani](#cosa-hai-tra-le-mani)
- [📖 Leggi i documenti, un click ciascuno](#-leggi-i-documenti-un-click-ciascuno)
- [Da dove iniziare](#da-dove-iniziare)
  - [🧑‍💻 Sono uno sviluppatore](#-sono-uno-sviluppatore-e-non-so-nulla-di-diritto-ue)
  - [⚖️ Sono un avvocato o un DPO](#%EF%B8%8F-sono-un-avvocato-o-un-dpo-e-non-uso-agenti-ai-o-github)
  - [📋 Sono un auditor o consulente](#-sono-un-auditor-o-consulente-e-206-controlli-sembrano-una-follia)
- [Il metodo in cinque minuti](#il-metodo-in-cinque-minuti)
- [Principi di design](#principi-di-design)
- [Come contribuire](#come-contribuire)
- [Roadmap](#roadmap)
- [Licenza](#licenza)

---

## Perché esiste

La maggior parte delle checklist GDPR sono o saggi giuridici senza nulla di testabile, o scanner tecnici senza fondamento legale. Questo progetto salda le due cose insieme. Ogni singola voce ha:

- un **ID stabile** (come `C-03`) che puoi citare in report, ticket e commit;
- una **base legale precisa** (l'articolo vero e proprio: GDPR, ePrivacy, AI Act, DSA, legge nazionale);
- un **livello di vincolo**: è un obbligo legale netto, una raccomandazione dell'autorità, o solo buona pratica?
- un **livello di rischio** in caso di assenza, calibrato sull'enforcement reale;
- un **test automatico concreto**: cosa uno script o un revisore controlla davvero;
- **citazioni delle fonti** verso un corpus catalogato di 35 fonti (autorità UE e nazionali, strumenti di audit ufficiali, studi legali, giurisprudenza), così puoi verificare che non ce lo siamo inventato.

È stato costruito consolidando e riscrivendo 1.075 requisiti estratti da quelle fonti, e verificando poi ogni riferimento legale. Il catalogo delle fonti, comprese le debolezze note di ciascuna, è in [`sources/SOURCES.md`](sources/SOURCES.md).

## Cosa non è: limiti onesti

Questo catalogo è esaustivo, in certi punti perfino sovrabbondante. Non è comunque completo, e non può esserlo. Dirlo con chiarezza fa parte del metodo.

- **Non copre ogni caso e ogni edge case.** Il corpus del diritto digitale UE è vasto, in movimento, e interpretato in modo diverso nei vari Stati membri. Lacune note ad oggi, dichiarate esplicitamente: l'**AI Act** è coperto solo per ciò che tocca un sito o una web app (obblighi di trasparenza, classificazione di rischio di base); gli obblighi di fornitori e deployer di sistemi ad alto rischio sono fuori perimetro, con soli rimandi. I **dark pattern** sono testati a livello di tassonomia (le categorie di EDPB e CNIL), non caso per caso contro ogni possibile design manipolativo. L'**accessibilità** (lo European Accessibility Act, la Web Accessibility Directive) è al momento del tutto assente, ed è una superficie di compliance reale. I regimi settoriali (sanità, finanza, telco) e le divergenze nazionali oltre Italia e Francia sono in gran parte esclusi.
- **Ciò che garantisce è un pavimento, non un soffitto.** Questo sistema è il miglior compromesso che i suoi autori sono riusciti a raggiungere: seguirlo significa che la tua applicazione non è *apertamente contro la legge*, e che i principi fondanti di ciascun regolamento (un consenso che sia reale, una trasparenza che sia onesta, dati minimizzati, diritti che funzionano) sono sostanzialmente coperti. Non significa "pienamente conforme in ogni possibile lettura": nessuno può prometterlo onestamente, e dovresti diffidare di chiunque lo faccia.
- **Non è una certificazione e non è consulenza legale.** È uno strumento di compliance engineering che rende la conversazione con il tuo avvocato più breve e meglio informata, non uno che la sostituisce.

Le lacune non sono un segreto da scoprire: sono un invito. Se conosci un caso che questo catalogo non copre, apri una issue o una PR (vedi [Come contribuire](#come-contribuire)): è esattamente così che questo progetto è pensato per crescere.

## Cosa hai tra le mani

| Pezzo | Cos'è | Per chi |
|-------|-----------|---------------|
| [`checklist/`](checklist/) | 15 file di area, 206 controlli: la checklist di audit completa con basi legali, test, livelli di rischio e vincolo | Auditor, DPO, avvocati |
| [`requirements/EU-WEB-COMPLIANCE.md`](requirements/EU-WEB-COMPLIANCE.md) | Le stesse 206 voci come requisiti machine readable (RFC 2119: MUST / SHOULD / MAY), in inglese, in un unico file | Sviluppatori e AI coding agent |
| [`interview/`](interview/) | Il kit di intervista al cliente: un questionario a tre livelli che trasforma 200+ domande in una conversazione da 20 a 40 domande | Auditor e consulenti |
| [`sources/SOURCES.md`](sources/SOURCES.md) | Il catalogo completo delle fonti con ID, provenienza, date di ingestione e caveat | Chiunque voglia controllare i nostri compiti |
| [`skill/`](skill/) | Il layer di automazione (crawler + skill per agente AI), in sviluppo | Utenti tecnici |

**Le 15 aree.** Da A a J valgono sempre: documenti legali, contenuto dell'informativa privacy, tracker pre consenso, design del cookie banner, terze parti e trasferimenti, sicurezza tecnica, form e consenso, diritti degli interessati, governance, data breach. Da K a O sono condizionali e si attivano solo se l'attività corrisponde: CRM e marketing diretto, e-commerce, funzionalità AI, canali vocali, DSA/DMA/DFA.

**Non affronti mai tutti i 206 controlli in una volta.** È tutto il senso del metodo qui sotto.

## 📖 Leggi i documenti (un click ciascuno)

Nessun download, nessuno strumento, nessun git: ogni link qui sotto apre il documento nel browser, renderizzato come una normale pagina web. Questo è l'indice per avvocati, DPO, auditor e analisti.

**La checklist, area per area:**

| Area | Leggi | Cosa copre | Anche in |
|:---:|------|----------------|:-------:|
| A | [Documenti legali: presenza e raggiungibilità](checklist/legal-documents.it.md) | Privacy e cookie policy esistono, sono raggiungibili, versionate, nella lingua giusta | [en](checklist/legal-documents.md) |
| B | [Contenuto dell'informativa privacy (Art. 13/14)](checklist/privacy-notice-content.it.md) | Tutto ciò che l'informativa privacy deve contenere, e se corrisponde alla realtà tecnica | [en](checklist/privacy-notice-content.md) |
| C | [Cookie e tracker pre consenso](checklist/pre-consent-trackers.it.md) | Nulla può tracciare l'utente prima del consenso: cookie, pixel, storage, fingerprinting | [en](checklist/pre-consent-trackers.md) |
| D | [Cookie banner e CMP](checklist/cookie-banner-cmp.it.md) | Design e comportamento del banner: rifiuto al primo livello, niente dark pattern, revoca reale | [en](checklist/cookie-banner-cmp.md) |
| E | [Terze parti e trasferimenti extra UE](checklist/third-parties-transfers.it.md) | Chi riceve i dati, dove si trova, contratti e garanzie di trasferimento | [en](checklist/third-parties-transfers.md) |
| F | [Sicurezza tecnica (Art. 32)](checklist/technical-security.it.md) | HTTPS, TLS, security header, flag dei cookie, file esposti, autenticazione email | [en](checklist/technical-security.md) |
| G | [Form, raccolta dati e consenso](checklist/forms-and-consent.it.md) | Ogni punto in cui il sito raccoglie dati: qualità del consenso, minimizzazione, minori | [en](checklist/forms-and-consent.md) |
| H | [Diritti degli interessati](checklist/data-subject-rights.it.md) | Accesso, cancellazione, portabilità, opposizione: canali che esistono e funzionano davvero | [en](checklist/data-subject-rights.md) |
| I | [Governance e accountability](checklist/governance-accountability.it.md) | Registro dei trattamenti, DPO, DPIA, policy di conservazione, formazione | [en](checklist/governance-accountability.md) |
| J | [Data breach](checklist/data-breaches.it.md) | Rilevamento, piano di risposta, notifica entro 72 ore, registro dei breach | [en](checklist/data-breaches.md) |
| K | [CRM, newsletter e marketing diretto](checklist/crm-direct-marketing.it.md) | *Se fanno email marketing / CRM*: ciclo di vita del consenso, opt out, igiene delle liste, conservazione | [en](checklist/crm-direct-marketing.md) |
| L | [E-commerce](checklist/ecommerce.it.md) | *Se vendono online*: account, pagamenti, marketing post acquisto, profilazione loyalty | [en](checklist/ecommerce.md) |
| M | [Funzionalità AI sul sito](checklist/ai-features.it.md) | *Se chatbot / funzionalità AI*: trasparenza AI Act, GDPR sugli LLM, decisioni automatizzate | [en](checklist/ai-features.md) |
| N | [Canali vocali e chiamate automatizzate](checklist/voice-channels.it.md) | *Se chiamate outbound / voice bot*: consenso, registrazioni, il bot deve dire di essere un bot | [en](checklist/voice-channels.md) |
| O | [Oltre il GDPR: DSA, DMA, DFA](checklist/dsa-dma-dfa.it.md) | *Se contenuti utente / marketplace*: obblighi delle piattaforme, diritti verso i gatekeeper, cosa sta arrivando | [en](checklist/dsa-dma-dfa.md) |

**I documenti di accompagnamento:**

| Leggi | Cos'è | Anche in |
|------|-----------|:-------:|
| [Il kit di intervista al cliente](interview/client-interview.it.md) | Il questionario a tre livelli (prima i gate, la maggior parte delle risposte precompilate) | [en](interview/client-interview.md) |
| [Il catalogo delle fonti](sources/SOURCES.md) | Ogni fonte dietro i controlli: legge, autorità, giurisprudenza, con i caveat | |
| [I requisiti per sviluppatori](requirements/EU-WEB-COMPLIANCE.md) | La versione per sviluppatore / agente AI (tecnica, RFC 2119) | |
| [Changelog](CHANGELOG.md) | Cosa è cambiato tra le versioni; gli ID dei controlli non cambiano mai | |

---

## Da dove iniziare

Scegli la tua porta.

### 🧑‍💻 Sono uno sviluppatore (e non so nulla di diritto UE)

Non devi leggere la legge. È esattamente per questo che esiste questo repository.

1. Scarica **un solo file**: [`requirements/EU-WEB-COMPLIANCE.md`](requirements/EU-WEB-COMPLIANCE.md).
2. Mettilo nel tuo progetto, accanto al file di istruzioni del tuo agente (`CLAUDE.md`, `AGENTS.md`, qualunque cosa usi il tuo strumento), e aggiungi una riga a quelle istruzioni: *"Tratta ogni requisito applicabile in EU-WEB-COMPLIANCE.md come parte dello spec."*
3. Tutto qui. Il tuo AI coding agent adesso sa che la cancellazione dell'account deve esistere, che nessun tracker può scattare prima del consenso, che le checkbox di consenso non possono essere pre spuntate, che i cookie di sessione hanno bisogno dei flag giusti, e altre 200 cose che altrimenti impareresti da una multa.

Come leggere una voce: **MUST** significa obbligo legale (la sua assenza è una violazione, non una questione di stile). **SHOULD** si fonda su linee guida delle autorità e giurisprudenza. **MAY** è buona pratica. Ogni voce ha una condizione `Applies-if`: se il tuo progetto non ha una newsletter, le voci sulla newsletter semplicemente non si applicano. Ogni voce ha una riga `Acceptance` che ti dice come verificarla, e che funge anche da spec di test.

Se stai costruendo qualcosa di nuovo: leggi le voci MUST delle aree C (tracker), F (sicurezza) e G (form) prima di scrivere il tuo primo form o aggiungere il tuo primo script di analytics. Venti minuti, onestamente.

### ⚖️ Sono un avvocato o un DPO (e non uso agenti AI o GitHub)

Puoi usarlo come un semplice documento. Due modi per averlo senza toccare git: clicca il pulsante verde **Code** nella pagina del repository e scegli **Download ZIP**, oppure clicca semplicemente un qualsiasi file in [`checklist/`](checklist/) per leggerlo nel browser, renderizzato come un normale documento.

Parti dalle aree della checklist, non dal file dei requisiti (quello è per gli sviluppatori). Ogni file di area ti dà: il razionale, le basi legali con i numeri di articolo, poi una tabella di controlli. Le due colonne che contano di più per il lavoro legale:

- **Vincolo** (livello di vincolo): OBBLIGO è un obbligo legale diretto; RACCOMANDATO poggia su linee guida delle autorità, giurisprudenza o prassi consolidata; PLUS è buona pratica senza dovere legale. È l'asse che usi per dire a un cliente "questa è la legge" contro "questo è ciò che fa un operatore prudente".
- **Rischio** (rischio in caso di assenza): da CRITICO a BASSO, calibrato sull'esposizione sanzionatoria e sull'attività di enforcement reale, non sulla gravità teorica.

Ogni affermazione ha una fonte. Gli ID tra parentesi come `[G1]` o `[S45]` puntano al catalogo in [`sources/SOURCES.md`](sources/SOURCES.md): legge primaria, decisioni del Garante e della CNIL, linee guida EDPB, cause. Le fonti dei vendor non vengono mai usate da sole per fondare un'affermazione legale; il catalogo elenca anche le debolezze note di ciascuna fonte.

Il deliverable più forte che questo metodo produce è la **discrepanza**: ciò che l'azienda dichiara (nella sua informativa privacy, o in intervista) contro ciò che la scansione tecnica osserva davvero. In quel divario vive l'esposizione legale.

### 📋 Sono un auditor o consulente (e 206 controlli sembrano una follia)

Esatto, lo sarebbe. Non devi eseguire 206 controlli a mano né fare al cliente centinaia di domande. Il metodo esiste proprio perché questo non succeda mai. Leggi [Il metodo](#il-metodo-in-cinque-minuti) qui sotto: il tuo lavoro passa attraverso gate e automazione, e la parte umana è una conversazione da 20 a 40 domande, quasi tutta già risposta prima ancora di sederti con il cliente.

Navigazione pratica, se GitHub è nuovo per te: questa pagina che stai leggendo è la porta d'ingresso. I link blu aprono cartelle e documenti; ogni documento viene renderizzato nel browser come un DOC formattato. Nulla qui deve essere installato o compilato. Se vuoi tutto sulla tua macchina: pulsante verde **Code**, **Download ZIP**, scompatta, apri i file in qualsiasi cosa legga testo.

---

## Il metodo in cinque minuti

L'audit è un loop con due punti di contatto umani: una gate call di cinque minuti all'inizio, e la vera intervista nel mezzo. Il carico cognitivo è progettato per abbassarsi a ogni stadio.

Un principio guida l'ordinamento: **una scansione tecnica può confermare la presenza, mai l'assenza.** Se il sito non mostra traccia di un CRM, questo non significa che non ci sia un CRM; moltissime aziende hanno quasi nulla sul sito e tutto il trattamento reale altrove. È per questo che le domande vengono prima e la scansione dopo.

```
UMANO (5 min)            RUN 1 (macchina)          UMANO (intervista)        RUN 2 (macchina)         OUTPUT
16 domande gate     →    scansiona il sito, con →   solo le domande       →   verifica ogni risposta → report con verdetti
attivano/spengono le     il perimetro già          per le aree ATTIVE,       contro le evidenze;      per area, prima le
aree e rivelano ciò      informato dai gate;       quasi tutte già           estende la scansione ai  discrepanze, ogni
che il sito non mostra   precompila da evidenze    precompilate con evidenze vendor dichiarati        finding con ID + base legale
```

**1. Prima i gate.** Da 10 a 16 **domande gate** al cliente prima di ogni altra cosa (cinque minuti, telefono o email): Mandate newsletter? Vendete online? Avete un CRM? Un chatbot? Chiamate outbound? Contenuti generati dagli utenti? Ogni "no" spegne un'intera area, e ogni "sì" informa la scansione su proprietà che il sito da solo non rivelerebbe mai. Un sito vetrina senza marketing tipicamente attiva ben meno della metà del catalogo.

**2. Primo passaggio: la scansione (Run 1).** Un passaggio automatico sul sito target, con il perimetro informato dalle risposte ai gate, raccoglie evidenze: cookie e tracker prima del consenso, comportamento del banner, security header, domini di terze parti, form. Questo risponde da solo a una bella fetta del questionario ("quale strumento di consenso usate?", "Google Analytics è attivo?"): quelle risposte vengono **precompilate con l'evidenza allegata**, e il cliente deve solo confermarle o correggerle.

**3. L'intervista.** Ciò che resta è una conversazione da 20 a 40 domande, organizzata per area, con ID stabili (`Q-C-03`). Il documento di intervista è anche il **formato di scambio**: compili le risposte, restituisci il documento.

**4. Secondo passaggio: verifica (Run 2).** Ecco la parte che i clienti non si aspettano: le risposte vengono controllate. Il cliente dice che il double opt-in è attivo? Iscriviamo un indirizzo di test. Dice che la disiscrizione viene processata subito? La testiamo. Dice che usa Mailchimp? Recuperiamo il DPA di Mailchimp e la lista dei subprocessor, e i vendor da lui indicati entrano nel perimetro della scansione (solo documenti pubblici per i vendor; test attivi sulle proprietà del cliente rigorosamente sotto mandato scritto). Ogni risposta verificabile ottiene un verdetto: **CONFERMATO**, **SMENTITO** (contraddetto dalle evidenze), **NON VERIFICABILE** (servono documenti).

**5. Il report.** Organizzato per area, i finding citano gli ID dei controlli e le basi legali, e i finding di apertura sono le discrepanze: dichiarato contro osservato. Un finding che recita "dichiari X nella tua informativa privacy, il tuo sito dimostrabilmente fa Y, violando l'Art. Z" non ha bisogno di aiuto retorico.

### I due assi, ancora una volta

Tutto nel report è classificato su due assi indipendenti, perché "quanto è illegale" e "quanto è pericoloso" sono domande diverse:

| | Significato | Esempio |
|---|---|---|
| **OBBLIGO** / MUST | Lo dice la legge. Assenza = violazione. | Nessun tracker prima del consenso (ePrivacy Art. 5(3)) |
| **RACCOMANDATO** / SHOULD | Lo dicono autorità o tribunali. Assenza = rischio discutibile. | Pulsante di rifiuto con pari evidenza al primo livello |
| **PLUS** / MAY | Segnale di maturità. Assenza = niente, averlo = credibilità. | Spiegazione neutra delle conseguenze del consenso |

Il rischio (CRITICO / ALTO / MEDIO / BASSO) dice poi quanto sei esposto in pratica, in base a ciò che le autorità sanzionano davvero.

---

## Principi di design

- **ID stabili, per sempre.** È un patto vincolante, non una scelta di stile: gli ID vengono citati nei report ai clienti, nei ticket e nei commit, e cambiarli significherebbe togliere il terreno sotto i piedi a ogni progetto che ci si appoggia. Un ID non viene mai riciclato, rinumerato o riordinato: `O-18` resta `O-18` a vita, anche se deprecato (i controlli deprecati vengono marcati DEPRECATED e mantenuti, mai cancellati). I controlli nuovi prendono il numero successivo in coda alla loro area; se uno deve stare logicamente tra due controlli esistenti, riceve un suffisso (`O-18-bis`, poi `O-18-ter`), mai una rinumerazione di quelli che seguono. Lo stesso patto vale per gli ID delle fonti: un identificatore `S`/`N`/`G`/`E`/`J`/`T` non viene mai riassegnato; una fonte superata mantiene il suo ID con un caveat nel catalogo.
- **Fonti o non è successo.** Le affermazioni legali risalgono alla legge primaria, alle autorità e alla giurisprudenza. Il catalogo elenca ogni fonte con provenienza, data e caveat noti, comprese quelle che abbiamo ingerito e trovato in parte sbagliate.
- **Vendor neutral.** Gli strumenti sono citati (lo strumento di audit dello stesso EDPB, l'evidence collector dell'EDPS, Playwright, testssl.sh), mai imposti. Mappa i test sul tuo stack se ne hai uno.
- **Condizionale per costruzione.** Gli obblighi che si applicano solo a piattaforme, marketplace o gatekeeper sono gated, non mescolati agli altri. Un sito vetrina aziendale non è un VLOP e questa checklist lo sa.
- **Human in the loop.** Le macchine raccolgono evidenze e verificano le affermazioni; il giudizio di audit e la relazione con il cliente restano umani.

## Come contribuire

I contributi più preziosi sono legali e fattuali, non di codice:

- **Una nuova fonte rilevante** (una decisione di un'autorità, una linea guida EDPB, una sentenza): apri una issue con il template "New source". Le fonti ricevono un ID di catalogo e ogni controllo derivato la cita.
- **Un controllo sbagliato o superato** (la legge è cambiata, una decisione ha superato una prassi): apri una issue con il template "Check correction", citando l'ID del controllo e la tua fonte.
- **Traduzioni e fix di chiarezza**: pull request benvenute.

Regole di base: gli ID dei controlli sono immutabili; le affermazioni legali hanno bisogno di una fonte citabile; le fonti dei vendor non fondano mai da sole un'affermazione legale.

## Roadmap

- [x] Checklist v2.0: 15 aree, 206 controlli, catalogo fonti completo
- [x] File di requisiti in inglese per lo sviluppo assistito da AI
- [x] Kit di intervista a tre livelli
- [x] Inglese come lingua canonica, edizioni italiane come `.it.md`
- [ ] `skill/`: il Run 1 / Run 2 automatizzato (crawler + skill per Claude Code e strumenti compatibili)
- [x] Rilascio pubblico (2026-07-12)

## Licenza

Doppia licenza prevista al rilascio pubblico: documentazione e contenuti della checklist sotto **CC BY 4.0**, codice (skill, script) sotto **MIT**. Fino ad allora: tutti i diritti riservati, private preview.

## Autore e disclaimer

A cura di [Matteo Flora](https://matteoflora.com), costruito con un uso intensivo di agenti AI su un corpus di 35 fonti catalogate, ogni riferimento legale verificato da umano. Questo è uno strumento di compliance engineering, non consulenza legale: per decisioni con conseguenze legali, coinvolgi un professionista qualificato che possa valutare la tua situazione specifica.
