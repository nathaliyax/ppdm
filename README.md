#Consumo de API: Personagens de Harry Potter

## 📄 Descrição do projetto
Nesse projeto, o objetivo foi desenvolver uma aplicação web simples capaz de consumir dados de uma API pública, utilizando HTML, CSS e JavaScript com programação assíncrona. 

A aplicação realiza uma requisição para uma API externa do universo de Harry Potter, processa os dados retornados no formato JSON e exibe as informações dinamicamente na interface (em formato de cards responsivos), sem a necessidade de recarregar a página.

Essa sprint tem como foco o aprendizado de conceitos fundamentais do desenvolvimento web moderno, como:
- Consumo de APIs
- Requisições HTTP
- Manipulação do DOM
- Programação assíncrona em JavaScript (`async` / `await`)
- Tratamento de erros (`try` / `catch`)

## Objetivos de Aprendizagem
- Entender o fluxo de requisição e resposta (Client-Server).
- Utilizar a função `fetch()` do JavaScript.
- Converter respostas web para objetos manipuláveis (JSON).
- Criar elementos HTML dinamicamente via JavaScript (`document.createElement` e `innerHTML`).
- Estilizar e organizar layouts responsivos utilizando CSS Flexbox.

## Tecnologias Utilizadas
- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização visual, interface em cards e layout responsivo com Flexbox.
- **JavaScript (ES6+):** Lógica de programação, consumo da API e manipulação dinâmica do DOM.

## API Utilizada
- **Potter API (by Fede Perin):** [https://potterapi-fedeperin.vercel.app/pt/characters](https://potterapi-fedeperin.vercel.app/pt/characters)
- Uma API pública e gratuita que retorna dados detalhados (nome, casa de Hogwarts, ator e foto) dos personagens da saga.

## Estrutura do Projeto
O projeto foi desenvolvido utilizando a seguinte estrutura básica de arquivos:
- `index.html`: Arquivo principal contendo a estrutura da página e o container (palco) de exibição.
- `style.css`: Arquivo com todas as regras de estilização, cores e responsividade.
- `hp.js`: Arquivo com as regras de ultilidade da API.
