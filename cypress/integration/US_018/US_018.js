Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  Given('user is on the manage customers page',(url)=>{

    cy.visit('https://gmibank.com/');
    cy.wait(2000);
      cy.get('#account-menu > .dropdown-toggle').click();
       cy.get('#login-item').click();
   
       cy.get('#username').type('HelloWorld');
         cy.get('#password').type('GMIBANK.2123');
         cy.get('.btn-primary').click();
         cy.contains('My Operations').click();
        cy.contains('Manage Customers').click();

  });


  Then ('verify user information is on the page',()=>{
    cy.get('.jh-card')
    .children()
    .should('contain', 'First Name')
    .and('contain', 'Last Name')
    .and('contain', 'Middle Initial')
    .and('contain', 'Email')
    .and('contain', 'Mobile Phone Number')


  });
  Then('there should be a View option',()=>{

   
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-info').scrollIntoView().should('be.visible');

    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-info').scrollIntoView().click();
    cy.get('.col-md-8')
    .children()
    .should('contain','First Name')
    .and('contain', 'Last Name')
    .and('contain', 'Middle Initial')
    .and('contain', 'Email')
    .and('contain', 'Mobile Phone Number')
    .and('contain','Zip Code')
    .and('contain', 'Address')
    .and('contain','Ssn');


  }) ; 
  
  Then ('There should be an Edit button where all customer information can be populated',()=>{
    cy.contains('My Operations').click();
    cy.contains('Manage Customers').click();
    cy.get(':nth-child(1) > .text-right > .btn-group > .btn-primary').scrollIntoView().click();
    
   cy.contains('Create or edit a Customer').scrollIntoView().should('be.visible');



  });




  Then ('Edit portal can allow user to create or update the user info',()=>{
    cy.get('#tp-customer-firstName').clear();
    cy.get('#tp-customer-firstName').type('abc123');
    cy.get('#tp-customer-firstName').should('have.value', 'abc123');;

    cy.get('#tp-customer-lastName').clear();
    cy.get('#tp-customer-lastName').type('abc');
    cy.get('#tp-customer-lastName').should('have.value', 'abc');

    cy.get('#tp-customer-middleInitial').clear();
    cy.get('#tp-customer-middleInitial').type('yey');
    cy.get('#tp-customer-middleInitial').should('have.value', 'yey');

    cy.get('#tp-customer-email').clear();
    cy.get('#tp-customer-email').type('sdjhsk@hotmail.com');
    cy.get('#tp-customer-email').should('have.value','sdjhsk@hotmail.com');
   
    cy.get('#tp-customer-mobilePhoneNumber').clear();
    cy.get('#tp-customer-mobilePhoneNumber').type('999-639-7218');
    cy.get('#tp-customer-mobilePhoneNumber').should('have.value','999-639-7218');

    cy.get('#tp-customer-phoneNumber').clear();
    cy.get('#tp-customer-phoneNumber').type('876-650-9872');
    cy.get('#tp-customer-phoneNumber').should('have.value','876-650-9872');


    cy.get('#tp-customer-zipCode').clear();
    cy.get('#tp-customer-zipCode').type('4567');
    cy.get('#tp-customer-zipCode').should('have.value', '4567');


    cy.get('#tp-customer-address').clear();
    cy.get('#tp-customer-address').type('istanbul');
    cy.get('#tp-customer-address').should('have.value', 'istanbul');

    cy.get('#tp-customer-ssn').clear();
    cy.get('#tp-customer-ssn').type('342-22-9055');
    cy.get('#tp-customer-ssn').should('have.value','342-22-9055');
      
    cy.get('#tp-customer-createDate').clear();
     cy.get('#tp-customer-createDate').type('2017-06-01T08:30');
     cy.get('#tp-customer-createDate').should('have.value','2017-06-01T08:30');


     cy.get('select').eq(0).select(2).should('have.value', '24113');

     cy.get('#tp-customer-state').type('surrey');
     cy.get('#tp-customer-state').should('have.value','surrey');

     cy.get('select').eq(1).select(6).should('have.value', '27793');
     
     cy.get('select').eq(2).select(2).invoke('val').should('deep.equal', ['128483']);
    
     cy.get('#save-entity').click();


  
  });





