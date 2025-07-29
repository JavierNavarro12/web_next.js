/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Helper function to intercept EmailJS (no custom command for now)
export const interceptEmailJS = () => {
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
    statusCode: 200,
    body: { status: 'OK' }
  }).as('emailJS')
} 