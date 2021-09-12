// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import locator from './locators'

Cypress.Commands.add('login', (user, password) =>{
    cy.get(locator.LOGIN.USER).type(user);
    cy.get(locator.LOGIN.PASSWORD).type(password);
    cy.get(locator.LOGIN.BUTTON_LOGIN).click();
    cy.get(locator.MESSAGE).should('contain.text', 'Bem vindo, a!');
})

Cypress.Commands.add('resetApp', () =>{
    cy.get(locator.HOME_PAGE.SETTINGS).click();
    cy.get(locator.HOME_PAGE.RESET).click();
})

Cypress.Commands.add('getToken', (user, password) =>{
    cy.request({
        method: 'POST',
        url: 'https://barriarest.wcaquino.me/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: password
        }
    }).its('body.token').should('not.be.empty')
    .then(token =>{
        return token
    })
})

Cypress.Commands.add('resetRest', () =>{
    cy.getToken('a@a', 'a').then(token =>{
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200);
    })
})

Cypress.Commands.add('buscarPorNomeDeConta', (nome) =>{
    cy.getToken('a@a', 'a').then(token =>{
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/contas',
            headers: { Authorization: `JWT ${token}` },
            qs:{
               nome: nome 
            }
        }).then(res=>{
            return res.body[0].id;
        })
    })
})