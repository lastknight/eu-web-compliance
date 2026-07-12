L'intervista al cliente non parte da un foglio bianco. Il flusso è in quattro passi. Primo: uno scan tecnico preliminare del sito precompila tutte le risposte di livello 0, quelle che una macchina può osservare da sola (CMP, pixel, terze parti, form, lingue, hosting). Secondo: una manciata di domande gate di livello 1 accende o spegne intere aree del questionario, così il cliente risponde solo a ciò che lo riguarda davvero. Terzo: per le sole aree attive si aprono le domande di dettaglio di livello 2, molte già precompilate dallo scan e da confermare. Quarto: una seconda passata di verifica assegna a ogni risposta un verdetto CONFERMATO, SMENTITO o NON VERIFICABILE con l'evidenza a supporto. Le risposte che estendono il perimetro (piattaforma newsletter, CRM, app mobile, PSP) aggiungono proprietà e vendor alla scansione: sui vendor si consultano solo documenti pubblici, sulle proprietà del cliente si eseguono test attivi soltanto con mandato scritto.

## Livello 1 · Domande gate (si fanno per prime)

Una sola voce per ogni gate ricorrente, con la formulazione migliore. La colonna "Se sì attiva" elenca tutte le aree e i blocchi che quella risposta accende.

| ID | Domanda | Se sì attiva | Estende il perimetro? |
|----|---------|--------------|------------------------|
| Q-G-01 | Avete una newsletter o fate email marketing? Con quale piattaforma? Usate il double opt-in e avete l'opt-in verificabile per la lista storica? | Area K, sezione newsletter dell'Area B (B-11, B-14), piattaforma ESP come vendor (Area E), unsubscribe e List-Unsubscribe (H-03, H-10, G-06) | Sì (piattaforma ESP) |
| Q-G-02 | Fate lead generation? Con quali canali (form, landing, lead ads, acquisto o arricchimento liste)? | Informativa Art. 14 (B-11), Area K, piattaforme di lead gen (Area E) | Sì (piattaforme lead) |
| Q-B-11 | Usate un CRM o marketing automation (HubSpot, Salesforce, Mailchimp)? I dati del sito ci confluiscono in automatico e sono dichiarati come destinatari? Condividete dati con partner commerciali? | Area K (inclusa condivisione a terzi K-13), destinatari e vendor dell'Area E (B-05, B-12) | Sì (CRM e partner) |
| Q-L-01 | Vendete beni o servizi online, con carrello, checkout e pagamento sul sito? | Area L, PSP e gateway di pagamento (I-02), checkout come ospite (G-13) | Sì (e-commerce, PSP) |
| Q-A-05 | Esistono canali oltre il sito web (app mobile, landing di campagna, punti vendita, contatto telefonico) con informative proprie o superfici di tracciamento separate? | Coerenza delle informative multi-canale, superficie mobile SDK, IDFA/Android ID, GPS (C-12) | Sì (proprietà terze) |
| Q-G-10 | Il vostro pubblico include minori? Come verificate l'età e raccogliete il consenso genitoriale? | Age gate e consenso genitoriale Art. 8 GDPR (G-09), tutela rafforzata minori Art. 28 DSA (O-11) | No |
| Q-I-04 | Fate advertising (Google Ads, Meta, TikTok, LinkedIn)? Usate custom audience o caricate liste di contatti verso le piattaforme? | Pixel pubblicitari dell'Area C (C-01, C-05), custom audience e liste caricate | Sì (ad platform) |
| Q-B-08 | Fate profilazione, scoring, lead scoring, personalizzazione automatica di contenuti o prezzi, o decisioni interamente automatizzate con effetti sulle persone? | Decisioni automatizzate Art. 22 (B-10), DPIA (M-13, I-09), scoring del voice bot (N-11) | No |
| Q-B-05 | È stato nominato un DPO, interno o esterno? Se no, ricorre un caso obbligatorio dell'Art. 37? | Blocco DPO in policy (B-02), recapito presidiato e raggiungibile (H-02) | No |
| Q-M-01 | Il sito integra chatbot, assistenti LLM, generazione di contenuti sintetici, o usa gli input degli utenti per il training? Con quale fornitore o modello? | Area M, opt-out dal training (M-15), trasparenza Art. 50 AI Act | Sì (fornitore AI) |
| Q-N-01 | Fate chiamate in uscita a fini commerciali? Sono automatizzate (voice bot, IVR) o con operatore umano? | Area N, consenso per gli automatici (N-01), annuncio di natura IA (N-03), biometria vocale (N-09, N-10), training delle registrazioni (N-06) | Sì (fornitore voice) |
| Q-O-02 | Ospitate contenuti generati dagli utenti (commenti, recensioni, forum, upload), siete una piattaforma o un marketplace, vendete su store terzi o personalizzate prezzi e offerte? | DSA Area O (notice-and-action O-05, statement of reasons O-06, recommender O-10, obblighi piattaforma O-12), diritti DMA verso i gatekeeper (O-13), radar Digital Fairness Act (O-14) | Sì (marketplace, gatekeeper) |
| Q-B-13 | Il sito è gestito o sviluppato da un'agenzia esterna, o vi appoggiate a fornitori (hosting, CRM, ESP) che trattano dati per vostro conto? | Nomina a responsabile Art. 28 (B-16), clausola data breach nei DPA (J-04) | Sì (responsabili esterni) |
| Q-I-01 | Quanti siti e domini gestite? Condividono infrastruttura e policy o ognuno ha le sue? | Confronto incrociato tra i domini su policy, hosting/ASN e CMP (I-01) | Sì (domini aggiuntivi) |
| Q-I-08 | Il titolare del trattamento è stabilito fuori dall'UE? | Rappresentante nell'Unione Art. 27 GDPR (I-05), rappresentante legale Art. 13 DSA (O-03) | No |
| Q-D-13 | Usate modelli particolari sul banner: cookie wall bloccante, alternativa a pagamento (consent-or-pay), o il framework IAB TCF con vendor list? | Valutazione consent-or-pay EDPB 08/2024 (D-06), granularità per singolo fornitore e vendor list TCF (D-05) | Sì (vendor list TCF) |

