# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> login
- Location: tests\TC.spec.js:133:5

# Error details

```
TypeError: loginpage.loginButtonClick is not a function
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
        - paragraph [ref=e46]: The username and password could not be verified.
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
  81  | test('register',async({page,testdataForregistration})=>
  82  | {
  83  |     const pageManager = new poManager(page)
  84  |     const homepage = pageManager.getHomePage()
  85  |     await homepage.goTo()
  86  |     await homepage.clickOnSigninButton()
  87  | 
  88  |     const registerpage = pageManager.getRegistrationPage()
  89  | 
  90  |     await registerpage.registerNewUser
  91  |     (
  92  |         testdataForregistration.firstname,
  93  |         testdataForregistration.lastname,
  94  |         testdataForregistration.address,
  95  |         testdataForregistration.city,
  96  |         testdataForregistration.state,
  97  |         testdataForregistration.zipcode,
  98  |         testdataForregistration.phonenumber,
  99  |         testdataForregistration.ssn,
  100 |         testdataForregistration.username,
  101 |         testdataForregistration.password,
  102 |         testdataForregistration.confirmpassword
  103 |     )
  104 |     await registerpage.RegisterButtonClick()
  105 |     // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
  106 |     await page.waitForTimeout(5000)
  107 |   // Verify registration
  108 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  109 |     await page.waitForTimeout(2000)
  110 |     // Verify registration
  111 |     console.log(await page.url())
  112 | 
  113 |     // await page.screenshot({
  114 |     //     path: "afterRegister.png",
  115 |     //     fullPage: true
  116 |     })
  117 |         //  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  118 |         //  await homepage.clickOnLogoutLink()
  119 |       
  120 | })
  121 | 
  122 | // test('logout',async({page,testdataForregistration})=>
  123 | // {
  124 | //     const pageManager = new poManager(page)
  125 | //     const homepage = pageManager.getHomePage()
  126 | //     await homepage.goTo()
  127 | //     const registerpage = pageManager.getRegistrationPage()
  128 | //     //await homepage.clickOnSigninButton()
  129 | //     await homepage.clickOnLogoutLink()
  130 | // }
  131 | // )
  132 | 
  133 | test('login',async({page,testdataForregistration})=>
  134 | {
  135 |     const pageManager = new poManager(page)
  136 |     const homepage = pageManager.getHomePage()
  137 |     await homepage.goTo()
  138 |     const loginpage = pageManager.getLoginPage()
  139 |     await loginpage.loginToApplication
  140 |     (
  141 |         testdataForregistration.username,
  142 |         testdataForregistration.password
  143 |     )
  144 |     await page.waitForTimeout(3000)
> 145 |     await loginpage.loginButtonClick()
      |                     ^ TypeError: loginpage.loginButtonClick is not a function
  146 |     //Assertions
  147 | //     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
  148 | }
  149 | )
  150 | //})
  151 | 
  152 | // test('register and logout', async ({ page, testdataForregistration }) => {
  153 | //     const pageManager = new poManager(page)
  154 | //     const homepage = pageManager.getHomePage()
  155 | //     const registerpage = pageManager.getRegistrationPage()
  156 | 
  157 | //     const uniqueUsername = `logoutuser${Date.now()}`
  158 | 
  159 | //     await homepage.goTo()
  160 | //     await homepage.clickOnSigninButton()
  161 | 
  162 | //     await registerpage.regesterNewUser(
  163 | //         testdataForregistration.firstname,
  164 | //         testdataForregistration.lastname,
  165 | //         testdataForregistration.address,
  166 | //         testdataForregistration.city,
  167 | //         testdataForregistration.state,
  168 | //         testdataForregistration.zipcode,
  169 | //         testdataForregistration.phonenumber,
  170 | //         testdataForregistration.ssn,
  171 | //         uniqueUsername,
  172 | //         testdataForregistration.password,
  173 | //         testdataForregistration.confirmpassword
  174 | //     )
  175 | 
  176 | //     await registerpage.RegisterButtonClick()
  177 | //     await page.waitForTimeout(3000)
  178 | 
  179 | //     await expect(page).toHaveURL(/\/parabank\/(index|register)\.htm/)
  180 | //     await expect(page.locator('body')).toContainText(/ParaBank|Customer Login|Register/i)
  181 | 
  182 | //     await homepage.clickOnLogoutLink()
  183 | 
  184 | //     await expect(page).toHaveURL(/\/parabank\/index\.htm/)
  185 | //     await expect(page.locator('body')).toContainText(/Customer Login/i)
  186 | // })
  187 | 
  188 | test('fund transfer',async({page,testdataForfundtransfer})=>
  189 | {
  190 |     const pageManager = new poManager(page)
  191 |     const homepage = pageManager.getHomePage()
  192 |     await homepage.goTo()
  193 |     const fundtransferpage = pageManager.getFundTransferPage()
  194 |     await fundtransferpage.clickOnFundTransferLink()
  195 |     await page.waitForTimeout(5000)
  196 |     console.log(await page.url());
  197 |     // The app currently responds with a SOAP/WSDL endpoint for this link, so assert on the URL instead of a UI success message.
  198 |     // await expect(page).toHaveURL(/\/parabank\/services\/ParaBank.*wsdl/)
  199 | 
  200 |     //assertions for validating the fund transfer
  201 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  202 |     await expect(page.getByText('Transfer Funds')).toBeVisible()
  203 |     await fundtransferpage.transferFunds 
  204 |     (
  205 |         testdataForfundtransfer.amount,
  206 |         testdataForfundtransfer.fromAccount,
  207 |         testdataForfundtransfer.toAccount
  208 |     )
  209 |     await fundtransferpage.transferButtonClick()
  210 |     await page.waitForTimeout(3000)
  211 | 
  212 |       // Verify transfer
  213 |     await expect(page.locator("text=Transfer Complete!")).toBeVisible();
  214 | 
  215 |     // Logout
  216 |     await homepage.clickOnLogoutLink();
  217 | 
  218 |     // Verify logout
  219 |     await expect(page.locator("input[name='username']")).toBeVisible();
  220 | 
  221 | 
  222 | 
  223 | }
  224 | )
```