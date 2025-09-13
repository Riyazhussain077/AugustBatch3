const { test, expect } = require('@playwright/test')

test('Tables', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) Total Number of rows and columns

    const columns = await table.locator('thead tr th');
    console.log("Number of columns:", await columns.count());
    expect(await columns.count()).toBe(4);


    const rows = await table.locator('tbody tr');
    console.log("Number of rows:", await rows.count());
    expect(await rows.count()).toBe(5);


    // 2) Select check box for product 5

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Wireless Earbuds'
    });

    const checkBox = matchedRows.locator('input').first();
    await checkBox.check();


    // // 3) Select Multiple products by re-usable functions

    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Smartwatch');

    // // 4) Print all the product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }

    // 5) Read all datas from the tables..

    const pages = await page.locator('//ul[@id="pagination"]/li/a');
    console.log("Number of pages in the table:", await pages.count());


    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
    await page.waitForTimeout(2000);
});

async function selectProduct(rows, page, name) {
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    });

    await matchedRows.locator('input').check();

};