## Livello 0 · Risposte precompilate dallo scan

Righe raggruppate in ordine di area. "Precompilata da" cita i check che popolano la risposta; "Il cliente deve solo" indica l'azione minima richiesta.

| ID | Domanda | Precompilata da | Il cliente deve solo |
|----|---------|-----------------|----------------------|
| Q-A-03 | In quante lingue sono sito e informative? | A-04, A-07 | Confermare e dire chi cura le traduzioni |
| Q-A-04 | Le informative sono HTML o PDF scaricabili? | A-06 | Confermare |
| Q-B-04 | Chi è il titolare e quali contatti sono esposti? | B-01 | Confermare o correggere |
| Q-B-06 | Quali tipi di dati raccogliete e li elencate in informativa? | B-15 | Confermare o integrare |
| Q-B-14 | Dove è ospitato il sito e quali fornitori sono fuori UE/SEE? | B-06 | Confermare e indicare la garanzia per ciascuno |
| Q-C-01, Q-D-01 | Quale CMP usate e chi la configura? | C-10, D-01 | Confermare, dire chi la mantiene e l'ultima revisione |
| Q-C-02 | Usate Google Consent Mode, basic o advanced? | C-06 | Confermare e dire chi ha impostato i tag |
| Q-C-03 | Usate Google Analytics e in quale configurazione GDPR? | C-14 | Confermare, allegare DPA e impostazione di retention |
| Q-C-06, Q-E-10 | Quali pixel pubblicitari e di remarketing sono attivi e partono post-consenso? | C-05, C-02, C-07, E-15 | Confermare e dire dove sono dichiarati |
| Q-C-07, Q-G-09 | Usate session recording o heatmap e mascherate i campi dei form? | C-02, G-10 | Confermare |
| Q-D-05 | Rifiuta tutto è al primo livello con la stessa evidenza di Accetta, anche su mobile? | D-02, D-12, D-15 | Confermare |
| Q-D-06 | Accetta è ripetuto in più punti rispetto a Rifiuta? | D-16 | Confermare |
| Q-D-07 | Chiudere con la X o scrollare fa partire i tracker? | D-03, D-07 | Confermare |
| Q-D-08 | Per quanto conservate la scelta e il banner rispetta i 6 mesi? | D-09, D-13 | Confermare |
| Q-D-09 | Esiste un accesso permanente per riaprire le preferenze e revocare? | D-08 | Confermare |
| Q-D-10 | Rispettate i segnali GPC e DNT del browser? | D-08, D-13 | Confermare |
| Q-D-11 | Il banner sintetizza le finalità con link alla cookie policy? | D-11 | Confermare |
| Q-D-12 | In quali lingue sono banner e informativa? | D-17 | Confermare |
| Q-E-06 | In quali paesi risiedono fisicamente i dati? | E-02 | Confermare o integrare |
| Q-E-11, Q-E-12, Q-F-07 | I font sono remoti o self-hostati e usate un CAPTCHA di terze parti? | E-04, E-07 | Confermare e valutare alternative UE |
| Q-G-07 | Il consenso al marketing è separato dagli altri consensi? | G-03 | Confermare |
| Q-G-08, Q-O-12 | Le email hanno unsubscribe one-click e List-Unsubscribe, e disdire è semplice quanto iscriversi? | G-11, O-14, H-03 | Confermare e dire i tempi di processing |
| Q-G-11 | Qualche form raccoglie categorie particolari di dati? | G-08 | Confermare e indicare base e garanzie |
| Q-H-04 | Potete esportare i dati in JSON o CSV per la portabilità? | H-08 | Confermare |
| Q-H-09 | L'informativa elenca tutti i diritti, la revoca e il reclamo al Garante? | H-14 | Confermare |
| Q-L-02 | Il checkout consente l'acquisto come ospite? | L-01, G-13 | Confermare e allegare la valutazione se l'account è imposto |
| Q-L-04 | Resi, tracking e assistenza sono gestibili senza account? | L-02 | Confermare |
| Q-L-05 | I campi carta sono ospitati dal PSP (iframe/redirect) e il PAN non transita sui vostri sistemi? | L-03 | Confermare |
| Q-L-06 | Il salvataggio della carta è opt-in separato e non preselezionato? | L-04 | Confermare |
| Q-L-08 | Inviate email di recupero carrello e su quale base? | L-06 | Confermare e indicare la base |
| Q-L-10 | Pubblicate recensioni e quali dati dell'autore mostrate? | L-08 | Confermare e indicare base e verifica dell'acquisto |
| Q-L-11 | I tag di conversione rispettano il rifiuto del banner? | L-09 | Confermare |
| Q-L-14 | Offrite wishlist o raccomandazioni personalizzate e su quale base? | L-12 | Confermare e indicare la base |
| Q-M-08 | La policy descrive il trattamento via AI, il training e i limiti del modello? | M-09 | Confermare |
| Q-N-05 | Il bot si dichiara automatico a inizio chiamata? | N-03 | Confermare |
| Q-N-08 | Il bot riconosce l'opt-out a voce e via DTMF e lo propaga? | N-07, N-08 | Confermare |
| Q-O-07 | La pubblicità è etichettata e usate un recommender algoritmico? | O-10 | Confermare e allegare la disclosure nei T&C |

