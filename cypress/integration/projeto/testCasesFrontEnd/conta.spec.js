///<reference types="cypress"/>
import locator from '../../../support/locators'
import '../../../support/commandsContas'

describe('Test functional', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('a@a', 'a')
        cy.resetApp();
    })

    it('Deve inserir um conta', () =>{
        cy.acessarMenuConta();
        cy.adicionarConta('Conta E');
        cy.get(locator.MESSAGE).should('contain.text', 'Conta inserida com sucesso!');
    })

    it('Deve editar uma conta', () =>{
        cy.acessarMenuConta();
        cy.alterarConta('Conta Atualizada');
        cy.get(locator.MESSAGE).should('contain.text', 'Conta atualizada com sucesso!');
    })

    it('Não deve criar contas com o mesmo nome', () =>{
        cy.acessarMenuConta();
        cy.adicionarConta('Conta Atualizada');
        cy.get(locator.MESSAGE).should('contain.text', 'code 400');
    })
})