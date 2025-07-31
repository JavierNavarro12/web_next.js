describe('Mobile Search Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-x'); // Set mobile viewport
  });

  it('should open and close mobile search correctly', () => {
    // Click magnifying glass to open search (mobile header specific)
    cy.get('[aria-label="Buscar herramientas de IA"]:visible').click();

    // Verify mobile search section appears
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('be.visible');
    cy.contains('🔍').should('be.visible');

    // Verify button changed to X (close)
    cy.get('[aria-label="Cerrar búsqueda"]:visible').should('be.visible');

    // Click X to close
    cy.get('[aria-label="Cerrar búsqueda"]:visible').click();

    // Verify mobile search section disappears
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('not.exist');
  });

  it('should perform search and navigate to correct category', () => {
    // Open search
    cy.get('[aria-label="Buscar herramientas de IA"]:visible').click();

    // Type search term in mobile input
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').within(() => {
      cy.get('input[placeholder="Buscar IAs"]').type('ChatGPT');
    });

    // Wait for search results in mobile dropdown
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').within(() => {
      cy.contains('ChatGPT').should('be.visible');
      // Click on search result
      cy.contains('ChatGPT').click();
    });

    // Verify navigation occurred and mobile search closed
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('not.exist');

    // Verify we navigated (page should scroll or change)
    cy.wait(1000); // Wait for navigation to complete
  });

  it('should show AI tool highlighting after search navigation', () => {
    // Open search and select an AI
    cy.get('[aria-label="Buscar herramientas de IA"]:visible').click();

    // Search and click in mobile context
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').within(() => {
      cy.get('input[placeholder="Buscar IAs"]').type('ChatGPT');
      cy.contains('ChatGPT').click();
    });

    // Verify highlighting effect is applied
    cy.get('[class*="scale-107"]', { timeout: 10000 }).should('exist');

    // Verify highlighting disappears after timeout
    cy.get('[class*="scale-107"]', { timeout: 5000 }).should('not.exist');
  });

  it('should load more AIs when clicking "Cargar más"', () => {
    // Open search
    cy.get('[aria-label="Buscar herramientas de IA"]:visible').click();

    // Wait for mobile search dropdown to appear
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('be.visible');

    // Count initial AIs shown in mobile dropdown
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').within(() => {
      cy.get('[class*="flex items-center"]').then(($initialItems) => {
        const initialCount = $initialItems.length;

        // Click "Cargar más" in mobile dropdown
        cy.contains('Cargar más').click();

        // Verify more AIs are shown
        cy.get('[class*="flex items-center"]').should('have.length.greaterThan', initialCount);
      });
    });
  });

  it('should close search when clicking outside', () => {
    // Open search
    cy.get('[aria-label="Buscar herramientas de IA"]:visible').click();
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('be.visible');

    // Click outside search area
    cy.get('body').click(0, 0);

    // Verify mobile search section closes
    cy.get('.w-full.bg-black.border-b.border-zinc-800.px-4.py-4').should('not.exist');
  });
});
