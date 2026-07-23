export class FundTransferPage {
    constructor(page)
    {
        this.page=page
        this.fundTransferLink = page.locator("a[href='transfer.htm']");
        this.amount=page.locator("//input[@id='amount']")
        this.fromAccount=page.locator("//select[@id='fromAccountId']")
        this.toAccount=page.locator("//select[@id='toAccountId']")
        this.transferButton=page.locator("//input[@value='Transfer']")  
    }
    
    async clickOnFundTransferLink()
    {
        await this.fundTransferLink.click()
    }
    
    // async fundTransfer(amount,fromAccount,toAccount)
    async transferFunds(amount, fromAccount, toAccount) {
    await this.amount.fill(amount)
    await this.fromAccount.selectOption(fromAccount)
    await this.toAccount.selectOption(toAccount)
    await this.transferButton.click()
} 
 async  transferButtonClick()
     {
           await this.transferButton.click()
     }
}