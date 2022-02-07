Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { Given, Then } from "cypress-cucumber-preprocessor/steps";
Given("Get registrations data", () => {
  cy.api({
    url: "api/tp-account-registrations",
    method: "GET",
    auth: {
      username: "team69Admin",
      password: "Team69+",
    },
  })
    .its("status")
    .should("eq", 200);
}),
  Then("Post registrations data", () => {
    cy.api({
      url: "api/tp-account-registrations",
      method: "POST",
      auth: {
        username: "team69Admin",
        password: "Team69+",
      },
      body: {
        ssn: "802-13-3484",
        firstName: "cako6",
        lastName: "Said",
        address: "weybridge, oatlands avenue",
        mobilePhoneNumber: "032-311-0678",
        userId: 172445,
        userName: "cako.bes",
        email: "crazy@hotmail.com",
        createDate: null,
      },
    }).then((res) => {
      expect(res.body.firstName).to.eql("cako6");
      expect(res.body.email).to.eql("crazy@hotmail.com");
      expect(res.body.lastName).to.eql("Said");
    });
  });
