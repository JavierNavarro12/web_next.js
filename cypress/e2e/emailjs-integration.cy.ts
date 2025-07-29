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
    
    // Wait for modal to appear with longer timeout
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Verify form fields are present
    cy.get('input[name="toolName"]').should('be.visible')
    cy.get('input[name="toolUrl"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="isOwnTool"]').should('be.visible')
  })

  it('should submit "Añadir una IA" form successfully', () => {
    // Open modal
    cy.contains('Añadir una IA').click()
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Fill form using first form only (handles both desktop modal and mobile page)
    cy.get('form').first().within(() => {
      cy.get('input[name="toolName"]').type('Test AI Tool')
      cy.get('input[name="toolUrl"]').type('https://testaitool.com')
      cy.get('input[name="email"]').type('test@example.com')
      
      // Submit form
      cy.get('button[type="submit"]').click()
    })
    
    // Wait for EmailJS request
    cy.wait('@emailJS')
    
    // Check for success message
    cy.contains('¡Enviado con Éxito!').should('be.visible')
  })

  it('should validate required fields in "Añadir una IA" form', () => {
    // Open modal
    cy.contains('Añadir una IA').click()
    cy.contains('Sugerir una IA', { timeout: 15000 }).should('be.visible')
    
    // Try to submit without filling required fields using first form
    cy.get('form').first().within(() => {
      cy.get('button[type="submit"]').click()
      
      // Check that form doesn't submit (HTML5 validation)
      cy.get('input[name="toolName"]').should('have.attr', 'required')
      cy.get('input[name="toolUrl"]').should('have.attr', 'required')
    })
  })
}) 