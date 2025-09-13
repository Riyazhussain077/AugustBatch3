const { test, expect } = require('@playwright/test');

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select Multiple options from the dropdown..

    //await page.locator('#colors').selectOption(['Red' , 'White' , 'Blue']);
    await page.selectOption('#colors', ['Red', 'Yellow', 'Green']);

    // Assertions

    // 1) check number of options in dropdown

    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    // 2) check number of options in dropdown using javascript array..

    const options = await page.$$('#colors option');
    console.log("Number of options:", options.length);
    await expect(options.length).toBe(7);

    // 3) check presence of value in the dropdown

    const content = await page.locator('//select[@id="colors"]').textContent();
    await expect(content.includes('Yellow')).toBeTruthy();

    await expect(content.includes('Orange')).toBeFalsy();

    await page.waitForTimeout(2000);
});