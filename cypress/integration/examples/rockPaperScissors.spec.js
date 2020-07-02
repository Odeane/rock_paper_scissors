describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    
  })

  describe('RPS game interface', () => {
    it('title should be displayed', () => {
      cy.get('#header').should('contain', 'Rock Paper Scissors'); 
    })

    it('should contain icons', () => {
      cy.get('#rock-btn').click()
      cy.get('#paper-btn').click()
      cy.get('#scissors-btn').click()
      
    })
  })

})