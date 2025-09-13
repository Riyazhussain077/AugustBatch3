const { test, expect } = require('@playwright/test')

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('//input[@id="loginusername"]').fill('pavanol');
    await page.locator('[id="loginpassword"]').fill('test@123');
    await page.click('//button[text()="Log in"]');
});


test.afterAll(async () => {

    await page.click('[id="logout2"]');

});

test('Home Page Test', async () => {

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

});


test('Add Product to Cart', async () => {

    await page.locator('//a[text()="Nexus 6"]').click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async dialog => {

        expect(dialog.message()).toContain('Product added')
        await dialog.accept();
    });

});