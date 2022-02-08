Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
Given('user is on GMI Bank page', () => {
    cy.visit('https://gmibank.com/')
})
Then('Click on user button', () => {
    cy.get('#account-menu > .dropdown-toggle').click()
})
And('You should navigate to registration page', () => {
    cy.get('[href="/account/register"] > span').click()
})
And('Click on Password textbox', () => {
    cy.get('#firstPassword')
})
Given('Enter a password with 1 {string} of at least 7 characters', (cases) => {
    cy.get('#firstPassword').clear().type(cases)
})
And('Color line must be orange or green', () => {
    cy.get('#strengthBar').should('have.css', 'color', 'rgb(41, 41, 41)')
})
And('Click on password confirmation textbox', () => {
    cy.get('#secondPassword').clear()
})
Then('Enter to second textbox with 1 {string} of at least 7 characters', (cases) => {
    cy.get('#secondPassword').type(cases)
})










