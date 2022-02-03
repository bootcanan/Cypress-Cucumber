Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given } from "cypress-cucumber-preprocessor/steps";
  
  Given('Kullanici GMI Bank sayfasina gider',()=>{
  
    cy.visit('https://gmibank.com/');
    cy.get('#account-menu > .dropdown-toggle').click()
    cy.get('#login-item > span').click()
    cy.get('#username').type('Customer625')
    cy.get('#password').type('625Aaa.')
    cy.get('.btn-primary').click()
    cy.get('#entity-menu > .dropdown-toggle > span').click()
    cy.get('[href="/customer/tp-customer-accounts/124108"]').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn').click()
    cy.get('thead > tr > :nth-child(6)').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(4) > .btn').click()
    cy.get('thead > tr > :nth-child(6)').should('be.visible')
    
    
   
  
    
    
     
   


  })
  