/// <reference types="Cypress" />

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://naveenautomationlabs.com/opencart/')
      cy.get('.container .col-sm-3 ul li').contains('Delivery Information').click({force:true})
      cy.url().then(($url)=>{
        const url=$url.split('/')[5];
        cy.log(url);
        expect(url).to.be.equal('information&information_id=6')
        
      })
    })
  })