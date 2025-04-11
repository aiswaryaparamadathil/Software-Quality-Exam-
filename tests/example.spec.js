// @ts-check
import { test, expect } from '@playwright/test';


/*Login using standard user and perform assertion on username and password
test('Login using standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('User logged in');
  await expect(page.locator('.title')).toContainText('Products'); 

});


//Login using locked_out_user and perform assertion on label
test('Login using locked_out_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('User unable to log in');
  await expect(page.locator('.error-button')).toBeVisible();
});


//To add to cart
test('To add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('User logged in');
  await page.click('#add-to-cart-sauce-labs-backpack');
  console.log('Product added to the cart');
  await page.click('.shopping_cart_link');
  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
  
});*/


//About
test('About', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('User logged in');
  await page.click('#react-burger-menu-btn');
  await page.click('#about_sidebar_link');
  await expect(page).toHaveURL('https://saucelabs.com/');
});


















/*test('Test case 1', async ({browser}) =>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.com");

}); 


// Test case 1: Use Top Navigation to Visit Cart Page
test('Use top nav to visit cart page', async ({ page }) => {
    await page.goto('https://www.automationexercise.com');
    await page.click('a[href="/view_cart"]');
    console.log('Navigated to the cart page using the top navigation');
    await expect(page.locator('.active')).toContainText('Shopping Cart'); //there is a class '.active' which contains the text 'Shopping Cart'
  });


  // Test case2: Test Scroll-to-Top Button
test('Test scroll-to-top button', async ({ page }) => {
    await page.goto('https://www.automationexercise.com');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); //This is a built-in browser function that scrolls the page to a specific position.
    await page.click('#scrollUp');
    console.log('Clicked scroll up button');
    await expect(page).toHaveURL('https://www.automationexercise.com');
  });
  
  
  // Test case 3: Homepage Sliders Auto-Rotate
  test('Homepage sliders auto-rotate', async ({ page }) => {
    await page.goto('https://www.automationexercise.com');
    await page.waitForTimeout(6000); // Wait for the slider to rotate
    console.log('Observed homepage slider auto-rotation');
    await expect(page.locator('#slider-carousel')).toBeVisible();
  });
  
  //Test case 4: Checkout with Empty Cart
  test('Checkout with empty cart', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/view_cart');
    console.log('Checked out with empty cart');
    await expect(page.locator('a[class="btn btn-default check_out"]')).toBeHidden();
  });
  
  
  // Test case 5: Submit Empty Contact Form
  test('Submit empty contact form', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/contact_us');
    await page.click('input[name="submit"]');
    console.log('Submitted empty contact form');
    await expect(page.locator('.status.alert-success')).not.toBeVisible();
  });*/



  //Login using standard user and perform assertion on username and password.
  




