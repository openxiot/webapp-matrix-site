import type {Dict} from '../types';

/* Français —— /fr/...
 * 与 en.ts 逐键对应：键名、嵌套结构、数组长度完全一致。
 * 排版遵循法语规范：引号用 « »（内含不换行空格 U+00A0），
 * 冒号 / 问号 / 感叹号前亦为不换行空格。人称统一用 « vous »。 */
export const fr: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Se connecter', secondary: 'Découvrir la plateforme'},
  home: {
    metaDesc:
      "Matrix est une plateforme IoT cloud tout-en-un : mise en service des appareils, modélisation des espaces, modèles d’objet et automatisation par scènes, le tout sur Web, iOS et Android.",
    pill: 'MATRIX · Plateforme IoT tout-en-un',
    heroA: 'Une plateforme IoT tout-en-un —',
    heroB: 'connectez vraiment chaque objet',
    heroSub:
      "Matrix réunit l’accès aux appareils, l’organisation des espaces, les modèles d’objet et l’automatisation par scènes, de la passerelle edge à la console cloud. Rien à construire de zéro : connectez-vous et c’est parti.",
    heroCtaSecondary: 'Découvrir la plateforme',
    points: ['Web · iOS · Android synchronisés', 'Connexion OAuth en un clic', 'Collaboration par organisation'],
    mock: {
      scanTag: 'Scanner pour lier un appareil',
      sceneTag: 'Scènes & automatisation',
      windowTitle: 'Matrix · Vue des appareils',
      liveTag: 'Aperçu',
      rail: ['Campus intelligent', 'Bât. A · Étage 3', 'Atelier Sud'],
      tiles: [
        {name: 'Clim.', value: '26.0 ℃', sub: 'Refroidit · envoyé'},
        {name: 'Éclairage', value: 'Allumé', sub: 'Scène · Mode bureau'},
        {name: 'Compteur', value: '12.4 kW', sub: 'En direct'},
        {name: 'Serrure', value: 'Verrouillée', sub: 'Armée'},
      ],
      foot: 'Dernier événement : éclairage salle de réunion → scène « Fin de journée » exécutée',
    },
    capHead: {
      eyebrow: 'Plateforme',
      title: 'Une seule plateforme pour tout le parcours IoT',
      lead: "Des appareils edge à la console cloud, Matrix réunit accès, organisation, gestion et automatisation dans un seul système.",
    },
    capItems: [
      {
        title: 'Accès multi-protocole des appareils',
        text: "Mettez vos appareils en service via des passerelles industrielles et de nombreux protocoles — Modbus, MQTT, Matter, PLC, 485 / 4G DTU — réunis dans un modèle d’appareil unique. Un simple scan de QR code suffit pour lier un appareil à un espace.",
      },
      {
        title: 'Modélisation des espaces & des sites',
        text: "Organisez vos appareils dans une arborescence d’espaces — campus → bâtiment → étage → pièce — ainsi que les ateliers, les serres et les parkings, en miroir du monde physique.",
      },
      {
        title: 'Produits & modèles d’objet',
        text: "Définissez une fois un produit et son modèle d’objet standard : propriétés, états et commandes accessibles en écriture sont tous visibles. Chaque appareil connecté est une instance d’un modèle — cohérent et réutilisable.",
      },
      {
        title: 'Supervision & contrôle en temps réel',
        text: "L’état des appareils remonte en temps réel ; les propriétés sont lisibles et modifiables à distance. Envoyez commandes et paramètres à tout moment et pilotez tous vos appareils depuis une seule vue.",
      },
      {
        title: 'Scènes & automatisation',
        text: "Une automatisation pilotée par des règles et des événements : déverrouillez une porte et la lumière s’allume, ou laissez le CVC réagir à la température — les appareils collaborent d’eux-mêmes.",
      },
      {
        title: 'Organisations & permissions',
        text: "Pilotez la plateforme à plusieurs autour d’une organisation, avec des membres et des droits par niveaux. Connectez-vous avec OAuth — aucun système de comptes à maintenir.",
      },
    ],
    scnHead: {
      eyebrow: 'Scénarios',
      title: 'Une plateforme, de nombreux métiers',
      lead: "Un immeuble, une usine, une serre ou un parking : Matrix organise et gère tous les appareils qu’ils contiennent.",
    },
    scnItems: [
      {
        title: 'Bâtiments & campus intelligents',
        text: "Un contrôle à l’échelle de l’étage et de la pièce, avec éclairage, CVC et contrôle d’accès gérés au même endroit.",
      },
      {
        title: 'Industrie & ateliers',
        text: "Mettez en ligne vos équipements de production Modbus et PLC et donnez de nouvelles capacités à vos machines existantes.",
      },
      {
        title: 'Agriculture & serres',
        text: "Surveillez l’environnement et automatisez l’arrosage et la ventilation — plus personne ne doit rester sur place.",
      },
      {
        title: 'Résidentiel & parkings',
        text: 'Parkings, barrières, sécurité et équipements des parties communes réunis dans une seule vue, en un clic.',
      },
    ],
    scnLink: 'Voir les scénarios',
    stepsHead: {
      eyebrow: 'Pour démarrer',
      title: 'Quatre étapes, de la connexion aux appareils en ligne',
      lead: "Aucun backend à déployer : dès votre connexion, votre organisation, vos espaces et votre parc d’appareils sont prêts.",
    },
    steps: [
      {
        title: 'Se connecter',
        text: 'Connectez-vous avec votre compte OAuth (par ex. GitHub) et créez ou rejoignez une organisation.',
      },
      {
        title: 'Structurer vos espaces',
        text: 'Reproduisez la structure campus / bâtiment / étage du monde réel, comme des briques à assembler.',
      },
      {
        title: 'Lier les appareils',
        text: 'Choisissez un modèle de produit déjà défini, ou scannez un QR code, et placez vos appareils dans les espaces.',
      },
      {
        title: 'Automatiser & exploiter',
        text: 'Configurez la supervision et les règles de scènes, puis consultez et pilotez depuis Web, iOS et Android.',
      },
    ],
    ctaTitle: 'Connectez vraiment chacun de vos appareils',
    ctaText: 'Entrez dès maintenant dans Matrix — créez votre première organisation et votre premier espace, et faites entrer vos appareils dans le monde numérique.',
  },

  capability: {
    metaTitle: 'Capacités',
    metaDesc:
      "Les capacités de la plateforme IoT Matrix : accès multi-protocole des appareils, modélisation des espaces et des sites, modèles d’objet, supervision en temps réel et automatisation par scènes.",
    hero: {
      eyebrow: 'Capacités de la plateforme',
      pre: "De la mise en service à l’automatisation — ",
      grad: 'toute la plateforme, de bout en bout',
      lead: "Matrix intègre l’accès aux appareils, l’organisation des espaces, la gestion des modèles d’objet et l’automatisation dans un seul système : créer une application IoT n’est plus un assemblage d’outils dispersés.",
      secondary: "Voir les cas d’usage",
    },
    sections: [
      {
        eyebrow: 'Capacité 01 · Accès appareils',
        title: 'Accès multi-protocole, mise en service simplifiée',
        paragraphs: [
          "Matrix associe une plateforme cloud à des passerelles pour réunir dans un même système des appareils de toute génération et de tout protocole — bus de terrain Modbus, objets connectés MQTT, Matter ou PLC : tout se connecte et se pilote de façon homogène.",
        ],
        checks: [
          'Protocoles courants comme Modbus RTU / TCP et MQTT, pour les sites industriels et tertiaires habituels',
          'Les protocoles grand public et métiers, tels que Matter et PLC, sont ajoutés en continu',
          'Tunneling par passerelle 4G DTU et 485 — vos appareils existants se connectent sans être remplacés',
          "Liaison par QR code et identifiant unique : connecté, c’est nommé, localisé et géré",
        ],
        link: 'Réalisez votre première mise en service dans la plateforme',
      },
      {
        eyebrow: 'Capacité 02 · Modélisation des espaces',
        title: "L’espace est la structure — les appareils y prennent place",
        paragraphs: [
          "Les appareils ne sont pas isolés : ils appartiennent à un espace. Reproduisez l’agencement réel avec les niveaux campus, bâtiment, étage et pièce, et visualisez tout, du « campus entier » jusqu’à « une seule pièce ».",
        ],
        checks: [
          "Campus / bâtiment / étage / pièce, ainsi que des types de sites comme l’atelier, la serre et le parking",
          "Une arborescence que vous parcourez niveau par niveau pour atteindre n’importe quel appareil",
          "Agrégation par espace — l’état d’un étage ou d’un campus entier en un coup d’œil",
          'Des niveaux qui évoluent librement au rythme de votre activité',
        ],
        link: 'Comment organiser les espaces selon les métiers',
      },
      {
        eyebrow: 'Capacité 03 · Produits & modèles d’objet',
        title: "Le produit est le standard, l’appareil en est l’instance",
        paragraphs: [
          "Définissez une fois un produit et son modèle d’objet, puis mettez en service et réutilisez les appareils par lots — pour des données et un contrôle en aval toujours cohérents.",
        ],
        checks: [
          'Définissez produits et modèles avec propriétés, types et droits de lecture / écriture bien visibles',
          "Les propriétés remontent en temps réel ; les commandes sont diffusées vers les bonnes instances d’appareil",
          'Cycle de vie complet : en développement → aperçu → publié',
          "Un même modèle, un même appareil : l’alignement est automatique, on change d’unité sans changer la logique",
        ],
        link: 'Définissez un produit dans la plateforme',
      },
      {
        eyebrow: 'Capacité 04 · Supervision & scènes',
        title: 'Voir, piloter — et laisser le système agir seul',
        paragraphs: [
          "L’état en direct à l’écran et les commandes en un geste ne sont que la base. Matrix va plus loin avec des règles et des événements, pour que tout le système fonctionne comme vous le souhaitez.",
        ],
        checks: [
          "Propriétés et événements remontent en direct ; l’historique reste consultable",
          'Commandes et paramètres à distance, avec une expérience Web / iOS / Android identique',
          'Scènes en un geste : arrivée, retour, départ du site — une action, une cascade de commandes',
          "Automatisation par règles : une surchauffe ou une porte ouverte déclenche l’action des appareils",
        ],
        link: "Voir des scènes d’automatisation typiques",
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Plateforme Matrix',
      hubSub: 'Un accès · un modèle · un contrôle',
      gateways: ['Passerelle 485 / TCP', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['Clim.', 'Éclairage', 'Compteur', 'Temp. / hum.', 'Serrure', 'Ligne prod.'],
    },
    space: {
      root: 'Campus intelligent',
      nodes: ['Bâtiment A', 'Étage 3'],
      leaves: [
        {name: 'Salle de réunion', count: '2 appareils'},
        {name: 'Accueil', count: '1 appareil'},
      ],
      types: ['Campus', 'Bâtiment', 'Étage', 'Pièce', 'Atelier', 'Serre', 'Parking', 'Zone'],
    },
    model: {
      name: 'Produit · Station environnement',
      badge: 'Publié',
      rows: [
        {name: 'Température', kind: 'Nombre · remontée', writable: false},
        {name: 'Humidité', kind: 'Nombre · remontée', writable: false},
        {name: 'Ventilateur', kind: 'Booléen · commande', writable: true},
        {name: 'État de marche', kind: 'Énum · état', writable: false},
      ],
      foot: 'Chaque appareil connecté est une « instance » de ce produit — propriétés et contrôle s’alignent automatiquement',
    },
    control: {
      tileTitle: 'Supervision en direct',
      tileSub: 'Salle de réunion',
      live: [
        {text: 'Température 26.0℃', ok: false},
        {text: 'Éclairage allumé', ok: false},
        {text: 'Commande appliquée', ok: true},
      ],
      rules: [
        {name: 'Règle « Routine de départ »', desc: 'À 17 h 30, ou au départ du dernier occupant → éclairage éteint, clim en éco, portes armées'},
        {name: 'Règle « Alerte surchauffe »', desc: 'Seuil dépassé → notification et démarrage automatique du ventilateur'},
      ],
    },
    ctaTitle: 'Appareils, plateforme, applications — toute la chaîne connectée',
    ctaText: "Entrez dès maintenant dans Matrix et parcourez tout le chemin : définissez un produit, mettez vos appareils en service et configurez vos scènes d’automatisation.",
  },

  scenario: {
    metaTitle: 'Scénarios',
    metaDesc:
      'Les scénarios IoT typiques de Matrix : bâtiments et campus intelligents, industrie et ateliers, agriculture et serres, parkings résidentiels et commerciaux.',
    hero: {
      eyebrow: "Cas d’usage",
      pre: "Du bâtiment à l’atelier — ",
      grad: 'Matrix vous accompagne',
      lead: "Grâce à la modélisation des espaces et à l’accès multi-protocole, Matrix s’adapte d’emblée aux bâtiments, à l’industrie, à l’agriculture et au résidentiel. Ces exemples ne sont qu’un aperçu — la plateforme va bien au-delà.",
      secondary: 'Découvrir la plateforme',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Bâtiments & campus intelligents',
          lead: "Un contrôle fin, à l’étage et à la pièce : éclairage, CVC, contrôle d’accès et énergie réunis sous un même toit, sur un même écran.",
          bullets: [
            'Une arborescence campus / bâtiment / étage / pièce, avec les appareils accessibles niveau par niveau',
            "Marche / arrêt centralisé pour la clim et l’éclairage ; une seule commande pour armer ou désarmer les serrures",
            "Agrégats d’énergie et d’état par étage, avec alerte dès qu’une valeur dévie",
            'Accès et parcours visiteurs intégrés — une boucle complète arrivée / rendez-vous / départ',
          ],
          spaces: ['Campus', 'Bâtiment', 'Étage', 'Pièce'],
          keywords: ['Gestion technique', 'Énergie', "Contrôle d’accès", 'Salles de réunion'],
        },
        {
          index: '02',
          title: 'Industrie & ateliers',
          lead: "Mettez en ligne vos équipements de production Modbus et PLC existants : les « machines muettes » de l’atelier deviennent des sources de données supervisables et traçables.",
          bullets: [
            "Collecte de l’état de la ligne en Modbus RTU / TCP ou PLC, en direct ou via une passerelle",
            "Propriétés et alarmes remontent sur l’écran unique que surveille l’opérateur",
            'Maintenance à distance et envoi de paramètres — moins de déplacements sur site',
            'Chaque événement est conservé — un jeu de données qui grandit pour analyser production et pannes',
          ],
          spaces: ['Atelier', 'Zone'],
          keywords: ['Machines connectées', 'Suivi de ligne', 'Télémaintenance', 'Traçabilité'],
        },
        {
          index: '03',
          title: 'Agriculture & serres',
          lead: "Surveillez le climat de la serre et pilotez-le à la demande — arrosage, ventilation et ombrage n’attendent plus personne sur place.",
          bullets: [
            "Relevés en temps réel des capteurs de température, d’humidité, de luminosité et de sol",
            'Une surchauffe démarre le ventilateur, une humidité trop basse déclenche l’irrigation',
            'Chaque serre est modélisée comme un site à part, gérée avec les autres et pilotée par zone',
            "Alerte dès qu’une valeur dévie — plus besoin de surveillance 24 h/24",
          ],
          spaces: ['Serre', 'Parcelle', 'Zone'],
          keywords: ['Capteurs environnement', 'Irrigation auto', 'Ventilation & ombrage', 'Pilotage par zone'],
        },
        {
          index: '04',
          title: 'Parkings commerciaux & résidentiels',
          lead: 'Réunissez places, barrières, sécurité et équipements des parties communes dans une seule vue, pour une gestion en un clic et un service plus fluide.',
          bullets: [
            'Occupation des places et état des barrières connectés — stationnement et paiement deviennent transparents',
            "Accès et éclairage commun programmés par zone pour réduire l’énergie gaspillée",
            'Parcours visiteurs intégrés à l’exploitation pour une boucle complète',
            'Un tableau de bord unique pour plusieurs sites et métiers, côté exploitant',
          ],
          spaces: ['Parking', 'Zone', 'Bâtiment'],
          keywords: ['Gestion du parking', 'Barrières', 'Sécurité accès', 'Éclairage commun'],
        },
      ],
    },
    more: {
      eyebrow: 'Et ensuite',
      text: "Le modèle d’espace extensible de Matrix et son accès ouvert continuent de s’étendre à de nouveaux terrains — gestion de l’énergie, entrepôts frigorifiques, chaînes de magasins, hôtellerie connectée…",
    },
    ctaTitle: 'Trouvez le scénario qui est le vôtre',
    ctaText: 'Mettez vos sites et vos appareils dans Matrix — en commençant par une organisation, un espace.',
  },

  apps: {
    metaTitle: "Obtenir l’application",
    metaDesc:
      "Téléchargez le client de la plateforme IoT Matrix : applications Android et iPhone pour lier vos appareils, suivre l’état en direct, piloter à distance et automatiser par scènes.",
    hero: {
      eyebrow: 'Applications',
      pre: 'Matrix dans votre poche — ',
      grad: 'vos appareils toujours à portée de main',
      lead: "Le client Matrix couvre Android et iPhone : liez vos appareils par QR code, suivez l’état en direct et envoyez des commandes depuis n’importe où — avec le même compte et les mêmes données que la console Web.",
      primary: "Télécharger l’application",
      secondary: 'Découvrir la plateforme',
    },
    download: {
      eyebrow: 'Téléchargement',
      title: 'Choisissez votre plateforme',
      lead: "Installez l’application et connectez-vous avec OAuth pour retrouver les organisations, les espaces et les appareils de votre console Web.",
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Version', released: 'Publiée le', size: 'Taille du paquet', minOs: 'Nécessite'},
      notesTitle: 'Nouveautés',
      available: 'Disponible',
      comingSoon: 'Bientôt disponible',
      pending: 'Pas encore disponible',
      buttons: {android: "Télécharger l’APK", ios: "Voir sur l’App Store"},
      scanTitle: 'Scannez pour installer',
      scanHint: "Visez le code avec l’appareil photo de votre téléphone pour le télécharger dessus",
    },
    install: {
      eyebrow: 'Installation',
      title: "Installez, c’est parti",
      lead: "Le paquet Android provient directement du stockage objet, sans passer par une place de marché tierce ; une fois connecté, vous retrouvez le même compte et les mêmes données que la console Web.",
      stepAndroid: {
        title: 'Installer sur Android',
        text: "Touchez « Télécharger l’APK » : le navigateur enregistre le paquet, ouvrez-le sur votre téléphone pour installer. Si le système le demande, autorisez cette fois l’installation depuis une source inconnue.",
      },
      stepIosPending: {
        title: 'Attendre la sortie iPhone',
        text: "L’application iPhone est distribuée via l’App Store. Dès sa mise en ligne, le lien apparaîtra sur cette page — vous pourrez aussi la rechercher dans l’App Store.",
      },
      stepIosReady: {
        title: 'Installer sur iPhone',
        text: "Touchez « Voir sur l’App Store » ou scannez le code pour ouvrir la boutique — ou recherchez Matrix dans l’App Store.",
      },
      stepWeb: {
        title: 'Ou utilisez simplement le Web',
        text: "Pas envie d’installer ? Ouvrez app.wematrix.cc dans le navigateur de votre téléphone et connectez-vous — toutes les fonctionnalités sont là.",
      },
    },
    ctaTitle: 'Mettez vos appareils dans votre poche',
    ctaText: "Téléchargez le client Matrix et consultez l’état de vos appareils ou envoyez des commandes, où que vous soyez.",
  },
};
