///<reference types="cypress"/>
import '../../../support/commandsMovimentacao'

describe('Testes backend', () => {
    let token

    before(() => {
        cy.getToken('a@a', 'a').then(tkn => {
            token = tkn
        });
    })

    beforeEach(() =>{
        cy.resetRest();
    })

    it('Deve criar uma movimentação', () =>{
       cy.buscarPorNomeDeConta('Conta para movimentacoes')
       .then(contaId => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/transacoes',
            headers: { Authorization: `JWT ${token}` },
            body: {
                    conta_id: contaId,
                    data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: "Descrição",
                    envolvido: "Interessado",
                    status: true,
                    tipo: "REC",
                    valor: "30.00"
            }
         }).then(res => {
            expect(res.status).to.be.equal(201)
         })
       })
    }) 
})