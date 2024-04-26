/// <reference types="Cypress" />

describe('Read data from table', () => {
    it('Should read all data from rows and columns in a table', () => {
        // Get the table element
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product:nth-child(2) tbody ').then(($table) => {
            // Get all rows within the table
            const rows = $table.find('tr');
            // Iterate over each row
            for (let i = 0; i < rows.length; i++) {
                // Get all cells within the current row
                const cells = rows.eq(i).find('td');
                // Iterate over each cell
                for (let j = 0; j < cells.length; j++) {
                    // Read data from the cell and log it
                    const cellData = cells.eq(j).text();
                    cy.log('Row ' + (i + 1) + ', Column ' + (j + 1) + ': ' + cellData);

                }
            }
        });
    });
});