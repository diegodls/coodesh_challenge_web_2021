import React from "react";
import Header from "../../src/components/Header";

describe("Testing Header.tsx", () => {
  it("should display company name", () => {
    cy.mount(<Header />);
  });
});
