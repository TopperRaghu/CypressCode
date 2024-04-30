/// <reference types="Cypress" />

describe('Goole search auto suggestive dropdown', () => {
    it('code for auto suggestive dropdown', () => {
      cy.visit('https://www.google.com/')
      cy.get('div.SDkEP').type('Cypress');
      cy.wait(2000);
      cy.get('#Alh6id ul').children('li').as('suggetion').each(($el,index,$list)=>{
              if ($el.text().includes('cypress interview questions')) {
                   cy.get('@suggetion').eq(index).click({force:true});
              }
      })
      })
    
  })