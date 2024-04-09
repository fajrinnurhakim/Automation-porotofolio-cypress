describe("Portofolio Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Portofolio Website", () => {
        cy.url().should("include", "/");
        cy.get("span").contains("Fajrin Nurhakim").should("be.visible");
    });
});
