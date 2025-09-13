const { test, expect } = require('@playwright/test')

test('Auto Suggestion', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('#autocomplete').fill('in');

    await page.waitForSelector('//li[contains(@class,"ui-menu-item")]/div');
    const countryOptions = await page.$$('//li[contains(@class,"ui-menu-item")]/div');

    for (const option of countryOptions) {
        const value = await option.textContent();
         console.log(value);
        if (value.includes('Philippines')) {
            await option.click();
            break;
        }

    }
    await page.waitForTimeout(2000);

});