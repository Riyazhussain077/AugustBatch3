const { test, expect } = require('@playwright/test')

test('Test 1@swiggy', async ({ page }) => {

    console.log("This is Tag Concept 1");

});

test('Test 2@zomato', async ({ page }) => {

    console.log("This is Tag Concept 2");

});

test('Test 3@swiggy', async ({ page }) => {

    console.log("This is Tag Concept 3");

});

test('Test 4@zomato', async ({ page }) => {

    console.log("This is Tag Concept 4");

});

test('Test 5@swiggy@zomato', async ({ page }) => {
    console.log("This is Tag Concept 5");
});