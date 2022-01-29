

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
  Given('user enters invalid username and password',()=>{
  
    cy.get('#username').type('Team73Adminn')
    cy.get('#password').type('Team73++')
  
  
  })
  Given('user enters invalid username and valid password',()=>{
  
    cy.get('#username').type('Team73Adminn')
    cy.get('#password').type('Team73+')
  
  
  })
  Given('user enters valid username and invalid password',()=>{
  
    cy.get('#username').type('Team73Admin')
    cy.get('#password').type('Team73++')
  
  
  })
  Given('user clicks sign in button down',()=>{
  
    cy.get('.btn-primary').click()
  
  
  })
  Given('user sees Failed to sign in! Please check your credentials and try again. text',()=>{
  
    cy.get(':nth-child(1) > .alert').should('contains.text','Failed to sign in! Please check your credentials and try again.')
  
  
  })
  Given('user clicks did you forget your password button',()=>{
  
    cy.get('.modal-body > :nth-child(3)').click()
  
  })
  Given('user enters the mail to see reset the password button',()=>{
    cy.get('#email').click().type('str@adana.com')
  
  
  })
  Given('user clicks register a new account button',()=>{
    cy.get('.modal-body > :nth-child(4) > a > span').click()
  
  
  })
  