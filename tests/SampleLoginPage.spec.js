const { test, expect } = require('@playwright/test');

test.only('Browser Testing', async ({ browser }) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await page.title())
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

    // form fill
    await page.locator("#username").fill("dimuthcbandara")
    await page.locator("[type='password']").fill("dimuthchathu101")
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
  
  });
