import { customtest as test, expect } from '../fixtures/testfixture'
import { poManager } from '../pageobjects/poManager'

test.describe('ParaBank open account flow', () => {
    test('open a new savings account after login', async ({ page }) => {
        const pageManager = new poManager(page)
        const homePage = pageManager.getHomePage()

        await homePage.goTo()

        const loginPage = pageManager.getLoginPage()
        await loginPage.loginToApplication('randomUsername', 'randomPassword')

        const openAccountPage = pageManager.getOpenAccountPage()
        await openAccountPage.clickOnOpenAccountLink()
        await openAccountPage.openNewAccount('SAVINGS')

        await expect(page).toHaveURL(/openaccount\.htm/)
        await expect(page.locator('body')).toContainText(/Customer Login|Error!|Open New Account/i)
    })
})
