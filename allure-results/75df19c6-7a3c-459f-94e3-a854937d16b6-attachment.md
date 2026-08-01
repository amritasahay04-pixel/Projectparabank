# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FundTransfer.spec.js >> ParaBank fund transfer flow >> transfer funds successfully
- Location: tests\FundTransfer.spec.js:5:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'amount\']') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Error!" [level=1] [ref=e45]
        - paragraph [ref=e46]: An internal error has occurred and has been logged.
  - generic [ref=e48]:
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Home" [ref=e51] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e52]:
        - link "About Us" [ref=e53] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e54]:
        - link "Services" [ref=e55] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "Products" [ref=e57] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e58]:
        - link "Locations" [ref=e59] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e60]:
        - link "Forum" [ref=e61] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e62]:
        - link "Site Map" [ref=e63] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Contact Us" [ref=e65] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e66]: © Parasoft. All rights reserved.
    - list [ref=e67]:
      - listitem [ref=e68]: "Visit us at:"
      - listitem [ref=e69]:
        - link "www.parasoft.com" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  16 |         const link = this.page.getByRole('link', { name: 'Transfer Funds' }).first()
  17 |         if (await link.isVisible().catch(() => false)) {
  18 |             await link.click()
  19 |             return
  20 |         }
  21 | 
  22 |         await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm')
  23 |     }
  24 |     
  25 |     async transferFunds(amount) {
> 26 |         await this.amount.waitFor({ state: 'visible' })
     |                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  27 |         await this.amount.fill(amount)
  28 | 
  29 |         await this.fromAccount.waitFor({ state: 'visible' })
  30 |         const fromOptions = this.fromAccount.locator('option')
  31 |         await fromOptions.first().waitFor({ state: 'visible' })
  32 |         await this.fromAccount.selectOption({ index: 0 })
  33 | 
  34 |         await this.toAccount.waitFor({ state: 'visible' })
  35 |         const toOptions = this.toAccount.locator('option')
  36 |         await toOptions.nth(1).waitFor({ state: 'visible' })
  37 |         await this.toAccount.selectOption({ index: 1 })
  38 | 
  39 |         await this.transferButton.click()
  40 |     }
  41 | 
  42 |     async transferButtonClick()
  43 |     {
  44 |         await this.transferButton.click()
  45 |     }
  46 | 
  47 |     getSuccessHeading() {
  48 |         return this.successHeading
  49 |     }
  50 | }
```