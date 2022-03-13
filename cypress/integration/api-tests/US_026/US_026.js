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

      Then('Update registrations data',()=>{
        cy.api({
             url: 'api/tp-countries',

             method:'Put',
             auth: {
                username: 'Customer625',
                password:  '625Aaa.'
            },
 
         body: {
                id: 24123,
                name: "updated"
    
         }
     
      }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eql("updated")
      })

    })
   