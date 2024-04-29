/// <reference types="Cypress" />
import LoginPage from "./PageObjects/LoginPage.js"
import AccountPage from "./PageObjects/AccountPage.js"
describe('template spec', () => {

   
  before(function(){
    cy.fixture('loginCred').then(function(data){
          this.data=data;
    })
  })



    it('passes', function()  {
      const loginPage=new LoginPage();
      const accountpage=new AccountPage();
      cy.visit(Cypress.env('url1')+"/opencart/index.php?route=account/login");
      loginPage.doLogin(this.data.UserName,this.data.Passcode);
      loginPage.clickOnLoginBttn();
        accountpage.verifyContentHeader();
        accountpage.verifyLogoutLink(Cypress.env('logoutUrl'))
      })
    })
  