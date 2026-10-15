import { test, expect } from "@playwright/test";

test.describe("QualityGuard | Checkout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.getByRole("button", { name: "Checkout" }).click();
  });

  test("TC-CHK-001: checkout requires a first name", async ({ page }) => {
    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      "First Name is required"
    );
  });

  test("TC-CHK-002: valid customer details complete an order", async ({ page }) => {
    await page.locator('[data-test="firstName"]').fill("Test");
    await page.locator('[data-test="lastName"]').fill("Customer");
    await page.locator('[data-test="postalCode"]').fill("400001");

    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(
      page.getByText("Sauce Labs Backpack", { exact: true })
    ).toBeVisible();

    await page.getByRole("button", { name: "Finish" }).click();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(
      page.getByText("Thank you for your order!")
    ).toBeVisible();
  });
});