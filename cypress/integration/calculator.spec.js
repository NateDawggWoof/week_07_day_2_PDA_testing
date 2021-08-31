describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // it('buttons update running total', () => {
  //   cy.get('#number2').click();
  //   cy.get('.display').should('contain', '2')
  // })

})