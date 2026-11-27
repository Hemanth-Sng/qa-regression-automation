
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
});

test('TC-005: Verify product listing', async ({ page }) => {
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('TC-006: Verify product price sorting', async ({ page }) => {
  await page.getByTestId('product-sort-container').selectOption('lohi');

  const firstProduct = page.locator('.inventory_item_price').first();

  await expect(firstProduct).toHaveText('$7.99');
});