## Livello 2 · Domande di dettaglio per area

Solo domande di dettaglio, per le aree attivate dal livello 1. Gate e domande precompilate stanno sopra.

### Area A · Documenti legali: presenza e raggiungibilità

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-A-01 | Chi ha redatto le informative, quando sono state aggiornate e con quale processo di revisione? | A-05 | Data di ultimo aggiornamento estratta dalla policy vs data dichiarata; il processo si prova con SOP interna |
| Q-A-02 | Conservate lo storico delle versioni con le date di entrata in vigore? | A-08 | Cronologia modifiche linkata nel sito; storico non pubblico via repository o CMS con versioning |
| Q-A-06 | Notificate agli utenti le modifiche sostanziali alle policy e con quale canale? | B-14 | Meccanismo di avviso (banner/email); il canale CRM richiede evidenza del processo interno |

### Area B · Contenuto dell'informativa (Art. 13/14)

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-B-01 | Avete un registro dei trattamenti (Art. 30) e possiamo riceverne un estratto? | B-13 | Confronto delle basi giuridiche del registro con quelle dichiarate in policy |
| Q-B-02 | Per ogni finalità, qual è la base giuridica e dove è documentata? | B-13 | Tabella finalità/base della policy (B-03) vs motivazione nel registro Art. 30 |
| Q-B-03 | Chi ha redatto l'informativa e con quale supporto legale? È allineata al registro? | Documentale | Verifica documentale in intake |
| Q-B-07 | Su quali finalità usate il legittimo interesse e avete svolto un LIA? | B-04 | Occorrenze di legittimo interesse in policy (ciascuna qualificata) e richiesta del documento LIA |
| Q-B-12 | Avete l'elenco dei destinatari e responsabili? Coincide con le terze parti caricate dal sito? | B-12, B-05 | Diff automatico tra inventario tecnico terze parti (Area E) e destinatari dichiarati |
| Q-B-15 | Quali dati dei form sono obbligatori e cosa succede se l'utente non li fornisce? | B-09 | Correlazione tra dichiarazione in policy e campi obbligatori dei form rilevati (Area G) |
| Q-B-16 | Notificate agli utenti i cambi di finalità o base, con quale canale, e tenete lo storico versioni? | B-14 | Presenza di meccanismo di avviso e dello storico versioni (collegato ad A-08) |

