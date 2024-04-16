describe("Portofolio Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL_DASHBOARD"));
    });

    it("Portofolio Website", () => {
        cy.url().should("include", "/dashboard");
        cy.get("span").contains("Fajrin Nurhakim").should("be.visible");
    });
});
