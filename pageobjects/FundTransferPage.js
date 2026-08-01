export class FundTransferPage {
    constructor(page)
    {
        this.page=page
        this.fundTransferLink = page.locator("a[href='transfer.htm']")
        this.transferFundsHeading = page.getByRole('heading', { name: 'Transfer Funds' })
        this.amount=page.locator("//input[@id='amount']")
        this.fromAccount=page.locator("//select[@id='fromAccountId']")
        this.toAccount=page.locator("//select[@id='toAccountId']")
        this.transferButton=page.locator("//input[@value='Transfer']")
        this.successHeading = page.getByText('Transfer Complete!')
    }
    
    async clickOnFundTransferLink()
    {
        const link = this.page.getByRole('link', { name: 'Transfer Funds' }).first()
        if (await link.isVisible().catch(() => false)) {
            await link.click()
            return
        }

        await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm')
    }
    
    async transferFunds(amount) {
        if (await this.amount.isVisible().catch(() => false)) {
            await this.amount.fill(amount)

            if (await this.fromAccount.isVisible().catch(() => false)) {
                const fromOptions = this.fromAccount.locator('option')
                if (await fromOptions.count() > 0) {
                    await this.fromAccount.selectOption({ index: 0 })
                }
            }

            if (await this.toAccount.isVisible().catch(() => false)) {
                const toOptions = this.toAccount.locator('option')
                if (await toOptions.count() > 1) {
                    await this.toAccount.selectOption({ index: 1 })
                }
            }

            if (await this.transferButton.isVisible().catch(() => false)) {
                await this.transferButton.click()
            }
        }
    }

    async transferButtonClick()
    {
        await this.transferButton.click()
    }

    getSuccessHeading() {
        return this.successHeading
    }
}