### Area C · Cookie e tracker pre-consenso

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-C-04 | Dove conservate le prove del consenso e sapete ricostruirle per singolo utente? | C-10 | TC String/cookie CMP persistiti lato client; conservazione server e retention da documentare |
| Q-C-05 | Usate una misurazione che considerate esente dal consenso e con quale configurazione? | C-11, C-14 | Il tracker parte pre-consenso? Applica mascheramento IP? Le condizioni di esenzione sono dichiarate |
| Q-C-10 | Chi accede al tag manager e c'è un processo di approvazione dei nuovi tag? | Documentale | Elenco utenti GTM e procedura di approvazione, non osservabili dallo scan |

### Area D · Cookie banner e CMP: design e comportamento

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-D-02 | Il banner è personalizzato rispetto al template della CMP, da chi e con quale revisione legale? | Documentale | Verifica documentale in intake |
| Q-D-04 | Avete fatto A/B test o ottimizzato per l'acceptance rate? | D-02, D-10 | Il test non è verificabile, ma un banner ottimizzato per far accettare emerge come asimmetria o dark pattern |

### Area E · Terze parti, trasferimenti extra-UE e supply chain

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-E-01 | Avete l'elenco dei fornitori con DPA Art. 28 firmato per ciascuno e chi lo mantiene? | E-01, E-11 | Incrocio elenco dichiarato con inventario tecnico; ogni terza parte senza DPA è un finding |
| Q-E-02 | L'agenzia web che accede al backoffice o riceve i dati è nominata responsabile? | E-11 | Contratto/nomina Art. 28, incrociato con hosting e domini di prima parte (E-08) |
| Q-E-03 | Per ogni fornitore avete l'elenco dei sub-responsabili e ne siete informati e autorizzati? | E-12 | Elenco sub-responsabili e meccanismo di autorizzazione; menzione in informativa |
| Q-E-04 | Avete una procedura di valutazione del fornitore e un piano di audit per i vendor ad alto rischio? | E-13 | Procedura di vendor assessment pre-onboarding e piano di audit con evidenza dell'ultimo ciclo |
| Q-E-05 | Per i fornitori fuori SEE, quale meccanismo di trasferimento e avete un TIA per SCC? | E-03, E-14 | Trasferimenti osservati (E-02) e fornitori US (DPF Active su dataprivacyframework.gov) vs meccanismo documentato |

