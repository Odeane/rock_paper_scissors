describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button > a').click()
  })

  it('User should get a response after the game ends', () => {
    cy.get('#rock-btn').click()
    cy.get('.weap').should('contain', 'rock');
    cy.get('.btn').click()
    cy.get('#msg').should('be.visible')
  })
  
})