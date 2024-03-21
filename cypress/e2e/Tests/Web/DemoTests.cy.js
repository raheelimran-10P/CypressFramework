import { demoPage } from "../../../PageObjects/DemoPage"
/// <reference types="cypress" />
require('dotenv').config();


describe('Demo 01 functionality', () => {
  beforeEach(() => {
    cy.fixture('DemoTestData').then((data) => {
      cy.visit(data.url)
    })
  })

  it('01 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data) => {

      demoPage.setFirstName(Cypress.env('name'));

    })

  })

  it('02 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data) => {

      demoPage.checkedMale();
      
    })

  })

})
