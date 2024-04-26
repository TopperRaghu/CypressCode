/// <reference types="Cypress" />

describe('Finding max price', () => {
    it('passes', () => {
        let priceArray = [];
        let maxPrice, TotalPrice = 0;
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table#product:nth-child(1) tbody tr td:nth-child(4)').each(($price) => {
            const text = parseInt($price.text());
            priceArray.push(text);
            maxPrice = Math.max(...priceArray);

        }).then(() => {
            for (let i = 0; i < priceArray.length; i++) {
                TotalPrice += priceArray[i];
            }
            cy.log(`sum of price: ${TotalPrice}, maximum price course is:${maxPrice} and price array:${priceArray}`);
            expect(maxPrice).to.equals(48);
        })
        cy.get('div.totalAmount').then(($el) => {
            const collectedPrice = parseInt($el.text().split(':')[1].trim());
            cy.log(collectedPrice);
            expect(collectedPrice).to.equals(TotalPrice);
            cy.screenshot();
        })
    })

})