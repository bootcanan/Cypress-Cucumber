Cypress.on('uncaught:exception', (err, runnable) => {

    return false
});


import { Given, Then } from "cypress-cucumber-preprocessor/steps";
Given('Get states data', () => {
    cy.api({
            url: 'api/tp-states',
            method: 'GET',
            auth: {
                username: 'team69Admin',
                password: 'Team69+'
            }
        })
        .its('status')
        .should('eq', 200)

})

Then('User can just create and validate each state 1 by 1', () => {
    cy.api({
        url: 'api/tp-states',
        method: 'POST',
        auth: {
            username: 'team69Admin',
            password: 'Team69+'
        },
        body: {
            name: "Cangel",
            tpcountry: null,


        },
    }).then((res) => {

        expect(res.body.name).to.eql("Cangel");
        expect(res.body.tpcountry).to.eql(null);


    })

})