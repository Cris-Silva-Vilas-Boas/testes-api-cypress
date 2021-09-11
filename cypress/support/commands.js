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
