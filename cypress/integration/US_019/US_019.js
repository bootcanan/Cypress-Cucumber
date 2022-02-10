Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  Given('admin is on the manage accounts page',(url)=>{

    cy.visit('https://gmibank.com/');
    cy.wait(2000);
      cy.get('#account-menu > .dropdown-toggle').click();
       cy.get('#login-item').click();
   
       cy.get('#username').type('HelloWorld');
         cy.get('#password').type('GMIBANK.2123');
         cy.get('.btn-primary').click();
         cy.contains('My Operations').click();
        cy.contains('Manage Accounts').click();

  });


  Then ('admin clicks create a new account button',()=>{
   
    cy.get('#jh-create-entity').click();

  });

  Then ('admin gets warning when the description box is empty',()=>{
   
    cy.get('#save-entity').click();
    cy.get(':nth-child(1) > .text-danger > .invalid-feedback').should('be.visible');

  });
  Then ('admin types "description" to the description box',()=>{
   
    cy.get('#tp-account-description').type('description');
    cy.get('#tp-account-balance').type('100');
    

  });
  Then ('admin clicks save button',()=>{
   
    cy.get('#save-entity').click();

  });
  
  Then ('admin gets warning when the balance box is empty',()=>{
   
    cy.get('#save-entity').click();
    cy.get(':nth-child(2) > .text-danger > .invalid-feedback').should('be.visible');

  });
  Then ('admin types "100" to the balance box',()=>{
   
    cy.get('#tp-account-balance').type('100');

  });

  Then ('admin choose "Credit-Card" from dropdown box',()=>{
   
    cy.get('#tp-account-accountType').select('CREDIT_CARD').should('have.text', 'CREDIT_CARD');

  });
  Then ('admin choose "Active" from dropdown box',()=>{
   
    cy.get('#tp-account-accountStatusType').select('ACTIVE').should('have.text', 'ACTIVE');

  });
  //Then ('admin choose "Active" from dropdown box',()=>{
   
  //  cy.get('#tp-account-employee').select('ACTIVE').should('have.text', 'ACTIVE');

//  });
 

