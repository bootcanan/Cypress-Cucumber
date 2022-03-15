  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });

  import {Given,Then} from "cypress-cucumber-preprocessor/steps";
      Given('Read all states you created and validate them from your data set', () => {
        cy.api({
            url: '/api/tp-states',
           method:'GET',
            auth: {
                username: 'team69Admin',
                password: 'Team69+'
              }
          })
          .its('status')
          .should('eq', 200);
          })

          Then('Read all states you created and validate them 1 by 1',()=>{
            cy.api({
                url: '/api/tp-states',
               method:'POST',
                auth: {
                    username: 'team69Admin',
                    password: 'Team69+'
                  },
                  body:{
                     name: "Deneme",
                     tpcountry: null
                  }
              }).then((res)=>{
                     expect(res.body.name).to.eql("Deneme");
                     expect(res.body.tpcountry).to.eql(null);
              })
         
 });
