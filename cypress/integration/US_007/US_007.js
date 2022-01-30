Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given } from "cypress-cucumber-preprocessor/steps";
  
  Given('user is on GMI Bank page',()=>{
  
    cy.visit('https://gmibank.com/');
  
  
  })

  Then('clicks the profile icon',()=>{
  
    cy.get('#account-menu > .dropdown-toggle').click()
    
  })

  Then('clicks signIn',()=>{
  
    cy.get('#login-item > span').click()

  })

  Then('writes username and password',()=>{
  
    cy.wait(1000)
    cy.get('#username').type('employee32')
    cy.get('#password').type('team32team32-')
    cy.get('.btn-primary').click()
    cy.wait(1000)
  })

  Then('clicks user info',()=>{
  
    cy.get('#account-menu > .dropdown-toggle').click();7
    cy.get('[href="/account/settings"] > .svg-inline--fa').click();

  })

  Then('email address "@" and "." must contain',()=>{
  
    cy.get('#email').should('have.value','ahmetkaya@gmail.com')
    cy.get('#email').clear().type('deneme')
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should('be.visible');
  
  })

  Then('There should be two "<language>" options, English and Turkish.',()=>{
  
    cy.get('#langKey').select('English').should('have.value', 'en')
    cy.get('#langKey').select('Türkçe').should('have.value', 'tr')
  
  })
  