describe("Portofolio Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Portofolio Website", () => {
        cy.url().should("include", "/");
        cy.get("h1").contains("Fajrin Nurhakim").should("be.visible");
    });
});
