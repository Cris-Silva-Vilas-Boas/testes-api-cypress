describe('Cypress basic', () => {
    it('Should visit a page', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');
    })

    it('Should visit a page', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').
        click().
        should('have.value', 'Obrigado!')
    })
})