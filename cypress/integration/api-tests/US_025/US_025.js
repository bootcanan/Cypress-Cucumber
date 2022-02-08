Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });

  import {Given,Then} from "cypress-cucumber-preprocessor/steps";
      Given('Get registrations data', () => {
        cy.api({
           url: 'api/tp-account-registrations',
           method:'Get',
           auth: {
               username: 'Customer625',
               password:  '625Aaa.'
           }

         })
         .its('status')
         .should('eq', 200);   
      }),

      Then('Post registrations data',()=>{
        cy.api({
             url: 'api/tp-countries',

             method:'Post',
             auth: {
                username: 'Customer625',
                password:  '625Aaa.'
            },
 
         body: {
                name: "ispanya",
                states: null
    
         }
     
      })

    })
