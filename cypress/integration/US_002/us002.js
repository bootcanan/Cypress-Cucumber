Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

 
  before(function(){
    cy.fixture('register').then(function(data){
        this.data=data
    })
  })

  Given('user goes registration',function(){
      cy.visit(this.data.registerPage);
      })

      Given('user checks SSN inbox',function(){
        cy.get('#ssn').click()
        cy.get('#firstname').click()
        cy.get(':nth-child(1) > .invalid-feedback').should('be.visible')
        })

        Given('user checks firstname inbox',function(){
          cy.get('#firstname').click()
          cy.get('#ssn').click()
          cy.get(':nth-child(2) > .invalid-feedback').should('contain.text', 'first name')
        })

        Given('user checks lastname inbox',function(){
          cy.get('#lastname').click()
          cy.get('#firstname').click()
          cy.get(':nth-child(3) > .invalid-feedback').should('contain.text','last name')
        })

        Given('user checks address inbox',function(){
          cy.get('#address').click()
          cy.get('#lastname').click()
          cy.get(':nth-child(4) > .invalid-feedback').should('contain.text','address')
        })

        Given('user checks mobilephone inbox',function(){
          cy.get('#mobilephone').click()
          cy.get('#address').click()
          cy.get(':nth-child(5) > .invalid-feedback').should('contain.text','phone number')
        })

        Given('user checks username inbox',function(){
          cy.get('#username').click()
          cy.get('#mobilephone').click()
          cy.get(':nth-child(6) > .invalid-feedback').should('contain.text','username')
        })

        Given('user checks email inbox',function(){
          cy.get('#email').click()
          cy.get('#username').click()
          cy.get(':nth-child(7) > .invalid-feedback').should('contain.text','email')
        })

        Given('user checks password inbox',function(){
          cy.get('#firstPassword').click()
          cy.get('#email').click()
          cy.get(':nth-child(8) > .invalid-feedback').should('contain.text','password')
        })
        Given('user checks password_confirmation inbox',function(){
          cy.get('#secondPassword').click()
          cy.get('#firstPassword').click()
          cy.get(':nth-child(10) > .invalid-feedback').should('contain.text','confirmation')
        })

       
        Given("user checks {string} inbox and validate", (ssn) => {
          cy.get('#ssn').clear().type(ssn);
          cy.get('#ssn').should('not.have.attr', 'value', ssn)
      })

      Given("users check {string} inbox and validate", (phone) => {
        cy.get('#mobilephone').clear().type(phone);
        cy.wait(1000)
        cy.get('#mobilephone').should('contain.text', '')
    })
    Given("users checks {string} inbox and validate", (email) => {
      cy.get('#email').clear().type(email);
      cy.wait(1000)
      cy.get(':nth-child(7) > .invalid-feedback').should('contain.text', 'invalid')
  })
//npx cypress run --spec cypress\integration\US_002.feature
//browselı
//npx cypress run --spec cypress\integration\US_002.feature --browser chrome

//dashborddan calıştırma
//npx cypress run --record --key ac867a47-282b-4a0a-9cee-ea6f5e4f0568
