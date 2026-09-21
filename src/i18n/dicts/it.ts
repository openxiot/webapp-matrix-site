import type {Dict} from '../types';

/* Italiano —— /it/...
 * 意大利语版本，URL 前缀 /it/（locale id 为 it）。
 * 结构与 en.ts 逐键对应；人名用非正式的「tu」，术语全文统一
 * （dispositivo / spazio / scena / prodotto / modello di cosa / gateway /
 * automazione / organizzazione / campus / edificio / piano / stanza / officina /
 * serra / parcheggio / zona / monitoraggio in tempo reale / onboarding / regola）。 */
export const it: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Accedi', secondary: 'Scopri le funzionalità'},
  home: {
    metaDesc:
      'Matrix è una piattaforma IoT cloud completa per i team: onboarding dei dispositivi, modellazione degli spazi, modelli di prodotto e automazione delle scene in un unico sistema, su Web, iOS e Android.',
    pill: 'MATRIX · Piattaforma IoT completa',
    heroA: 'Una piattaforma IoT completa —',
    heroB: 'per connettere davvero ogni cosa',
    heroSub:
      'Matrix riunisce accesso ai dispositivi, organizzazione degli spazi, modelli di prodotto e automazione delle scene, dal gateway edge alla console cloud. Niente da costruire da zero: accedi e sei operativo.',
    heroCtaSecondary: 'Scopri le funzionalità',
    points: ['Sincronizzato su Web · iOS · Android', 'Accesso con OAuth in un clic', 'Collaborazione per organizzazione'],
    mock: {
      scanTag: 'Scansiona per associare',
      sceneTag: 'Automazione scene',
      windowTitle: 'Matrix · Panoramica dispositivi',
      liveTag: 'Illustrazione',
      rail: ['Campus smart', 'Edificio A · Piano 3', 'Officina Sud'],
      tiles: [
        {name: 'Clima', value: '26,0 ℃', sub: 'Raffreddamento · inviato'},
        {name: 'Luci', value: 'Accese', sub: 'Scena · Modalità ufficio'},
        {name: 'Contatore', value: '12,4 kW', sub: 'Report live'},
        {name: 'Serratura', value: 'Bloccata', sub: 'In allarme'},
      ],
      foot: 'Ultimo evento: luci sala riunioni → scena “Uscita ufficio” attivata',
    },
    capHead: {
      eyebrow: 'Piattaforma',
      title: 'Una sola piattaforma per tutto il percorso IoT',
      lead: 'Dai dispositivi edge alla console cloud, Matrix racchiude accesso, organizzazione, gestione e automazione in un unico sistema.',
    },
    capItems: [
      {
        title: 'Accesso multi-protocollo',
        text: 'Collega i dispositivi tramite gateway industriali e molti protocolli — Modbus, MQTT, Matter, PLC, 485 / 4G DTU — in un unico modello di dispositivo. Scansiona un QR code per associare un dispositivo a uno spazio.',
      },
      {
        title: 'Modellazione di spazi e siti',
        text: 'Organizza i dispositivi in un albero di spazi — campus → edificio → piano → stanza — insieme a officine, serre e parcheggi, in rispecchio del mondo fisico.',
      },
      {
        title: 'Prodotti e modelli di cosa',
        text: 'Definisci una volta sola il prodotto e il suo modello di cosa: proprietà, stati e controlli scrivibili sono tutti visibili. Ogni dispositivo connesso è un’istanza di un modello — coerente e riutilizzabile.',
      },
      {
        title: 'Monitoraggio e controllo in tempo reale',
        text: 'Lo stato dei dispositivi arriva in tempo reale; le proprietà si leggono e si scrivono da remoto. Invia comandi e parametri quando vuoi e gestisci ogni dispositivo da un’unica vista.',
      },
      {
        title: 'Scene e automazione',
        text: 'Automazione guidata da regole ed eventi: apri una porta e le luci si accendono, oppure lascia che il clima reagisca alla temperatura — i dispositivi collaborano da soli.',
      },
      {
        title: 'Organizzazioni e permessi',
        text: 'Gestisci la piattaforma insieme, attorno a un’organizzazione, con membri e permessi a livelli. Accedi con OAuth — nessun sistema di account separato da mantenere.',
      },
    ],
    scnHead: {
      eyebrow: 'Scenari',
      title: 'Una piattaforma per molti ambiti',
      lead: 'Un edificio, una fabbrica, una serra o un parcheggio: Matrix organizza e gestisce ogni dispositivo che si trova al loro interno.',
    },
    scnItems: [
      {
        title: 'Edifici e campus smart',
        text: 'Controllo a livello di piano e stanza, con illuminazione, clima e accessi gestiti in un unico posto.',
      },
      {
        title: 'Industria e officine',
        text: 'Porta online i macchinari di linea Modbus e PLC e dai nuova capacità alle macchine esistenti.',
      },
      {
        title: 'Agricoltura e serre',
        text: 'Monitora l’ambiente e automatizza irrigazione e ventilazione — senza presidio in loco.',
      },
      {
        title: 'Residenze e parcheggi',
        text: 'Parcheggi, sbarre, sicurezza e dispositivi delle aree comuni in un’unica vista, con un clic.',
      },
    ],
    scnLink: 'Vedi gli scenari',
    stepsHead: {
      eyebrow: 'Come iniziare',
      title: 'Quattro passi dall’accesso ai dispositivi live',
      lead: 'Nessun backend da mettere in piedi: dopo l’accesso la tua organizzazione, i tuoi spazi e il tuo parco dispositivi sono pronti.',
    },
    steps: [
      {
        title: 'Accedi',
        text: 'Entra con il tuo account OAuth (ad es. GitHub) e crea o raggiungi un’organizzazione.',
      },
      {
        title: 'Mappa gli spazi',
        text: 'Costruisci la struttura campus / edificio / piano aderente al mondo reale, come mattoncini.',
      },
      {
        title: 'Associa i dispositivi',
        text: 'Scegli un modello di prodotto già definito, oppure scansiona un QR code, e inserisci i dispositivi negli spazi.',
      },
      {
        title: 'Automatizza e gestisci',
        text: 'Configura monitoraggio e regole di scena, poi osserva e controlla da Web, iOS e Android.',
      },
    ],
    ctaTitle: 'Fai connettere davvero ogni dispositivo',
    ctaText: 'Entra ora in Matrix: crea la tua prima organizzazione e il tuo primo spazio e porta i dispositivi nel mondo digitale.',
  },

  capability: {
    metaTitle: 'Funzionalità',
    metaDesc:
      'Funzionalità della piattaforma IoT Matrix: accesso multi-protocollo dei dispositivi, modellazione di spazi e siti, modelli di cosa di prodotto, monitoraggio in tempo reale e automazione delle scene.',
    hero: {
      eyebrow: 'Funzionalità della piattaforma',
      pre: 'Dall’onboarding all’automazione — ',
      grad: 'tutta la piattaforma, end to end',
      lead: 'Matrix integra accesso ai dispositivi, organizzazione degli spazi, gestione dei modelli di cosa e automazione in un unico sistema: costruire un’app IoT non è più un insieme di strumenti separati.',
      secondary: 'Vedi i casi d’uso',
    },
    sections: [
      {
        eyebrow: 'Funzionalità 01 · Accesso dispositivi',
        title: 'Accesso multi-protocollo, onboarding semplice',
        paragraphs: [
          'Matrix combina una piattaforma cloud con i gateway per portare dispositivi di ogni generazione e protocollo in un unico sistema: dal fieldbus Modbus ai dispositivi smart MQTT, passando per Matter e PLC, tutto si connette ed è gestito in modo uniforme.',
        ],
        checks: [
          'Protocolli diffusi come Modbus RTU / TCP e MQTT per i siti industriali e gli edifici più comuni',
          'Protocolli consumer e verticali come Matter e PLC, aggiunti di continuo',
          'Tunneling tramite gateway 485 e 4G DTU: i dispositivi esistenti si connettono senza essere sostituiti',
          'Associazione via QR code e id univoco del dispositivo: connesso significa nominato, localizzato e gestito',
        ],
        link: 'Fai il tuo primo onboarding nella piattaforma',
      },
      {
        eyebrow: 'Funzionalità 02 · Modellazione spazi',
        title: 'Lo spazio è la struttura — i dispositivi ci crescono dentro',
        paragraphs: [
          'I dispositivi non sono isole: appartengono a uno spazio. Riproduci la disposizione reale con i livelli campus, edificio, piano e stanza e osserva tutto, dall’“intero campus” fino alla “singola stanza”.',
        ],
        checks: [
          'Campus / edificio / piano / stanza, più tipi di sito come officina, serra e parcheggio',
          'Un albero in cui scendere livello per livello per raggiungere qualsiasi dispositivo in fretta',
          'Aggregazioni per spazio: lo stato di un intero piano o campus a colpo d’occhio',
          'I livelli crescono liberamente quando il business cambia forma',
        ],
        link: 'Come si mappano gli spazi nei diversi ambiti',
      },
      {
        eyebrow: 'Funzionalità 03 · Prodotti e modelli di cosa',
        title: 'Il prodotto è lo standard, i dispositivi sono istanze',
        paragraphs: [
          'Definisci una volta sola un prodotto e il suo modello di cosa, poi esegui l’onboarding e riutilizza i dispositivi in blocco, mantenendo coerenti i dati e il controllo a valle.',
        ],
        checks: [
          'Definisci prodotti e modelli con proprietà, tipi e accesso in lettura/scrittura ben visibili',
          'Le proprietà riportano in tempo reale; i comandi di controllo si diramano verso le istanze giuste',
          'Ciclo di vita completo: in sviluppo → anteprima → rilasciato',
          'Stesso modello, stesso dispositivo: colleghi e tutto si allinea, cambi l’unità senza cambiare la logica',
        ],
        link: 'Definisci un prodotto nella piattaforma',
      },
      {
        eyebrow: 'Funzionalità 04 · Monitoraggio e automazione',
        title: 'Lo vedi, lo controlli — e lui agisce da solo',
        paragraphs: [
          'Stato in tempo reale a schermo e comandi con un tocco sono solo la base. Matrix va oltre con regole ed eventi, perché tutto il sistema funzioni come vuoi tu.',
        ],
        checks: [
          'Proprietà ed eventi in streaming live; la cronologia resta tracciabile',
          'Comandi e parametri da remoto, con esperienza identica su Web / iOS / Android',
          'Scene con un tocco: arrivo, rientro, uscita dal campus — un’azione, una cascata di comandi',
          'Automazione a regole: condizioni come temperatura eccessiva o porta aperta attivano azioni sui dispositivi',
        ],
        link: 'Vedi le scene di automazione tipiche',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Piattaforma Matrix',
      hubSub: 'Un accesso · un modello · un controllo',
      gateways: ['Gateway 485 / TCP', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['Clima', 'Luci', 'Contatore', 'Temp. / umidità', 'Serratura', 'Macchine di linea'],
    },
    space: {
      root: 'Campus smart',
      nodes: ['Edificio A', 'Piano 3'],
      leaves: [
        {name: 'Sala riunioni', count: '2 dispositivi'},
        {name: 'Atrio', count: '1 dispositivo'},
      ],
      types: ['Campus', 'Edificio', 'Piano', 'Stanza', 'Officina', 'Serra', 'Parcheggio', 'Zona'],
    },
    model: {
      name: 'Prodotto · Monitor ambientale',
      badge: 'Rilasciato',
      rows: [
        {name: 'Temperatura', kind: 'Numero · report', writable: false},
        {name: 'Umidità', kind: 'Numero · report', writable: false},
        {name: 'Interruttore ventola', kind: 'Booleano · controllo', writable: true},
        {name: 'Stato di esecuzione', kind: 'Enum · stato', writable: false},
      ],
      foot: 'Ogni dispositivo connesso è un’“istanza” di questo prodotto — proprietà e controllo si allineano automaticamente',
    },
    control: {
      tileTitle: 'Monitoraggio in tempo reale',
      tileSub: 'Sala riunioni',
      live: [
        {text: 'Temperatura 26,0 ℃', ok: false},
        {text: 'Luci accese', ok: false},
        {text: 'Comando applicato', ok: true},
      ],
      rules: [
        {name: 'Regola “Routine di uscita”', desc: 'Alle 17:30, o quando esce l’ultima persona → luci spente, clima in eco, serrature in allarme'},
        {name: 'Regola “Allarme surriscaldamento”', desc: 'Soglia superata → notifica e avvio automatico della ventola'},
      ],
    },
    ctaTitle: 'Dispositivi, piattaforma, app — tutta la catena, connessa',
    ctaText: 'Entra ora in Matrix e vivi il percorso completo: definisci un prodotto, esegui l’onboarding dei dispositivi e configura l’automazione delle scene.',
  },

  scenario: {
    metaTitle: 'Scenari',
    metaDesc:
      'Scenari IoT tipici di Matrix: edifici e campus smart, industria e officine, agricoltura e serre, parcheggi commerciali e residenziali.',
    hero: {
      eyebrow: 'Casi d’uso',
      pre: 'Dagli edifici alle officine — ',
      grad: 'Matrix ha la soluzione',
      lead: 'Grazie alla modellazione degli spazi e all’accesso multi-protocollo, Matrix si adatta subito a edifici, industria, agricoltura e residenze. Questi sono esempi — la piattaforma va ben oltre.',
      secondary: 'Scopri le funzionalità',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Edifici e campus smart',
          lead: 'Controllo preciso a livello di piano e stanza: illuminazione, clima, accessi ed energia sotto lo stesso tetto, su un’unica schermata.',
          bullets: [
            'Un albero campus / edificio / piano / stanza con i dispositivi raggiungibili livello per livello',
            'Accensione e spegnimento centralizzati di clima e luci; un comando per inserire o togliere l’allarme delle serrature',
            'Aggregazioni di stato e consumi per piano, con avvisi appena qualcosa non va',
            'Flussi di accesso e visitatori integrati — un ciclo completo arrivo / incontro / uscita',
          ],
          spaces: ['Campus', 'Edificio', 'Piano', 'Stanza'],
          keywords: ['Automazione edifici', 'Energia', 'Controllo accessi', 'Sale riunioni'],
        },
        {
          index: '02',
          title: 'Industria e officine',
          lead: 'Porta online i macchinari di linea Modbus e PLC, trasformando le “macchine mute” in reparto in fonti di dati monitorabili e tracciabili.',
          bullets: [
            'Raccolta dello stato di linea via Modbus RTU / TCP o PLC, diretto o tramite gateway',
            'Proprietà e allarmi arrivano su un’unica schermata che l’operatore tiene d’occhio',
            'Manutenzione da remoto e invio di parametri riducono gli interventi in loco',
            'Ogni evento viene conservato: un dataset che cresce per l’analisi di produzione e guasti',
          ],
          spaces: ['Officina', 'Zona'],
          keywords: ['Macchine connesse', 'Monitoraggio linea', 'Manutenzione remota', 'Tracciabilità dati'],
        },
        {
          index: '03',
          title: 'Agricoltura e serre',
          lead: 'Monitora l’ambiente della serra e controllalo quando serve: irrigazione, ventilazione e ombreggiatura non aspettano più nessuno in loco.',
          bullets: [
            'Letture in tempo reale da sensori di temperatura, umidità, luce e suolo',
            'Con temperatura eccessiva la ventola parte da sola; con umidità bassa scatta l’irrigazione',
            'Ogni serra modellata come sito a sé, gestita insieme alle altre con controllo per zona',
            'Avvisi immediati appena qualcosa non va — nessun presidio 24 ore su 24',
          ],
          spaces: ['Serra', 'Campo', 'Zona'],
          keywords: ['Sensori ambientali', 'Irrigazione automatica', 'Ventilazione e ombreggio', 'Controllo a zone'],
        },
        {
          index: '04',
          title: 'Parcheggi commerciali e residenziali',
          lead: 'Unisci posti auto, sbarre, sicurezza e dispositivi delle aree comuni in un’unica vista, con gestione a un tocco e un servizio più fluido.',
          bullets: [
            'Occupazione e stato delle sbarre connessi — parcheggio e pagamenti diventano trasparenti',
            'Accessi e illuminazione comune programmati per zona per ridurre i consumi a vuoto',
            'Flussi dei visitatori integrati nella gestione immobiliare, in un ciclo completo',
            'Una sola dashboard per più immobili e più ambiti, pensata per chi gestisce',
          ],
          spaces: ['Parcheggio', 'Zona', 'Edificio'],
          keywords: ['Gestione parcheggi', 'Sbarre', 'Sicurezza accessi', 'Illuminazione comune'],
        },
      ],
    },
    more: {
      eyebrow: 'In arrivo',
      text: 'Il modello di spazio estensibile e l’accesso aperto di Matrix continuano a trovare nuovi ambiti — gestione energetica, catena del freddo, catene retail, hotel smart…',
    },
    ctaTitle: 'Trova lo scenario che fa per te',
    ctaText: 'Porta i tuoi siti e i tuoi dispositivi in Matrix — partendo da un’organizzazione e uno spazio.',
  },

  apps: {
    metaTitle: 'Scarica l’app',
    metaDesc:
      'Scarica il client della piattaforma IoT Matrix: app per Android e iPhone per associare dispositivi, vedere lo stato in tempo reale, controllare da remoto e automatizzare le scene.',
    hero: {
      eyebrow: 'App',
      pre: 'Matrix in tasca — ',
      grad: 'i tuoi dispositivi sempre a portata di mano',
      lead: 'Il client Matrix copre Android e iPhone: associa i dispositivi con il QR code, guarda lo stato in tempo reale e invia comandi da qualsiasi luogo — con lo stesso account e gli stessi dati della console Web.',
      primary: 'Scarica l’app',
      secondary: 'Scopri le funzionalità',
    },
    download: {
      eyebrow: 'Download',
      title: 'Scegli la tua piattaforma',
      lead: 'Installa e accedi con OAuth per ritrovare le stesse organizzazioni, gli stessi spazi e gli stessi dispositivi che hai sul Web.',
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Versione', released: 'Data di rilascio', size: 'Dimensione pacchetto', minOs: 'Richiede'},
      notesTitle: 'Novità',
      available: 'Disponibile',
      comingSoon: 'In arrivo',
      pending: 'Non ancora disponibile',
      buttons: {android: 'Scarica l’APK', ios: 'Apri l’App Store'},
      scanTitle: 'Scansiona per installare',
      scanHint: 'Inquadra il codice con la fotocamera del telefono per scaricare l’app direttamente sul tuo dispositivo',
    },
    install: {
      eyebrow: 'Installazione',
      title: 'Installa e via',
      lead: 'Il pacchetto Android arriva direttamente dall’object storage, senza marketplace di terze parti, e accede allo stesso account e agli stessi dati della console Web.',
      stepAndroid: {
        title: 'Installa su Android',
        text: 'Tocca “Scarica l’APK”: il browser salva il pacchetto, aprilo sul telefono per installarlo. Se richiesto, consenti l’installazione da origini sconosciute solo per questa volta.',
      },
      stepIosPending: {
        title: 'Aspetta il rilascio per iPhone',
        text: 'L’app per iPhone arriva tramite App Store. Appena sarà disponibile, il link allo store comparirà su questa pagina — nel frattempo puoi cercare Matrix nello store.',
      },
      stepIosReady: {
        title: 'Installa su iPhone',
        text: 'Tocca “Apri l’App Store” o scansiona il codice per aprire lo store — oppure cerca Matrix nell’App Store.',
      },
      stepWeb: {
        title: 'Oppure usa il Web',
        text: 'Preferisci non installare nulla? Apri app.wematrix.cc nel browser del telefono e accedi: tutte le funzioni sono lì.',
      },
    },
    ctaTitle: 'Metti i tuoi dispositivi in tasca',
    ctaText: 'Scarica il client Matrix e controlla lo stato o invia comandi da qualsiasi luogo.',
  },
};
