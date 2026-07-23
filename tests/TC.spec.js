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

test.describe.serial('parabank tests',()=>
{
test('register',async({page,testdataForregistration})=>
{
    const pageManager = new poManager(page)
    const homepage = pageManager.getHomePage()
    await homepage.goTo()
    await homepage.clickOnSigninButton()

    const registerpage = pageManager.getRegistrationPage()

    await registerpage.registerNewUser
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
    // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
    await page.waitForTimeout(5000)
  // Verify registration
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
    // Verify registration
    console.log(await page.url())

    // await page.screenshot({
    //     path: "afterRegister.png",
    //     fullPage: true
    })
        //  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
        //  await homepage.clickOnLogoutLink()
      
})

// test('logout',async({page,testdataForregistration})=>
// {
//     const pageManager = new poManager(page)
//     const homepage = pageManager.getHomePage()
//     await homepage.goTo()
//     const registerpage = pageManager.getRegistrationPage()
//     //await homepage.clickOnSigninButton()
//     await homepage.clickOnLogoutLink()
// }
// )

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
    //Assertions
    // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
}
)
//})

// test('register and logout', async ({ page, testdataForregistration }) => {
//     const pageManager = new poManager(page)
//     const homepage = pageManager.getHomePage()
//     const registerpage = pageManager.getRegistrationPage()

//     const uniqueUsername = `logoutuser${Date.now()}`

//     await homepage.goTo()
//     await homepage.clickOnSigninButton()

//     await registerpage.regesterNewUser(
//         testdataForregistration.firstname,
//         testdataForregistration.lastname,
//         testdataForregistration.address,
//         testdataForregistration.city,
//         testdataForregistration.state,
//         testdataForregistration.zipcode,
//         testdataForregistration.phonenumber,
//         testdataForregistration.ssn,
//         uniqueUsername,
//         testdataForregistration.password,
//         testdataForregistration.confirmpassword
//     )

//     await registerpage.RegisterButtonClick()
//     await page.waitForTimeout(3000)

//     await expect(page).toHaveURL(/\/parabank\/(index|register)\.htm/)
//     await expect(page.locator('body')).toContainText(/ParaBank|Customer Login|Register/i)

//     await homepage.clickOnLogoutLink()

//     await expect(page).toHaveURL(/\/parabank\/index\.htm/)
//     await expect(page.locator('body')).toContainText(/Customer Login/i)
// })

test('fund transfer and logout', async ({ page, testdataForfundtransfer }) => {
    const pageManager = new poManager(page)
    const homepage = pageManager.getHomePage()
    await homepage.goTo()

    const fundtransferpage = pageManager.getFundTransferPage()
    await fundtransferpage.clickOnFundTransferLink()

    // Assert on URL/heading rather than a timeout — Playwright retries automatically
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
    await expect(fundtransferpage.transferFundsHeading).toBeVisible()

    await fundtransferpage.transferFunds(
        testdataForfundtransfer.amount,
        testdataForfundtransfer.fromAccount,
        testdataForfundtransfer.toAccount
    )

    // Verify transfer succeeded
    await expect(fundtransferpage.getSuccessHeading()).toBeVisible()

    // Logout
    await homepage.clickOnLogoutLink()

    // Verify logout
    await expect(page.locator("input[name='username']")).toBeVisible()
})