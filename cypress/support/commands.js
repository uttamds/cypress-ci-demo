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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {

    cy.visit("https://www.demoblaze.com")

    // Open Login Modal
    cy.contains("Log in").click()

    // Wait until modal is visible
    cy.get("#logInModal").should("be.visible")

    // Enter credentials
    cy.get("#loginusername").type(username)
    cy.get("#loginpassword").type(password)

    // Click the Login button inside the modal
    cy.get("#logInModal")
        .contains("button", "Log in")
        .click()

    // Verify successful login
    cy.contains("Welcome").should("be.visible")
})