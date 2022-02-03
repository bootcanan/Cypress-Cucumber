Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given } from "cypress-cucumber-preprocessor/steps";
  
  Given('user is on GMI Bank page',()=>{
  
    cy.visit('https://gmibank.com/');
  
  
  })