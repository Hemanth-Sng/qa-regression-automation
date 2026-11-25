
const { test, expect } = require('@playwright/test');

test('TC-002: Login with valid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('user-name').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('TC-003: Login with invalid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('user-name').fill('wrong_user');
  await page.getByTestId('password').fill('wrong_password');
  await page.getByTestId('login-button').click();

  await expect(page.locator('[data-test="error"]'))
    .toBeVisible();
});

test('TC-004: Verify locked user login', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('user-name').fill('locked_out_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('locked out');
});

