import { demoPage } from "../../PageObjects/DemoPage"
import { url } from "../../fixtures/DemoTestData.json";
/// <reference types="cypress" />

describe('Demo 02 functionality', { tags: ['@Demo', '@regression'] }, () => {

  beforeEach(() => {

    cy.fixture('DemoTestData.json').then((data) => {
      cy.visit(data.url);
      cy.wrap(data).as('data'); // Preserve the loaded data for later use

    });
  })

  it('03 - Demo Test', {tags: '@smoke'}, () => {

    cy.get('@data').then((data) => {

      demoPage.setFirstName(data.firstname);

    });
  });

  it('04 - Demo Test', () => {

    cy.get('@data').then((data) => {
       
      demoPage.checkedMale()

    });
  });

});
