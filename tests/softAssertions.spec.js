const { test, expect } = require('@playwright/test')

test('Soft Assertions', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // Hard Assertions

    await expect(page).toHaveURL('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await expect(page.locator('a.navbar-brand')).toBeVisible();

    // Soft Assertions

    await expect.soft(page).toHaveURL('https://demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page.locator('a.navbar-brand')).toBeVisible();



});