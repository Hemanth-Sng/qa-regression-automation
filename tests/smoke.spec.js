
const { test, expect } = require('@playwright/test');

test('TC-001: Verify application availability', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await expect(page).toHaveTitle(/Swag Labs/);

  await expect(page.locator('.login_logo')).toBeVisible();

  await expect(page.getByTestId('login-button')).toBeVisible();
});

