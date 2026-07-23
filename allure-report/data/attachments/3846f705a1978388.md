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

Locator: getByRole('link', { name: 'Log Out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log Out' })

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a1dbd6972d76b74b
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  104 | //     await registerpage.RegisterButtonClick()
  105 | //     // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
  106 | //     await page.waitForTimeout(5000)
  107 | //   // Verify registration
  108 | //     await expect(page.locator("text=Welcome")).toBeVisible();
  109 |     await registerpage.RegisterButtonClick()
  110 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  111 |     await page.waitForTimeout(2000)
  112 |     // Verify registration
> 113 |     await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
      |                                                               ^ Error: expect(locator).toBeVisible() failed
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
  128 | // test('login',async({page,testdataForregistration})=>
  129 | // {
  130 | //     const pageManager = new poManager(page)
  131 | //     const homepage = pageManager.getHomePage()
  132 | //     await homepage.goTo()
  133 | //     const loginpage = pageManager.getLoginPage()
  134 | //     await loginpage.loginToApplication
  135 | //     (
  136 | //         testdataForregistration.username,
  137 | //         testdataForregistration.password
  138 | //     )
  139 | //     // await loginpage.loginButtonClick()
  140 | //     await page.waitForTimeout(3000)
  141 | //     //Assertions
  142 | // //     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
  143 | // }
  144 | // )
  145 | // })
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
```