import locator from './locators'

Cypress.Commands.add('acessarMenuConta', () =>{
    cy.get(locator.HOME_PAGE.SETTINGS).click();
    cy.get(locator.HOME_PAGE.CONTAS).click();
})

Cypress.Commands.add('alterarConta', (nameConta) =>{
    cy.get(locator.CONTAS.BOTAO_EDITAR).click();
    cy.get(locator.CONTAS.NAME)
        .clear()
        .type(nameConta);
    cy.get(locator.CONTAS.BOTAO_SALVAR).click();
})

Cypress.Commands.add('adicionarConta', (nameConta) =>{
    cy.get(locator.CONTAS.NAME)
        .clear()
        .type(nameConta);
    cy.get(locator.CONTAS.BOTAO_SALVAR).click();
})


