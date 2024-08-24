const { test, expect } = require('@playwright/test');

test('First Playwright Test', async ({ browser, page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('First Playwright Test new', async ({ browser, page }) => {
    await page.goto('https://www.youtube.com');
  
  });

  

  test.only('Browser Testing', async ({ browser, page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await page.title())
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
  
  });

