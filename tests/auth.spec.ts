import { test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com";

test.describe("QualityGuard | Authentication", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("TC-AUTH-001: valid credentials allow login", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
      page.getByText("Products", { exact: true })
    ).toBeVisible();
  });

  test("TC-AUTH-002: invalid password displays an error", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("wrong_password");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Username and password do not match"
    );
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("TC-AUTH-003: empty credentials are rejected", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Username is required"
    );
  });

  test("TC-AUTH-004: locked-out user cannot log in", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("locked_out_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Sorry, this user has been locked out"
    );
  });
});