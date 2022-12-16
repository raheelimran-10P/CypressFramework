import DemoPage from "../../PageObjects/DemoPage"
/// <reference types="cypress" />

context('Demo 02 functionality', () => {
  beforeEach(() => {
    cy.fixture('DemoTestData').then((data)=> {
    cy.visit(data.url)
    })
  })

  it('03 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data)=> {
       const demoPage = new DemoPage();
       demoPage.setFirstName(data.firstname);
    })

  })

  it('04 - Demo Test', () => {

    cy.fixture('DemoTestData').then((data)=> {
       const demoPage = new DemoPage();
       demoPage.checkedMale()
    })

  })

})
