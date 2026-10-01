import { test, expect } from '@playwright/test';
import { homePage } from '../pages/home';

test('valdiate the UI of Home Page', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
    let homePageObj = new homePage(page)
    await homePageObj.validateTheVisibilityOfSearchbar()
  await homePageObj.validateAccntsNdListText()
  await expect(page.getByRole('searchbox', { name: 'Search Amazon.in' })).toBeVisible();
});