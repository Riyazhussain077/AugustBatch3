exports.HomePage =
    class HomePage {

        constructor(page) {
            this.page = page;
            this.productDetails = '//div[@id="tbodyid"]//div//h4//a';
            this.addToCart = '//a[text()="Add to cart"]';
            this.cart = '#cartur';
        }
        async addProductToCart(productName) {
            const productLists = await this.page.locator(this.productDetails);
            for (const product of productLists) {
                if (productName === await product.textContent()) {
                    await product.click();
                    break;
                }
            }
            await this.page.on('dialog', async dialog => {
                if (dialog.message().includes('Product added.')) {
                    await dialog.accept();
                }
            })
            await this.page.locator(this.addToCart).click();
        }

        async goToCart() {
            await this.page.locator(this.cart).click();
        }
    }