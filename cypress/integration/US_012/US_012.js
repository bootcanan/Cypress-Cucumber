Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
before(function() {
    cy.fixture('register').then(function(data) {
        this.data = data
    })
})
Given('user enters gmibank homepage', () => {
    cy.visit('https://gmibank.com/')
})
Then('user clicks userEntry icon', () => {
    cy.get('#account-menu > .dropdown-toggle').click()
})
And('user clicks signIn link', () => {
    cy.get('#login-item > span').click()
})
Then('user enters admin username', () => {
    cy.get('#username').type('onder')
})
Then('user enters admin password', () => {
    cy.get('#password').type('aaaAA1!')
})
Then('user clicks signIn button', () => {
    cy.get('.btn-primary').click()
})
And('user clicks myOperations link', () => {
    cy.get('#entity-menu > .dropdown-toggle > span').click()
})
And('user clicks manageCostomers link', () => {
    cy.get('[href="/tp-customer"] > span').click()
})
Given('user should show First Name and verify valid', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('not.empty')
})
Given('user should show Last Name and verify valid', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('not.empty')
})
Given('user should show Middle Initial and verify valid', () => {
    cy.get('tr > :nth-child(4) > span').should('not.empty')
})
Given('user should show Email and verify valid', () => {
    cy.get('tr > :nth-child(5) > span').should('not.empty')
})
Given('user should show Mobile Phone Nummer and verify valid', () => {
    cy.get('tr > :nth-child(6) > span').should('not.empty')
})
Given('user should show Phone Nummer and verify valid', () => {
    cy.get('thead > tr > :nth-child(7)').should('not.empty')
})
Given('user should show Address and verify valid', () => {
    cy.get('thead > tr > :nth-child(8)').should('not.empty')
})
Given('user should show Create Date and verify valid', () => {
    cy.get('thead > tr > :nth-child(9)').should('not.empty')
})
Given('user should show Edit Button and verify valid', () => {
    cy.get('.btn btn-primary btn-sm').should('not.empty')
})
Given('user should write and new the Email address', () => {
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-primary').click()
    cy.get('#tp-customer-email').clear().type('4thankyou@gmail.com')
})
And('user click Save Button', () => {
    cy.get('#save-entity').click()
})
Given('user should write and new the Mobile Phone Nummer', () => {
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-primary').click()
    cy.get('#tp-customer-mobilePhoneNumber').click().clear()
    cy.get('#tp-customer-mobilePhoneNumber').type('588-639-7218')
})
And('user click Save one Button', () => {
    cy.get('#save-entity').click()
})
Given('user should write and new the Phone Nummer', () => {
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-primary').click()
    cy.get('#tp-customer-phoneNumber').click().clear()
    cy.get('#tp-customer-phoneNumber').type('843-650-9872')
})
And('user click Save two Button', () => {
    cy.get('#save-entity').click()
})
Given('user should write and new the Address', () => {
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-primary').click()
    cy.get('#tp-customer-address').click().clear()
    cy.get('#tp-customer-address').type('konyaalti/Antalya')
})
And('user click Save three Button', () => {
    cy.get('#save-entity').click()
})
Given('user click Delete Button', () => {
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-danger').click()
    cy.get('span').contains(' Customer 38016?')
    cy.get('.btn-secondary').click()
})
//.modal-body