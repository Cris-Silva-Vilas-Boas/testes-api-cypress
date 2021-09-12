
import '../../../support/commands'

describe('Test api', () => {
    let token

    before(() => {
        cy.getToken('a@a', 'a').then(tkn => {
            token = tkn
        });
    })

    beforeEach(() =>{
        cy.resetRest()
    })

    it('Deve inserir um conta', () =>{
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                 nome: "Conta teste api"
            }
        }).then(res => {
                expect(res.status).to.be.equal(201);
         })
    })
})

