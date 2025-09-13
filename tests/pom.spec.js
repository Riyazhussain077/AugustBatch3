const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test('POM', async ({ page }) => {

    // Log in 
    const login = new LoginPage(page);
    await login.gotoLoginButton();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(2000);

    // Home Page

    const home = new HomePage(page);
    await home.addProductToCart('Nokia lumia 1520');
    await page.waitForTimeout(2000);
    await home.goToCart();

    // Cart Page

    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProductInCart('Nokia lumia 1520');
    await expect(status).toBe(true);

});