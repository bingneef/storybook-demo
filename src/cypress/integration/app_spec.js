describe('App', function () {
  const rootTag = '[data-testid="AppRoot"]';
  beforeEach(() => {
    cy.visit('/')
    cy.get(rootTag)
  })
  
  it('Should show digital-code item when clicking .App-brand', async () => {
    const testTag = '[data-testid="digital-code"]';
    
    cy.get(testTag).should('not.exist');
    cy.get('.App-brand').click()
    cy.get(testTag);
    cy.get('.App-brand').click()
    cy.get(testTag).should('not.exist');
  })

  it.only('renders the content from the GraphQL', async () => {
    const testTag = '[data-testid="content"]';
    cy.get(rootTag).find(testTag).should('have.length', 2)

    cy.visit('/?testid=App-1')
    cy.get(rootTag).find(testTag).should('have.length', 1)
  })
})