import { ELEMENTSLOGIN } from './page/elementos.Login.js';

describe('Logout', () => {
  it('Deve fazer login e logout com sucesso', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get(ELEMENTSLOGIN.campoUsuario).type('standard_user');
    cy.get(ELEMENTSLOGIN.campoSenha).type('secret_sauce');
    cy.get(ELEMENTSLOGIN.botaoLogin).click();

    cy.get(ELEMENTSLOGIN.menuLateral).click();
    cy.get(ELEMENTSLOGIN.botaoLogout).click();

    cy.get(ELEMENTSLOGIN.botaoLogin).should('be.visible');
  });
});
