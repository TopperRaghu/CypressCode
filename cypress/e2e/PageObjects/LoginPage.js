class LoginPage {

    loginPageElement={
        eMailAddress:()=>cy.get('input#input-email'),
        password:()=>cy.get('input#input-password'),
        loginBttn:()=>cy.get("input[type='submit']")
    }

    doLogin(userName,passwd){
        this.loginPageElement.eMailAddress().type(userName);
        this.loginPageElement.password().type(passwd);
        
    }

    clickOnLoginBttn(){
        this.loginPageElement.loginBttn().click();
        cy.url().then(($url)=>{
              const fracUrl= $url.split('?')[1].trim();
              expect($url).to.contains(fracUrl);
        })
    }

}

export default LoginPage;
