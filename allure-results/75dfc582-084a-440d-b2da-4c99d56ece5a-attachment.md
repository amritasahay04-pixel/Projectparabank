# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> parabank tests >> register and logout
- Location: tests\TC.spec.js:134:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /log out/i }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for parabank.parasoft.com" [ref=e5]
        - heading "parabank.parasoft.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: a1d956db2de23a86
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e20] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e22] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  |   export  class HomePage
  2  |   {
  3  |        constructor(page)
  4  |        {
  5  |             this.page=page
  6  |             this.signInbutton=page.locator("//a[normalize-space()='Register']")
  7  |             this.logoutLink=page.getByRole('link', { name: /log out/i }).first()
  8  |        }
  9  | 
  10 |        async goTo()
  11 |        {
  12 |           await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
  13 |        }
  14 | 
  15 |        async clickOnSigninButton()
  16 |        {
  17 |           await this.signInbutton.click()
  18 |        }
  19 | 
  20 |        async clickOnLogoutLink()
  21 |        {
> 22 |           await this.logoutLink.click()
     |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |        }
  24 |   }
```