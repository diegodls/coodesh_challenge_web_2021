describe("Testing Home", () => {
  it("should display the home page", () => {
    //render page
    cy.visit("/");
    cy.contains("Pharma Inc.");

    //enter text in search box
    cy.get("input[type='search']").should("be.visible");

    //expand filters
    cy.get("button[aria-label='show-filters']").click();

    //select gender filter
    cy.get('[type="checkbox"]').check("Feminino");

    //select nationality filter
    cy.get('[type="checkbox"]').check("BR");

    //click on search button
    cy.get("button[aria-label='apply-filters']").click();

    //load more results
    cy.get("button[aria-label='load-more-button']").click();

    //open patient details modal
    cy.get('table tbody tr').eq(-5).find('td').eq(3).click();
    
    //close patient details modal
    cy.get("button[aria-label='close-modal']").click();
  });
});
