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
  cy.get('#firstname').should('have.value', 'Firstname')
 
})

Then('number cannot be entered in the firstname box',() => {

  cy.get('#firstname').clear().type('12345')
  cy.get('#firstname').should('have.value', '12345')

})

Then('the firstname box should be left blank',() => {


  cy.get('#firstname').clear()
  cy.get('#register-submit').click();
  cy.get(':nth-child(2) > .invalid-feedback').should('be.visible');

})


Then('letters must be entered in the lastname box',() => {

  cy.get('#lastname').type('Lastname')
  cy.get('#lastname').should('have.value', 'Lastname')

})

Then('number cannot be entered in the lastname box',() => {

  cy.get('#lastname').clear().type('12345')
  cy.get('#lastname').should('have.value', '12345')

  //1. bug

})

Then('the lastname box should be left blank',() => {

  cy.get('#lastname').clear()
  cy.get('#register-submit').click();
  cy.get(':nth-child(3) > .invalid-feedback').should('be.visible');

})


Then('letters & numbers must be entered in the adress box',() => {

  cy.get('#address').type('Ist. 56/A')
  cy.get('#address').should('have.value' , 'Ist. 56/A')
 
})


Then('the adress box should be left blank',() => {

  cy.get('#address').clear()
  cy.get('#register-submit').click();
  cy.get(':nth-child(4) > .invalid-feedback').should('be.visible');
  
})


Then('missing numbers cannot be entered in the number box.',() => {

  cy.get('#mobilephone').type('111-111-111')
  cy.get('#register-submit').click();
  cy.get(':nth-child(5) > .invalid-feedback').should('be.visible')

})

Then('numbers must be entered in the phone number box',() => {

  cy.get('#mobilephone').clear().type('abcd')
  cy.get('#register-submit').click();
  cy.get(':nth-child(5) > .invalid-feedback').should('be.visible')

})

Then('the phone number box should be left blank',() => {

  cy.get('#mobilephone').clear()
  cy.get('#register-submit').click();
  cy.get(':nth-child(5) > .invalid-feedback').should('be.visible')

})

Then('only numbers cannot be written in the username box',() => {

  cy.get('#username').type('12345')
  cy.get('#register-submit').click();
  cy.get('#username').should('have.class', 'av-valid')
  
  //2. bug

})

Then('the username box should be left blank',() => {

  cy.get('#username').clear()
  cy.get('#register-submit').click();
  cy.get(':nth-child(6) > .invalid-feedback').should('be.visible')

})

Then('must accept any character along with numbers in the username box',() => {

  cy.get('#username').clear().type('123/')
  cy.get('#register-submit').click();
  cy.get(':nth-child(6) > .invalid-feedback').should('be.visible')
  
})

Then('enters an email according to the desired criteria',() => {

  cy.get('#email').type('deneme')
  cy.get('#register-submit').click();
  cy.get(':nth-child(7) > .invalid-feedback').should('be.visible')

})

})