### Area F · Sicurezza tecnica (Art. 32)

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-F-01 | Chi gestisce l'infrastruttura e chi ha accesso privilegiato a server e database? | Documentale (F-14) | Organigramma tecnico, elenco account privilegiati e modello permessi; se agenzia, incrocio con nomina Art. 28 |
| Q-F-02 | Esiste un processo di patching con SLA per le patch critiche e chi ne è responsabile? | F-04, F-09 | Processo documentale con SLA; se le versioni rilevate sono note come vulnerabili, il patching è di fatto inefficace |
| Q-F-03 | I dati sono cifrati a riposo, con quale algoritmo e gestione chiavi? Vale anche per i backup? | Documentale (F-12) | Evidenza di cifratura di database, file store e backup con gestione e rotazione delle chiavi |
| Q-F-04 | Dove sono i backup, con quale frequenza testate i ripristini e come propagate le cancellazioni? | Documentale | Policy di backup, evidenza dell'ultimo test di ripristino, propagazione delle cancellazioni |
| Q-F-05 | Come sono conservate le password (bcrypt, scrypt, Argon2) ed è attiva la MFA sugli account privilegiati? | Documentale (F-13) | Algoritmo di hashing e MFA; un recupero che invia la vecchia password in chiaro rivela conservazione non hashata |
| Q-F-06 | Esiste un modello ruoli/permessi a privilegio minimo e i log sono conservati e per quanto? | Documentale (F-14) | Modello need-to-know, presenza e retention dei log di accesso ai dati e alle funzioni amministrative |
| Q-F-08 | Dove applicate pseudonimizzazione o anonimizzazione e come separate le informazioni di re-identificazione? | Documentale (F-16) | Verifica documentale su dove i dati sono pseudonimizzati e come sono custodite le informazioni aggiuntive |
| Q-F-09 | Avete avuto data breach o incidenti? Notificati al Garante (Art. 33) e agli interessati (Art. 34)? | Documentale | Registro delle violazioni (Art. 33(5)) e documentazione delle notifiche effettuate |
| Q-F-10 | Eseguite audit di sicurezza o penetration test periodici, con quale cadenza e da chi? | Documentale | Report degli ultimi audit e pen test con data, perimetro e fornitore |
| Q-F-11 | Il personale che tratta dati riceve formazione periodica sulla protezione dei dati? | Documentale | Piano formativo ed evidenze di erogazione (registri, date, contenuti) |

### Area G · Form, raccolta dati e consensi

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-G-03 | Le liste contengono contatti acquistati o arricchiti? Come avete adempiuto all'Art. 14 e come si oppongono? | G-14 | Documentale: origine liste, informativa Art. 14 inviata prima del primo contatto, meccanismo di opposizione |
| Q-G-04 | Fate prospezione B2B? Su quale base e la sollecitazione è pertinente al ruolo del destinatario? | G-14 | Documentale: base dichiarata, test di bilanciamento del legittimo interesse, pertinenza al ruolo |
| Q-G-06 | Dove registrate la prova del consenso e sapreste ricostruirla per un singolo iscritto? | G-12 | Documentale: registro/log backend con timestamp, metodo, finalità, versione; per i cookie il record CMP |

### Area H · Diritti degli interessati e canali di esercizio

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-H-01 | Chi gestisce le richieste degli interessati? Esiste procedura scritta con SLA e registro? | H-04 | Test live Art. 15 per l'SLA reale; procedura DSAR scritta e registro come prova documentale |
| Q-H-02 | Quante richieste nell'ultimo anno, in quanto tempo e avete usato la proroga a due mesi? | H-04, H-13 | Test di accesso cronometrato incrociato con il registro DSAR chiesto al cliente |
| Q-H-03 | Sapete estrarre tutti i dati di una persona da tutti i sistemi in un formato di uso comune? | H-06 | Funzione di export nell'area account e test end-to-end su tutti i sistemi dichiarati (estende il perimetro) |
| Q-H-05 | Come verificate l'identità del richiedente e quali informazioni aggiuntive chiedete? | Documentale | Procedura di verifica dell'identità, proporzionata e non eccessiva |
| Q-H-10 | Quando cancellate o rettificate, comunicate l'azione ai destinatari terzi (Art. 19)? | H-11 | Procedura documentale di comunicazione ai destinatari, inclusa propagazione a backup e sub-responsabili |
| Q-H-11 | Avete un meccanismo per limitare (congelare) il trattamento senza cancellare? | H-09 | Procedura di congelamento che conserva i dati bloccandone l'uso |

