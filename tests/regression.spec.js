
const { test, expect } = require('@playwright/test');

test('TC-009: Complete purchase workflow', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.getByTestId('shopping-cart-link').click();

  await page.getByTestId('checkout').click();

  await page.getByTestId('firstName').fill('QA');
  await page.getByTestId('lastName').fill('Tester');
  await page.getByTestId('postalCode').fill('522616');

  await page.getByTestId('continue').click();
  await page.getByTestId('finish').click();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});

test('TC-010: Verify logout functionality', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('open-menu').click();
  await page.getByTestId('logout-sidebar-link').click();

  await page.getByTestId('user-name').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await page.getByTestId('react-burger-menu-btn').click();

  await page.getByTestId('logout-sidebar-link').click();

  await expect(page.getByTestId('login-button')).toBeVisible();
});

