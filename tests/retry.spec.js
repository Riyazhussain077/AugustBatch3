const { test, expect } = require('@playwright/test')

test('Mouse Hover', async ({ page }) => {


    await page.goto('https://www.amazon.in/');

    const hello = await page.locator('//span[text()="Hello, sign in"]');
    const account = await page.locator('//span[contains(text(),"Your Acc")]');

    // Mouse Hover

    await hello.hover();
    await page.waitForTimeout(2000);
    await account.click();
    await page.waitForTimeout(2000);


});