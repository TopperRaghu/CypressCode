class AccountPage {

    accountPageElement = {

        contentHeader: () => cy.get('#content').find('h2'),
        logoutLink: () => cy.get('aside#column-right div a:nth-child(13)')

    }

    verifyContentHeader() {
        let header = []
        this.accountPageElement.contentHeader().each(($el, index, $list) => {
            const headerText = $el.text();
            header.push(headerText);
        }).then(() => {
            header.forEach(function (allcontent) {
                //expect(header).to.equals(allcontent)
                cy.log(`content are:${allcontent}`);
            })
        })

    }

    verifyLogoutLink(logoutUrl){
        this.accountPageElement.logoutLink().should('exist');
        this.accountPageElement.logoutLink().click();
        cy.url().then(($url)=>{
                const fracUrl=$url.split('?')[1];
                expect(logoutUrl).to.contains(fracUrl);
        })
    }

}

export default AccountPage;