Cypress.on('uncaught:exception', (err, runnable) => {
   
  return false
});

import { Given } from "cypress-cucumber-preprocessor/steps";

Given(' is on user settings page ',()=>{

  cy.visit('https://gmibank.com/');

  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('#login-item').click();
  

});