import { ELEMENTSLOGIN } from './page/elementos.Login.js';

describe('Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get(ELEMENTSLOGIN.campoUsuario).type('standard_user');
    cy.get(ELEMENTSLOGIN.campoSenha).type('secret_sauce');
    cy.get(ELEMENTSLOGIN.botaoLogin).click();

    cy.get(ELEMENTSLOGIN.adicionarCarrinho).should('be.visible');
  });
});
