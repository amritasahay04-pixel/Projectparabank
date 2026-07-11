// import { test, expect } from '@playwright/test'
// import { HomePage } from '../pageobjects/HomePage'
// import { RegistrationPage } from '../pageobjects/RegistrationPage'
// import testdata from '../utils/parabank.json' assert{type:'json'}
import { poManager } from '../pageobjects/poManager'

import { customtest as test, expect} from '../fixtures/testfixture'



// test('tc register', async ({ page }) => {

//     const pageManager = new poManager(page)
//     const homepage = pageManager.getHomePage()
//     await homepage.goTo()
//     await homepage.clickOnSigninButton()
//     const registerpage = pageManager.getRegistrationPage()
    
    
//     // const homepage = new HomePage(page)
//     // await homepage.goTo()
//     // await homepage.clickOnSigninButton()

//     // const registerpage = new RegistrationPage(page)

//     await registerpage.regesterNewUser(
//         'jhon',
//         'peter',
//         'delhi',
//         'saket',
//         'new delhi',
//         '110000',
//         '12345677',
//         '1234',
//         'js09',
//         'asdf',
//         'asdf'
//     )

//     await registerpage.RegisterButtonClick()

//     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//     await page.waitForTimeout(2000)

// })

// // for ( const data of testdata)
// // {
// // test(`tc register ${data.username}`,async({page})=>
// // {
// //      const homepage = new HomePage(page)
// //     await homepage.goTo()
// //     await homepage.clickOnSigninButton()

// //     const registerpage = new RegistrationPage(page)

// //     await registerpage.regesterNewUser(
// //         data.firstname,
// //         data.lastname,
// //         data.address,
// //         data.city,
// //         data.state,
// //         data.zipcode,
// //         data.phonenumber,
// //         data.ssn,
// //         data.username,
// //         data.password,
// //         data.confirmpassword
// //     )
// //   await registerpage.RegisterButtonClick()

// //     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
// //     await page.waitForTimeout(2000)


// // })
// // }

test.describe.parallel('parabank tests',()=>
{
test('register',async({page,testdataForregistration})=>
{
    const pageManager = new poManager(page)
    const homepage = pageManager.getHomePage()
    await homepage.goTo()
    await homepage.clickOnSigninButton()

    const registerpage = pageManager.getRegistrationPage()

    await registerpage.regesterNewUser
    (
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )
    await registerpage.RegisterButtonClick()
    expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
      
})

test('login',async({page,testdataForregistration})=>
{
    const pageManager = new poManager(page)
    const homepage = pageManager.getHomePage()
    await homepage.goTo()
    const loginpage = pageManager.getLoginPage()
    await loginpage.loginToApplication
    (
        testdataForregistration.username,
        testdataForregistration.password
    )
    await page.waitForTimeout(3000)
}
)
})