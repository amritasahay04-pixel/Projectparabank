# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> login
- Location: tests\TC.spec.js:136:5

# Error details

```
ReferenceError: randomUsername is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
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
              - /url: lookup.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
      - generic [ref=e44]:
        - list [ref=e46]:
          - listitem [ref=e47]: ATM Services
          - listitem [ref=e48]:
            - link "Withdraw Funds" [ref=e49] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?wsdl
          - listitem [ref=e50]:
            - link "Transfer Funds" [ref=e51] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?wsdl
          - listitem [ref=e52]:
            - link "Check Balances" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?wsdl
          - listitem [ref=e54]:
            - link "Make Deposits" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?wsdl
        - list [ref=e56]:
          - listitem [ref=e57]: Online Services
          - listitem [ref=e58]:
            - link "Bill Pay" [ref=e59] [cursor=pointer]:
              - /url: services/bank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?_wadl&_type=xml
          - listitem [ref=e60]:
            - link "Account History" [ref=e61] [cursor=pointer]:
              - /url: services/bank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?_wadl&_type=xml
          - listitem [ref=e62]:
            - link "Transfer Funds" [ref=e63] [cursor=pointer]:
              - /url: services/bank;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49?_wadl&_type=xml
        - paragraph [ref=e64]:
          - link "Read More" [ref=e65] [cursor=pointer]:
            - /url: services.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - heading "Latest News" [level=4] [ref=e66]
        - list [ref=e67]:
          - listitem [ref=e68]: 07/29/2026
          - listitem [ref=e69]:
            - link "ParaBank Is Now Re-Opened" [ref=e70] [cursor=pointer]:
              - /url: news.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49#6
          - listitem [ref=e71]:
            - link "New! Online Bill Pay" [ref=e72] [cursor=pointer]:
              - /url: news.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49#5
          - listitem [ref=e73]:
            - link "New! Online Account Transfers" [ref=e74] [cursor=pointer]:
              - /url: news.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49#4
        - paragraph [ref=e75]:
          - link "Read More" [ref=e76] [cursor=pointer]:
            - /url: news.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
  - generic [ref=e78]:
    - list [ref=e79]:
      - listitem [ref=e80]:
        - link "Home" [ref=e81] [cursor=pointer]:
          - /url: index.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - text: "|"
      - listitem [ref=e82]:
        - link "About Us" [ref=e83] [cursor=pointer]:
          - /url: about.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - text: "|"
      - listitem [ref=e84]:
        - link "Services" [ref=e85] [cursor=pointer]:
          - /url: services.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - text: "|"
      - listitem [ref=e86]:
        - link "Products" [ref=e87] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Locations" [ref=e89] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e90]:
        - link "Forum" [ref=e91] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e92]:
        - link "Site Map" [ref=e93] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
        - text: "|"
      - listitem [ref=e94]:
        - link "Contact Us" [ref=e95] [cursor=pointer]:
          - /url: contact.htm;jsessionid=6E81D19AD0708FD0E3E5E7719057AF49
    - paragraph [ref=e96]: © Parasoft. All rights reserved.
    - list [ref=e97]:
      - listitem [ref=e98]: "Visit us at:"
      - listitem [ref=e99]:
        - link "www.parasoft.com" [ref=e100] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  44  | 
  45  | // })
  46  | 
  47  | // // for ( const data of testdata)
  48  | // // {
  49  | // // test(`tc register ${data.username}`,async({page})=>
  50  | // // {
  51  | // //      const homepage = new HomePage(page)
  52  | // //     await homepage.goTo()
  53  | // //     await homepage.clickOnSigninButton()
  54  | 
  55  | // //     const registerpage = new RegistrationPage(page)
  56  | 
  57  | // //     await registerpage.regesterNewUser(
  58  | // //         data.firstname,
  59  | // //         data.lastname,
  60  | // //         data.address,
  61  | // //         data.city,
  62  | // //         data.state,
  63  | // //         data.zipcode,
  64  | // //         data.phonenumber,
  65  | // //         data.ssn,
  66  | // //         data.username,
  67  | // //         data.password,
  68  | // //         data.confirmpassword
  69  | // //     )
  70  | // //   await registerpage.RegisterButtonClick()
  71  | 
  72  | // //     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  73  | // //     await page.waitForTimeout(2000)
  74  | 
  75  | 
  76  | // // })
  77  | // // }
  78  | 
  79  | test.describe.serial('parabank tests',()=>
  80  | {
  81  | const randomUsername = `user${Date.now()}`
  82  | const randomPassword = `Pass${Date.now()}`
  83  | 
  84  | test('register',async({page,testdataForregistration})=>
  85  | {
  86  |     const pageManager = new poManager(page)
  87  |     const homepage = pageManager.getHomePage()
  88  |     await homepage.goTo()
  89  |     await homepage.clickOnSigninButton()
  90  | 
  91  |     const registerpage = pageManager.getRegistrationPage()
  92  | 
  93  |     await registerpage.registerNewUser
  94  |     (
  95  |         testdataForregistration.firstname,
  96  |         testdataForregistration.lastname,
  97  |         testdataForregistration.address,
  98  |         testdataForregistration.city,
  99  |         testdataForregistration.state,
  100 |         testdataForregistration.zipcode,
  101 |         testdataForregistration.phonenumber,
  102 |         testdataForregistration.ssn,
  103 |         randomUsername,
  104 |         randomPassword,
  105 |         randomPassword
  106 |     )
  107 |     await registerpage.RegisterButtonClick()
  108 |     // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
  109 |     await page.waitForTimeout(5000)
  110 |   // Verify registration
  111 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  112 |     await page.waitForTimeout(2000)
  113 |     // Verify registration
  114 |     console.log(await page.url())
  115 | 
  116 |     // await page.screenshot({
  117 |     //     path: "afterRegister.png",
  118 |     //     fullPage: true
  119 |     })
  120 |         //  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  121 |         //  await homepage.clickOnLogoutLink()
  122 |       
  123 | })
  124 | 
  125 | // test('logout',async({page,testdataForregistration})=>
  126 | // {
  127 | //     const pageManager = new poManager(page)
  128 | //     const homepage = pageManager.getHomePage()
  129 | //     await homepage.goTo()
  130 | //     const registerpage = pageManager.getRegistrationPage()
  131 | //     //await homepage.clickOnSigninButton()
  132 | //     await homepage.clickOnLogoutLink()
  133 | // }
  134 | // )
  135 | 
  136 | test('login',async({page,testdataForregistration})=>
  137 | {
  138 |     const pageManager = new poManager(page)
  139 |     const homepage = pageManager.getHomePage()
  140 |     await homepage.goTo()
  141 |     const loginpage = pageManager.getLoginPage()
  142 |     await loginpage.loginToApplication
  143 |     (
> 144 |         randomUsername,
      |         ^ ReferenceError: randomUsername is not defined
  145 |         randomPassword
  146 |     )
  147 |     await page.waitForTimeout(3000)
  148 |     //Assertions
  149 |     // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
  150 | }
  151 | )
  152 | //})
  153 | 
  154 | // test('register and logout', async ({ page, testdataForregistration }) => {
  155 | //     const pageManager = new poManager(page)
  156 | //     const homepage = pageManager.getHomePage()
  157 | //     const registerpage = pageManager.getRegistrationPage()
  158 | 
  159 | //     const uniqueUsername = `logoutuser${Date.now()}`
  160 | 
  161 | //     await homepage.goTo()
  162 | //     await homepage.clickOnSigninButton()
  163 | 
  164 | //     await registerpage.regesterNewUser(
  165 | //         testdataForregistration.firstname,
  166 | //         testdataForregistration.lastname,
  167 | //         testdataForregistration.address,
  168 | //         testdataForregistration.city,
  169 | //         testdataForregistration.state,
  170 | //         testdataForregistration.zipcode,
  171 | //         testdataForregistration.phonenumber,
  172 | //         testdataForregistration.ssn,
  173 | //         uniqueUsername,
  174 | //         testdataForregistration.password,
  175 | //         testdataForregistration.confirmpassword
  176 | //     )
  177 | 
  178 | //     await registerpage.RegisterButtonClick()
  179 | //     await page.waitForTimeout(3000)
  180 | 
  181 | //     await expect(page).toHaveURL(/\/parabank\/(index|register)\.htm/)
  182 | //     await expect(page.locator('body')).toContainText(/ParaBank|Customer Login|Register/i)
  183 | 
  184 | //     await homepage.clickOnLogoutLink()
  185 | 
  186 | //     await expect(page).toHaveURL(/\/parabank\/index\.htm/)
  187 | //     await expect(page.locator('body')).toContainText(/Customer Login/i)
  188 | // })
  189 | 
  190 | test('fund transfer and logout', async ({ page, testdataForfundtransfer }) => {
  191 |     const pageManager = new poManager(page)
  192 |     const homepage = pageManager.getHomePage()
  193 |     await homepage.goTo()
  194 | 
  195 |     const fundtransferpage = pageManager.getFundTransferPage()
  196 |     await fundtransferpage.clickOnFundTransferLink()
  197 | 
  198 |     // Assert on URL/heading rather than a timeout — Playwright retries automatically
  199 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  200 |     await expect(fundtransferpage.transferFundsHeading).toBeVisible()
  201 | 
  202 |     await fundtransferpage.transferFunds(
  203 |         testdataForfundtransfer.amount,
  204 |         testdataForfundtransfer.fromAccount,
  205 |         testdataForfundtransfer.toAccount
  206 |     )
  207 | 
  208 |     // Verify transfer succeeded
  209 |     await expect(fundtransferpage.getSuccessHeading()).toBeVisible()
  210 | 
  211 |     // Logout
  212 |     await homepage.clickOnLogoutLink()
  213 | 
  214 |     // Verify logout
  215 |     await expect(page.locator("input[name='username']")).toBeVisible()
  216 | })
```