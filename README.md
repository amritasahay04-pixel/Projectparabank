# Playwright Automation Framework – Parabank

## Project Overview
This is a self-learning automation project developed using **Playwright** with **JavaScript** for the Parabank Banking Application. The framework follows the **Page Object Model (POM)** design pattern to improve code reusability, readability, and maintainability. It automates the end-to-end **User Registration**, **Login**, and **Fund Transfer** workflows using reusable page classes and Playwright locators.

**Application Under Test:** https://parabank.parasoft.com/parabank/

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Allure Reporting
- GitHub Actions (CI)
- VS Code
- Git & GitHub

## Project Folder Structure
```
Projectparabank/
│
├── .github/workflows/       # CI pipeline (GitHub Actions)
├── pageobjects/
│   ├── HomePage.js
│   ├── RegistrationPage.js
│   ├── LoginPage.js
│   └── FundTransferPage.js
├── tests/
│   ├── TC.spec.js
│   └── fundTransfer.spec.js
├── fixtures/
├── utils/
├── allure-results/          # Raw Allure test result files
├── allure-report/           # Generated Allure HTML report
├── playwright.config.js
├── package.json
└── README.md
```

## Features Implemented
- Page Object Model (POM)
- Modular framework design
- Reusable page classes
- Playwright Locator API with auto-waiting
- Playwright HTML report generation
- Allure report generation
- CI pipeline via GitHub Actions
- End-to-end registration, login, and fund transfer automation

## Test Scenarios Automated
1. Launch Parabank application
2. Click on Register
3. Enter user registration details
4. Submit registration form
5. Validate successful registration
6. Enter user ID and password
7. Click on Login
8. Validate successful login
9. Navigate to Fund Transfer page
10. Enter transfer amount and select source/destination accounts
11. Submit the transfer
12. Validate successful transfer confirmation

## Installation

Clone the repository:
```bash
git clone https://github.com/amritasahay04-pixel/Projectparabank.git
```

Navigate to the project:
```bash
cd Projectparabank
```

Install dependencies:
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Execute all tests:
```bash
npx playwright test
```

Execute a specific test file:
```bash
npx playwright test TC.spec.js
```

Execute on Chrome only:
```bash
npx playwright test --project=chromium
```

## Test Reports

This project generates two types of reports:

### 1. Playwright HTML Report
Playwright's built-in HTML report shows a full run summary, step-by-step traces, screenshots, and videos on failure.

View it after a test run:
```bash
npx playwright show-report
```

### 2. Allure Report
Allure produces a richer, dashboard-style report — useful for tracking trends, categorizing failures, and sharing results with a team.

Generate and open the Allure report after a test run:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

> Note: requires the Allure command line tool (`npm install -g allure-commandline`) and the `allure-playwright` reporter configured in `playwright.config.js`.

## Continuous Integration
Tests run automatically via **GitHub Actions** on every push (see `.github/workflows/`), keeping the suite continuously validated without manual execution.

## Framework Highlights
- Clean separation of locators and business logic
- Easy to maintain and extend
- Supports Playwright auto-waiting
- Scalable structure for adding new test scenarios
- Dual reporting (Playwright HTML + Allure) for both quick debugging and shareable summaries

## Future Enhancements
- Bill Payment automation
- Account Overview validation
- Data-driven testing
- API testing integration
- Cross-browser execution in CI

## Developed By
**Amrita Sahay**
QA Automation Engineer

**Skills:** Selenium WebDriver · Playwright · Java · JavaScript · Karate Framework · API Testing · Postman · Git · Maven · CI/CD

GitHub: https://github.com/amritasahay04-pixel
