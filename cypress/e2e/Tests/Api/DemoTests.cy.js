/// <reference types="cypress" />
require('dotenv').config();


describe('Demo 03 functionality', () => {
//   beforeEach(() => {
//     cy.fixture('DemoTestApiData').then((data) => {
      
//     })
//   })

  it('should return a specific user by ID', () => {
    cy.fixture('DemoTestApiData').then((data) => {
        cy.request(data.url+'/api/users/1')
        .as('userById')
        cy.get('@userById').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('id', 1)
        })
    })
  })

  it('should create a new user', () => {
    cy.fixture('DemoTestApiData').then((data) => {
        cy.request('POST', data.url+'/api/users', data.newUser)
        .as('createdUser')
        cy.get('@createdUser').then(response => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', data.newUser.name)
        expect(response.body).to.have.property('job', data.newUser.job)
        })
    })
  })

  it('should update an existing user', () => {
    cy.fixture('DemoTestApiData').then((data) => {
        cy.request('PUT', data.url+'/api/users/2', data.updatedUser)
        .as('updatedUser')
        cy.get('@updatedUser').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', data.updatedUser.name)
        expect(response.body).to.have.property('job', data.updatedUser.job)
        })
    })
  })

  it('should delete an existing user', () => {
    cy.fixture('DemoTestApiData').then((data) => {
        cy.request('DELETE', data.url+'/api/users/3')
        .as('deletedUser')
        cy.get('@deletedUser').then(response => {
        expect(response.status).to.eq(204)
        expect(response.body).to.be.empty
        })
    })
  })

})
