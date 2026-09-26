/**
 * js/dados.js
 * -----------
 * Todos os números e links que dependem de pesquisa ou de material do Pedro
 * ficam neste arquivo só. Procure por "TODO_PEDRO" para achar tudo que falta.
 * Depois de preencher, não precisa mexer em nenhum outro arquivo do site.
 */

const DADOS = {

  // ---------------------------------------------------------------------
  // Preço do filamento e da garrafa PET — usados na calculadora
  // ---------------------------------------------------------------------
  filamento: {
    // TODO_PEDRO: preço real do PETG por kg que você usa/pesquisou (número, em R$)
    precoPorKg: null,
    // TODO_PEDRO: onde esse preço veio (loja, data da consulta)
    fonte: "TODO_PEDRO: fonte do preço do filamento (loja + data)"
  },

  garrafaPet: {
    // TODO_PEDRO: massa média de uma garrafa PET de 2L vazia, em gramas
    massaGramas: 20,
    // TODO_PEDRO: fonte dessa massa (embalagem, artigo, pesagem própria)
    fonte: "TODO_PEDRO: fonte da massa da garrafa PET"
  },

  // ---------------------------------------------------------------------
  // Formspree — formulário de solicitação de peça
  // ---------------------------------------------------------------------
  // TODO_PEDRO: ID do formulário no Formspree (ex.: "mzzenopq").
  // Enquanto estiver como "TODO_PEDRO", o site avisa que o envio está
  // desativado em vez de deixar o formulário falhar sem explicação.
  formspreeId: "TODO_PEDRO",

  // ---------------------------------------------------------------------
  // Referência de mercado citada na seção da Calculadora (dado já apurado,
  // não depende do Pedro)
  // ---------------------------------------------------------------------
  referenciaMercado: {
    texto: "Uma cadeira de rodas comercial para cães custa a partir de R$ 1.200. Uma versão equivalente impressa em 3D sai por cerca de R$ 448,81.",
    fonte: "Correio Braziliense, set. 2025"
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
  // Definição de porte, usada na calculadora e no catálogo
  // ---------------------------------------------------------------------
  definicaoPorte: [
    { porte: "P", faixa: "até 10 kg" },
    { porte: "M", faixa: "10 a 25 kg" },
    { porte: "G", faixa: "acima de 25 kg" }
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
      autor: "Pedro Ries — PatasPrint",
      descricao: "Comedouro elevado modelado do zero em CadQuery (Python), em três portes. Reduz o esforço do pescoço do animal na hora de comer e beber.",
      link: null,
      licenca: "Autoral — uso livre para ONGs de proteção animal, com crédito ao projeto",
      downloads: null,
      imagens: {
        // TODO_PEDRO: render 3D do comedouro (qualquer porte, é a mesma peça em escalas diferentes)
        render: "img/comedouro-render.jpg",
        // TODO_PEDRO: foto do comedouro impresso sobreposta a uma foto real (a legenda de simulação
        // é adicionada automaticamente pelo site, não precisa incluir no nome do arquivo)
        montagem: "img/comedouro-montagem.jpg"
      },
      portes: {
        P: {
          // TODO_PEDRO: massa (g) e tempo de impressão (min) do fatiamento no Bambu Studio, perfil A1 / PETG
          massaG: null,
          tempoMin: null,
          stl: "TODO_PEDRO: caminho do arquivo STL do porte P",
          // Sem produto comercial direto equivalente a este item — por isso sem preço de mercado aqui
          precoMercado: null
        },
        M: {
          massaG: null,
          tempoMin: null,
          stl: "TODO_PEDRO: caminho do arquivo STL do porte M",
          precoMercado: null
        },
        G: {
          massaG: null,
          tempoMin: null,
          stl: "TODO_PEDRO: caminho do arquivo STL do porte G",
          precoMercado: null
        }
      }
    },

    // TODO_PEDRO: duplique este bloco para cada modelo do Printables que você escolher.
    // Regra do projeto: só entra no catálogo se a licença for CC BY ou CC BY-NC.
    {
      id: "modelo-comunidade-1",
      nome: "TODO_PEDRO: nome do modelo no Printables",
      tipo: "comunidade",
      autor: "TODO_PEDRO: nome do autor original",
      descricao: "TODO_PEDRO: descrição curta do que a peça faz",
      link: "TODO_PEDRO: link da página do modelo no Printables",
      licenca: "TODO_PEDRO: CC BY ou CC BY-NC (confira na página do modelo)",
      downloads: null, // TODO_PEDRO: número de downloads exibido no Printables
      imagens: {
        render: "img/comunidade-1-render.jpg", // TODO_PEDRO: imagem do Printables (respeitando a licença)
        montagem: null // TODO_PEDRO: opcional — só se você fizer uma simulação para este modelo
      },
      portes: {
        Unico: {
          massaG: null, // TODO_PEDRO
          tempoMin: null, // TODO_PEDRO
          stl: "TODO_PEDRO: link ou caminho do STL",
          precoMercado: null // TODO_PEDRO: preço de um equivalente pronto no mercado, se houver
        }
      }
    }
  ]
};
