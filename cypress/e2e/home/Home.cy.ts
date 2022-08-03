describe("Testing Home", () => {
  it("should display the home page", () => {
    //render page
    cy.visit("/");
    cy.contains("Pharma Inc.");

    //enter text in search box
    cy.get("input[type='search']").should("be.visible");

    //expand filters
    cy.get("button[aria-label='show-filters']").click();

    //select filter
    cy.get('[type="checkbox"]').check("Feminino");
    //cy.get('[type="checkbox"]').check("US");
    //click on search button
    //load more results
  });
});
