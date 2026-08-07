describe("Google Test", () => {

  it("opens Google", () => {

    cy.visit("https://www.google.com")

    cy.title().should("contain", "Google")

  })

})