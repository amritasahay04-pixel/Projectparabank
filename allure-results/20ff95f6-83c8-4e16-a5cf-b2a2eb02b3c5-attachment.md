# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC.spec.js >> parabank tests >> register
- Location: tests\TC.spec.js:81:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://parabank.parasoft.com/parabank/index.htm
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: parabank.parasoft.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  |   export  class HomePage
  2  |   {
  3  |        constructor(page)
  4  |        {
  5  |             this.page=page
  6  |             this.signInbutton=page.locator("//a[normalize-space()='Register']")
  7  |        }
  8  | 
  9  |        async goTo()
  10 |        {
> 11 |           await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
     |                           ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://parabank.parasoft.com/parabank/index.htm
  12 |        }
  13 | 
  14 |        async clickOnSigninButton()
  15 |        {
  16 |           await this.signInbutton.click()
  17 |        }
  18 |   }
```