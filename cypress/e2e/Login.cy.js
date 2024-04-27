/// <reference types="Cypress" />
import LoginPage from "./PageObjects/LoginPage.js"

describe('Login test ', () => {

    before(function () {
        cy.fixture('loginCred').then(function(data) {
            this.data = data
        })
    })

    it('Login test',function(){
        const loginPage=new LoginPage();
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        loginPage.doLogin(this.data.UserName,this.data.Passcode);
        loginPage.clickOnLoginBttn()
    });
});