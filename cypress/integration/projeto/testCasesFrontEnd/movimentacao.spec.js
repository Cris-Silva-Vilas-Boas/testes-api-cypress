///<reference types="cypress"/>
import locator from '../../../support/locators'
import '../../../support/commandsMovimentacao'

describe('Test functional', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('a@a', 'a')
        cy.resetApp();
    })

    it('Deve criar uma movimentação', () =>{
        cy.acessarMenuMovimentacao();
        cy.criarMovimentacao();
        cy.get(locator.MESSAGE).should('contain.text', 'Movimentação inserida com sucesso!Bem vindo, a!');
    })
})