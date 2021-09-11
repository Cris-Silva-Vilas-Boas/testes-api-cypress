
describe('Working with basic elements', () => {

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    it('Links', () => {
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    it('Text Fields ', () => {
        cy.get('#formNome').
            type('Cypress type').
            should('have.value', 'Cypress type');
    })

    it('Text area', () => {
        cy.get('#elementosForm\\:sugestoes').
            type('Cypress type').
            should('have.value', 'Cypress type');
    })

    it('Radio Button', () => {
        cy.get('#formSexoFem').
            click().
            should('be.checked').
            should('have.value', 'F')
            
        cy.get('#formSexoMasc').    
            should('not.be.checked');

        cy.get("[name=formSexo]").should('have.length', 2);
    })

    it('Check box', () => {
        cy.get('#formComidaVegetariana').
            click().
            should('be.checked');


        cy.get('[name=formComida]')
    })
})