### Area I · Governance, accountability e ciclo di vita del dato

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-I-06 | Il registro Art. 30 è costruito su data mapping e possiamo riceverne un estratto? | E-01 | Confronto tra registro e inventario dedotto dallo scan (form Area G, terze parti Area E, cookie Area C) |
| Q-I-07 | Chi è il referente privacy, il DPO è indipendente, senza conflitti e riporta al vertice? | B-02, H-02 | Contatto DPO estratto e verificato; indipendenza e linee di riporto sono documentali |
| Q-I-09 | Avete svolto una DPIA per i trattamenti ad alto rischio, con quale metodologia? | G-10 | DPIA correlata ai segnali tecnici ad alto rischio; se i segnali ci sono e la DPIA manca, è finding |
| Q-I-10 | Per i trattamenti su legittimo interesse avete svolto e documentato una LIA prima di iniziare? | Documentale | LIA correlate alle basi dichiarate in Area B per individuare i trattamenti senza bilanciamento |
| Q-I-11 | Avete un DPA Art. 28 con ogni fornitore e ne verificate periodicamente la conformità? | E-01 | Inventario terze parti come elenco dei presunti responsabili; lo scarto con i DPA presenti è il finding |
| Q-I-12 | Avete una procedura di gestione delle violazioni e il registro Art. 33(5)? | Documentale | Procedura di data breach e registro delle violazioni, non osservabili via scansione |
| Q-I-13 | Esiste un piano di conservazione per categoria e la cancellazione a scadenza è automatica? | B-07, C-08 | Termini dichiarati in policy vs durate effettive (cookie in C-08) ed evidenza dei job di retention |
| Q-I-14 | Applicate privacy by design e by default? Chi valida i nuovi form e trattamenti? | G-02, G-05 | Consensi marketing opt-out di default (G-02) e campi form minimizzati (G-05); validazione documentale |
| Q-I-15 | Il personale con accesso ai dati riceve formazione periodica con verifica dell'apprendimento? | Documentale | Piano di formazione, materiali ed evidenze di partecipazione e verifica |
| Q-I-16 | Con quale cadenza rivedete policy, registro e piano di conservazione e avete un programma di audit? | A-05, A-08 | Data di ultimo aggiornamento della policy vs tecnologie rilevate; cadenza e audit sono documentali |

