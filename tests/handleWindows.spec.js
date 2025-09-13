const { test, expect, chromium } = require('@playwright/test')

test('Handle Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    const allPages = context.pages();
    console.log("Number of pages Created:", allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveURL('https://www.orangehrm.com/');

    await page1.waitForTimeout(3000);

});

test.only('Handle Multiple Windows/Pages', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

    const newpage = await pagePromise;
    await expect(newpage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    await page1.waitForTimeout(2000);
    await newpage.waitForTimeout(3000);

});