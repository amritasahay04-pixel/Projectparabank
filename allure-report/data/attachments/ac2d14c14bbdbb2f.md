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

Locator: getByText('Your account was created successfully. You are now logged in.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Your account was created successfully. You are now logged in.')

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a1d9151edfb4d288
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  104 |     await registerpage.RegisterButtonClick()
  105 |     // Assertions: the application appends a session ID to the URL, so match the page path rather than the full absolute URL.
  106 |     await page.waitForTimeout(3000)
  107 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  108 |     await page.waitForTimeout(2000)
> 109 |     await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible()
      |                                                                                                   ^ Error: expect(locator).toBeVisible() failed
  110 |     await expect(page.getByText('Welcome Testers')).toBeVisible()
  111 |       
  112 | })
  113 | 
  114 | 
  115 | // test('login',async({page,testdataForregistration})=>
  116 | // {
  117 | //     const pageManager = new poManager(page)
  118 | //     const homepage = pageManager.getHomePage()
  119 | //     await homepage.goTo()
  120 | //     const loginpage = pageManager.getLoginPage()
  121 | //     await loginpage.loginToApplication
  122 | //     (
  123 | //         testdataForregistration.username,
  124 | //         testdataForregistration.password
  125 | //     )
  126 | //     // await loginpage.loginButtonClick()
  127 | //     await page.waitForTimeout(3000)
  128 | //     //Assertions
  129 | //     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
  130 | // }
  131 | // )
  132 | // })
  133 | 
  134 | test('fund transfer',async({page,testdataForfundtransfer})=>
  135 | {
  136 |     const pageManager = new poManager(page)
  137 |     const homepage = pageManager.getHomePage()
  138 |     await homepage.goTo()
  139 |     const fundtransferpage = pageManager.getFundTransferPage()
  140 |     await fundtransferpage.clickOnFundTransferLink()
  141 |     await page.waitForTimeout(5000)
  142 |     // The app currently responds with a SOAP/WSDL endpoint for this link, so assert on the URL instead of a UI success message.
  143 |     // await expect(page).toHaveURL(/\/parabank\/services\/ParaBank.*wsdl/)
  144 | 
  145 |     //assertions for validating the fund transfer
  146 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  147 |     expect(page.getByText('Transfer Funds')).toBeVisible()
  148 |     await fundtransferpage.transferFunds
  149 |     (
  150 |         testdataForfundtransfer.amount,
  151 |         testdataForfundtransfer.fromAccount,
  152 |         testdataForfundtransfer.toAccount
  153 |     )
  154 |     await page.waitForTimeout(3000)
  155 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  156 |     await expect(page.getByText('Transfer Complete!')).toBeVisible()
  157 |     
  158 | 
  159 | 
  160 | }
  161 | )
  162 | })
  163 | 
```