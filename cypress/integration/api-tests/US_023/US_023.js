import { Given, Then } from "cypress-cucumber-preprocessor/steps/index";

Given("Get registrations data", () => {
  cy.api({
    url: "https://www.gmibank.com/api/tp-account-registrations",
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
      url: "https://www.gmibank.com/api/tp-account-registrations",
      method: "POST",
      auth: {
        username: "team69Admin",
        password: "Team69+",
      },
      body: {
        ssn: "802-23-3484",
        firstName: "said",
        lastName: "Wer",
        address: "Deutschland, Ost",
        mobilePhoneNumber: "032-311-0679",
        userId: 172445,
        userName: "said.",
        email: "said@hotmail.com",
        createDate: null,
      },
    }).then((res) => {
      expect(res.body.firstName).to.eql("said");
      expect(res.body.email).to.eql("said@hotmail.com");
    });
  });
