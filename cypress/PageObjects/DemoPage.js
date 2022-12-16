/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class DemoPage {

    firstname="#firstName";
    male='#genterWrapper > .col-md-9 > :nth-child(12)';

    setFirstName(firstname) {
        cy.get(this.firstname).type(firstname);
    }

    checkedMale(){
        cy.get(this.male).click()
    }
}

export default DemoPage;