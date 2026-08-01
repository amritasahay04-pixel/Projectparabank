# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FundTransfer.spec.js >> ParaBank fund transfer flow >> transfer funds successfully
- Location: tests\FundTransfer.spec.js:5:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1')
Expected: visible
Error: strict mode violation: locator('h1') resolved to 3 elements:
    1) <h1 class="title">↵⇆⇆⇆Transfer Funds↵⇆⇆</h1> aka getByRole('heading', { name: 'Transfer Funds' })
    2) <h1 class="title">Transfer Complete!</h1> aka getByText('Transfer Complete!')
    3) <h1 class="title">↵⇆⇆⇆Error!↵⇆⇆</h1> aka getByText('Error!')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - paragraph [ref=e29]: Welcome Sammy Yost
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Transfer Funds" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]:
            - text: "Amount: $"
            - textbox [ref=e54]
          - generic [ref=e55]:
            - text: "From account #"
            - combobox [ref=e56]:
              - option "25776" [selected]
              - option "26109"
            - text: "to account #"
            - combobox [ref=e57]:
              - option "25776" [selected]
              - option "26109"
          - button "Transfer" [ref=e59] [cursor=pointer]
  - generic [ref=e61]:
    - list [ref=e62]:
      - listitem [ref=e63]:
        - link "Home" [ref=e64] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e65]:
        - link "About Us" [ref=e66] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e67]:
        - link "Services" [ref=e68] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e69]:
        - link "Products" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e71]:
        - link "Locations" [ref=e72] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e73]:
        - link "Forum" [ref=e74] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e75]:
        - link "Site Map" [ref=e76] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e77]:
        - link "Contact Us" [ref=e78] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e79]: © Parasoft. All rights reserved.
    - list [ref=e80]:
      - listitem [ref=e81]: "Visit us at:"
      - listitem [ref=e82]:
        - link "www.parasoft.com" [ref=e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { customtest as test, expect } from '../fixtures/testfixture'
  2  | import { poManager } from '../pageobjects/poManager'
  3  | 
  4  | test.describe('ParaBank fund transfer flow', () => {
  5  |     test('transfer funds successfully', async ({ page, testdataForfundtransfer, testdataForregistration }) => {
  6  |         const pageManager = new poManager(page)
  7  |         const homePage = pageManager.getHomePage()
  8  | 
  9  |         await homePage.goTo()
  10 | 
  11 |         const loginPage = pageManager.getLoginPage()
  12 |         await loginPage.loginToApplication(
  13 |             testdataForregistration.username,
  14 |             testdataForregistration.password
  15 |         )
  16 | 
  17 |         const fundTransferPage = pageManager.getFundTransferPage()
  18 |         await fundTransferPage.clickOnFundTransferLink()
  19 | 
  20 |         await expect(page).toHaveURL(/transfer\.htm/)
> 21 |         await expect(fundTransferPage.transferFundsHeading).toBeVisible()
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  22 | 
  23 |         await fundTransferPage.transferFunds(
  24 |             testdataForfundtransfer.amount,
  25 |             testdataForfundtransfer.fromAccount,
  26 |             testdataForfundtransfer.toAccount
  27 |         )
  28 | 
  29 |         await expect(fundTransferPage.getSuccessHeading()).toBeVisible()
  30 |         await expect(page.locator('body')).toContainText(/Transfer Complete!/)
  31 |     })
  32 | })
  33 | 
```