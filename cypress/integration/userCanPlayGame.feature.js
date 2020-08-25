describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button > a').click()
  })

  it('user can choose rock as their weapon', () => {
    cy.get('#rock-btn').click()
    cy.get('.weap').should('contain', 'rock')
  })

  it('user can choose paper as their weapon', () => {
    cy.get('#paper-btn').click()
    cy.get('.weap').should('contain', 'paper')
  })

  it('user can choose scissors as their weapon', () => {
    cy.get('#scissors-btn').click()
    cy.get('.weap').should('contain', 'scissors')
  })
  
  
  it('User should get a response after the game ends', () => {
    cy.get('#rock-btn').click()
    cy.get('.weap').should('contain', 'rock');
    cy.get('.btn').click()
    cy.get('#msg').should('be.visible')
  })
})

