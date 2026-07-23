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
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: First name is required."':
      - cell "First Name:"
      - cell:
        - textbox
      - cell "First name is required."
    - 'row "Last Name: Last name is required."':
      - cell "Last Name:"
      - cell:
        - textbox
      - cell "Last name is required."
    - 'row "Address: Address is required."':
      - cell "Address:"
      - cell:
        - textbox
      - cell "Address is required."
    - 'row "City: City is required."':
      - cell "City:"
      - cell:
        - textbox
      - cell "City is required."
    - 'row "State: State is required."':
      - cell "State:"
      - cell:
        - textbox
      - cell "State is required."
    - 'row "Zip Code: Zip Code is required."':
      - cell "Zip Code:"
      - cell:
        - textbox
      - cell "Zip Code is required."
    - 'row "Phone #:"':
      - 'cell "Phone #:"'
      - cell:
        - textbox
      - cell
    - 'row "SSN: Social Security Number is required."':
      - cell "SSN:"
      - cell:
        - textbox
      - cell "Social Security Number is required."
    - row:
      - cell
    - 'row "Username: Username is required."':
      - cell "Username:"
      - cell:
        - textbox
      - cell "Username is required."
    - 'row "Password: Password is required."':
      - cell "Password:"
      - cell:
        - textbox
      - cell "Password is required."
    - 'row "Confirm: Password confirmation is required."':
      - cell "Confirm:"
      - cell:
        - textbox
      - cell "Password confirmation is required."
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
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
  108 |     // await expect(page.locator("text=Welcome")).toBeVisible();
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
> 119 |          await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
      |                                                                    ^ Error: expect(locator).toBeVisible() failed
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
  209 |         testdataForfundtransfer.toAccount
  210 |     )
  211 |     await fundtransferpage.transferButtonClick()
  212 |     await page.waitForTimeout(3000)
  213 | 
  214 |       // Verify transfer
  215 |     await expect(page.locator("text=Transfer Complete!")).toBeVisible();
  216 | 
  217 |     // Logout
  218 |     await homepage.clickOnLogoutLink();
  219 | 
```