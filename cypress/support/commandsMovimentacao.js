import locator from './locators'

Cypress.Commands.add('acessarMenuMovimentacao', ()=>{
    cy.get(locator.HOME_PAGE.SETTINGS).click();
    cy.get(locator.HOME_PAGE.MOVIMENTACAO).click();
})

Cypress.Commands.add('criarMovimentacao', ()=>{
    cy.get(locator.MOVIMENTACAO.DESCRICAO).type('Descrição');
    cy.get(locator.MOVIMENTACAO.INTERESSADO).type('Cristina');
    cy.get(locator.MOVIMENTACAO.VALOR).type('20.00');
    cy.get(locator.MOVIMENTACAO.STATUS).click();
    cy.get(locator.MOVIMENTACAO.BOTAO_SALVAR).click();
})

