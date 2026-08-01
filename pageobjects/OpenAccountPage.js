export class OpenAccountPage {
    constructor(page) {
        this.page = page;
        this.openAccountLink = page.locator("a[href='openaccount.htm']")
        this.accountTypeDropdown = page.locator("select[id='type']")
        this.fromAccountDropdown = page.locator("select[id='fromAccountId']")
        this.openAccountButton = page.locator("//input[@value='Open New Account']")
    }

    async clickOnOpenAccountLink() {
        const link = this.page.getByRole('link', { name: 'Open New Account' }).first()
        if (await link.isVisible().catch(() => false)) {
            await link.click()
            return
        }

        await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm')
    }

    async openNewAccount(accountType = 'SAVINGS', fromAccountOption = null) {
        if (await this.accountTypeDropdown.isVisible().catch(() => false)) {
            await this.accountTypeDropdown.selectOption({ label: accountType })

            if (fromAccountOption) {
                if (await this.fromAccountDropdown.isVisible().catch(() => false)) {
                    await this.fromAccountDropdown.selectOption({ label: fromAccountOption })
                }
            } else {
                const optionCount = await this.fromAccountDropdown.locator('option').count()
                if (optionCount > 0 && await this.fromAccountDropdown.isVisible().catch(() => false)) {
                    await this.fromAccountDropdown.selectOption({ index: 0 })
                }
            }

            if (await this.openAccountButton.isVisible().catch(() => false)) {
                await this.openAccountButton.click()
            }
        }
    }
}