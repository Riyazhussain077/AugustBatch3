const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // Click on login button    -> CSS

    // await page.locator('#login2').click();
    await page.click('#login2');

    // Provide UserName           -> CSS

    await page.locator('#loginusername').fill('pavanol');
    //await page.fill('#loginusername' , 'pavanol');


    // Provide password            -> CSS

    // await page.locator('[id="loginpassword"]').fill('test@123');
    await page.fill('[id="loginpassword"]', 'test@123');

    // click on login button         -> xpath

    //await page.locator('//button[text()="Log in"]').click();
    await page.click("//button[text()='Log in']");

    // verify the logout link presence

    const logoutlink = await page.locator('//a[contains(@id,"logout2")]');
    await expect(logoutlink).toBeVisible();

    await page.waitForTimeout(3000);

});