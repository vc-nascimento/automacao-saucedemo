import { ELEMENTSLOGIN } from './page/elementos.Login.js';
import { ELEMENTSPRODUTO } from './page/elementos.Produto.js';
import { ELEMENTSCARRINHO } from './page/elementos.Carrinho.js';

describe('Fluxo de compra', () => {
  it('Deve realizar uma compra com sucesso', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get(ELEMENTSLOGIN.campoUsuario).type('standard_user');
    cy.get(ELEMENTSLOGIN.campoSenha).type('secret_sauce');
    cy.get(ELEMENTSLOGIN.botaoLogin).click();

    cy.get(ELEMENTSPRODUTO.botaoAdicionar).click();
    cy.get(ELEMENTSPRODUTO.iconeCarrinho).click();

    cy.get(ELEMENTSCARRINHO.botaoCheckout).click();
    cy.get(ELEMENTSCARRINHO.campoPrimeiroNome).type('Maria');
    cy.get(ELEMENTSCARRINHO.campoUltimoNome).type('Silva');
    cy.get(ELEMENTSCARRINHO.campoCEP).type('12345');
    cy.get(ELEMENTSCARRINHO.botaoContinuar).click();
    cy.get(ELEMENTSCARRINHO.botaoFinalizar).click();

    cy.get(ELEMENTSCARRINHO.mensagemSucesso).should('contain', 'Thank you for your order!');
  });

  it('Deve cancelar a compra após iniciar o checkout', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get(ELEMENTSLOGIN.campoUsuario).type('standard_user');
    cy.get(ELEMENTSLOGIN.campoSenha).type('secret_sauce');
    cy.get(ELEMENTSLOGIN.botaoLogin).click();

    cy.get(ELEMENTSPRODUTO.botaoAdicionar).click();
    cy.get(ELEMENTSPRODUTO.iconeCarrinho).click();

    cy.get(ELEMENTSCARRINHO.botaoCheckout).click();
    cy.get(ELEMENTSCARRINHO.campoPrimeiroNome).type('Carlos');
    cy.get(ELEMENTSCARRINHO.campoUltimoNome).type('Oliveira');
    cy.get(ELEMENTSCARRINHO.campoCEP).type('98765');

    cy.get(ELEMENTSCARRINHO.botaoCancelar).click();

    cy.url().should('include', 'cart.html');
  });
});
