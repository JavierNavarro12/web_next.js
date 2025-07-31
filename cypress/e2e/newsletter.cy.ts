describe('Newsletter Signup - E2E Completo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  it('valida email requerido', () => {
    // Intentar enviar sin email
    cy.get('input[type="email"]').first().clear({ force: true });
    cy.get('form').first().submit();
    
    // Verificar mensaje de error usando cy.contains
    cy.contains('Por favor ingresa tu email').should('exist');
  });

  it('valida formato de email inválido', () => {
    // Email inválido
    cy.get('input[type="email"]').first().clear({ force: true }).type('noemail', { force: true });
    
    // Debug: verify the input value
    cy.get('input[type="email"]').first().should('have.value', 'noemail');
    
    // Submit the form directly instead of clicking the button
    cy.get('form').first().submit();
    
    // Verificar mensaje de error usando cy.contains
    cy.contains('Por favor ingresa un email válido').should('exist');
  });

  it('valida que el formulario funciona correctamente', () => {
    // Email válido
    cy.get('input[type="email"]').first().clear({ force: true }).type('test@example.com', { force: true });
    cy.get('form').first().submit();
    
    // Verificar que el formulario se envió (no debería mostrar errores de validación)
    cy.get('body').should('not.contain.text', 'Por favor ingresa tu email');
    cy.get('body').should('not.contain.text', 'Por favor ingresa un email válido');
  });
}); 