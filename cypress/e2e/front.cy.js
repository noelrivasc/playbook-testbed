describe('Loads the Playbook front page', () => {
  it('Loads the front page', () => {
    cy.visit('/')
    cy.get('article.node--page--full')
      .should('exist')
  });
});
