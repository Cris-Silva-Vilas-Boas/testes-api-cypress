
describe('Test functional', () => {
    it('Fazer login', () =>{
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "a@a",
                redirecionar: false,
                senha: "a"
            }
        }).its('body.token').should('not.be.empty')
    })
})