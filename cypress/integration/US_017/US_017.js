Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  // "baseUrl": "https://www.gmibank.com",
  // "integrationFolder": "cypress/integration/api-tests"
 
  import { Given } from "cypress-cucumber-preprocessor/steps";
  
  Given('user is on GMI Bank page',()=>{
  
    cy.visit('https://gmibank.com/');
  
  })

  Then('clicks on the profile icon at the top right and then click on the Sign In button',()=>{

    cy.get('#account-menu > .dropdown-toggle').click();
    cy.get('#login-item').click();

  })
 
  
  Then('enters the required information and click sign in',()=>{

    cy.get('#username').type('Team68Admin');
    cy.get('#password').type('Team68+');
    cy.get('.btn-primary').click();
     
  })

  Then('after logging in, clicks the Administration icon at the top right and then click the User management button',()=>{

    cy.get('#admin-menu > .dropdown-toggle').click();
    cy.get('[href="/admin/user-management"] > span').click();
    
  })
 

  Then('activates a user in the Users list',()=>{

    cy.get('#ira > :nth-child(4) > .btn').click();
    
    cy.get('#ira > .text-right > .btn-group > .btn-info').click();
    cy.wait(5000)
    cy.get(':nth-child(2) > .badge').should('have.text' , 'Activated')
  })