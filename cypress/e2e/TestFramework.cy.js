/// <reference types="Cypress" />

describe('Test framework code', () => {

    before(function() {
        cy.fixture('registrationData').then(function(data)
        {
           this.data=data
        })
    })

    it('test 1', function() {
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
      cy.get('input#input-firstname').type(this.data.Firstname);
      cy.get('input#input-lastname').type(this.data.Lastname);
      cy.get('input#input-email').type(this.data.email);
      cy.get('input#input-telephone').type(this.data.Phone);
      cy.get('input#input-password').type(this.data.Password);
      cy.get('input#input-confirm').type(this.data.Password);
      cy.get("label[class='radio-inline'] input[value='1']").first().should('be.enabled').should('have.attr','value','1').click({force:true});
      cy.get("input[type='checkbox']").check().should('be.checked');
      cy.get("input[value='Continue']").click();
      cy.get('#content h1').then(function(confirmation){
           const registerCofirmation=confirmation.text();
           cy.log(registerCofirmation);
           expect(registerCofirmation).to.contains(this.data.ConfirmationMssg);
      })
    })
  })