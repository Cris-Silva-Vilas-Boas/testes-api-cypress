
import '../../../support/commands'

describe('Test api', () => {
    let token

    before(() => {
        cy.getToken('a@a', 'a').then(tkn => {
            token = tkn
        });
    })

    beforeEach(() =>{
        cy.resetRest();
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

    it('Deve editar uma conta', () =>{
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/contas',
            headers: { Authorization: `JWT ${token}` },
            qs:{
               nome: 'Conta para alterar' 
            }
        }).then(res=>{
            cy.request({
                url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
                    method: 'PUT',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                         nome: "Conta alterada VIA REST"
                }
            })
        })
    })

    it('Deve cadastrar uma conta com nome igual', ()=>{
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                 nome: "Conta mesmo nome"
            },
            failOnStatusCode: false
        }).then(res => {
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!');
        })
    })

    it('Deve remover uma conta', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/contas',
            headers: { Authorization: `JWT ${token}` },
            qs:{
               nome: 'Conta para alterar' 
            }
        }).then(res=>{
            cy.request({
                url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
                    method: 'DELETE',
                    headers: { Authorization: `JWT ${token}` },
            })
            expect(res.status).to.be.equal(200)
        })
    })
})

