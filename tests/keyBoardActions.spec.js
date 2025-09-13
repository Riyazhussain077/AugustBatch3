const { test, expect } = require('@playwright/test')


test('Keyboard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    //await page.locator('textarea[name="text1"]').fill('Good Morning!..');
    await page.fill('textarea[name="text1"]', 'Good Morning!..');

    // Ctrl + A 

    await page.keyboard.press('Control+A');

    // Ctrl + C

    await page.keyboard.press('Control+C');

    // TAB

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl + V

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(2000);
});