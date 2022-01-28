

Cypress.on('uncaught:exception', (err, runnable) => {
   
  return false
});

import { Given } from "cypress-cucumber-preprocessor/steps";

describe("US 001", () => {
  before(function () {
    cy.fixture('creds').then(function (data) {
      this.data = data;
    });
  });


Given('user is on GMI Bank page',()=>{

  cy.visit('https://gmibank.com/');
  

})

Then('user clicks registration button',()=>{

  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('[href="/account/register"] > span').click();
  

})


Then('tests that information can be entered in the SSN box as desired.',() => {

  cy.get('#ssn').type("12-345-45");
  cy.get('#register-submit').click();
  cy.get(':nth-child(1) > .invalid-feedback').should('be.visible');

})

Then('letters must be entered in the firstname box',() => {


  cy.get('#firstname').type('Firstname')
  cy.get(':nth-child(2) > .invalid-feedback').should('be.enabled');

})

Then('number cannot be entered in the firstname box',() => {

  

})
Then('the firstname box should be left blank',() => {

  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('#login-item').click();
  

})

})
