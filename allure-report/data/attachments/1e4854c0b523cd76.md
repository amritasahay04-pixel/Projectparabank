# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> register
- Location: tests\TC.spec.js:81:5

# Error details

```
TypeError: page.getByAttribute is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for parabank.parasoft.com" [ref=e5]
        - heading "parabank.parasoft.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e13]:
        - text: "Ray ID:"
        - code [ref=e14]: a1b00921fcba8cf7
      - generic [ref=e15]:
        - generic [ref=e16]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e17] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e19] [cursor=pointer]:
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
  79  | // test.describe.serial('parabank tests',()=>
  80  | // {
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
  105 |     //Assertions
  106 |     expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  107 |     //expect(page.getByText('Welcome ' + testdataForregistration.firstname)).toBeVisible()
> 108 |     expect(page.getByAttribute('Your account was created successfully. You are now logged in.')).toBeVisible()
      |                 ^ TypeError: page.getByAttribute is not a function
  109 |     await page.waitForTimeout(2000)
  110 |       
  111 | })
  112 | 
  113 | test('login',async({page,testdataForregistration})=>
  114 | {
  115 |     const pageManager = new poManager(page)
  116 |     const homepage = pageManager.getHomePage()
  117 |     await homepage.goTo()
  118 |     const loginpage = pageManager.getLoginPage()
  119 |     await loginpage.loginToApplication
  120 |     (
  121 |         testdataForregistration.username,
  122 |         testdataForregistration.password
  123 |     )
  124 |     await page.waitForTimeout(3000)
  125 |     //Assertions
  126 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
  127 | }
  128 | )
  129 | //})
```