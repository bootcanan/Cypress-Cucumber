
Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given,And,Then} from "cypress-cucumber-preprocessor/steps";


Given ('is on user settings page',()=>{

  cy.visit('https://gmibank.com/');
  cy.wait(2000);
    cy.get('#account-menu > .dropdown-toggle').click();
     cy.get('#login-item').click();
 
     cy.get('#username').type('cako5');
       cy.get('#password').type('123.456');
       cy.get('.btn-primary').click();
      cy. get('#account-menu > .dropdown-toggle > span').click();
      cy.get('[href="/account/settings"]').click();
})


Then('verify user setting is displayed',()=>{
  cy.wait(2000);
   cy.get('#settings-title').should('be.visible');

})

And('there should be 2 languages available English and Turkish',()=>{

  cy.get('#langKey').select('en');
  cy.get('#langKey').should('have.value', 'en')
  cy.get('#langKey').select('tr');
  cy.get('#langKey').should('have.value', 'tr')
  cy.get('#langKey').select('en');
})

And('there should be an option to update firstname',()=>{
  
 
  cy.get('#firstName').clear();
  cy.get('#firstName').type('abc123{enter}');
cy.get('#firstName').should('have.value', 'abc123');

})

And('there should be an option to update lastname',()=>{
  
  cy.get('#lastName').clear();
 
  cy.get('#lastName').type('abc{enter}');
cy.get('#lasttName').should('have.value', 'abc');
})

And('There should be an option to update email id adding "@" sign and "." extension',()=>{
  cy.get('#email').clear();
  cy.get('#email').type('abc@hotmail.com{enter}');
  cy.get('#email').should('have.value', 'abc@hotmail.com');



})

