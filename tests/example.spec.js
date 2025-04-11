// @ts-check
import { test, expect } from '@playwright/test';


Login using standard user and perform assertion on username and password
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
  
});


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



















