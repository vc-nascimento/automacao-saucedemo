🧪 Teste E2E - SauceDemo

Projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress, utilizando o padrão Page Object Model (POM), para o site [SauceDemo](https://www.saucedemo.com).

---

👀 Observação Importante

Esse projeto foi originalmente desenvolvido em um exercício prático anterior, e decidi reaproveitá-lo pois o desafio atual é exatamente o mesmo fluxo proposto.  
Assim, consegui aplicar rapidamente uma solução organizada, funcional e com boas práticas de QA como o uso de Page Objects.

---

🎯 Objetivo

Automatizar o fluxo completo de compra no site, incluindo:

- Login com usuário válido
- Adição de produtos ao carrinho
- Remoção de produto
- Finalização de compra
- Validação de mensagens e elementos visuais

---

 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) v12+
- JavaScript (ES6)
- Page Object Model (POM)

---

📂 Estrutura de pastas
cypress/
├── e2e/
│ ├── page/ # Elementos mapeados
│ │ └── elementosLogin.js
│ ├── compra.cy.js # Fluxo principal de testes
├── support/
│ └── commands.js # Comandos reutilizáveis (se aplicável)
cypress.config.js


---

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

