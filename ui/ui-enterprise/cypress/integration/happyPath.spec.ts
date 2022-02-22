// import { helper } from "@grouparoo/spec-helper";

const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";
const companyName = "Mario Bros. Plumbing";

describe("happyPath", () => {
  // spec-helper is currently not compatible as an import, but this needs to be done
  // before(() => {
  //   cy.wrap(helper.truncate());
  // });

  it("renders the homepage", () => {
    cy.visit("/");
    cy.get("h2").should(
      "have.text",
      "Sync, Segment, and Send your Product Data Everywhere"
    );

    cy.get("#navigation-greeting").should("contain.text", "Hello").click();
  });

  it("can create the first team", () => {
    cy.visit("/team/initialize");
    cy.get("input[name=companyName]").type(companyName);
    cy.get("input[name=firstName]").type(firstName);
    cy.get("input[name=lastName]").type(lastName);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);

    cy.get(".btn-primary").first().click();
    cy.location("pathname", { timeout: 60000 }).should("include", "/setup");
  });

  it("can sign out", () => {
    cy.visit("/session/sign-out");

    cy.location("pathname", { timeout: 60000 }).should("equal", "/");
  });

  it("can sign in", () => {
    cy.visit("/session/sign-in");
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get(".btn-primary").first().click();

    cy.location("pathname", { timeout: 60000 }).should("include", "/setup");
  });

  it("can take account information and see it reflected in the sidebar", () => {
    const newName = "Super Mario";

    cy.visit("/account");

    // Neeed to sign in again. We may need to introduce a way to bypass this
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get(".btn-primary").first().click();

    cy.location("pathname", { timeout: 60000 }).should("include", "/account");

    cy.get("#firstName").clear().type(newName);
    cy.get(".btn-primary").first().click();

    cy.visit("/dashboard");

    cy.get("#navigation-greeting").should("contain.text", `Hello ${newName}`);
  });
});
