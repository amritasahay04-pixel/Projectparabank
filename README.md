Playwright Automation Framework – Parabank

Project Overview

This is a self-learning automation project developed using Playwright with JavaScript for the Parabank Banking Application.

The framework follows the **Page Object Model (POM)** design pattern to improve code reusability, readability, and maintainability. It automates the end-to-end User Registration workflow and login functionality using reusable page classes and Playwright locators.

Application Under Test:
https://parabank.parasoft.com/parabank/

Tech Stack
 
 Playwright
 JavaScript
 Node.js
 Page Object Model (POM)
 VS Code
 Git & GitHub
 
Project Folder Structure

Projectparabank/
│
├── PageObjectModel/
│   ├── HomePage.js
│   ├── RegistrationPage.js
    ├── LoginPage.js
│
├── tests/
│   └── TC.spec.js
│
├── playwright.config.js
├── package.json
├── README.md
└── playwright-report/
```
 Features Implemented

- Page Object Model (POM)
- Modular Framework Design
- Reusable Page Classes
- Playwright Locator API
- Auto-Waiting
- HTML Report Generation
- End-to-End Registration Automation

Test Scenario Automated
User Registration
User Login

Steps Automated:

1. Launch Parabank application
2. Click on Register
3. Enter user registration details
4. Submit registration form
5. Validate successful registration
6. Enter userid and password 
7. Click on Login
8. Validate successful Login

Installation

Clone the repository:

```bash
git clone https://github.com/amritasahay04-pixel/Projectparabank.git

Navigate to the project:

```bash
cd Projectparabank

Install dependencies:

```bash
npm install

Install Playwright browsers:

```bash
npx playwright install

 Run Tests

Execute all tests:

```bash
npx playwright test

Execute a specific test:

```bash
npx playwright test TC.spec.js

Execute on Chrome:

```bash
npx playwright test --project=chromium

View HTML Report

After execution:
```bash
npx playwright show-report

Framework Highlights

- Uses reusable Page Objects
- Clean separation of locators and business methods
- Easy to maintain and extend
- Supports Playwright auto-waiting
- Scalable framework for adding more test scenarios

 Future Enhancements

- Login Automation
- Fund Transfer
- Bill Payment
- Account Overview Validation
- Data-Driven Testing
- API Testing Integration
- CI/CD Integration using GitHub Actions or Jenkins
- Allure Reporting

 Developed By
**Amrita Sahay**
QA Automation Engineer

**Skills:**

- Selenium WebDriver
- Playwright
- Java
- JavaScript
- Karate Framework
- API Testing
- Postman
- Git
- Maven
- CI/CD

GitHub:
https://github.com/amritasahay04-pixel
