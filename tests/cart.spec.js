
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
});

test('TC-007: Add product to cart', async ({ page }) => {
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.getByTestId('shopping-cart-link').click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('TC-008: Remove product from cart', async ({ page }) => {
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  await page.getByTestId('remove-sauce-labs-backpack').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

