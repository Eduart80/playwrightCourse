import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://translate.google.com/');
  await page.getByLabel('Source text', { exact: true }).click();
  await page.getByLabel('Source text', { exact: true }).fill('play wright framework');
  await page.getByLabel('Listen to source text').click();
});