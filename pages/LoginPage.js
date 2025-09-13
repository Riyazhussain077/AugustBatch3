exports.LoginPage =  class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.userNameInput = '[id="loginusername"]';
        this.passWordInput = '#loginpassword';
        this.loginButton = '//button[text()="Log in"]';
    }

    async gotoLoginButton() {
        await this.page.goto('https://demoblaze.com/')
    }

    async login(userName , passWord) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameInput).fill(userName);
        await this.page.locator(this.passWordInput).fill(passWord);
        await this.page.locator(this.loginButton).click();
    }
}