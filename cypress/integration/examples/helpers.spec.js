
describe('Helpers', () => {
    it('Wrap', () => {
        const obj = { nome: 'User' , idade: 20}
        expect(obj).to.have.property('nome');
        cy.wrap(obj).should('have.property', 'nome');

        cy.visit('https://wcaquino.me/cypress/componentes.html');

        const promise = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(10)
            }, 500)
        })
    cy.wrap(promise).then(ret=> console.log(ret));
    })


    it('Its...', ()=>{
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')
    })


    it('Invoke', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#formNome').invoke('val', 'Texto via invoke');
    })
})