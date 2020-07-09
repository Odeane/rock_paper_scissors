describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('RPS game interface', () => {
    it('Page should display', () => {
      cy.get('h3').should('contain', 'Select Weapon'); 
      cy.get('h3').should('contain', 'Player');
      cy.get('h3').should('contain', 'Computer');
    })

    it('page should contain icons and play button', () => {
      cy.get('#rock-btn').click()
      cy.get('#paper-btn').click()
      cy.get('#scissors-btn').click()
      cy.get('.btn').click()
    })
  })

})