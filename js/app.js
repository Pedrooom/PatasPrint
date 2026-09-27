/**
 * js/app.js
 * ---------
 * Renderiza o catálogo e roda a calculadora. Não depende de build nem de backend — só lê js/dados.js.
 */

(function () {
  "use strict";

  const formatador = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  const moeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  function textoPendente() {
    return '<span class="dado-pendente">a definir</span>';
  }

  function nomePorte(sigla, porte) {
    if (porte && porte.nome) return porte.nome;
    if (sigla === "Unico") return "Tamanho único";
    return "Porte " + sigla;
  }

  // -----------------------------------------------------------------
  // Problema em Novo Hamburgo
  // -----------------------------------------------------------------
  function montarProblema() {
    const container = document.getElementById("lista-problema");
    if (!container) return;

    container.innerHTML = DADOS.problemaNovoHamburgo
      .map(function (item) {
        return (
          '<div class="col-md-4">' +
            '<div class="estatistica">' +
              '<p class="estatistica-numero">' + item.numero + "</p>" +
              '<p class="estatistica-texto">' + item.texto + "</p>" +
              '<p class="estatistica-fonte">Fonte: ' + item.fonte + "</p>" +
            "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  // -----------------------------------------------------------------
  // Catálogo
  // -----------------------------------------------------------------
  function badgeTipo(modelo) {
    if (modelo.tipo === "autoral") {
      return '<span class="badge-tipo badge-autoral">Modelo autoral PatasPrint</span>';
    }
    return '<span class="badge-tipo badge-comunidade">Modelo da comunidade</span>';
  }

  function imagemComFallback(caminho, alt, extraClasse) {
    if (!caminho) {
      return (
        '<div class="imagem-pendente ' + (extraClasse || "") + '" role="img" aria-label="' + alt + ' — imagem ainda não adicionada">' +
          '<span>Imagem em breve</span>' +
        "</div>"
      );
    }
    return (
      '<img src="' + caminho + '" alt="' + alt + '" class="' + (extraClasse || "") + '" loading="lazy" ' +
      'onerror="this.replaceWith(Object.assign(document.createElement(\'div\'), ' +
      '{className:\'imagem-pendente ' + (extraClasse || "") + '\', innerHTML:\'<span>Imagem em breve</span>\'}))">'
    );
  }

  function montarCatalogo() {
    const container = document.getElementById("grade-catalogo");
    if (!container) return;

    container.innerHTML = DADOS.modelos
      .map(function (modelo) {
        const portesTexto = Object.keys(modelo.portes)
          .map(function (sigla) { return nomePorte(sigla, modelo.portes[sigla]); })
          .join(" · ");

        let linhaOrigem = "";
        if (modelo.tipo === "comunidade") {
          const linkHtml = modelo.link && !modelo.link.startsWith("TODO_PEDRO")
            ? '<a href="' + modelo.link + '" target="_blank" rel="noopener">página original</a>'
            : textoPendente();
          const downloadsHtml = (modelo.downloads === null || modelo.downloads === undefined)
            ? textoPendente()
            : formatador.format(modelo.downloads) +
              (modelo.impressoes ? " downloads · " + formatador.format(modelo.impressoes) + " impressões" : "");
          linhaOrigem =
            '<p class="ficha-linha"><strong>Autor:</strong> ' + modelo.autor + "</p>" +
            '<p class="ficha-linha"><strong>Origem:</strong> ' + linkHtml + "</p>" +
            '<p class="ficha-linha"><strong>Licença:</strong> ' + modelo.licenca + "</p>" +
            '<p class="ficha-linha"><strong>No ' + modelo.plataforma + ':</strong> ' + downloadsHtml + "</p>";
        } else {
          linhaOrigem = '<p class="ficha-linha"><strong>Autor:</strong> ' + modelo.autor + "</p>";
        }

        let downloadHtml = "";
        if (modelo.tipo === "comunidade") {
          if (modelo.link && !modelo.link.startsWith("TODO_PEDRO")) {
            downloadHtml =
              '<a class="btn btn-download" href="' + modelo.link + '" target="_blank" rel="noopener">' +
                "Baixar no " + modelo.plataforma +
              "</a>";
          }
        } else {
          downloadHtml = Object.keys(modelo.portes)
            .filter(function (sigla) { return modelo.portes[sigla].arquivo; })
            .map(function (sigla) {
              return (
                '<a class="btn btn-download" href="' + modelo.portes[sigla].arquivo + '" rel="noopener">' +
                  "Baixar " + nomePorte(sigla, modelo.portes[sigla]) + " (" + modelo.formatoArquivo + ")" +
                "</a>"
              );
            })
            .join("");
        }
        if (downloadHtml) {
          downloadHtml = '<div class="downloads-modelo">' + downloadHtml + "</div>";
        }

        const indicadoPorTamanho = Object.keys(modelo.portes)
          .filter(function (sigla) { return modelo.portes[sigla].indicadoPara; })
          .map(function (sigla) {
            return nomePorte(sigla, modelo.portes[sigla]) + ": " + modelo.portes[sigla].indicadoPara;
          })
          .join(" · ");
        const indicadoTexto = modelo.indicadoPara || indicadoPorTamanho;
        const indicadoHtml = indicadoTexto
          ? '<p class="ficha-linha"><strong>Indicado para:</strong> ' + indicadoTexto + "</p>"
          : "";

        const avisoHtml = modelo.aviso
          ? '<p class="aviso-modelo"><strong>Atenção:</strong> ' + modelo.aviso + "</p>"
          : "";

        const creditoHtml = modelo.imagens.creditoImagem
          ? '<p class="credito-imagem">' + modelo.imagens.creditoImagem + "</p>"
          : "";

        return (
          '<div class="col-md-6 col-lg-4">' +
            '<article class="card-modelo">' +
              imagemComFallback(modelo.imagens.render, modelo.imagens.alt || "Imagem de " + modelo.nome, "imagem-render") +
              creditoHtml +
              '<div class="card-modelo-corpo">' +
                badgeTipo(modelo) +
                "<h3>" + modelo.nome + "</h3>" +
                "<p>" + modelo.descricao + "</p>" +
                avisoHtml +
                indicadoHtml +
                '<p class="ficha-linha"><strong>Tamanhos disponíveis:</strong> ' + portesTexto + "</p>" +
                linhaOrigem +
                downloadHtml +
              "</div>" +
            "</article>" +
          "</div>"
        );
      })
      .join("");
  }

  // -----------------------------------------------------------------
  // Calculadora
  // -----------------------------------------------------------------
  function popularSelectModelos() {
    const select = document.getElementById("calc-modelo");
    if (!select) return;
    select.innerHTML = DADOS.modelos
      .map(function (modelo) {
        return '<option value="' + modelo.id + '">' + modelo.nome + "</option>";
      })
      .join("");
  }

  function popularSelectPortes() {
    const selectModelo = document.getElementById("calc-modelo");
    const selectPorte = document.getElementById("calc-porte");
    if (!selectModelo || !selectPorte) return;

    const modelo = DADOS.modelos.find(function (m) {
      return m.id === selectModelo.value;
    });
    if (!modelo) return;

    selectPorte.innerHTML = Object.keys(modelo.portes)
      .map(function (sigla) {
        return '<option value="' + sigla + '">' + nomePorte(sigla, modelo.portes[sigla]) + "</option>";
      })
      .join("");
  }

  function calcular(evento) {
    evento.preventDefault();

    const modeloId = document.getElementById("calc-modelo").value;
    const porteSigla = document.getElementById("calc-porte").value;
    const quantidade = Math.max(1, parseInt(document.getElementById("calc-quantidade").value, 10) || 1);

    const modelo = DADOS.modelos.find(function (m) { return m.id === modeloId; });
    const porte = modelo ? modelo.portes[porteSigla] : null;
    const resultado = document.getElementById("calc-resultado");
    if (!modelo || !porte || !resultado) return;

    const massaGarrafa = DADOS.garrafaPet.massaGramas;
    const precoKg = DADOS.filamento.precoPorKg;

    const massaTotal = porte.massaG !== null && porte.massaG !== undefined
      ? porte.massaG * quantidade
      : null;

    const garrafas = (massaTotal !== null && massaGarrafa)
      ? Math.ceil(massaTotal / massaGarrafa)
      : null;

    const custo = (massaTotal !== null && precoKg !== null && precoKg !== undefined)
      ? (massaTotal * precoKg) / 1000
      : null;

    let comparacaoHtml;
    if (porte.precoMercado !== null && porte.precoMercado !== undefined && custo !== null) {
      const diferenca = porte.precoMercado * quantidade - custo;
      comparacaoHtml =
        "Um equivalente pronto no mercado custaria aproximadamente " +
        "<strong>" + moeda.format(porte.precoMercado * quantidade) + "</strong>. " +
        "Diferença em relação ao custo do material: <strong>" + moeda.format(diferenca) + "</strong>. " +
        "A conta considera só o filamento — não inclui energia, tempo de máquina nem peças perdidas.";
    } else {
      comparacaoHtml = "Ainda não há um preço de mercado cadastrado para este item.";
      if (massaTotal === null) {
        comparacaoHtml += " A massa de filamento será informada depois do fatiamento da peça em PETG.";
      }
      if (modelo.referenciaMercado) {
        comparacaoHtml +=
          " Como referência: " + modelo.referenciaMercado.texto +
          ' <span class="fonte-inline">(' + modelo.referenciaMercado.fonte + ")</span>";
      }
    }

    resultado.innerHTML =
      '<div class="resultado-grade">' +
        '<div class="resultado-item">' +
          '<p class="resultado-valor">' + (massaTotal !== null ? formatador.format(massaTotal) + " g" : textoPendente()) + "</p>" +
          '<p class="resultado-rotulo">Filamento estimado</p>' +
        "</div>" +
        '<div class="resultado-item">' +
          '<p class="resultado-valor">' + (garrafas !== null ? formatador.format(garrafas) : textoPendente()) + "</p>" +
          '<p class="resultado-rotulo">Garrafas PET equivalentes</p>' +
        "</div>" +
        '<div class="resultado-item">' +
          '<p class="resultado-valor">' + (custo !== null ? moeda.format(custo) : textoPendente()) + "</p>" +
          '<p class="resultado-rotulo">Custo estimado de material</p>' +
        "</div>" +
      "</div>" +
      '<p class="resultado-comparacao">' + comparacaoHtml + "</p>" +
      '<p class="resultado-premissas">' +
        "Premissas: massa de filamento — " +
          (modelo.fonteMassa || "fatiamento no Bambu Studio (perfil A1, PETG)") + ". " +
        "Preço do filamento — " + (DADOS.filamento.fonte || "") + ". " +
        "Massa da garrafa PET — " + (DADOS.garrafaPet.fonte || "") + ". " +
        "Todos os resultados são estimativas." +
      "</p>";

    resultado.hidden = false;
  }

  // -----------------------------------------------------------------
  // Etapas PET → filamento
  // -----------------------------------------------------------------
  function montarEtapasPet() {
    const container = document.getElementById("lista-etapas-pet");
    if (!container) return;
    container.innerHTML = DADOS.etapasPet
      .map(function (etapa, indice) {
        return (
          '<li class="etapa-pet">' +
            '<span class="etapa-numero">' + (indice + 1) + "</span>" +
            '<div>' +
              "<h3>" + etapa.titulo + "</h3>" +
              "<p>" + etapa.texto + "</p>" +
            "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  // -----------------------------------------------------------------
  // Nota abaixo do tamanho, na calculadora: para quem o modelo é indicado
  // -----------------------------------------------------------------
  function atualizarNotaTamanho() {
    const container = document.getElementById("nota-tamanho");
    const selectModelo = document.getElementById("calc-modelo");
    const selectPorte = document.getElementById("calc-porte");
    if (!container || !selectModelo) return;
    const modelo = DADOS.modelos.find(function (m) { return m.id === selectModelo.value; });
    const porte = modelo && selectPorte ? modelo.portes[selectPorte.value] : null;
    const indicado = (porte && porte.indicadoPara) || (modelo && modelo.indicadoPara);
    container.textContent = indicado ? "Indicado para: " + indicado : "";
  }

  // -----------------------------------------------------------------
  // Menu no celular: fecha ao tocar em um item
  // -----------------------------------------------------------------
  function configurarMenu() {
    const menu = document.getElementById("menuPrincipal");
    if (!menu || typeof bootstrap === "undefined") return;
    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }

  // -----------------------------------------------------------------
  // Inicialização
  // -----------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    montarProblema();
    montarCatalogo();
    montarEtapasPet();
    configurarMenu();

    popularSelectModelos();
    popularSelectPortes();
    atualizarNotaTamanho();

    const selectModelo = document.getElementById("calc-modelo");
    if (selectModelo) {
      selectModelo.addEventListener("change", function () {
        popularSelectPortes();
        atualizarNotaTamanho();
      });
    }

    const selectPorte = document.getElementById("calc-porte");
    if (selectPorte) {
      selectPorte.addEventListener("change", atualizarNotaTamanho);
    }

    const formCalculadora = document.getElementById("form-calculadora");
    if (formCalculadora) {
      formCalculadora.addEventListener("submit", calcular);
    }
  });
})();
