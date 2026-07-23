# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> parabank tests >> register
- Location: tests\TC.spec.js:81:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Welcome')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Welcome')

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a1f079d33bc8b20d
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  8   | 
  9   | 
  10  | 
  11  | // test('tc register', async ({ page }) => {
  12  | 
  13  | //     const pageManager = new poManager(page)
  14  | //     const homepage = pageManager.getHomePage()
  15  | //     await homepage.goTo()
  16  | //     await homepage.clickOnSigninButton()
  17  | //     const registerpage = pageManager.getRegistrationPage()
  18  |     
  19  |     
  20  | //     // const homepage = new HomePage(page)
  21  | //     // await homepage.goTo()
  22  | //     // await homepage.clickOnSigninButton()
  23  | 
  24  | //     // const registerpage = new RegistrationPage(page)
  25  | 
  26  | //     await registerpage.regesterNewUser(
  27  | //         'jhon',
  28  | //         'peter',
  29  | //         'delhi',
  30  | //         'saket',
  31  | //         'new delhi',
  32  | //         '110000',
  33  | //         '12345677',
  34  | //         '1234',
  35  | //         'js09',
  36  | //         'asdf',
  37  | //         'asdf'
  38  | //     )
  39  | 
  40  | //     await registerpage.RegisterButtonClick()
  41  | 
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
> 108 |     await expect(page.locator("text=Welcome")).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  109 |     await registerpage.RegisterButtonClick()
  110 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  111 |     await page.waitForTimeout(2000)
  112 |     // Verify registration
  113 |     console.log(await page.url())
  114 | 
  115 |     await page.screenshot({
  116 |         path: "afterRegister.png",
  117 |         fullPage: true
  118 |     })
  119 |          await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  120 |          await homepage.clickOnLogoutLink()
  121 |       
  122 | })
  123 | 
  124 | // test('logout',async({page,testdataForregistration})=>
  125 | // {
  126 | //     const pageManager = new poManager(page)
  127 | //     const homepage = pageManager.getHomePage()
  128 | //     await homepage.goTo()
  129 | //     const registerpage = pageManager.getRegistrationPage()
  130 | //     //await homepage.clickOnSigninButton()
  131 | //     await homepage.clickOnLogoutLink()
  132 | // }
  133 | // )
  134 | 
  135 | test('login',async({page,testdataForregistration})=>
  136 | {
  137 |     const pageManager = new poManager(page)
  138 |     const homepage = pageManager.getHomePage()
  139 |     await homepage.goTo()
  140 |     const loginpage = pageManager.getLoginPage()
  141 |     await loginpage.loginToApplication
  142 |     (
  143 |         testdataForregistration.username,
  144 |         testdataForregistration.password
  145 |     )
  146 |     // await loginpage.loginButtonClick()
  147 |     await page.waitForTimeout(3000)
  148 |     //Assertions
  149 | //     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
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
  190 | test('fund transfer',async({page,testdataForfundtransfer})=>
  191 | {
  192 |     const pageManager = new poManager(page)
  193 |     const homepage = pageManager.getHomePage()
  194 |     await homepage.goTo()
  195 |     const fundtransferpage = pageManager.getFundTransferPage()
  196 |     await fundtransferpage.clickOnFundTransferLink()
  197 |     await page.waitForTimeout(5000)
  198 |     console.log(await page.url());
  199 |     // The app currently responds with a SOAP/WSDL endpoint for this link, so assert on the URL instead of a UI success message.
  200 |     // await expect(page).toHaveURL(/\/parabank\/services\/ParaBank.*wsdl/)
  201 | 
  202 |     //assertions for validating the fund transfer
  203 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  204 |     await expect(page.getByText('Transfer Funds')).toBeVisible()
  205 |     await fundtransferpage.transferFunds 
  206 |     (
  207 |         testdataForfundtransfer.amount,
  208 |         testdataForfundtransfer.fromAccount,
```