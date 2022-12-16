import DemoPage from "../../PageObjects/DemoPage"
/// <reference types="cypress" />

context('Demo 01 functionality', () => {
  beforeEach(() => {
    cy.fixture('DemoTestData').then((data)=> {
    cy.visit(data.url)
    })
  })

  it('01 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data)=> {
       const demoPage = new DemoPage();
       demoPage.setFirstName(data.firstname);
    })

  })

  it('02 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data)=> {
       const demoPage = new DemoPage();
       demoPage.checkedMale()
    })

  })

})
