# PatasPrint

Site do projeto PatasPrint, desenvolvido como Atividade Extensionista II do
curso de Análise e Desenvolvimento de Sistemas (Uninter). O projeto usa
impressão 3D para levar dispositivos de baixo custo — como comedouros
elevados — a voluntários e ONGs da rede de proteção animal de Novo
Hamburgo/RS.

O site reúne:

- um catálogo de dispositivos (um modelo autoral e modelos de terceiros
  com licença Creative Commons);
- uma calculadora que estima filamento, garrafas PET equivalentes e custo
  de cada peça;
- um resumo do processo de transformar garrafas PET em filamento
  (etapa futura do projeto);
- um contato por WhatsApp para quem precisa de ajuda para imprimir ou
  montar uma peça.

## Site publicado

https://pedrooom.github.io/PatasPrint/

## Estrutura do repositório

```
patasprint/
├── index.html          → página única, com navegação por âncoras
├── css/
│   └── style.css       → estilos do site
├── js/
│   ├── dados.js         → todos os dados do site (modelos, preços, fontes)
│   └── app.js           → catálogo, calculadora e menu
├── img/                 → imagens do catálogo (veja img/LEIA-ME.txt)
└── README.md
```

Sem build e sem backend: é HTML, CSS e JavaScript puro, mais o Bootstrap 5
carregado por CDN.

## Como rodar localmente

Não precisa de servidor nem de instalação. Duas opções:

1. Baixe ou clone o repositório e abra `index.html` direto no navegador.
2. Ou, com Python instalado, rode um servidor simples na pasta do projeto
   e acesse `http://localhost:8000`:

   ```
   python3 -m http.server 8000
   ```

## O que ainda falta

Os itens pendentes estão marcados com `TODO_PEDRO` dentro de `js/dados.js`:

- massa (g) e tempo (min) de impressão dos três modelos de terceiros,
  refatiados em PETG no Bambu Studio.

## Publicar no GitHub Pages

1. Suba os arquivos para um repositório público no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta raiz (`/`).
3. Aguarde alguns minutos e acesse o link gerado pelo GitHub.

## Créditos e licenças

- **Comedouro elevado**: modelo autoral do projeto PatasPrint, modelado por
  Pedro Martinez Ries no Bambu Studio. Uso livre para ONGs de proteção
  animal, com crédito ao projeto.
- **Modelos de terceiros**: cada um mantém a licença do autor original
  (Creative Commons que permita adaptação: CC BY, CC BY-SA, CC BY-NC ou
  CC BY-NC-SA), com nome do autor, link para a página original e crédito
  da imagem exibidos junto ao modelo, no Catálogo.
- **Dados públicos sobre Novo Hamburgo**: DBEA / Câmara de Vereadores de
  Novo Hamburgo (12 ago. 2026), Câmara Municipal de Novo Hamburgo
  (12 ago. 2026) e Jornal do Comércio (2 jan. 2026).
- **Comparação de custo (cadeira de rodas comercial × versão 3D)**:
  Correio Braziliense (set. 2025).
- **Bootstrap 5**: licença MIT — <https://getbootstrap.com>.
- **Fonte Space Grotesk**: licença SIL Open Font License, via Google Fonts.

## Autor

Pedro Martinez Ries — Atividade Extensionista II, Uninter, CST em Análise e
Desenvolvimento de Sistemas.
