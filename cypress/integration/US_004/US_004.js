Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
  Given("positiveLogin", () => {
    cy.visit("https://www.gmibank.com/");
    cy.get("#account-menu > .dropdown-toggle").click();
    cy.get("#login-item").click();
    cy.get("#username").type("Team69Admin");
    cy.get("#password").type("Team69+");
    cy.get(".btn-primary > span").click();
    cy.url().should("include", "gmibank");
    cy.get("#account-menu > .dropdown-toggle > span").should(
      "have.text",
      "Admin69 Team"
    );
    cy.get("#account-menu > .dropdown-toggle").click();
    cy.get('[href="/logout"] > span').click();
    cy.url().should("include", "//www.gmibank.com/logout");
  });
  And("negativeLogin", () => {
    cy.visit("https://www.gmibank.com/");
    cy.get("#account-menu > .dropdown-toggle").click();
    cy.get("#login-item").click();
    cy.get("#username").type("Team69Admin");
    cy.get("#password").type("Team69"); //yanlis password
    cy.get(".btn-primary > span").click();
    cy.get("strong").should("include.text", "Failed to sign in!");
  });
  Then("Cancel", () => {
    cy.visit("https://www.gmibank.com/");
    cy.get("#account-menu > .dropdown-toggle").click();
    cy.get("#login-item").click();
    cy.get("#username").type("Team69Admin");
    cy.get("#password").type("Team69+");
    cy.get(".btn-secondary > span").click();
    cy.url().should("include", "https://www.gmibank.com/");
  });