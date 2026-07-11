import {HomePage} from '../pageobjects/HomePage'
import {RegistrationPage} from '../pageobjects/RegistrationPage'
import {LoginPage} from '../pageobjects/LoginPage'

export class poManager
{
    constructor(page)
    {
        this.page=page
        this.homepage = new HomePage(this.page)
        this.registerpage = new RegistrationPage(this.page)
        this.loginpage = new LoginPage(this.page)

    }
    //create a method for homepage
    getHomePage()
    {
        return this.homepage
    }
    //create a method for registration page
    getRegistrationPage()
    {
        return this.registerpage
    }
    //create a method for login page
    getLoginPage()
    {
        return this.loginpage
    }

}