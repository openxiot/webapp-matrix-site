import type {Dict} from '../types';

/* Deutsch (de) —— /de/...
 * 德语站点文案。品牌与技术名一律保留原样：Matrix、Modbus、MQTT、Matter、PLC、485、
 * 4G DTU、OAuth、Web、iOS、Android、APK、App Store、GitHub、Open API、app.wematrix.cc。
 * 全文统一称呼「Sie」；引号用德语习惯的 „ “。 */

export const de: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Anmelden', secondary: 'Funktionen entdecken'},
  home: {
    metaDesc:
      'Matrix ist die IoT-Plattform aus einer Hand für Teams: Geräteanbindung, Bereichsmodellierung, Produkt- und Gerätemodelle sowie Szenen-Automatik in einem System – auf Web, iOS und Android.',
    pill: 'MATRIX · IoT-Plattform aus einer Hand',
    heroA: 'Eine IoT-Plattform aus einer Hand –',
    heroB: 'die alles wirklich verbindet',
    heroSub:
      'Matrix bringt Geräteanbindung, Bereichsorganisation, Gerätemodelle und Szenen-Automatik zusammen – vom Edge-Gateway bis zur Cloud-Konsole. Nichts selbst aufsetzen: einfach anmelden und loslegen.',
    heroCtaSecondary: 'Funktionen entdecken',
    points: ['Web · iOS · Android synchron', 'OAuth-Anmeldung mit einem Klick', 'Zusammenarbeit in der Organisation'],
    mock: {
      scanTag: 'Gerät scannen & binden',
      sceneTag: 'Szenen-Automatik',
      windowTitle: 'Matrix · Geräteübersicht',
      liveTag: 'Beispielansicht',
      rail: ['Smart Campus', 'Geb. A · Etage 3', 'Werkstatt Süd'],
      tiles: [
        {name: 'Klima', value: '26.0 ℃', sub: 'Kühlung · aktiv'},
        {name: 'Licht', value: 'An', sub: 'Szene · Büromodus'},
        {name: 'Stromzähler', value: '12.4 kW', sub: 'Live-Bericht'},
        {name: 'Türschloss', value: 'Verriegelt', sub: 'Scharf'},
      ],
      foot: 'Letztes Ereignis: Licht im Meetingraum → Szene „Feierabend“ ausgelöst',
    },
    capHead: {
      eyebrow: 'Plattform',
      title: 'Eine Plattform für die komplette IoT-Reise',
      lead: 'Von Edge-Geräten bis zur Cloud-Konsole: Matrix fasst Anbindung, Struktur, Verwaltung und Automatisierung in einem System zusammen.',
    },
    capItems: [
      {
        title: 'Multi-Protokoll-Anbindung',
        text: 'Geräte über Industrie-Gateways und viele Protokolle anbinden – Modbus, MQTT, Matter, PLC, 485 / 4G DTU – und in ein einheitliches Gerätemodell führen. QR-Code scannen und das Gerät einem Bereich zuordnen.',
      },
      {
        title: 'Bereiche & Standorte abbilden',
        text: 'Geräte in einem Baum aus Bereichen organisieren – Campus → Gebäude → Etage → Raum – dazu Werkstätten, Gewächshäuser und Parkplätze, ganz nah an der realen Welt.',
      },
      {
        title: 'Produkte & Gerätemodelle',
        text: 'Ein Produkt und sein Gerätemodell einmal definieren: Eigenschaften, Zustände und schreibbare Steuerungen sind alle sichtbar. Jedes angebundene Gerät ist eine Instanz des Modells – konsistent und wiederverwendbar.',
      },
      {
        title: 'Live-Überwachung & Steuerung',
        text: 'Der Gerätezustand strömt in Echtzeit ein, Eigenschaften sind aus der Ferne lesbar und schreibbar. Schalter und Parameter jederzeit senden und alle Geräte aus einer Ansicht bedienen.',
      },
      {
        title: 'Szenen & Automatisierung',
        text: 'Automatisierung über Regeln und Ereignisse: Tür auf und das Licht geht an, oder die Klimaanlage reagiert auf die Temperatur – Geräte arbeiten von selbst zusammen.',
      },
      {
        title: 'Organisationen & Rechte',
        text: 'Eine Plattform gemeinsam rund um eine Organisation betreiben, mit abgestuften Mitgliedern und Rechten. Anmeldung per OAuth – kein eigenes Kontosystem zu pflegen.',
      },
    ],
    scnHead: {
      eyebrow: 'Szenarien',
      title: 'Eine Plattform für viele Branchen',
      lead: 'Ein Gebäude, eine Fabrik, ein Gewächshaus oder ein Parkplatz – Matrix kann jedes Gerät darin strukturieren und verwalten.',
    },
    scnItems: [
      {
        title: 'Smarte Gebäude & Campus',
        text: 'Steuerung auf Etagen- und Raumebene, Licht, Klima und Zutritt an einem Ort verwaltet.',
      },
      {
        title: 'Industrie & Werkstätten',
        text: 'Modbus- und PLC-Anlagen online bringen und alten Maschinen neue Fähigkeiten geben.',
      },
      {
        title: 'Landwirtschaft & Gewächshäuser',
        text: 'Klima überwachen, Bewässerung und Lüftung automatisieren – niemand muss vor Ort bleiben.',
      },
      {
        title: 'Gewerbe & Quartiersparken',
        text: 'Stellplätze, Schranken, Sicherheit und Technik in einer Ansicht, mit einem Klick.',
      },
    ],
    scnLink: 'Szenarien ansehen',
    stepsHead: {
      eyebrow: 'Erste Schritte',
      title: 'In vier Schritten von der Anmeldung zum laufenden Gerät',
      lead: 'Kein eigenes Backend nötig – nach der Anmeldung stehen Organisation, Bereiche und Gerätebestand bereit.',
    },
    steps: [
      {
        title: 'Anmelden',
        text: 'Mit Ihrem OAuth-Konto (z. B. GitHub) anmelden und eine Organisation anlegen oder beitreten.',
      },
      {
        title: 'Bereiche anlegen',
        text: 'Bauen Sie Campus / Gebäude / Etage so auf, wie es real aussieht – so einfach wie mit Bausteinen.',
      },
      {
        title: 'Geräte binden',
        text: 'Wählen Sie ein fertig definiertes Gerätemodell oder scannen Sie einen QR-Code und ordnen Sie Geräte Bereichen zu.',
      },
      {
        title: 'Automatisieren & betreiben',
        text: 'Überwachung und Szenen-Regeln einrichten, dann auf Web, iOS und Android ansehen und steuern.',
      },
    ],
    ctaTitle: 'Damit jedes Gerät wirklich verbunden ist',
    ctaText: 'Starten Sie jetzt mit Matrix – legen Sie Ihre erste Organisation und Ihren ersten Bereich an und holen Sie Ihre Geräte in die digitale Welt.',
  },

  capability: {
    metaTitle: 'Funktionen',
    metaDesc:
      'Funktionen der Matrix IoT-Plattform: Multi-Protokoll-Geräteanbindung, Bereichs- und Standortmodellierung, Produkt- und Gerätemodelle, Live-Überwachung und Szenen-Automatik.',
    hero: {
      eyebrow: 'Plattform-Funktionen',
      pre: 'Von der Inbetriebnahme bis zur Automatisierung – ',
      grad: 'die komplette Plattform, von A bis Z',
      lead: 'Matrix integriert Geräteanbindung, Bereichsorganisation, Gerätemodell-Verwaltung und Automatisierung in einem System – eine IoT-App zu bauen ist damit kein Zusammensuchen verstreuter Tools mehr.',
      secondary: 'Szenarien ansehen',
    },
    sections: [
      {
        eyebrow: 'Funktion 01 · Geräteanbindung',
        title: 'Multi-Protokoll-Anbindung, einfach in Betrieb genommen',
        paragraphs: [
          'Matrix kombiniert Cloud-Plattform und Gateways und holt Geräte jedes Alters und Protokolls in ein System – ob Modbus-Feldbus, MQTT-Geräte, Matter oder PLC: alles wird einheitlich angebunden und verwaltet.',
        ],
        checks: [
          'Gängige Protokolle wie Modbus RTU / TCP und MQTT für Industrie und Gebäude',
          'Consumer- und Branchenprotokolle wie Matter und PLC kommen laufend dazu',
          '4G DTU und 485-Gateway-Tunneling – Bestandsgeräte gehen online, ohne getauscht zu werden',
          'QR-Code-Bindung plus eindeutige Geräte-ID: verbunden heißt benannt, verortet und verwaltet',
        ],
        link: 'Erste Inbetriebnahme direkt in der Plattform',
      },
      {
        eyebrow: 'Funktion 02 · Bereiche modellieren',
        title: 'Der Bereich ist die Struktur – Geräte wachsen hinein',
        paragraphs: [
          'Geräte stehen nicht für sich, sie gehören zu einem Bereich. Bilden Sie die reale Aufteilung mit Campus, Gebäude, Etage und Raum ab – und sehen Sie alles vom ganzen Campus bis zum einzelnen Raum.',
        ],
        checks: [
          'Campus / Gebäude / Etage / Raum sowie Werkstatt, Gewächshaus und Parkplatz',
          'Ein Baum, in dem Sie Ebene für Ebene bis zu jedem Gerät durchklicken',
          'Aggregation pro Bereich – der Zustand einer ganzen Etage oder eines Campus auf einen Blick',
          'Ebenen wachsen mit, wenn sich Ihr Geschäft verändert',
        ],
        link: 'So werden Bereiche in verschiedenen Branchen aufgebaut',
      },
      {
        eyebrow: 'Funktion 03 · Produkte & Gerätemodelle',
        title: 'Das Produkt ist der Standard, das Gerät die Instanz',
        paragraphs: [
          'Ein Produkt und sein Gerätemodell werden einmal definiert – danach lassen sich Geräte in Serie anbinden und wiederverwenden, und Daten wie Steuerung bleiben konsistent.',
        ],
        checks: [
          'Produkte und Modelle definieren: Eigenschaften, Typen und Lese-/Schreibrechte klar sichtbar',
          'Eigenschaften melden in Echtzeit, Steuerbefehle gehen an die passenden Geräteinstanzen',
          'Voller Lebenszyklus: in Entwicklung → Vorschau → veröffentlicht',
          'Gleiches Modell, gleiches Gerät: anstecken und automatisch ausrichten, Gerät tauschen ohne Logik zu ändern',
        ],
        link: 'Ein Produkt in der Plattform definieren',
      },
      {
        eyebrow: 'Funktion 04 · Monitoring & Szenen-Automatik',
        title: 'Sehen, steuern – und von selbst handeln lassen',
        paragraphs: [
          'Live-Status auf dem Bildschirm und Befehle per Klick sind nur die Basis. Matrix geht weiter: Regeln und Ereignisse lassen das ganze System so laufen, wie Sie es wollen.',
        ],
        checks: [
          'Eigenschaften und Ereignisse live, die Historie bleibt nachvollziehbar',
          'Schalter und Parameter aus der Ferne, mit identischem Erlebnis auf Web / iOS / Android',
          'Szenen per Klick: Ankommen, Nachhause, Campus verlassen – eine Aktion, viele Befehle',
          'Regel-Automatisierung: Bedingungen wie Übertemperatur oder offene Tür lösen Geräteaktionen aus',
        ],
        link: 'Typische Automatisierungsszenen ansehen',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Matrix-Plattform',
      hubSub: 'Eine Anbindung · ein Modell · eine Steuerung',
      gateways: ['485 / TCP Gateway', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['Klimaanlage', 'Licht', 'Stromzähler', 'Temp. / Feuchte', 'Türschloss', 'Linienanlagen'],
    },
    space: {
      root: 'Smart Campus',
      nodes: ['Gebäude A', 'Etage 3'],
      leaves: [
        {name: 'Meetingraum', count: '2 Geräte'},
        {name: 'Foyer', count: '1 Gerät'},
      ],
      types: ['Campus', 'Gebäude', 'Etage', 'Raum', 'Werkstatt', 'Gewächshaus', 'Parkplatz', 'Zone'],
    },
    model: {
      name: 'Produkt · Klimamonitor',
      badge: 'Veröffentlicht',
      rows: [
        {name: 'Temperatur', kind: 'Zahl · Meldung', writable: false},
        {name: 'Luftfeuchte', kind: 'Zahl · Meldung', writable: false},
        {name: 'Lüfterschalter', kind: 'Boolesch · Steuerung', writable: true},
        {name: 'Betriebszustand', kind: 'Enum · Status', writable: false},
      ],
      foot: 'Jedes angebundene Gerät ist eine „Instanz“ dieses Produkts – Eigenschaften und Steuerung richten sich automatisch aus',
    },
    control: {
      tileTitle: 'Live-Überwachung',
      tileSub: 'Meetingraum',
      live: [
        {text: 'Temperatur 26.0℃', ok: false},
        {text: 'Licht an', ok: false},
        {text: 'Befehl ausgeführt', ok: true},
      ],
      rules: [
        {name: 'Regel „Feierabend“', desc: 'Um 17:30 oder wenn der Letzte geht → Licht aus, Klima auf Eco, Türen verriegelt'},
        {name: 'Regel „Überhitzung“', desc: 'Grenzwert überschritten → Benachrichtigung und Lüfter startet automatisch'},
      ],
    },
    ctaTitle: 'Geräte, Plattform, Apps – die ganze Kette verbunden',
    ctaText: 'Starten Sie jetzt mit Matrix und erleben Sie den kompletten Weg: Produkt definieren, Geräte anbinden, Szenen-Automatik einrichten.',
  },

  scenario: {
    metaTitle: 'Szenarien',
    metaDesc:
      'Typische Szenarien der Matrix IoT-Plattform: smarte Gebäude & Campus, Industrie & Werkstätten, Landwirtschaft & Gewächshäuser sowie Parkraum für Gewerbe und Quartier.',
    hero: {
      eyebrow: 'Anwendungsfälle',
      pre: 'Von Gebäuden bis zu Werkstätten – ',
      grad: 'bei Matrix sind Sie richtig',
      lead: 'Dank Bereichsmodellierung und Multi-Protokoll-Anbindung passt Matrix von Haus aus zu Gebäuden, Industrie, Landwirtschaft und Quartieren. Diese Beispiele sind nur ein Auszug – die Plattform kann deutlich mehr.',
      secondary: 'Funktionen entdecken',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Smarte Gebäude & Campus',
          lead: 'Steuerung auf Etagen- und Raumebene: Licht, Klima, Zutritt und Energie an einem Ort, auf einem Bildschirm.',
          bullets: [
            'Campus- / Gebäude- / Etagen- / Raum-Baum, Geräte Ebene für Ebene erreichbar',
            'Klima und Licht zentral schalten, Türschlösser mit einem Befehl scharf und unscharf stellen',
            'Energie- und Zustandswerte pro Etage zusammengefasst, Alarm bei Abweichungen',
            'Zutritt und Besucherverkehr eingebunden – ein kompletter Ablauf von Ankunft über Termin bis zum Gehen',
          ],
          spaces: ['Campus', 'Gebäude', 'Etage', 'Raum'],
          keywords: ['Gebäudetechnik', 'Energie', 'Zutrittskontrolle', 'Meetingräume'],
        },
        {
          index: '02',
          title: 'Industrie & Werkstätten',
          lead: 'Bestandsanlagen mit Modbus und PLC gehen online – aus „stummen Maschinen“ in der Halle werden überwachbare, nachvollziehbare Datenquellen.',
          bullets: [
            'Anlagenzustand über Modbus RTU / TCP oder PLC sammeln, direkt oder über Gateway',
            'Eigenschaften und Alarme laufen auf einem Bildschirm zusammen, den die Schicht im Blick hat',
            'Fernwartung und Parameter-Download senken die Zahl der Vor-Ort-Einsätze',
            'Jedes Ereignis wird festgehalten – wachsende Datenbasis für Ausstoß- und Fehleranalysen',
          ],
          spaces: ['Werkstatt', 'Zone'],
          keywords: ['Maschinenanbindung', 'Linienüberwachung', 'Fernwartung', 'Datenhistorie'],
        },
        {
          index: '03',
          title: 'Landwirtschaft & Gewächshäuser',
          lead: 'Gewächshausklima überwachen und bedarfsgerecht steuern – Bewässerung, Lüftung und Beschattung warten nicht mehr auf jemanden vor Ort.',
          bullets: [
            'Temperatur, Feuchte, Licht und Bodenfeuchte in Echtzeit erfassen',
            'Bei Übertemperatur startet der Lüfter, bei zu niedriger Feuchte die Bewässerung',
            'Jedes Gewächshaus als eigener Standort modelliert, gemeinsam verwaltet und pro Zone gesteuert',
            'Abweichungen werden sofort gemeldet – keine 24-Stunden-Bereitschaft nötig',
          ],
          spaces: ['Gewächshaus', 'Feld', 'Zone'],
          keywords: ['Klimasensorik', 'Bewässerung', 'Lüftung & Beschattung', 'Zonensteuerung'],
        },
        {
          index: '04',
          title: 'Gewerbe & Quartiersparken',
          lead: 'Stellplätze, Schranken, Sicherheit und Technik in Gemeinschaftsflächen in einer Ansicht – Verwaltung per Klick und ein reibungsloserer Ablauf.',
          bullets: [
            'Belegung und Schrankenstatus angebunden – Parkraum und Bezahlung werden transparent',
            'Zutritt und Allgemeinbeleuchtung pro Zone getaktet, das senkt Leerlaufenergie',
            'Besucherverkehr mit den Abläufen der Verwaltung verzahnt – ein kompletter Kreis',
            'Eine Ansicht über mehrere Objekte und Branchen für die Verwaltung',
          ],
          spaces: ['Parkplatz', 'Zone', 'Gebäude'],
          keywords: ['Parkraum', 'Schranken', 'Zutrittssicherheit', 'Beleuchtung'],
        },
      ],
    },
    more: {
      eyebrow: 'Mehr in Planung',
      text: 'Das erweiterbare Bereichsmodell und die offene Anbindung von Matrix erschließen laufend neue Felder – Energiemanagement, Kühlketten-Lager, Filialketten, Smart Hotels …',
    },
    ctaTitle: 'Finden Sie Ihr Szenario',
    ctaText: 'Bringen Sie Ihre Standorte und Geräte in Matrix – anfangen können Sie mit einer Organisation und einem Bereich.',
  },

  apps: {
    metaTitle: 'App herunterladen',
    metaDesc:
      'Matrix IoT-Plattform als App: Android- und iPhone-Version zum Binden von Geräten, für Live-Status, Fernsteuerung und Szenen-Automatik.',
    hero: {
      eyebrow: 'Apps',
      pre: 'Matrix für die Tasche – ',
      grad: 'Ihre Geräte immer griffbereit',
      lead: 'Der Matrix-Client läuft auf Android und iPhone: Geräte per QR-Code binden, Live-Status verfolgen und Befehle von überall senden – mit demselben Konto und denselben Daten wie in der Web-Konsole.',
      primary: 'App herunterladen',
      secondary: 'Funktionen entdecken',
    },
    download: {
      eyebrow: 'Download',
      title: 'Wählen Sie Ihre Plattform',
      lead: 'Installieren und per OAuth anmelden – schon sehen Sie dieselben Organisationen, Bereiche und Geräte wie im Web.',
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Version', released: 'Veröffentlicht', size: 'Paketgröße', minOs: 'Voraussetzung'},
      notesTitle: 'Neuerungen',
      available: 'Verfügbar',
      comingSoon: 'Demnächst',
      pending: 'Noch nicht verfügbar',
      buttons: {android: 'APK herunterladen', ios: 'Zum App Store'},
      scanTitle: 'Zum Installieren scannen',
      scanHint: 'Handykamera auf den Code richten und die App direkt aufs Handy laden',
    },
    install: {
      eyebrow: 'Installation',
      title: 'Installieren und loslegen',
      lead: 'Das Android-Paket kommt direkt aus dem Objektspeicher, nicht über einen Drittanbieter-Marktplatz, und meldet sich am selben Konto und Datenbestand an wie die Web-Konsole.',
      stepAndroid: {
        title: 'Auf Android installieren',
        text: 'Tippen Sie auf „APK herunterladen“ – der Browser speichert das Paket; öffnen Sie es auf dem Handy, um es zu installieren. Falls gefragt: erlauben Sie einmalig die Installation aus unbekannten Quellen.',
      },
      stepIosPending: {
        title: 'Auf die iPhone-Version warten',
        text: 'Die iPhone-App kommt über den App Store. Sobald sie live ist, erscheint der Store-Link auf dieser Seite – suchen Sie im Store nach Matrix.',
      },
      stepIosReady: {
        title: 'Auf dem iPhone installieren',
        text: 'Tippen Sie auf „Zum App Store“ oder scannen Sie den Code, um den Store zu öffnen – oder suchen Sie im App Store nach Matrix.',
      },
      stepWeb: {
        title: 'Oder einfach Web nutzen',
        text: 'Lieber nichts installieren? Öffnen Sie app.wematrix.cc im Browser Ihres Handys und melden Sie sich an – alle Funktionen sind da.',
      },
    },
    ctaTitle: 'Ihre Geräte in die Tasche',
    ctaText: 'Laden Sie den Matrix-Client herunter und prüfen Sie den Status oder senden Sie Befehle – von überall.',
  },
};
