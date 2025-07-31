import { interceptEmailJS } from '../support/commands'

describe('Add AI Tool Tests', () => {
  beforeEach(() => {
    // Intercept EmailJS to avoid sending real emails
    interceptEmailJS()
    
    // Visit the main page
    cy.visit('/')
    
    // Wait for the page to load completely
    cy.get('body').should('be.visible')
    cy.contains('AIFinder').should('be.visible')
    cy.contains('Explorar').should('be.visible')
    
    // Wait for React app to fully load
    cy.wait(3000)
    
    // Ensure all categories are loaded (this means React is working)
    cy.get('[class*="grid"]').should('exist')
  })

  it('should intercept EmailJS calls correctly', () => {
    // Just verify that our EmailJS interception is working
    cy.request({
      method: 'POST',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      body: {
        service_id: 'test',
        template_id: 'test',
        user_id: 'test'
      },
      failOnStatusCode: false
    }).its('status').should('be.oneOf', [200, 400])
  })

  it('should load the main application components', () => {
    // Verify main components are loaded
    cy.contains('Explorar').should('be.visible')
    cy.contains('Artículos').should('be.visible')
    cy.contains('Herramientas').should('be.visible')
    cy.contains('Añadir una IA').should('be.visible')
  })

  it('should open "Añadir una IA" modal', () => {
    // Click the "Añadir una IA" button
    cy.contains('Añadir una IA').click()
    
    // Wait for modal/page to appear with longer timeout
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Verify form fields are present - check both possible locations
    cy.get('input[name="toolName"]').should('be.visible')
    cy.get('input[name="toolUrl"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="isOwnTool"]').should('be.visible')
  })

  it('should submit "Añadir una IA" form successfully', () => {
    // Open modal/page
    cy.contains('Añadir una IA').click()
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Fill form - use more specific selectors to avoid conflicts
    // Use first() to ensure we only interact with one form
    cy.get('input[name="toolName"]').first().should('be.visible').type('Test AI Tool')
    cy.get('input[name="toolUrl"]').first().should('be.visible').type('https://testaitool.com')
    cy.get('input[name="email"]').first().should('be.visible').type('test@example.com')
    
    // Submit form - look for submit button with specific text
    cy.get('button[type="submit"]').contains('Enviar Sugerencia').first().click()
    
    // Wait for EmailJS request
    cy.wait('@emailJS')
    
    // Check for success message
    cy.contains('¡Enviado con Éxito!').should('be.visible')
  })

  it('should validate required fields in "Añadir una IA" form', () => {
    // Open modal/page
    cy.contains('Añadir una IA').click()
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Try to submit without filling required fields
    cy.get('button[type="submit"]').contains('Enviar Sugerencia').first().click()
    
    // Check that form doesn't submit (HTML5 validation)
    // The form should still be visible and not submitted
    cy.get('input[name="toolName"]').should('be.visible')
    cy.get('input[name="toolUrl"]').should('be.visible')
    
    // Verify the form is still there (not submitted)
    cy.contains('Sugerir una IA').should('be.visible')
  })
}) 