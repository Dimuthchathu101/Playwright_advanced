const { test, expect } = require('@playwright/test');


test.only('Browser Testing', async ({ browser }) => {
    
  const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("#username")
    const cardLocator = page.locator('.card-body a')

    console.log(await page.title())
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

    // form fill
    await userName.fill("rahulshettyacademy")
    await page.locator("[type='password']").fill("learning")
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

    console.log(await cardLocator.nth(0).textContent())
    const cardAll = await cardLocator.allTextContents()
    console.log(cardAll)
  
  });
