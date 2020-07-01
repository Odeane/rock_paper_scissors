describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    
  })

  describe('RPS game interface', () => {
    it('title should be displayed', () => {
      cy.get('#header').should('contain', Rock Paper Scissors); 
    })
  })

})