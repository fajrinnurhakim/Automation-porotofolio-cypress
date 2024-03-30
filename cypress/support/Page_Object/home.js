class home {
    homeSectionCV() {
        cy.get("div.space-y-5>a.btn.btn-outline")
            .contains("Curriculum Vitae")
            .click();
    }
    
    profileSectionGithub() {
        cy.get("div.space-x-2>a").eq(1).click();
        cy.wait(2000);
    }
    skillsSectionTechTools() {
        cy.get("input.tab").eq(1).click();
        cy.wait(1000);
        cy.get("input.tab").eq(0).click();
        cy.wait(1000);
    }
    EducationsSectionReadMore() {
        cy.get("#educations button").contains("Read more").eq(0).click();
        cy.wait(1000);
    }
    ExperienceSectionCard() {
        cy.get("#experiences .card-title").eq(0).click();
        cy.wait(1000);
        cy.get("button").contains("Close").click();
        cy.wait(1000);
    }
    PortofolioSectionCard() {
        cy.get("#portofolios h2").eq(0).click();
        cy.wait(1000);
        cy.get("button").contains("Close").click();
        cy.wait(1000);
    }
}

export default new home();
