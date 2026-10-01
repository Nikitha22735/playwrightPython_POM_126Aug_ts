import { test, expect } from '@playwright/test';

test('has title @smoke', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", {timeout: 80000})

});


test('has title 2 @smoke', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
//   await expect(page).toHaveTitle("test")
  await expect(page).not.toHaveTitle("test")
  await expect(page.locator('[aria-label="Amazon.in"]')).toBeVisible()

});