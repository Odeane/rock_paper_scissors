describe('Rock paper scissors game', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User should see instructions before game', () => {

    cy.get('#rules').should('contain', 'Instructions');
    cy.get('.rlist').should('contain', 'Click on weapon to select');
    cy.get('.rlist').should('contain', 'Press PLAY')
    cy.get('.rlist').should('contain', 'Enjoy!!!')
    cy.get('button > a').click()
  })
})