Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
  Given("User on the home page", () => {
    cy.visit("https://gmibank.com/");
  });
  Then("User clikcks menu icon", () => {
    cy.get("#account-menu > .dropdown-toggle").click();
  });
    And("User navigates to Login page", () => {
      cy.get("#login-item").click();
    });
    And("User enter valid username", () => {
      cy.get("#username").type("employee73");
    });
    And ("User enter valid password", () => {
    cy.get("#password").type("Employee.73");
    });
    Then ("User clicks sign in button", () => {
       cy.get(".btn-primary").click();
    });
    Then("User clicks My Operations", () => {
      cy.get("#entity-menu > .dropdown-toggle").click();
    });
    Then("User clicks My Accounts", () => {
      cy.get('[href="/tp-account"] > span').click();
    });
      Then("User verifies account id and balance populated", () => {
        //cy.viewport(2500, 1500)
        cy.get('tbody > :nth-child(2) > :nth-child(5)').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('be.visible')
        cy.get('tbody > :nth-child(9) > :nth-child(4)').should('be.visible')
        cy.get(':nth-child(27) > :nth-child(4)').should('be.visible')
        cy.get('tbody > :nth-child(3) > :nth-child(4)').should('be.visible')
        cy.get(':nth-child(5) > :nth-child(5)').should('be.visible')
      });
      When ("User clicks View Transfer", () => {
        cy.get(":nth-child(1) > .text-right > .btn-group > .btn-info")
          .scrollIntoView()
          .should("be.visible");
          cy.get(":nth-child(1) > .text-right > .btn-group > .btn-info").scrollIntoView().click();
      });
      Then ("User verifies that Transfer transactions are displayed", () => {
        cy.get("h2 > span").should('be.visible')
        cy.get(".btn-info > .d-none > span").click()
        cy.get(":nth-child(1) > .text-right > .btn-group > .btn-primary")
          .scrollIntoView().should("be.visible");
        cy.get(":nth-child(1) > .text-right > .btn-group > .btn-primary").click();
        cy.get("#descriptionLabel").should("be.visible");
        cy.get(".d-none > span").click()
        cy.get(":nth-child(1) > .text-right > .btn-group > .btn-danger").click()
        cy.wait(20000)
        cy.get(".modal-title > span").should('be.visible')
      });