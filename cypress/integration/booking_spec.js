/// <reference types="Cypress" />
const randomstring = require("randomstring");

describe("Booking a room", function() {
  it("New user flow", function() {
    cy.visit("/");
    cy.contains("Mary Pass").click();
    cy.contains("View all rooms").click();
    cy.contains("Rhonda Hicks").click({ force: true });

    cy.get("input[name=arrive]").focus();
    // Pick next month so all the dates are available
    cy.get(".react-datepicker__navigation--next").click({ force: true });
    cy.get("[aria-label=day-13]").click({ force: true });
    // Force de-select first date picker. For some reason immediately selecting second date
    // picker causes first not to close.
    cy.get("#network-footer").click("topLeft");
    cy.get("input[name=depart]").focus();
    cy.get("[aria-label=day-16]").click({ force: true });
    cy.get("[name=purpose]").type("Work.");
    cy.contains("Request to Book").click();

    cy.get("[name=bio]").type("I am a robot.");
    cy.get("[name=projects]").type("Kill all humans.");
    cy.get("[name=sharing]").type("I can do your math homework.");
    cy.get("[name=discussion]").type("Is AI risk overrated?");
    cy.get("[name=first_name]").type("Bot");
    cy.get("[name=last_name]").type("McBotface");
    cy.get("[name=referral]").type("Pixel");
    cy.get("[name=city]").type("Chapek 9");
    cy.get("[name=email]").type(`${randomstring.generate(10)}@example.com`);
    cy.get("[name=password1]").type("password");
    cy.get("[name=password2]").type("password");

    cy.uploadFile("profile.png", "input[name=image");

    cy.contains("Submit").click();

    cy.contains("Your booking has been submitted.");
  });
});
