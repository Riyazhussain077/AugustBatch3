const { test, expect } = require('@playwright/test')

test('Alert with OK', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler..

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(2000);
});


test('Confirm Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler..

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using ok button
        //await dialog.dismiss();// close by using cancel
    });

    await page.click('#confirmBtn');
    await expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(2000);
});

test.only('Prompt Alert' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler..

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Vignesh'); // close by using ok button
        //await dialog.dismiss();// close by using cancel
    });

    await page.click('[id="promptBtn"]');
    await expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello Vignesh! How are you today?');
    await page.waitForTimeout(2000);
});


