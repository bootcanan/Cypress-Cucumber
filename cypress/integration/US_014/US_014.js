  
  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given,And, Then} from "cypress-cucumber-preprocessor/steps";

  Given("user is on the registration page", ()=>{

  cy.visit("https://gmibank.com");
  cy.get('#account-menu > .dropdown-toggle').click();
  cy.get('#login-item').click();

  cy.get('#username').type('HelloWorld');
    cy.get('#password').type('GMIBANK.2123');
    cy.get('.btn-primary').click();
    cy.get('#entity-menu > .dropdown-toggle').click();
    cy.get('[href="/tp-customer"]').click();
  
  })
  And('user clicks on the  date creation input',()=>{

  cy.get('#jh-create-entity').click();
    cy.get('#tp-customer-createDate').type("2017-04-01T08:30").click();
    
  })

   Then('verify date creation can not type earlier',()=>{
    let date = new Date();
cy.get('#tp-customer-createDate').should('not.have.value', date.toJSON().slice(0, 16));
   })


Then('user can choose a user from the registration and it cannot be blank',()=>{
 // cy.get('#tp-customer-user').

 cy.get('#tp-customer-user').select('xxx xXx Admin').should('have.value', '27793')
cy.get('#tp-customer-user').select([]).should('have.value', '');
})

Then('user can choose an account created on manage accounts',()=>{

  cy.get('#tp-customer-account')
  .select([1])
  .invoke('val')
  .should('deep.equal', ['121377'])

})
 

Then('User can select Zelle Enrolled optionally and save it',()=>{

  cy.get('#tp-customer-zelleEnrolled').click();

})