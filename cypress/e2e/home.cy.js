import home from "../support/Page_Object/home";

describe("Home Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Home Section - CV", () => {
        home.homeSectionCV();
    });

    it("Profile Section - Github", () => {
        home.profileSectionGithub();
    });
    it("Skill Section - Tech Tools", () => {
        home.skillsSectionTechTools();
    });
    it("Educations Section - Readmore Educations & Achievment", () => {
        home.EducationsSectionReadMore();
    });
    it("Experience Section - View Card", () => {
        home.ExperienceSectionCard();
    });
    it("Experience Section -  More Experiences", () => {
        home.ExperienceSectionMore();
    });
    it("Porotofolio Section - View Card", () => {
        home.PortofolioSectionCard();
    });
});
