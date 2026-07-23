# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> parabank tests >> login
- Location: tests\TC.spec.js:128:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://parabank.parasoft.com/parabank/overview.htm"
Received: "https://parabank.parasoft.com/parabank/login.htm;jsessionid=3225E45D563669A5ECE2CA3290E89845"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://parabank.parasoft.com/parabank/login.htm;jsessionid=3225E45D563669A5ECE2CA3290E89845"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Error!" [level=1]
- paragraph: The username and password could not be verified.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  42  | //     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  43  | //     await page.waitForTimeout(2000)
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
  81  | test('register',async({page,testdataForregistration})=>
  82  | {
  83  |     const pageManager = new poManager(page)
  84  |     const homepage = pageManager.getHomePage()
  85  |     await homepage.goTo()
  86  |     await homepage.clickOnSigninButton()
  87  | 
  88  |     const registerpage = pageManager.getRegistrationPage()
  89  | 
  90  |     await registerpage.regesterNewUser
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
  104 | //     await registerpage.RegisterButtonClick()
  105 | //     // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
  106 | //     await page.waitForTimeout(5000)
  107 | //   // Verify registration
  108 | //     await expect(page.locator("text=Welcome")).toBeVisible();
  109 |     await registerpage.RegisterButtonClick()
  110 |     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  111 |     await page.waitForTimeout(2000)
  112 |     // Verify registration
  113 |     await expect(page.locator("text=Welcome")).toBeVisible();
  114 |       
  115 | })
  116 | 
  117 | // test('logout',async({page,testdataForregistration})=>
  118 | // {
  119 | //     const pageManager = new poManager(page)
  120 | //     const homepage = pageManager.getHomePage()
  121 | //     await homepage.goTo()
  122 | //     const registerpage = pageManager.getRegistrationPage()
  123 | //     //await homepage.clickOnSigninButton()
  124 | //     await homepage.clickOnLogoutLink()
  125 | // }
  126 | // )
  127 | 
  128 | test('login',async({page,testdataForregistration})=>
  129 | {
  130 |     const pageManager = new poManager(page)
  131 |     const homepage = pageManager.getHomePage()
  132 |     await homepage.goTo()
  133 |     const loginpage = pageManager.getLoginPage()
  134 |     await loginpage.loginToApplication
  135 |     (
  136 |         testdataForregistration.username,
  137 |         testdataForregistration.password
  138 |     )
  139 |     // await loginpage.loginButtonClick()
  140 |     await page.waitForTimeout(3000)
  141 |     //Assertions
> 142 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  143 | }
  144 | )
  145 | })
  146 | 
  147 | // test('register and logout', async ({ page, testdataForregistration }) => {
  148 | //     const pageManager = new poManager(page)
  149 | //     const homepage = pageManager.getHomePage()
  150 | //     const registerpage = pageManager.getRegistrationPage()
  151 | 
  152 | //     const uniqueUsername = `logoutuser${Date.now()}`
  153 | 
  154 | //     await homepage.goTo()
  155 | //     await homepage.clickOnSigninButton()
  156 | 
  157 | //     await registerpage.regesterNewUser(
  158 | //         testdataForregistration.firstname,
  159 | //         testdataForregistration.lastname,
  160 | //         testdataForregistration.address,
  161 | //         testdataForregistration.city,
  162 | //         testdataForregistration.state,
  163 | //         testdataForregistration.zipcode,
  164 | //         testdataForregistration.phonenumber,
  165 | //         testdataForregistration.ssn,
  166 | //         uniqueUsername,
  167 | //         testdataForregistration.password,
  168 | //         testdataForregistration.confirmpassword
  169 | //     )
  170 | 
  171 | //     await registerpage.RegisterButtonClick()
  172 | //     await page.waitForTimeout(3000)
  173 | 
  174 | //     await expect(page).toHaveURL(/\/parabank\/(index|register)\.htm/)
  175 | //     await expect(page.locator('body')).toContainText(/ParaBank|Customer Login|Register/i)
  176 | 
  177 | //     await homepage.clickOnLogoutLink()
  178 | 
  179 | //     await expect(page).toHaveURL(/\/parabank\/index\.htm/)
  180 | //     await expect(page.locator('body')).toContainText(/Customer Login/i)
  181 | // })
  182 | 
  183 | test('fund transfer',async({page,testdataForfundtransfer})=>
  184 | {
  185 |     const pageManager = new poManager(page)
  186 |     const homepage = pageManager.getHomePage()
  187 |     await homepage.goTo()
  188 |     const fundtransferpage = pageManager.getFundTransferPage()
  189 |     await fundtransferpage.clickOnFundTransferLink()
  190 |     await page.waitForTimeout(5000)
  191 |     console.log(await page.url());
  192 |     // The app currently responds with a SOAP/WSDL endpoint for this link, so assert on the URL instead of a UI success message.
  193 |     // await expect(page).toHaveURL(/\/parabank\/services\/ParaBank.*wsdl/)
  194 | 
  195 |     //assertions for validating the fund transfer
  196 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  197 |     await expect(page.getByText('Transfer Funds')).toBeVisible()
  198 |     await fundtransferpage.transferFunds 
  199 |     (
  200 |         testdataForfundtransfer.amount,
  201 |         testdataForfundtransfer.fromAccount,
  202 |         testdataForfundtransfer.toAccount
  203 |     )
  204 |     await fundtransferpage.transferButtonClick()
  205 |     await page.waitForTimeout(3000)
  206 | 
  207 |       // Verify transfer
  208 |     await expect(page.locator("text=Transfer Complete!")).toBeVisible();
  209 | 
  210 |     // Logout
  211 |     await homepage.clickOnLogoutLink();
  212 | 
  213 |     // Verify logout
  214 |     await expect(page.locator("input[name='username']")).toBeVisible();
  215 | 
  216 | 
  217 | 
  218 | }
  219 | )
  220 | 
  221 | 
```