///<reference types="cypress"/>

describe('Test functional', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/');
    })

    it('Fazer login', () =>{
        cy.get(locator.LOGIN.USER).type('a@a');
        cy.get(locator.LOGIN.PASSWORD).type('a');
        cy.get(locator.LOGIN.BUTTON_LOGIN).click();
        cy.get('.toast-message').should('contain.text', 'Bem vindo, a!');
    })
})