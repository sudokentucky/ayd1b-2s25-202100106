/// <reference types="cypress" />
describe('Flujo completo de compra - SauceDemo', () => {
  const firstName = 'Keneth';
  const lastName = 'Lopez';
  const postalCode = '202100106'; // Carnet en el campo código postal

  it('Iniciar sesión → seleccionar 3 productos → carrito → checkout → confirmar pedido', () => {
    // Paso 1: inicio de sesión y validación del inventario
    cy.visit('/');
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
    cy.screenshot('01-inicio-sesion-exitoso'); // CAPTURA 1

    // Paso 2: selección de productos
    cy.get('.inventory_list .inventory_item').then(($items) => {
      // Por seguridad si hay menos de 3, cortamos al máximo disponible
      const count = Math.min($items.length, 3);
      for (let i = 0; i < count; i++) {
        cy.wrap($items[i]).find('button').contains(/add to cart/i).click();
      }
    });

    // Paso 3: verificación del número de productos en el carrito
    cy.get('.shopping_cart_badge').should('contain.text', '3');
    cy.screenshot('02-productos-agregados-al-carrito');

    // Paso 4: revisión del carrito
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 3);
    cy.screenshot('03-resumen-carrito'); 

    // Paso 5: completar formulario de datos personales
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.screenshot('04-formulario-datos-personales'); 
    cy.get('[data-test="continue"]').click();

    // Paso 6: confirmar resumen de la compra
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.cart_item').should('have.length', 3);
    cy.get('.summary_info').should('be.visible');
    cy.screenshot('05-resumen-de-compra'); 
    cy.get('[data-test="finish"]').click();

    // Paso 7: finalizar compra con la confirmación del pedido
    cy.url().should('include', '/checkout-complete.html');
    cy.contains('Thank you for your order!').should('be.visible');
    cy.screenshot('06-confirmacion-de-pedido'); 

  });
});
