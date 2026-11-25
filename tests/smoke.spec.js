
const { test, expect } = require('@playwright/test');

test('TC-001: Verify application availability', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Swag Labs/);

  await expect(page.locator('.login_logo')).toBeVisible();

  await expect(page.getByTestId('login-button')).toBeVisible();
});

