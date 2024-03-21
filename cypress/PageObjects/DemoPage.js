/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

export class DemoPage {

    firstname="#firstName";
    male='#genterWrapper > .col-md-9 > :nth-child(1)';

    setFirstName(firstname) {
        cy.get(this.firstname).type(firstname);
    }

    checkedMale(){
        cy.get(this.male).click()
    }
}

export const demoPage = new DemoPage()