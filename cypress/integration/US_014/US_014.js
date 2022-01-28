  
  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given} from "cypress-cucumber-preprocessor/steps";

  Given("user is on the registration page", ()=>{

  cy.visit("https://gmibank.com");
  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('#login-item').click();

  cy.get('#username').type('HelloWorld');
    cy.get('#password').type('GMIBANK.2123');
    cy.get('.btn-primary').click();
    cy.get('#entity-menu > .dropdown-toggle').click();
    cy.get('[href="/tp-customer"]').click();
    cy.get('#jh-create-entity').click();

     

  })
