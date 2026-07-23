  export  class HomePage
  {
       constructor(page)
       {
            this.page=page
            this.signInbutton=page.locator("//a[normalize-space()='Register']")
            this.logoutLink=page.locator("//a[contains(., 'Log Out') or contains(., 'Log out') or contains(., 'logout')]").first()
       }

       async goTo()
       {
          await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
       }

       async clickOnSigninButton()
       {
          await this.signInbutton.click()
       }

       async clickOnLogoutLink()
       {
          await this.logoutLink.click()
       }
  }