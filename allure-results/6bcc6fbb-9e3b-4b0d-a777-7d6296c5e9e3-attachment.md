# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FundTransfer.spec.js >> ParaBank fund transfer flow >> transfer funds successfully
- Location: tests\FundTransfer.spec.js:5:9

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('//select[@id=\'fromAccountId\']')
    - locator resolved to <select class="input" id="fromAccountId"></select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    18 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms
    5 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
      - waiting 500ms

```

# Test source

```ts
  1  | export class FundTransferPage {
  2  |     constructor(page)
  3  |     {
  4  |         this.page=page
  5  |         this.fundTransferLink = page.locator("a[href='transfer.htm']")
  6  |         this.transferFundsHeading = page.getByRole('heading', { name: 'Transfer Funds' })
  7  |         this.amount=page.locator("//input[@id='amount']")
  8  |         this.fromAccount=page.locator("//select[@id='fromAccountId']")
  9  |         this.toAccount=page.locator("//select[@id='toAccountId']")
  10 |         this.transferButton=page.locator("//input[@value='Transfer']")
  11 |         this.successHeading = page.getByText('Transfer Complete!')
  12 |     }
  13 |     
  14 |     async clickOnFundTransferLink()
  15 |     {
  16 |         await this.fundTransferLink.waitFor({ state: 'visible' })
  17 |         await this.fundTransferLink.click()
  18 |     }
  19 |     
  20 |     async transferFunds(amount, fromAccount, toAccount) {
  21 |         await this.amount.waitFor({ state: 'visible' })
  22 |         await this.amount.fill(amount)
> 23 |         await this.fromAccount.selectOption(fromAccount)
     |                                ^ Error: locator.selectOption: Target page, context or browser has been closed
  24 |         await this.toAccount.selectOption(toAccount)
  25 |         await this.transferButton.click()
  26 |     }
  27 | 
  28 |     async transferButtonClick()
  29 |     {
  30 |         await this.transferButton.click()
  31 |     }
  32 | 
  33 |     getSuccessHeading() {
  34 |         return this.successHeading
  35 |     }
  36 | }
```