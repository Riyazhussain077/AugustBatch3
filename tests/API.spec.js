const {test,expect} = require ('@playwright/test');

// test('Mock GET/POST response' , async ({page}) => {

//     // 1) Mock the API

//     await page.route('https://jsonplaceholder.typicode.com/posts' , async route => {
//         await route.fulfill({
//             status : 200,
//             contentType : 'application/json',
//             body : JSON.stringify([{ title : 'Mocked Post' , id : 1}]),

//         });
//     });

//     // 2) Open the page that calls the API

//     await page.goto('https://jsonplaceholder.typicode.com/posts');

//     // 3) Validate the fake data..
//     const text = await page.locator('body').innerText();
//     await expect(text).toContain('Mocked Post');
// });


// 1) GET    -> Fetch the all posts

test('GET' , async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts fetched:" , body.length);
    expect(body.length).toBeGreaterThan(0);
    
});

// 2) POST  -> Create a new post with new data

test('POST' , async ({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts' , {
        data : {
            title : 'QA Automation with Playwright',
            body : "This post is Created to teach API Automation",
            userId : 171 // you can set any custom user ID
        }
    });

    expect(response.status()).toBe(201); //created
    const body = await response.json();
    console.log("Created post Id:" , body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('QA Automation with Playwright');
    
});

// 3) PUT  -> Update an existing post with the new data

test('PUT' , async ({request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1' , {
        data : {
            id : 1,
            title : 'API Testing With APIREQUESTCONTEXT',
            body : 'This was updated by the creator',
            userId : 171
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("Updated post Title:" , body.title);
    expect(body.title).toBe('API Testing With APIREQUESTCONTEXT');
    
});

// 4) DELETE     -> Delete the post

test('DELETE' , async ({request}) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("Post delted successfully");
    
});