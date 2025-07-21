🧪 Teste E2E - SauceDemo

Projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress, utilizando o padrão Page Object Model (POM), para o site [SauceDemo](https://www.saucedemo.com).

---

👀 Observação Importante: 

Este projeto foi originalmente criado durante uma mentoria prática. Como o desafio técnico proposto atualmente envolve exatamente o mesmo fluxo, optei por reaproveitar esse projeto, aplicando melhorias e organizando a estrutura com boas práticas de QA.

📌 O arquivo **`spec.cy.js`** contém o **fluxo completo**, cobrindo login, logout, compra com sucesso e cancelamento de compra.  
📁 Também existem arquivos separados para testes individuais: `login.cy.js`, `logout.cy.js` e `compra.cy.js`.

---

🎯 Objetivo


Automatizar o fluxo de compra no site, incluindo:

- Login com usuário válido
- Acesso ao carrinho
- Adição de produtos
- Finalização de compra
- Cancelamento de compra
- Logout

---

 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) v12+
- JavaScript (ES6)
- Page Object Model (POM)

---

📂 Estrutura de pastas

cypress/
├── e2e/
│ ├── page/
│ │ ├── elementos.Login.js
│ │ ├── elementos.Produto.js
│ │ └── elementos.Carrinho.js
│ ├── login.cy.js
│ ├── logout.cy.js
│ ├── compra.cy.js
│ └── spec.cy.js ✅ fluxo completo
├── support/
├── package.json
├── cypress.config.js

---

📦 Page Objects (POM)

Os elementos estão organizados em arquivos separados dentro da pasta `page/`, seguindo o padrão Page Object Model:

| Arquivo                     | Responsabilidade                              |
|-----------------------------|-----------------------------------------------|
| `elementos.Login.js`        | Campos de login, botão de entrada e menu      |
| `elementos.Produto.js`      | Botões de adicionar produtos ao carrinho      |
| `elementos.Carrinho.js`     | Checkout, formulário e confirmação            |

🚀 Como executar os testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/vc-nascimento/automacao-saucedemo.git

2. Acesse a pasta do projeto:
   cd automacao-saucedemo

3. Instale as dependências:
npm install

4. Execute o Cypress:
npx cypress open

5. Selecione o arquivo compra.cy.js e execute os testes.

---

✅ Cenários cobertos no spec.cy.js
🔐 Login com sucesso
🚪 Logout com sucesso
🛒 Adição de produtos ao carrinho
✅ Finalização de compra
❌ Cancelamento da compra
🔍 Validação de mensagens e rotas corretas

👩🏻‍💻 Desenvolvido por
Vitória Caroline
GitHub: vc-nascimento

