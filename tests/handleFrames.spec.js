const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allframes = await page.frames();
    console.log("Number of frames:", allframes.length);

    // Approach 1

    //const frameName = await page.frame('name'); // if name is present, we can use that..
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    // await frame1.fill('input[name="mytext1"]', 'Hello');

    // Approach 2 

    const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]');
    frame1.fill('Hello All');
    await page.waitForTimeout(3000);
});