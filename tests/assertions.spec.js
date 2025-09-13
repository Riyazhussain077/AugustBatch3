//1) expect(page).toHaveURL()                  page has url
//2) expect(page).toHaveTitle()                page has title
//3) expect(locator).toBeVisible               element is visible
//4) expect(locator).toBeEnabled               control is enabled
//5) expect(locator).toBeChecked               Radio/checkbox is checked
//6) expect(locator).toHaveAttribute           element has attribute
//7) expect(locator).toHaveText()              element has text
//8) expect(locator).toContainText()           element contain text
//9) expect(locator).toHaveValue(value)        input has a value..
//10)expect(locator).toHaveCount()            list of elements has given length


const { test, expect } = require('@playwright/test')

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()                  page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()                page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible               element is visible

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4) expect(locator).toBeEnabled               control is enabled

    const searchBox = await page.locator('input#small-searchterms');
    await expect(searchBox).toBeEnabled();

    //5) expect(locator).toBeChecked               Radio/checkbox is checked

    // Radio Button
    const radioBtn = await page.locator('#gender-female');
    await radioBtn.check();
    await expect(radioBtn).toBeChecked();

    // CheckBox
    const checkBox = await page.locator('input#Newsletter');
    await expect(checkBox).toBeChecked();

    //6) expect(locator).toHaveAttribute           element has attribute

    const regBtn = await page.locator('#register-button');
    await expect(regBtn).toHaveAttribute("type", "submit");

    //7) expect(locator).toHaveText()              element has text   (full text)

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    //8) expect(locator).toContainText()           element contain text  (partial text)

    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    //9) expect(locator).toHaveValue(value)        input has a value..

    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');


    //10)expect(locator).toHaveCount()            list of elements has given length

    const options = await page.locator('#customerCurrency option');
    await expect(options).toHaveCount(2);

    await page.waitForTimeout(3000);

});
