# QualityGuard — Playwright Automation Testing Suite

An end-to-end web application testing project built with **Playwright, TypeScript, and GitHub Actions** to validate authentication, product inventory, shopping cart operations, and checkout workflows.

## Project Overview

QualityGuard is an automated UI testing suite designed to verify the core functionality of a sample e-commerce web application. It uses Playwright to simulate user interactions, validate expected behavior, and identify potential defects through automated test execution.

The project demonstrates practical knowledge of software testing fundamentals, test case design, positive and negative testing, assertions, test reporting, and continuous integration.

**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)

## Objectives

- Automate repetitive manual testing scenarios.
- Validate login functionality using valid and invalid credentials.
- Verify product inventory, sorting, and shopping cart behavior.
- Test checkout form validation and order completion.
- Generate reports and diagnostic artifacts when tests fail.
- Integrate automated tests into a CI workflow using GitHub Actions.

## Technology Stack

| Technology | Purpose |
|---|---|
| TypeScript | Programming language for test scripts |
| Playwright Test | Browser automation and test execution |
| Node.js | JavaScript runtime |
| Chromium | Browser used for automated testing |
| Git and GitHub | Version control and project hosting |
| GitHub Actions | Continuous integration |
| Playwright HTML Reporter | Test result reporting |

## Project Structure

```text
QualityGuard-Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── auth.spec.ts
│   ├── products.spec.ts
│   └── checkout.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Automated Test Coverage

### 1. Authentication Testing — `auth.spec.ts`

- Verify login with valid credentials.
- Verify that an invalid password displays an error.
- Verify that submitting empty credentials is rejected.
- Verify that a locked-out user cannot log in.

### 2. Product and Shopping Cart Testing — `products.spec.ts`

- Verify that the product inventory is displayed correctly.
- Verify that adding a product updates the shopping cart.
- Verify that removing a product empties the cart.
- Verify that products can be sorted by price in ascending order.

### 3. Checkout Testing — `checkout.spec.ts`

- Verify that checkout requires a first name.
- Verify that valid customer details allow checkout to proceed.
- Verify that the selected product appears in the order summary.
- Verify that completing checkout displays the order confirmation.

## Testing Techniques Demonstrated

- **Positive testing:** Valid credentials and customer details.
- **Negative testing:** Invalid credentials and missing required input.
- **Functional testing:** Login, inventory, cart, and checkout workflows.
- **Validation testing:** Error messages and required form fields.
- **End-to-end testing:** Completing a purchase workflow from login to confirmation.
- **Regression support:** Re-running automated tests after application changes.
- **Assertions:** Checking page URLs, visible elements, error messages, product counts, and sorting order.

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) — preferably a current LTS release.
- npm, included with Node.js.
- [Git](https://git-scm.com/) — optional, for cloning and version control.

## Installation

### 1. Clone the repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/QualityGuard-Playwright.git
cd QualityGuard-Playwright
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Install the Chromium browser

```bash
npx playwright install chromium
```

## Running the Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/auth.spec.ts
```

Run tests in Playwright UI mode:

```bash
npx playwright test --ui
```

View the HTML report after a test run:

```bash
npx playwright show-report
```

If you prefer npm scripts, configure them in `package.json` and use the corresponding `npm run` commands.

## Test Reports and Debugging

The Playwright configuration is set up to provide:

- **List reporter:** Displays test progress and results in the terminal.
- **HTML report:** Generates a detailed report in `playwright-report/`.
- **Screenshots:** Captures screenshots when tests fail.
- **Traces:** Retains traces on test failure to help investigate what happened.
- **Videos:** Retains video recordings on test failure.

Generated reports and test artifacts are stored locally and are excluded from Git using `.gitignore`.

## Continuous Integration

The GitHub Actions workflow at `.github/workflows/playwright.yml` is configured to run tests on:

- Pushes to the `main` branch.
- Pull requests targeting `main`.
- Manual workflow dispatches.

The workflow installs dependencies, installs Chromium, executes the Playwright tests, and uploads the HTML report and test artifacts.

After pushing the project to GitHub, check the **Actions** tab to review workflow runs. A successful workflow is evidence that the tests passed in that run's environment.

## Test Data

The test suite uses the public SauceDemo practice application and its standard sample credentials:

- Standard user: `standard_user`
- Locked-out user: `locked_out_user`
- Sample password: `secret_sauce`

These credentials are intended for the practice application, not real accounts.

## Scope and Limitations

- Tests cover selected user journeys rather than every possible application scenario.
- The suite depends on the availability and behavior of the external SauceDemo application.
- The current Playwright configuration runs Chromium; additional browsers can be configured later.
- Automated UI tests complement, rather than replace, exploratory and manual testing.
- Test results should be verified before reporting the suite as passing.

## Future Improvements

- Add cross-browser coverage for Firefox and WebKit.
- Expand boundary-value and equivalence-partitioning scenarios.
- Add more checkout validation and cart edge cases.
- Introduce reusable page objects and shared test fixtures.
- Add test tags and more targeted execution options.
- Improve CI reporting and test result summaries.

## Learning Outcomes

This project provides hands-on practice with browser automation, TypeScript, test case design, assertions, negative testing, debugging, HTML reporting, version control, and continuous integration.

## Author

**Swain Sunil Pereira**

Computer Engineering Student | Aspiring Quality Engineer

- GitHub: [YOUR_GITHUB_PROFILE](https://github.com/YOUR_USERNAME)
- LinkedIn: [YOUR_LINKEDIN_PROFILE](https://www.linkedin.com/)

---

*Built as a practical software testing portfolio project using Playwright and TypeScript.*
