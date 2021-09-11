describe('Working with basic elements', () => {

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Alert', () => {
        cy.get('#alert').click();
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        });
    })


    it('Alert with mock', ()=>{
        const stub = cy.stub().as('alerta');
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples');
        });
    })

    it('Confirm', ()=>{
        cy.get('#confirm').click();
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples');
        });
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado');
        });
    })

    it('Deny', ()=>{
        cy.get('#confirm').click();
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples');
            return false;
        });
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado');
        });
    })

    it('Prompt', ()=>{
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns('42');
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click();
    })

    it('Validando mensagens', ()=>{
        const stub = cy.stub;

        cy.on('window:alert', stub)
        cy.get('#formCadastrar').
            click().then(() => expect(stub.getCall(0)).to.be.caller('Nome eh obrigatorio'))

        cy.get('#formNome').type('Cristina')
        cy.get('#formCadastrar').
           click().then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'));


        cy.get('[data-cy=dataSobrenome]').type('Silva')
        cy.get('#formCadastrar').
            click().then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'));

        cy.get('#formSexcoMasc').click();
        cy.get('#formCadastrar').click();

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})