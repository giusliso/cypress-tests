describe("Browser actions", () => {
  it("should load website", () => {
    cy.visit("http://books.toscrape.com/index.html", { timeout: 100000 });
    cy.url().should("contain", "index.html");
  });

  it("should click travel category", () => {
    cy.get("a")
       .contains("Travel")
       .click();
    cy.get('h1')
       .contains('Travel')
  });

  it('should display correct number of books', () => {
      cy.get('.product_pod').its('length').should('equal', 11)
  })

  it('should click on Poetry', () => {
    cy.get('a').contains('Poetry').click()
    cy.get('.product_pod')
       .get(2)
       .get('h3')
       .get('a')
       .should('contain','The Black Maria')
  })

  it('should Olio price be £23.88', () => {
   cy.get('.product_pod')
   .contains('Olio').click()

   cy.get('.price_color').should('contain.text', '£23.88')
  })
});
