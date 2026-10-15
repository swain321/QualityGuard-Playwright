import { test, expect } from "@playwright/test";

test.describe("QualityGuard | Products and Cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test("TC-PROD-001: product inventory is displayed", async ({ page }) => {
    await expect(
      page.getByText("Sauce Labs Backpack", { exact: true })
    ).toBeVisible();

    await expect(
      page.locator(".inventory_item")
    ).toHaveCount(6);
  });

  test("TC-CART-001: adding a product updates the cart", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText("1");

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(
      page.getByText("Sauce Labs Backpack", { exact: true })
    ).toBeVisible();
  });

  test("TC-CART-002: removing a product empties the cart", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveCount(0);

    await expect(
      page.getByText("Sauce Labs Backpack", { exact: true })
    ).toHaveCount(0);
  });

  test("TC-PROD-002: products can be sorted by price ascending", async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]')
      .selectOption("lohi");

    const prices = await page.locator(".inventory_item_price").allTextContents();
    const numericPrices = prices.map((price) =>
      Number(price.replace("$", ""))
    );

    expect(numericPrices.length).toBeGreaterThan(0);
    expect(numericPrices).toEqual(
      [...numericPrices].sort((a, b) => a - b)
    );
  });
});