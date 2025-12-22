describe('Signin Page', () => {
   beforeEach(() => {
      cy.setCookie('session', 'auth_token');
      cy.visit(`${Cypress.env('base_url')}/`);
      cy.get("[data-cy='landing-signin']").click();
      cy.get("[data-cy='signin']").click();
      cy.wait(3000);
   });

   it('View signin and visit file dashboard', () => {
      cy.visit(`${Cypress.env('base_url')}/dashboard`);
      cy.clearCookies();
      cy.visit(`${Cypress.env('base_url')}/dashboard`);
   });
});
