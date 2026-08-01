export class LoginPage
 {
     constructor(page)
     {
        this.page=page
      //  this.registerLink= page.locator("//input[@value='Register']")
        this.userName= page.locator("//input[@name='username']")
        this.password= page.locator("//input[@name='password']")
        this.loginButton=page.locator("//input[@value='Log In']")
     }

     generateRandomUsername(prefix = 'user')
     {
        return `${prefix}${Date.now()}`
     }

     generateRandomPassword(prefix = 'Pass')
     {
        return `${prefix}${Date.now()}`
     }

    //    async clickOnRegisterLink()
    //    {
    //       await this.registerLink.click()
    //    }

     async loginToApplication(username = this.generateRandomUsername(), password = this.generateRandomPassword())
     {
        await this.userName.waitFor({ state: 'visible' });
        await this.userName.fill(username);

        await this.password.waitFor({ state: 'visible' });
        await this.password.fill(password);

        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();
           
     }
 }