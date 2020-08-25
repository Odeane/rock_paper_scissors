describe('Computer picks rock', () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (computer) => {
        cy.stub(computer.Math, 'floor').returns(0)
      }
    })
    cy.get('button > a').click()
  })

  it("player plays rock", () => {
    cy.get('#rock-btn').click()
    cy.get('.btn').click()
    cy.get('#msg').should('contain', "Even steven, Try again!")
    
  })

  it("player plays paper", () => {
    cy.get('#paper-btn').click()
    cy.get('.btn').click()
    cy.get('#msg').should('contain', "You Won!")
  })

  it("player plays scissors", () => {
    cy.get('#scissors-btn').click()
    cy.get('.btn').click()
    cy.get('#msg').should('contain', "Loser! Try again")
  })
})