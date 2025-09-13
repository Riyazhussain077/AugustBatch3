const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('//input[@id="datepicker"]' , '09/05/2025');


    // Date pickers

    const year = '1989'
    const month = 'October'
    const date = '05'

    await page.click('#datepicker');  // opens calender

    while (true) {
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();


        if (currentyear == year && currentMonth == month) {
            break;
        }

        //await page.locator('//a[@title="Next"]').click(); // next
        await page.locator('//a[@title="Prev"]').click(); // past
    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

   // Data selection using loop

    // for(const dt of dates) {
    //     if(await dt.textContent() == date){
    //         await dt.click();
    //         break;
    //     }
    // }

    // Data selection - without loop

    //await page.click('//a[@class="ui-state-default"][text()="15"]');

    await page.click(`//a[@class="ui-state-default"][text()='${date}']`);


    await page.waitForTimeout(2000);
});