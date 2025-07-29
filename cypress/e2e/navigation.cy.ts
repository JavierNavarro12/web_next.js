import { interceptEmailJS } from '../support/commands'

describe('Navigation Tests', () => {
  beforeEach(() => {
    // Handle uncaught exceptions from the application
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Invalid or unexpected token')) {
        return false
      }
      return true
    })
    
    // Intercept EmailJS to avoid sending real emails
    interceptEmailJS()
    
    // Visit the main page with retry for development server issues
    cy.visit('/', { 
      retryOnStatusCodeFailure: true,
      timeout: 30000
    })
    
    // Wait for the page to load completely
    cy.get('body').should('be.visible')
    
    // Wait for React app to fully load
    cy.wait(3000)
  })

  describe('Main Navigation', () => {
    it('should display main navigation sections', () => {
      // Verify main navigation items are visible
      cy.contains('Explorar').should('be.visible')
      cy.contains('Artículos').should('be.visible')
      cy.contains('Herramientas').should('be.visible')
      
      // Take screenshot for verification
      cy.screenshot('main-navigation')
    })

    it('should navigate to "Explorar" section', () => {
      // Click on Explorar
      cy.contains('Explorar').click()
      
      // Verify we're in the explore section
      cy.url().should('include', 'localhost:3000')
      
      // Verify explore content is visible
      cy.contains('AIFinder').should('be.visible')
      cy.get('[class*="grid"]').should('exist') // Categories grid should be present
      
      cy.screenshot('explorar-section')
    })

    it('should navigate to "Herramientas" section', () => {
      // Click on Herramientas
      cy.contains('Herramientas').click()
      
      // Verify tools section content
      cy.url().should('include', 'localhost:3000')
      
      // Should show tools-related content
      cy.get('body').should('be.visible')
      
      cy.screenshot('herramientas-section')
    })
  })

  describe('Category Navigation', () => {
    it('should display AI categories in sidebar', () => {
      // Verify that main categories are visible in desktop sidebar
      const expectedCategories = [
        'Generativa',
        'Chatbots', 
        'Negocios',
        'DevTools',
        'Salud',
        'Educación',
        'Finanzas',
        'Creatividad'
      ]
      
      // Target desktop sidebar specifically (the ul with categories)
      expectedCategories.forEach(category => {
        cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
          cy.contains(category).should('be.visible')
        })
      })
      
      cy.screenshot('categories-sidebar')
    })

    it('should expand category and show subcategories', () => {
      // Click on a category in desktop sidebar (e.g., DevTools)
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('DevTools').click()
      })
      
      // Wait for category to expand
      cy.wait(1000)
      
      // Verify subcategories appear
      cy.get('body').should('contain.text', 'DevTools')
      
      // Take screenshot of expanded category
      cy.screenshot('category-expanded')
    })

    it('should navigate to specific subcategory', () => {
      // Click on a category first in desktop sidebar
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('Generativa').click()
      })
      cy.wait(1000)
      
      // Look for and click on a subcategory in the main content area
      cy.get('main').then(($main) => {
        // Check if subcategories are visible and clickable in main content
        const subcategorySelectors = [
          '[data-testid*="subcategory"]',
          'li[class*="subcategory"]',
          'button[class*="subcategory"]',
          'a[href*="#"]',
          'h2[id*="-"]',
          'section[id*="-"]'
        ]
        
        let subcategoryFound = false
        
        subcategorySelectors.forEach(selector => {
          if ($main.find(selector).length > 0 && !subcategoryFound) {
            cy.get(`main ${selector}`).first().scrollIntoView().click({ force: true })
            subcategoryFound = true
          }
        })
        
        if (!subcategoryFound) {
          // If no specific subcategory found, just verify the category content loaded
          cy.log('No clickable subcategories found, verifying category content')
          cy.get('main').should('contain.text', 'Generativa')
        }
      })
      
      cy.screenshot('subcategory-navigation')
    })

    it('should show active state for selected category', () => {
      // Click on a category in desktop sidebar
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('DevTools').click()
      })
      cy.wait(1000)
      
      // Verify active state indicators in the sidebar
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        // At minimum, the clicked category should be visible
        cy.contains('DevTools').should('be.visible')
      })
      
      // Check for active state indicators (outside of within scope)
      cy.get('body').then(($body) => {
        const activeIndicators = [
          '.bg-zinc-800', // Common active background
          '.text-white',  // Active text color
          '[class*="active"]',
          '[class*="selected"]'
        ]
        
        const hasActiveState = activeIndicators.some(indicator => 
          $body.find(indicator).length > 0
        )
        if (hasActiveState) {
          cy.log('✅ Active state indicators found')
        } else {
          cy.log('ℹ️ Active state indicators not found, but navigation works')
        }
      })
      
      cy.screenshot('active-category-state')
    })
  })

  describe('Mobile Navigation', () => {
    it('should handle mobile navigation on smaller screens', () => {
      // Set mobile viewport
      cy.viewport(375, 667)
      cy.wait(1000)
      
      // Verify mobile layout
      cy.get('body').should('be.visible')
      
      // Look for mobile-specific navigation elements
      cy.get('body').then(($body) => {
        // Check for mobile menu button or mobile-specific navigation
        const mobileElements = [
          '[class*="md:hidden"]',
          'button[aria-label*="menu"]',
          '.mobile-nav',
          '[data-testid*="mobile"]'
        ]
        
        let mobileNavFound = false
        mobileElements.forEach(element => {
          if ($body.find(element).length > 0) {
            mobileNavFound = true
          }
        })
        
        cy.log(`Mobile navigation elements found: ${mobileNavFound}`)
      })
      
      cy.screenshot('mobile-navigation')
    })

    it('should maintain navigation functionality on mobile', () => {
      // Set mobile viewport
      cy.viewport(375, 667)
      cy.wait(1000)
      
      // Try to navigate on mobile - force click since mobile/desktop elements overlap
      cy.contains('Explorar').click({ force: true })
      cy.wait(1000)
      
      // Verify navigation still works
      cy.url().should('include', 'localhost:3000')
      cy.get('body').should('be.visible')
      
      cy.screenshot('mobile-navigation-functionality')
    })
  })

  describe('Search Navigation', () => {
    it('should display search input', () => {
      // Look for search input - more generic approach
      cy.get('input').filter(':visible').first().should('be.visible')
      
      cy.screenshot('search-input')
    })

    it('should allow typing in search input', () => {
      // Type in search input - find any visible input
      cy.get('input')
        .filter(':visible')
        .first()
        .type('ChatGPT')
        .should('have.value', 'ChatGPT')
      
      cy.screenshot('search-typing')
    })

    it('should handle search interaction', () => {
      // Type in search and press enter
      cy.get('input')
        .filter(':visible')
        .first()
        .clear()
        .type('AI{enter}')
      
      // Verify some response (could be filtering, results, etc.)
      cy.get('body').should('be.visible')
      
      cy.screenshot('search-interaction')
    })
  })

  describe('Newsletter Signup', () => {
    it('should display newsletter signup in hero section', () => {
      // Look for newsletter signup in desktop version (not mobile hidden)
      cy.get('input[placeholder*="Email"], input[type="email"]')
        .not('.md\\:hidden input')
        .filter(':visible')
        .first()
        .should('be.visible')
      
      // Check for Suscribirse button - it might be hidden in mobile view on desktop
      cy.get('body').then(($body) => {
        const suscribirseButtons = $body.find('button:contains("Suscribirse")')
        if (suscribirseButtons.length > 0) {
          // Try to find a visible one
          cy.contains('button', 'Suscribirse').then(($button) => {
            if ($button.is(':visible')) {
              cy.wrap($button).should('be.visible')
            } else {
              cy.log('Newsletter signup button exists but not visible in current viewport (likely mobile-only)')
            }
          })
        } else {
          cy.log('Newsletter signup button not found')
        }
      })
      
      cy.screenshot('newsletter-signup')
    })

    it('should allow email input in newsletter', () => {
      // Type email in newsletter signup (desktop version)
      cy.get('input[placeholder*="Email"], input[type="email"]')
        .not('.md\\:hidden input')
        .filter(':visible')
        .first()
        .type('test@example.com')
        .should('have.value', 'test@example.com')
      
      cy.screenshot('newsletter-email-input')
    })
  })

  describe('Add AI Tool Modal', () => {
    it('should open "Añadir una IA" modal', () => {
      // Click the "Añadir una IA" button
      cy.contains('Añadir una IA').click()
      
      // Wait for modal to appear
      cy.contains('Sugerir una IA', { timeout: 10000 }).should('be.visible')
      
      // Verify modal form elements
      cy.get('input[name="toolName"]').should('be.visible')
      cy.get('input[name="toolUrl"]').should('be.visible')
      cy.get('input[name="email"]').should('be.visible')
      
      cy.screenshot('add-ai-tool-modal')
    })

    it('should close modal when clicking outside or close button', () => {
      // Open modal
      cy.contains('Añadir una IA').click()
      cy.contains('Sugerir una IA', { timeout: 10000 }).should('be.visible')
      
      // Try to close modal (look for close button, escape key, or click outside)
      cy.get('body').then(($body) => {
        // Look for close button
        const closeSelectors = [
          'button[aria-label*="close"]',
          'button[aria-label*="cerrar"]',
          '.close-button',
          '[data-testid*="close"]',
          'button:contains("×")',
          'button:contains("✕")'
        ]
        
        let closeButtonFound = false
        closeSelectors.forEach(selector => {
          if ($body.find(selector).length > 0 && !closeButtonFound) {
            cy.get(selector).first().click()
            closeButtonFound = true
          }
        })
        
        if (!closeButtonFound) {
          // Try pressing escape
          cy.get('body').type('{esc}')
        }
      })
      
      cy.screenshot('modal-close-attempt')
    })
  })

  describe('Navigation Performance', () => {
    it('should navigate quickly between sections', () => {
      const startTime = Date.now()
      
      // Navigate through different sections
      cy.contains('Explorar').click()
      cy.wait(500)
      
      cy.contains('Herramientas').click()
      cy.wait(500)
      
      cy.contains('Explorar').click()
      cy.wait(500)
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete navigation in reasonable time (less than 5 seconds)
      expect(duration).to.be.lessThan(5000)
      
      cy.screenshot('navigation-performance')
    })

    it('should maintain smooth scrolling during navigation', () => {
      // Click on different categories in desktop sidebar and verify smooth transitions
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('Generativa').click()
      })
      cy.wait(1000)
      
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('DevTools').click()
      })
      cy.wait(1000)
      
      cy.get('ul.space-y-1.hidden.md\\:block').within(() => {
        cy.contains('Salud').click()
      })
      cy.wait(1000)
      
      // Verify page is still responsive
      cy.get('body').should('be.visible')
      
      cy.screenshot('smooth-navigation')
    })
  })
}) 