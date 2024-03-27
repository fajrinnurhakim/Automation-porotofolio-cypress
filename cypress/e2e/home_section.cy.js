describe("Home Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Home Section - CV", () => {
        cy.get("div.space-y-5>a.btn.btn-outline")
            .contains("Curriculum Vitae")
            .click();
        cy.wait(2000);
    });
    it("Profile Section - Linkedin", () => {
        cy.get("div.space-x-2>a").eq(0).click();
        cy.wait(2000);
    });
    it("Profile Section - Github", () => {
        cy.get("div.space-x-2>a").eq(1).click();
        cy.wait(2000);
    });
    it("Profile Section - Instagram", () => {
        cy.get("div.space-x-2>a").eq(2).click();
        cy.wait(2000);
    });
    it("Profile Section - Whatsapp", () => {
        cy.get("div.space-x-2>a").eq(3).click();
        cy.wait(2000);
    });
});
