const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/')

    // Login Page

    await page.locator('#login2').click();
    await page.locator('//input[@id="loginusername"]').fill('pavanol');
    await page.locator('[id="loginpassword"]').fill('test@123');
    await page.click('//button[text()="Log in"]');

    // Home Page

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.click('[id="logout2"]');
});



test('Add Product to Cart', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    // Login Page

    await page.locator('#login2').click();
    await page.locator('//input[@id="loginusername"]').fill('pavanol');
    await page.locator('[id="loginpassword"]').fill('test@123');
    await page.click('//button[text()="Log in"]');

    // Add product to cart

    await page.locator('//a[text()="Nexus 6"]').click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async dialog => {

        expect(dialog.message()).toContain('Product added')
        await dialog.accept();
    });

    // Logout Page

    await page.click('[id="logout2"]');


});