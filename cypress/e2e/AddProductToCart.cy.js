/// <reference types="Cypress" />

describe('Adding product to cart', () => {

    before(function () {
        cy.fixture('productInfo').then(function(productData) {
            this.productData = productData
        })
    })

    it.skip('Add To Cart Test', function () {
        cy.visit('https://naveenautomationlabs.com/opencart/')

        this.productData.productName.forEach(function(NameOfProduct){

            cy.get('div.caption h4').each(($el, index, $list) => {
                if ($el.text().includes(NameOfProduct)) {
                    cy.get('div.button-group span').eq(index).click({ force: true });
                    cy.screenshot();
                }
            })
        });
    })
})