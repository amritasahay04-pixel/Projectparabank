#  Playwright Automation Framework – ParaBank Application

# Project Overview

This project is a Playwright Automation Framework developed using **JavaScript** and the **Page Object Model (POM)** design pattern for automating the ParaBank demo banking application.

The framework demonstrates real-world automation concepts including reusable page objects, Page Object Manager, custom fixtures, data-driven testing, reporting, GitHub integration, GitHub Copilot, MCP Server integration, and Jenkins Continuous Integration.

---

#  Application Under Test

https://parabank.parasoft.com/parabank/

---

# Features Automated

- ✅ User Login
- ✅ User Registration
- ✅ Open New Savings Account
- ✅ Fund Transfer
- ✅ Logout
- ✅ URL Validation
- ✅ UI Assertions
- ✅ Cross Browser Execution

---

# Tech Stack

| Tool | Usage |
|------|------|
| Playwright | UI Automation |
| JavaScript | Programming Language |
| Node.js | Runtime Environment |
| Visual Studio Code | IDE |
| Git | Version Control |
| GitHub | Source Code Repository |
| Jenkins | Continuous Integration (CI) |
| GitHub Copilot | AI-assisted code completion |
| MCP Server | Playwright debugging and automation support |
| HTML Reporter | Test Execution Report |
| Allure Report | Advanced Test Reporting |

---

# 📁 Framework Structure

```
Projectparabank
│
├── pageobjects
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   ├── FundTransferPage.js
│   ├── OpenAccountPage.js
│   └── poManager.js
│
├── fixtures
│   └── testfixture.js
│
├── tests
│   ├── TC.spec.js
│   ├── Login.spec.js
│   ├── FundTransfer.spec.js
│   └── OpenAccount.spec.js
│
├── playwright-report
├── allure-results
├── test-results
├── playwright.config.js
├── package.json
└── README.md
```

---

# 📌 Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

Each web page is represented by a separate JavaScript class that contains:

- Locators
- Page methods
- Business actions

This improves:

- Code Reusability
- Maintainability
- Scalability
- Readability

---

# 📌 Page Object Manager

A dedicated **poManager.js** class is used to initialize and manage all page objects from a single location.

Benefits:

- Centralized object creation
- Cleaner test scripts
- Better maintainability
- Reduced object initialization

---

# 📌 Custom Fixtures

Playwright custom fixtures are used for:

- Shared test setup
- Test data management
- Reusable objects
- Cleaner test cases

---

# 📌 Reporting

The framework supports:

- Playwright HTML Reports
- Allure Reports
- Screenshots on failure
- Video Recording
- Trace Files

---

# 📌 Cross Browser Testing

Tests can be executed on:

- Google Chrome
- Firefox
- WebKit (Safari)

---

# 📌 Continuous Integration

The project is integrated with **Jenkins** for Continuous Integration.

Typical Jenkins pipeline:

- Pull latest code from GitHub
- Install project dependencies
- Execute Playwright test suite
- Generate HTML and Allure Reports
- Publish execution results

---

# 📌 GitHub Copilot Integration

GitHub Copilot was used as an AI coding assistant to improve development productivity by:

- Suggesting code
- Generating boilerplate
- Speeding up implementation
- Assisting with Playwright scripting

---

# 📌 MCP Server Integration

The project is connected with the Playwright MCP Server for:

- Browser automation support
- Test debugging
- Interactive Playwright development
- Improved automation workflow

---

# 📌 How to Run the Project

Clone the repository

```bash
git clone https://github.com/amritasahay04-pixel/Projectparabank.git
```

Navigate to project

```bash
cd Projectparabank
```

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run Chrome tests

```bash
npx playwright test --project=chrome
```

Open HTML Report

```bash
npx playwright show-report
```

Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

Open Allure Report

```bash
allure open allure-report
```

---

# 📌 Key Playwright Concepts Used

- Page Object Model
- Page Object Manager
- Custom Fixtures
- Locators
- Assertions
- Auto Waiting
- Async / Await
- Cross Browser Testing
- Trace Viewer
- Screenshots
- Video Recording
- HTML Reporting
- Allure Reporting

---

# 📌 Repository

GitHub Repository

👉 https://github.com/amritasahay04-pixel/Projectparabank

---

# 👩‍💻 Developed By

**Amrita Sahay**

Software Test Engineer

Skills:

- Manual Testing
- Playwright
- JavaScript
- Selenium
- API Testing
- Jenkins
- Git
- GitHub
- SQL