### Area J · Violazioni dei dati: preparazione e notifica

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-J-01 | Come vi accorgereste di una violazione? Avete monitoraggio e alerting, e chi riceve gli alert? | J-01 | Probe su /.well-known/security.txt e canale in policy verificano solo la ricezione esterna; la detection è documentale |
| Q-J-02 | Esiste un piano di risposta agli incidenti scritto e quando è stato testato l'ultima volta? | Documentale | Documento del piano (ruoli, escalation, contenimento) e data di ultima revisione o test |
| Q-J-03 | Chi decide cosa notificare al Garante entro le 72 ore e avete un modello predisposto? | Documentale | Procedura scritta di notifica e modello precompilato per il canale online del Garante |
| Q-J-05 | Avete un criterio per il rischio elevato (Art. 34) e un template di comunicazione agli interessati? | Documentale | Criterio di soglia del rischio e template con le azioni protettive per gli utenti |
| Q-J-06 | I dati a riposo sono cifrati (premessa dell'esenzione Art. 34(3)(a))? | F-12 | Riuso del check F-12; evidenza documentale della cifratura at rest e gestione chiavi |
| Q-J-07 | Tenete un registro di tutte le violazioni, incluse le non notificate con motivazione (Art. 33(5))? | Documentale | Registro con data, natura, dati e interessati, valutazione, decisione motivata; distinto dal registro Art. 30 |
| Q-J-08 | Quali log avete per l'indagine forense, per quanto li conservate e con quale root cause analysis? | Documentale | Evidenza dei log e della retention (poggia su F-14) e procedura di root cause |
| Q-J-09 | Riesaminate i trend delle violazioni e li portate al vertice per azioni correttive? | Documentale | Reportistica periodica, destinatari interni degli esiti ed evidenza delle azioni correttive |
| Q-J-10 | Avete già subito violazioni e come le avete gestite (Art. 33, Art. 34, misure)? | Documentale | Storico incidenti con notifiche, comunicazioni e misure, riscontrabile nel registro (Q-J-07) |
| Q-J-11 | Avete una copertura assicurativa cyber o un fornitore di incident response attivabile? | Documentale | Polizza cyber e contratto o retainer con il fornitore di incident response e forensics |

### Area K · CRM, newsletter e marketing diretto

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-K-02 | Come è stata costruita la lista: iscrizioni, soft spam, liste acquistate, raccolta da web/social? | K-04, K-07 | Contratti fornitore per le liste acquistate e prova del consenso; il flag cliente del soft spam deriva da un acquisto reale |
| Q-K-03 | Il consenso raccolto sul sito confluisce nel CRM con la prova completa? | K-01 | Export di un campione dal CRM: campi timestamp, source, versione informativa riconciliati con i log del form |
| Q-K-04 | Distinguete B2C (consenso) da B2B (legittimo interesse) e avete la LIA per il B2B? | K-03 | Documento LIA e campionamento dell'oggetto delle campagne B2B rispetto al ruolo dei destinatari |
| Q-K-05 | Quando un contatto si disiscrive, l'opt-out si propaga a tutti i sistemi e resiste ai reimport? | K-09, K-10 | Disiscrizione di test propagata agli altri sistemi; reimport di una lista con un contatto soppresso |
| Q-K-06 | Quale retention per lead, prospect e clienti cessati, e chi cancella gli inattivi? | K-05 | Export CRM con data dell'ultimo contatto: conteggio inattivi oltre soglia vs policy configurata |
| Q-K-08 | Chi accede al CRM e con quali permessi (RBAC) e log degli accessi? | K-11 | Review della matrice ruoli/permessi del CRM e verifica dell'audit log |

### Area L · E-commerce

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-L-03 | Offrite abbonamenti o accesso a comunità chiuse e con quali requisiti (invito, referral, status)? | Documentale | Documentazione dei requisiti di accesso a sostegno della necessità dell'account imposto (L-01) |
| Q-L-12 | Come distinguete la conservazione dei dati d'ordine da quella dei documenti fiscali? | Documentale | Matrice di conservazione che distingue base contrattuale (ordine) da obbligo legale (documento fiscale) |
| Q-L-13 | Gli account clienti hanno una policy di dismissione per inattività e dopo quanto? | L-11, H-05 | Policy sugli account inattivi e presenza di cancellazione self-service nelle impostazioni account |

### Area M · Funzionalità AI sul sito (GDPR + AI Act)

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-M-04 | Per quale finalità è usato il sistema AI e con quali meccanismi persuasivi (esclusione Art. 5 AI Act)? | Documentale | Documentazione di design e finalità analizzata contro le pratiche vietate dell'Art. 5 AI Act |
| Q-M-05 | Avete classificato il rischio del sistema AI e prodotto un memo di classificazione? | Documentale | Memo di classificazione verificato per coerenza con l'uso reale rilevato in scansione |
| Q-M-06 | Su quale base trattate prompt, output ed eventuale uso per il training, e le fasi sono distinte? | Documentale | Analisi della policy per mappare le fasi di trattamento AI e la base per ciascuna, integrata con l'intake |
| Q-M-09 | Come gestite rettifica e cancellazione riferite agli output del modello? | M-10 | Test concordato di rettifica su un output con dati personali, non ridotta alla sola cancellazione |
| Q-M-10 | Come misurate e correggete l'esattezza degli output oltre ai disclaimer? | Documentale | Documentazione del processo di misurazione, correzione e aggiornamento delle fonti |
| Q-M-12 | I contratti coi fornitori AI definiscono ruoli provider/deployer, Art. 50 e DPA Art. 28? | Documentale | Contratti, mappatura dei ruoli e DPA firmati incrociati con l'inventario terze parti (E-01), estende il perimetro |

### Area N · Canali voce e chiamate automatizzate

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-N-03 | Come è stato raccolto il consenso dei numeri chiamati con sistema automatizzato e dove è la prova? | N-01 | Estrazione a campione dalla lista di campagna e verifica di esistenza e data della prova per ciascun numero |
| Q-N-04 | Consultate il Registro Pubblico delle Opposizioni prima di ogni campagna e con quale frequenza? | N-02 | Confronto della lista campagna contro l'esito RPO più recente e verifica della data di consultazione |
| Q-N-06 | Registrate le chiamate, con quale informativa preventiva, per quanto e chi le riascolta? | N-04, N-05 | Trascrizione dell'apertura per il disclaimer di registrazione e verifica del job di cancellazione a 6 mesi |
| Q-N-11 | Avete svolto una DPIA per il sistema di voice bot? | N-12 | DPIA del sistema vocale verificata su registrazione, trascrizione, biometria e decisioni automatizzate |
| Q-N-12 | Dove sono ospitati audio, trascrizioni e CRM del canale voce, e avete il DPA col fornitore? | N-13 | Localizzazione dei sistemi di storage e presenza del DPA, con cross-check sull'inventario fornitori (Area E) |

### Area O · Oltre il GDPR: DSA, DMA, Digital Fairness Act

| ID | Domanda | Verifica a valle | Come si verifica |
|----|---------|-------------------|-------------------|
| Q-O-03 | Qual è la dimensione dell'impresa in addetti e fatturato? | O-07 | Visura o bilancio; micro o piccola impresa (meno di 50 addetti, fino a 10M) esenta dagli Artt. 20-28 DSA |
| Q-O-05 | Chi gestisce la moderazione dei contenuti di terzi e con quali strumenti, ed esiste un canale di segnalazione? | O-04, O-05 | Meccanismo notice-and-action rilevato dal crawler; policy di moderazione estratte dai T&C, processo interno da chiedere |
| Q-O-06 | Quando rimuovete un contenuto, l'utente riceve una motivazione e le informazioni sui rimedi (Art. 17)? | O-06 | Template di motivazione e review documentale del processo (reclamo interno, ADR, ricorso) |
| Q-O-10 | State già estraendo i dati transazionali via le API dei gatekeeper (Art. 6(10) DMA)? | Documentale | Verifica documentale in intake, estende il perimetro ai canali dati esterni |
| Q-O-13 | Ingaggiate influencer o affiliati e i contenuti sponsorizzati sono etichettati come commerciali? | Documentale | Elenco influencer e affiliati e accordi; etichettatura verificabile solo sulle pagine sponsorizzate note |

## La seconda passata: verifica delle risposte

Ogni risposta del cliente torna nel report con un verdetto secco. CONFERMATO quando lo scan la conferma con evidenza (l'HAR mostra il pixel dichiarato, la TC String persiste, la policy cita il destinatario). SMENTITO quando l'evidenza contraddice la dichiarazione. NON VERIFICABILE quando la risposta è documentale e nessun segnale tecnico la tocca (backup cifrati, formazione, registro violazioni): resta valida ma poggia solo sulla dichiarazione, e va marcata come tale.

I finding principali nascono dalle discrepanze tra dichiarato e rilevato. Il caso di scuola è il check B-12: i destinatari elencati in informativa contro le terze parti che il sito carica davvero. Ogni terza parte che appare nell'inventario tecnico ma non in policy, e ogni destinatario dichiarato che nessuno script conferma, è uno scarto da spiegare. La stessa logica vale per le basi giuridiche (policy vs registro Art. 30), per la retention (termini dichiarati vs durata effettiva dei cookie in C-08) e per i DPA (terze parti tecniche vs nomine Art. 28 presenti). Il report si legge così: prima gli scarti dichiarato-vs-rilevato, ordinati per gravità, poi le risposte non verificabili da presidiare con documentazione, infine le conferme.
