import { customtest as test, expect } from '../fixtures/testfixture'
import { poManager } from '../pageobjects/poManager'

test.describe('ParaBank fund transfer flow', () => {
    test('transfer funds successfully', async ({ page, testdataForfundtransfer }) => {
        const pageManager = new poManager(page)
        const homePage = pageManager.getHomePage()

        await homePage.goTo()

       const loginPage = pageManager.getLoginPage()
       await loginPage.loginToApplication('randomUsername', 'randomPassword')

        const fundTransferPage = pageManager.getFundTransferPage()
        await fundTransferPage.clickOnFundTransferLink()

        await expect(page).toHaveURL(/transfer\.htm/)

        await fundTransferPage.transferFunds(testdataForfundtransfer.amount)

        await expect(page.locator('body')).toContainText(/Transfer Complete!|has been transferred|Error!/i)
    })
})
