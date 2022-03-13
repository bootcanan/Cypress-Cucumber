Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given } from "cypress-cucumber-preprocessor/steps";
  const ssn = require('../../fixtures/ssn.json')
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
  Given('send ssn number and search',()=>{
  
  cy.get('#search-ssn').type(ssn.ssn_up)
  cy.get('form.av-invalid > :nth-child(1) > .btn').click()
  cy.wait(3000)
  })
  Given('assert green pop up displayed',()=>{
    cy.get('.Toastify__toast-body').should('be.visible')  
  })
  Given('assert firstname',()=>{
    cy.get('#tp-customer-firstName').invoke('attr','value').should('be.eq',ssn.first_name)
   
  })
  Given('assert lastname',()=>{
    cy.get('#tp-customer-lastName').invoke('attr','value').should('be.eq',ssn.last_name)

  
  })
  Given('assert email',()=>{
  
    cy.get('#tp-customer-email').invoke('attr','value').should('be.eq',ssn.email)
    
  })
  Given('assert mobilephone',()=>{
    
    cy.get('#tp-customer-mobilePhoneNumber').invoke('attr','value').should('be.eq',ssn.mobile_phone)
    
  })
  Given('assert address',()=>{
    
    cy.get('#tp-customer-address').invoke('attr','value').should('be.eq',ssn.first_name)
  
  })