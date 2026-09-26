/**
 * js/dados.js
 * -----------
 * Todos os números, links e fontes do site ficam neste arquivo só.
 * Para atualizar um dado ou incluir um modelo, não precisa mexer em
 * nenhum outro arquivo.
 */

const DADOS = {

  // ---------------------------------------------------------------------
  // Preço do filamento e da garrafa PET — usados na calculadora
  // ---------------------------------------------------------------------
  filamento: {
    precoPorKg: 103.06,
    fonte: "Média de Voolt3D, PrintaLot e National3D, consulta em 26 set. 2026"
  },

  garrafaPet: {
    massaGramas: 20,
    fonte: "CNC Kitchen (HERMANN, Stefan), How strong is PET bottle filament?, acesso em 26 set. 2026"
  },

  // ---------------------------------------------------------------------
  // O problema em Novo Hamburgo (dados já apurados, com fonte)
  // ---------------------------------------------------------------------
  problemaNovoHamburgo: [
    {
      numero: "30 mil",
      texto: "animais em situação de rua estimados no município. Não existe censo oficial.",
      fonte: "DBEA / Câmara de Vereadores de Novo Hamburgo, 12 ago. 2026"
    },
    {
      numero: "1.675",
      texto: "protocolos de atendimento recebidos pela Diretoria de Bem-Estar Animal (DBEA) no 1º semestre de 2026.",
      fonte: "Câmara Municipal de Novo Hamburgo, 12 ago. 2026"
    },
    {
      numero: "130",
      texto: "animais no abrigo municipal, número acima da capacidade do local.",
      fonte: "Jornal do Comércio, 2 jan. 2026"
    }
  ],

  // ---------------------------------------------------------------------
  // Etapas do processo PET → filamento (etapa futura do projeto, RF19/RF20)
  // ---------------------------------------------------------------------
  etapasPet: [
    { titulo: "Coleta", texto: "Juntar garrafas PET descartadas na comunidade." },
    { titulo: "Limpeza", texto: "Lavar e retirar rótulo, tampa e resíduos." },
    { titulo: "Corte em fita", texto: "Cortar a garrafa em uma fita contínua de largura uniforme." },
    { titulo: "Extrusão", texto: "Puxar a fita por um bico aquecido até virar um fio de filamento." },
    { titulo: "Bobinagem", texto: "Enrolar o filamento pronto em uma bobina para uso na impressora." }
  ],

  // ---------------------------------------------------------------------
  // Catálogo de dispositivos
  // ---------------------------------------------------------------------
  modelos: [
    {
      id: "comedouro-elevado",
      nome: "Comedouro elevado PatasPrint",
      tipo: "autoral", // "autoral" ou "comunidade"
      autor: "Pedro Martinez Ries — PatasPrint",
      descricao: "Suporte elevado para tigela, modelado por Pedro Martinez Ries no Bambu Studio e impresso em PETG.",
      aviso: "Use com tigela removível de inox ou cerâmica. Não coloque ração direto na peça.",
      link: null,
      licenca: "Autoral — uso livre para ONGs de proteção animal, com crédito ao projeto",
      formatoArquivo: ".3mf", // projeto do Bambu Studio, já com o perfil de impressão
      downloads: null,
      imagens: {
        render: "img/comedouro-render.jpg"
      },
      // arquivo: link de download direto do Google Drive
      // massaG e tempoMin: fatiamento no Bambu Studio, perfil A1 / PETG
      // precoMercado: menor preço encontrado por porte (Mádela Pet e Mercado Livre, 26 set. 2026)
      portes: {
        P: {
          nome: "Tamanho 1 (pequeno)",
          massaG: 200.38,
          tempoMin: 173,
          arquivo: "https://drive.google.com/uc?export=download&id=1A7p4sZHBH5bUfA9nl6HrKFzDtKRblU-t",
          precoMercado: 64.00
        },
        M: {
          nome: "Tamanho 2 (médio)",
          massaG: 376.21,
          tempoMin: 290,
          arquivo: "https://drive.google.com/uc?export=download&id=1pbjEW_Nb5tfgvGTU3PVaYGw2oUsNlTnG",
          precoMercado: 104.90
        }
      }
    },

    // Modelos de terceiros: para adicionar outro, duplique um dos blocos abaixo.
    // Regra do projeto: só entra no catálogo modelo com licença Creative Commons que
    // permita adaptação (CC BY, CC BY-SA, CC BY-NC ou CC BY-NC-SA). Licenças ND ficam de fora.
    // massaG e tempoMin: perfil de impressão do designer no MakerWorld (feito em PLA;
    // a massa em PETG é a mesma). Consulta em 26 set. 2026.
    {
      id: "cadeira-rodas-gato",
      nome: "Parametric Cat Wheelchair Generator",
      tipo: "comunidade",
      autor: "ac.design3D",
      descricao: "Cadeira de rodas paramétrica, ajustável às medidas do animal.",
      indicadoPara: "gato, cão pequeno, coelho",
      plataforma: "MakerWorld",
      link: "https://makerworld.com/en/models/3111262-parametric-cat-wheelchair-generator",
      licenca: "CC BY-NC-SA 4.0",
      fonteMassa: "perfil de impressão do designer no MakerWorld (a massa em PETG é a mesma)",
      // Referência de preço de mercado para cadeiras de rodas, mostrada na calculadora
      referenciaMercado: {
        texto: "Uma cadeira de rodas comercial para cães custa a partir de R$ 1.200. Uma versão equivalente impressa em 3D sai por cerca de R$ 448,81.",
        fonte: "Correio Braziliense, set. 2025"
      },
      downloads: 90,
      impressoes: 20,
      imagens: {
        render: "img/cadeira-rodas-gato-render.jpg",
        creditoImagem: "Imagem: ac.design3D, MakerWorld"
      },
      portes: {
        Unico: {
          massaG: 81,
          tempoMin: 138,
          arquivo: null, // download pela página do modelo (campo "link")
          precoMercado: null
        }
      }
    },
    {
      id: "tala-pata-dianteira",
      nome: "Dog Splint Front V1",
      tipo: "comunidade",
      autor: "TheLayerSlayer",
      descricao: "Tala para pata dianteira de cão.",
      aviso: "Uso somente com orientação veterinária.",
      indicadoPara: "cão médio",
      plataforma: "MakerWorld",
      link: "https://makerworld.com/en/models/2835397-dog-splint-front-v1",
      licenca: "CC BY-NC-SA 4.0",
      fonteMassa: "perfil de impressão do designer no MakerWorld (a massa em PETG é a mesma)",
      downloads: 215,
      impressoes: 96,
      imagens: {
        render: "img/tala-pata-dianteira-render.jpg",
        creditoImagem: "Imagem: TheLayerSlayer, MakerWorld"
      },
      portes: {
        Unico: {
          massaG: 74,
          tempoMin: 162,
          arquivo: null, // download pela página do modelo (campo "link")
          // média de preço de talas prontas para cães, pesquisa de 26 set. 2026
          precoMercado: 180.00
        }
      }
    },
    {
      id: "tala-pata-traseira",
      nome: "Dog splint rear leg",
      tipo: "comunidade",
      autor: "TheLayerSlayer",
      descricao: "Tala para pata traseira de cão.",
      aviso: "Uso somente com orientação veterinária.",
      indicadoPara: "cão médio a grande",
      plataforma: "MakerWorld",
      link: "https://makerworld.com/en/models/2843857-dog-splint-rear-leg",
      licenca: "CC BY-NC-SA 4.0",
      fonteMassa: "perfil de impressão do designer no MakerWorld (a massa em PETG é a mesma)",
      downloads: 145,
      impressoes: 46,
      imagens: {
        render: "img/tala-pata-traseira-render.jpg",
        creditoImagem: "Imagem: TheLayerSlayer, MakerWorld"
      },
      portes: {
        Unico: {
          massaG: 104,
          tempoMin: 270,
          arquivo: null, // download pela página do modelo (campo "link")
          // média de preço de talas prontas para cães, pesquisa de 26 set. 2026
          precoMercado: 180.00
        }
      }
    }
  ]
};
