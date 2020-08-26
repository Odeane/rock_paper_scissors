describe('Computer picks rock', () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (computer) => {
        cy.stub(computer.Math, 'floor').returns(2)
      }
    })
    cy.get('button > a').click()
  })

  it("player picks rock and wins the round", () => {
    cy.get('#rock-btn').click()
    cy.get('.btn').click()
    cy.get(".user").contains('User: 1')
  })
})