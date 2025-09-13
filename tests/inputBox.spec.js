const { test, expect } = require('@playwright/test')

test('Handle InputBox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // InputBox 

    await expect(await page.locator('//input[@id="name"]')).toBeVisible();
    await expect(await page.locator('//input[@id="name"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="name"]')).toBeEnabled();
    await expect(await page.locator('//input[@id="name"]')).toBeEditable();

    //await page.locator('//input[@id="name"]').fill('Vignesh');
    await page.fill('//input[@id="name"]', 'vignesh');


    await page.waitForTimeout(3000); // pausing code..

});