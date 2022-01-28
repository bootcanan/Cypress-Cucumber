Cypress.on('uncaught:exception', (err, runnable) => {
   
  return false
});

import { Given } from "cypress-cucumber-preprocessor/steps";

Given('user is on GMI Bank page',()=>{

  cy.visit('https://gmibank.com/');


})
Given('user clicks sign in button',()=>{

  cy.get('#account-menu > .dropdown-toggle').click()
  cy.get('#login-item').click()


})
Given('user enters valid username and password',()=>{

  cy.get('#username').type('employee73')
  cy.get('#password').type('Employee.73')


})

Given('user clicks sign in button down',()=>{

  cy.get('.btn-primary').click()


})
Given('user clicks manage customer button below my operations',()=>{

  cy.get('#entity-menu > .dropdown-toggle').click()
  cy.get('[href="/tp-customer"]').click()

})
Given('user clicks create a new customer button',()=>{

  cy.get('#jh-create-entity').click()

})
Given('user clicks save button',()=>{

  cy.get('#save-entity').click()

})
Given('user verifies adress box required message',()=>{
  cy.get(':nth-child(9) > .text-danger > .invalid-feedback').should('be.visible')
 

})
Given('user sends adress to adress box',()=>{

  cy.get('#tp-customer-address').click()
  .type('adana street')

})
Given('user verifies city box required message',()=>{

  cy.get(':nth-child(10) > .text-danger > .invalid-feedback').should('be.visible')

})
Given('user sends city name to city box',()=>{
  cy.get('#tp-customer-city').click().type('Izmir')
  

})
Given('user selects country name to country dropdown',()=>{

  cy.get('#tp-customer-country').select(10)


})

Given('user sends state name to state box',()=>{

  cy.get('#tp-customer-state').type('IRAK')


})