const { test, expect } = require('@playwright/test')

test('Handle DropDown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from the dropdown..

    // await page.locator('#country').selectOption({label : 'Japan'}); // label in visibile text
    // await page.locator('#country').selectOption('India'); // visible text
    // await page.locator('#country').selectOption({value: "usa"}) // by using value..
    // await page.locator('#country').selectOption({ index: 3 }); // by using index
    // await page.selectOption('#country', 'Canada'); // by text


    // Assertions..

    // 1) check number of options in dropdown    - method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2) check number of options in dropdown    - method 2

    // const options = await page.$$('#country option');
    // console.log("Number of options:" , options.length);
    // await expect(options.length).toBe(10);

    // 3) Check presence of value in the dropdown    - method 1

    // const options = await page.locator('#country').textContent();
    // await expect(options.includes('Brazil')).toBeTruthy();
    // await expect(options.includes('Saudi')).toBeFalsy();


    // 4) Check presence of value in the dropdown    - method 1 - using loop


    // const options = await page.$$('#country option');

    // for(const option of options) {
    //     console.log(await option.textContent());
    //     let value = await option.textContent();
    //     if(value.includes(' Australia')) {
    //         break;
    //     }
        
    // };

    // 5) select option from the dropdown using loop

     const options = await page.$$('#country option');

     for(const option of options) {
        let value = await option.textContent();
        if(value.includes('japan')) {
            await page.selectOption('#country' , value);
            break;
        }
     };


    


    






    await page.waitForTimeout(1000);

});