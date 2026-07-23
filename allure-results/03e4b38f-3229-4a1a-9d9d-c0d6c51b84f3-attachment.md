# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> parabank tests >> register and logout
- Location: tests\TC.spec.js:134:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /log out/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /log out/i })

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a1d940febf6ae98a
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  105 |     // Assertions: the application may remain on the registration page after submission, so verify the form is still present instead of expecting a success banner that is not rendered.
  106 |     await page.waitForTimeout(5000)
  107 |     // await expect(page).toHaveURL(/\/parabank\/register\.htm/)
  108 |     // await page.waitForTimeout(2000)
  109 |     // await expect(page.locator('form')).toBeVisible()
  110 |     // await expect(page.locator('input[name="username"]')).toBeVisible()
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
  134 | test('register and logout', async ({ page, testdataForregistration }) => {
  135 |     const pageManager = new poManager(page)
  136 |     const homepage = pageManager.getHomePage()
  137 |     const registerpage = pageManager.getRegistrationPage()
  138 | 
  139 |     const uniqueUsername = `logoutuser${Date.now()}`
  140 | 
  141 |     await homepage.goTo()
  142 |     await homepage.clickOnSigninButton()
  143 | 
  144 |     await registerpage.regesterNewUser(
  145 |         testdataForregistration.firstname,
  146 |         testdataForregistration.lastname,
  147 |         testdataForregistration.address,
  148 |         testdataForregistration.city,
  149 |         testdataForregistration.state,
  150 |         testdataForregistration.zipcode,
  151 |         testdataForregistration.phonenumber,
  152 |         testdataForregistration.ssn,
  153 |         uniqueUsername,
  154 |         testdataForregistration.password,
  155 |         testdataForregistration.confirmpassword
  156 |     )
  157 | 
  158 |     await registerpage.RegisterButtonClick()
  159 |     await page.waitForTimeout(3000)
  160 | 
> 161 |     await expect(page.getByRole('link', { name: /log out/i })).toBeVisible()
      |                                                                ^ Error: expect(locator).toBeVisible() failed
  162 |     await homepage.clickOnLogoutLink()
  163 | 
  164 |     await expect(page).toHaveURL(/\/parabank\/index\.htm/)
  165 |     await expect(page.getByRole('button', { name: /log in/i })).toBeVisible()
  166 | })
  167 | 
  168 | test('fund transfer',async({page,testdataForfundtransfer})=>
  169 | {
  170 |     const pageManager = new poManager(page)
  171 |     const homepage = pageManager.getHomePage()
  172 |     await homepage.goTo()
  173 |     const fundtransferpage = pageManager.getFundTransferPage()
  174 |     await fundtransferpage.clickOnFundTransferLink()
  175 |     await page.waitForTimeout(5000)
  176 |     // The app currently responds with a SOAP/WSDL endpoint for this link, so assert on the URL instead of a UI success message.
  177 |     // await expect(page).toHaveURL(/\/parabank\/services\/ParaBank.*wsdl/)
  178 | 
  179 |     //assertions for validating the fund transfer
  180 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  181 |     await expect(page.getByText('Transfer Funds')).toBeVisible()
  182 |     await fundtransferpage.transferFunds 
  183 |     (
  184 |         testdataForfundtransfer.amount,
  185 |         testdataForfundtransfer.fromAccount,
  186 |         testdataForfundtransfer.toAccount
  187 |     )
  188 |     await fundtransferpage.transferButtonClick()
  189 |     await page.waitForTimeout(3000)
  190 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/transfer.htm')
  191 |     await expect(page.getByText('Transfer Complete!')).toBeVisible()
  192 |     
  193 | 
  194 | 
  195 | }
  196 | )
  197 | })
  198 | 
```