Cypress.on('uncaught:exception', (err, runnable) => {

  return false
});

import { Given } from "cypress-cucumber-preprocessor/steps";

Given('user is on GMI Bank page', () => {

  cy.visit('https://gmibank.com/');

})

Then('clicks on the profile icon at the top right and then click on the Sign In button', () => {

  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('#login-item').click();

})

Then('enters the required information and click sign in', () => {

  cy.get('#username').type('Team68Admin');
  cy.get('#password').type('Team68+');
  cy.get('.btn-primary').click();

})

Then('after logging in, clicks the Administration icon at the top right and then click the User management button', () => {

  cy.get('#admin-menu > .dropdown-toggle').click();
  cy.get('[href="/admin/user-management"] > span').click()

})

Then('activates a user in the Users list', () => {

  cy.get('#ira > :nth-child(4) > .btn').click();
  cy.get('#ira > .text-right > .btn-group > .btn-info').click();
  cy.get(':nth-child(2) > .badge').should('have.text', 'Activated')
})

Then('activates a employee in the employees list', () => {

  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.get('#kelvin > :nth-child(4) > .btn').click();
  cy.get('#kelvin > .text-right > .btn-group > .btn-info').click();
  cy.get('.badge > span').should('have.text', 'Activated')


})

Then('activates a manager in the managers list', () => {
  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.get('#benny > :nth-child(4) > .btn').click()
  cy.get('#benny > .text-right > .btn-group > .btn-info').click()
  cy.get(':nth-child(2) > .badge').should('have.text', 'Activated')

})

Then('activates a admin in the admins list', () => {
  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.get('#michael > :nth-child(4) > .btn').click()
  cy.get('#michael > .text-right > .btn-group > .btn-info').click()
  cy.get(':nth-child(2) > .badge').should('have.text', 'Activated')

})

Then('clicks admin view buttons', () => {
  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.viewport(2500, 1500)
  cy.get('#sherlockholmes > .text-right > .btn-group > .btn-info').click()
  cy.get('h2').should('be.visible')

})

Then('clicks admin edit buttons', () => {
  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.viewport(2500, 1500)
  cy.get('#bbell > .text-right > .btn-group > .btn-primary').click()
  cy.get('h1 > span').should('be.visible')
  cy.get('.btn-info').click()
  cy.get('#murtaza > .text-right > .btn-group > .btn-primary').click()
  cy.get('h1 > span').should('be.visible')
})

Then('clicks admin delete buttons', () => {
  cy.get('#admin-menu > .dropdown-toggle').click({ multiple: true })
  cy.get('.dropdown-menu > .active').click()
  cy.viewport(2500, 1500)
  cy.get('#musterilerlogin > .text-right > .btn-group > .btn-danger').click()
  cy.get('.modal-title').should('be.visible')
  cy.get('.modal-footer > .btn-danger').click()
  cy.get('.Toastify__toast').should('be.visible')

})