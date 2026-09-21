import type {Dict} from '../types';

/* Português (Brasil) —— /pt-BR/...
 * 巴西葡萄牙语（用巴西用法，非欧洲葡语），自英文基准 en.ts 逐键译出。
 * 统一术语：device=dispositivo、space=espaço、scene=cena、product=produto、
 * thing model=modelo de coisa、property=propriedade、gateway=gateway、
 * automation=automação、organization=organização、campus=campus、building=prédio、
 * floor=andar、room=sala、workshop=oficina、greenhouse=estufa、parking=estacionamento、
 * zone=zona、live monitoring=monitoramento ao vivo、onboarding=onboarding、rule=regra。 */
export const ptBR: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Entrar', secondary: 'Conheça os recursos'},
  home: {
    metaDesc:
      'A Matrix é uma plataforma de IoT em nuvem completa para equipes: onboarding de dispositivos, modelagem de espaços, modelos de coisa e automação de cenas em um único sistema, na Web, no iOS e no Android.',
    pill: 'MATRIX · Plataforma de IoT completa',
    heroA: 'Uma plataforma de IoT completa —',
    heroB: 'para tudo se conectar de verdade',
    heroSub:
      'A Matrix reúne acesso de dispositivos, organização de espaços, modelos de produto e automação de cenas em um só lugar, do gateway de borda ao console na nuvem. Nada para construir do zero — basta entrar e usar.',
    heroCtaSecondary: 'Conheça os recursos',
    points: ['Web · iOS · Android sincronizados', 'Login OAuth em um clique', 'Colaboração por organização'],
    mock: {
      scanTag: 'Escaneie para vincular',
      sceneTag: 'Automação de cenas',
      windowTitle: 'Matrix · Visão geral',
      liveTag: 'Ilustração',
      rail: ['Campus Inteligente', 'Prédio A · 3º andar', 'Oficina Sul'],
      tiles: [
        {name: 'Ar-cond.', value: '26.0 ℃', sub: 'Resfriando · aplicado'},
        {name: 'Luzes', value: 'Ligadas', sub: 'Cena · modo Escritório'},
        {name: 'Medidor', value: '12.4 kW', sub: 'Leitura ao vivo'},
        {name: 'Fechadura', value: 'Trancada', sub: 'Armada'},
      ],
      foot: 'Último evento: luzes da sala de reunião → cena “Sair do escritório” acionada',
    },
    capHead: {
      eyebrow: 'Plataforma',
      title: 'Uma plataforma, toda a jornada de IoT',
      lead: 'Do dispositivo de borda ao console na nuvem, a Matrix reúne acesso, organização, gestão e automação em um único sistema.',
    },
    capItems: [
      {
        title: 'Acesso multi-protocolo de dispositivos',
        text: 'Conecte dispositivos por gateways industriais e diversos protocolos — Modbus, MQTT, Matter, PLC, 485 / 4G DTU — em um único modelo de dispositivo. Escaneie um QR code para vincular o dispositivo a um espaço.',
      },
      {
        title: 'Modelagem de espaços e locais',
        text: 'Organize os dispositivos em uma árvore de espaços — campus → prédio → andar → sala — além de oficinas, estufas e estacionamentos, espelhando o mundo real.',
      },
      {
        title: 'Produtos e modelos de coisa',
        text: 'Defina um produto e seu modelo padrão uma única vez: propriedades, estados e controles graváveis ficam visíveis. Cada dispositivo conectado é uma instância de um modelo — consistente e reutilizável.',
      },
      {
        title: 'Monitoramento ao vivo e controle',
        text: 'O estado do dispositivo chega em tempo real; as propriedades podem ser lidas e gravadas remotamente. Envie comandos e parâmetros a qualquer momento e opere todos os dispositivos em uma só tela.',
      },
      {
        title: 'Cenas e automação',
        text: 'Automação guiada por regras e eventos: abra a porta e as luzes acendem, ou deixe o ar-condicionado reagir à temperatura — os dispositivos trabalham juntos sozinhos.',
      },
      {
        title: 'Organizações e permissões',
        text: 'Mantenha uma plataforma em equipe em torno de uma organização, com membros e permissões em níveis. Entre com OAuth — sem sistema de contas próprio para manter.',
      },
    ],
    scnHead: {
      eyebrow: 'Cenários',
      title: 'Uma plataforma para vários setores',
      lead: 'Um prédio, uma fábrica, uma estufa ou um estacionamento — a Matrix organiza e gerencia cada dispositivo dentro deles.',
    },
    scnItems: [
      {
        title: 'Prédios e campi inteligentes',
        text: 'Controle por andar e por sala, com iluminação, ar-condicionado e acesso gerenciados em um só lugar.',
      },
      {
        title: 'Indústria e oficinas',
        text: 'Coloque equipamentos de linha Modbus e PLC online e dê nova capacidade a máquinas antigas.',
      },
      {
        title: 'Agricultura e estufas',
        text: 'Monitore o ambiente e automatize irrigação e ventilação — sem ninguém de plantão no local.',
      },
      {
        title: 'Comunidades e estacionamentos',
        text: 'Estacionamento, cancelas, segurança e áreas comuns unificados em uma visão, um clique.',
      },
    ],
    scnLink: 'Ver cenários',
    stepsHead: {
      eyebrow: 'Primeiros passos',
      title: 'Quatro passos do login aos dispositivos ativos',
      lead: 'Nada de backend para montar — ao entrar, sua organização, seus espaços e seu parque de dispositivos já estão prontos.',
    },
    steps: [
      {
        title: 'Entrar',
        text: 'Faça login com sua conta OAuth (por exemplo, GitHub) e crie ou entre em uma organização.',
      },
      {
        title: 'Mapeie seus espaços',
        text: 'Monte a estrutura campus / prédio / andar conforme o mundo real, como blocos de montar.',
      },
      {
        title: 'Vincule dispositivos',
        text: 'Escolha um modelo de coisa já definido, ou escaneie um QR code, e coloque os dispositivos nos espaços.',
      },
      {
        title: 'Automatize e opere',
        text: 'Configure o monitoramento e as regras de cena e acompanhe tudo pela Web, iOS e Android.',
      },
    ],
    ctaTitle: 'Faça cada dispositivo se conectar de verdade',
    ctaText: 'Entre na Matrix agora — crie sua primeira organização e seu primeiro espaço e leve seus dispositivos para o mundo digital.',
  },

  capability: {
    metaTitle: 'Recursos',
    metaDesc:
      'Recursos da plataforma de IoT Matrix: acesso multi-protocolo de dispositivos, modelagem de espaços e locais, modelos de coisa, monitoramento ao vivo e automação de cenas.',
    hero: {
      eyebrow: 'Recursos da plataforma',
      pre: 'Do onboarding à automação — ',
      grad: 'a plataforma completa, de ponta a ponta',
      lead: 'A Matrix integra acesso de dispositivos, organização de espaços, gestão de modelos de coisa e automação em um único sistema, para que criar uma aplicação de IoT deixe de ser um monte de ferramentas soltas.',
      secondary: 'Veja os casos de uso',
    },
    sections: [
      {
        eyebrow: 'Recurso 01 · Acesso de dispositivos',
        title: 'Acesso multi-protocolo, onboarding simples',
        paragraphs: [
          'A Matrix combina uma plataforma em nuvem com gateways para trazer dispositivos de qualquer época e protocolo para um único sistema — seja barramento de campo Modbus, dispositivos inteligentes MQTT, Matter ou PLC, todos se conectam e são gerenciados de forma uniforme.',
        ],
        checks: [
          'Protocolos mainstream como Modbus RTU / TCP e MQTT para os cenários industrial e predial mais comuns',
          'Protocolos de consumo e verticais, como Matter e PLC, entram continuamente',
          'Túnel com gateway 4G DTU e 485 — dispositivos antigos se conectam sem serem trocados',
          'Vínculo por QR code e id único de dispositivo: conectado significa nomeado, localizado e gerenciado',
        ],
        link: 'Faça seu primeiro onboarding na plataforma',
      },
      {
        eyebrow: 'Recurso 02 · Modelagem de espaços',
        title: 'O espaço é a estrutura — os dispositivos crescem nela',
        paragraphs: [
          'Dispositivos não são ilhas; eles pertencem a um espaço. Modele o layout real com os níveis campus, prédio, andar e sala e veja tudo do “campus inteiro” até “uma única sala”.',
        ],
        checks: [
          'Campus / prédio / andar / sala, além de tipos de local como oficina, estufa e estacionamento',
          'Uma árvore que você percorre nível por nível para chegar a qualquer dispositivo',
          'Consolidação por espaço — o estado de um andar ou de um campus inteiro em um relance',
          'Os níveis crescem livremente conforme o seu negócio muda de forma',
        ],
        link: 'Como os espaços se organizam em diferentes setores',
      },
      {
        eyebrow: 'Recurso 03 · Produtos e modelos de coisa',
        title: 'O produto é o padrão; o dispositivo é a instância',
        paragraphs: [
          'Defina um produto e seu modelo de coisa uma única vez e depois conecte e reutilize dispositivos em lote — mantendo dados e controle a jusante consistentes.',
        ],
        checks: [
          'Defina produtos e modelos com propriedades, tipos e acesso de leitura/escrita à vista',
          'As propriedades reportam em tempo real; os comandos de controle chegam às instâncias corretas',
          'Ciclo de vida completo: em desenvolvimento → prévia → publicado',
          'Mesmo modelo, mesmo dispositivo — conecte e alinhe automaticamente, troque o aparelho sem trocar a lógica',
        ],
        link: 'Defina um produto na plataforma',
      },
      {
        eyebrow: 'Recurso 04 · Monitoramento e automação de cenas',
        title: 'Veja, controle — e deixe agir sozinho',
        paragraphs: [
          'Estado ao vivo na tela e comandos de um toque são só o começo. A Matrix vai além com regras e eventos, para que todo o sistema funcione do seu jeito.',
        ],
        checks: [
          'Propriedades e eventos em tempo real; o histórico continua rastreável',
          'Comandos e parâmetros remotos, com experiência idêntica na Web, no iOS e no Android',
          'Cenas de um toque: chegar, voltar para casa, sair do campus — uma ação, uma cascata de comandos',
          'Automação por regras: condições como temperatura alta ou porta aberta disparam ações nos dispositivos',
        ],
        link: 'Veja cenas de automação típicas',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Plataforma Matrix',
      hubSub: 'Um acesso · um modelo · um controle',
      gateways: ['Gateway 485 / TCP', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['Ar-condicionado', 'Luzes', 'Medidor', 'Temp / umidade', 'Fechadura', 'Equip. de linha'],
    },
    space: {
      root: 'Campus Inteligente',
      nodes: ['Prédio A', 'Andar 3'],
      leaves: [
        {name: 'Sala de reunião', count: '2 dispositivos'},
        {name: 'Hall', count: '1 dispositivo'},
      ],
      types: ['Campus', 'Prédio', 'Andar', 'Sala', 'Oficina', 'Estufa', 'Estacionamento', 'Zona'],
    },
    model: {
      name: 'Produto · Monitor de ambiente',
      badge: 'Publicado',
      rows: [
        {name: 'Temperatura', kind: 'Número · leitura', writable: false},
        {name: 'Umidade', kind: 'Número · leitura', writable: false},
        {name: 'Ventilador', kind: 'Booleano · controle', writable: true},
        {name: 'Estado de operação', kind: 'Enum · estado', writable: false},
      ],
      foot: 'Cada dispositivo conectado é uma “instância” deste produto — propriedades e controle se alinham automaticamente',
    },
    control: {
      tileTitle: 'Monitoramento ao vivo',
      tileSub: 'Sala de reunião',
      live: [
        {text: 'Temperatura 26.0℃', ok: false},
        {text: 'Iluminação ligada', ok: false},
        {text: 'Comando aplicado', ok: true},
      ],
      rules: [
        {name: 'Regra “Rotina de saída”', desc: 'Às 17:30, ou quando a última pessoa sai → luzes desligadas, ar-condicionado no econômico, portas armadas'},
        {name: 'Regra “Alerta de superaquecimento”', desc: 'Limite excedido → notificar e ligar o ventilador automaticamente'},
      ],
    },
    ctaTitle: 'Dispositivos, plataforma, apps — toda a cadeia conectada',
    ctaText: 'Entre na Matrix agora e viva a jornada completa: defina um produto, conecte dispositivos e configure a automação de cenas.',
  },

  scenario: {
    metaTitle: 'Cenários',
    metaDesc:
      'Cenários típicos da plataforma de IoT Matrix: prédios e campi inteligentes, indústria e oficinas, agricultura e estufas e estacionamentos de comunidades.',
    hero: {
      eyebrow: 'Casos de uso',
      pre: 'De prédios a oficinas — ',
      grad: 'a Matrix cobre você',
      lead: 'Graças à modelagem de espaços e ao acesso multi-protocolo, a Matrix atende prédios, indústria, agricultura e comunidades desde o primeiro uso. Estes são exemplos — a plataforma vai muito além deles.',
      secondary: 'Conheça os recursos',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Prédios e campi inteligentes',
          lead: 'Controle preciso por andar e por sala: iluminação, ar-condicionado, acesso e energia sob o mesmo teto, na mesma tela.',
          bullets: [
            'Árvore campus / prédio / andar / sala com dispositivos acessíveis nível a nível',
            'Ligar e desligar remotamente ar-condicionado e iluminação; um comando arma ou desarma as fechaduras',
            'Consolidação de energia e de estado por andar, com alertas no momento em que algo sai do padrão',
            'Fluxos de acesso e visitantes integrados — o ciclo completo de chegar, reunir e sair',
          ],
          spaces: ['Campus', 'Prédio', 'Andar', 'Sala'],
          keywords: ['Controle predial', 'Energia', 'Acesso', 'Salas de reunião'],
        },
        {
          index: '02',
          title: 'Indústria e oficinas',
          lead: 'Coloque equipamentos de linha Modbus e PLC legados online e transforme as “máquinas burras” do chão de fábrica em fontes de dados monitoráveis e rastreáveis.',
          bullets: [
            'Coleta do estado da linha via Modbus RTU / TCP ou PLC, direto ou por gateway',
            'Propriedades e alarmes chegam a uma única tela, a que o operador acompanha',
            'Manutenção remota e envio de parâmetros reduzem as visitas ao local',
            'Todo evento fica registrado — uma base de dados crescente para analisar produção e falhas',
          ],
          spaces: ['Oficina', 'Zona'],
          keywords: ['Máquinas online', 'Linha monitorada', 'Manutenção remota', 'Rastreabilidade'],
        },
        {
          index: '03',
          title: 'Agricultura e estufas',
          lead: 'Monitore o ambiente da estufa e controle sob demanda — irrigação, ventilação e sombreamento não esperam mais por alguém no local.',
          bullets: [
            'Leituras em tempo real de sensores de temperatura, umidade, luz e solo',
            'Temperatura alta liga o ventilador; umidade baixa aciona a irrigação',
            'Cada estufa modelada como um local próprio, gerenciada em conjunto com controle por zona',
            'Alertas são enviados assim que algo sai do padrão — sem ronda 24 horas por dia',
          ],
          spaces: ['Estufa', 'Campo', 'Zona'],
          keywords: ['Sensores ambientais', 'Irrigação automática', 'Ventilação', 'Controle por zona'],
        },
        {
          index: '04',
          title: 'Estacionamento comercial e de condomínio',
          lead: 'Unifique vagas, cancelas, segurança e dispositivos de áreas comuns em uma só visão, com gestão de um toque e atendimento mais fluido.',
          bullets: [
            'Ocupação das vagas e estado das cancelas conectados — estacionamento e cobrança ficam transparentes',
            'Acesso e iluminação comum programados por zona para reduzir consumo ocioso',
            'Fluxo de visitantes integrado à operação do condomínio, em um ciclo completo',
            'Um único painel para vários empreendimentos e setores sob a ótica do operador',
          ],
          spaces: ['Estacionamento', 'Zona', 'Prédio'],
          keywords: ['Gestão de vagas', 'Cancelas', 'Segurança', 'Iluminação comum'],
        },
      ],
    },
    more: {
      eyebrow: 'Mais por vir',
      text: 'O modelo de espaço extensível e o acesso aberto da Matrix seguem chegando a novas frentes — gestão de energia, armazenagem refrigerada, redes de varejo, hotéis inteligentes…',
    },
    ctaTitle: 'Encontre o cenário que é o seu',
    ctaText: 'Coloque seus locais e dispositivos na Matrix — começando por uma organização e um espaço.',
  },

  apps: {
    metaTitle: 'Baixe o app',
    metaDesc:
      'Baixe o cliente da plataforma de IoT Matrix: apps para Android e iPhone para vincular dispositivos, ver o status ao vivo, controlar remotamente e automatizar cenas.',
    hero: {
      eyebrow: 'Apps',
      pre: 'A Matrix no seu bolso — ',
      grad: 'seus dispositivos sempre à mão',
      lead: 'O cliente Matrix cobre Android e iPhone: vincule dispositivos por QR code, acompanhe o status ao vivo e envie comandos de qualquer lugar — na mesma conta e com os mesmos dados do console Web.',
      primary: 'Baixar o app',
      secondary: 'Conheça os recursos',
    },
    download: {
      eyebrow: 'Download',
      title: 'Escolha sua plataforma',
      lead: 'Instale e entre com OAuth para ver as mesmas organizações, espaços e dispositivos que você tem na Web.',
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Versão', released: 'Lançamento', size: 'Tamanho', minOs: 'Requer'},
      notesTitle: 'Novidades',
      available: 'Disponível',
      comingSoon: 'Em breve',
      pending: 'Ainda não disponível',
      buttons: {android: 'Baixar APK', ios: 'Baixar na App Store'},
      scanTitle: 'Escaneie para instalar',
      scanHint: 'Aponte a câmera do celular para o código e baixe direto no seu telefone',
    },
    install: {
      eyebrow: 'Instalação',
      title: 'Instale e use',
      lead: 'O pacote Android vem direto do armazenamento de objetos — sem loja de terceiros — e entra na mesma conta e nos mesmos dados do console Web.',
      stepAndroid: {
        title: 'Instalar no Android',
        text: 'Toque em “Baixar APK” e o navegador salva o pacote; abra-o no celular para instalar. Se o sistema pedir, permita a instalação de fontes desconhecidas apenas nesta vez.',
      },
      stepIosPending: {
        title: 'Aguarde o lançamento para iPhone',
        text: 'O app para iPhone é distribuído pela App Store. Assim que estiver no ar, o link da loja aparece nesta página — procure por Matrix na loja.',
      },
      stepIosReady: {
        title: 'Instalar no iPhone',
        text: 'Toque em “Baixar na App Store” ou escaneie o código para abrir a loja — ou procure por Matrix na App Store.',
      },
      stepWeb: {
        title: 'Ou use direto a Web',
        text: 'Prefere não instalar? Abra app.wematrix.cc no navegador do celular e entre — todos os recursos estão lá.',
      },
    },
    ctaTitle: 'Leve seus dispositivos no bolso',
    ctaText: 'Baixe o cliente Matrix e veja o status ou envie comandos de qualquer lugar.',
  },
};
