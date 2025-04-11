// @ts-check
import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/



//Login using standard user and perform assertion on username and password
test('Login using standard user', async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.fill(input[#user-name], 'standard_user');
  await page.fill('input[#password]', 'secret_sauce');
  console.log('User logged in to the application');
  await expect(page.locator('.title')).toContainText('Products'); //there is a class '.title' which contains the text 'Products'
});