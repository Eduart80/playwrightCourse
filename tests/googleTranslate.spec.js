import {test} from '@playwright/test'

test('google translate', async ({page}) => {
    await page.goto('https://translate.google.com/');
  await page.getByLabel('Source text', { exact: true }).click();
  await page.keyboard.type('Play Wright Framework', {delay:1000})
  //await page.getByLabel('Source text', { exact: true }).fill('play wright framework');
  await page.getByLabel('Listen to source text').click();
  await page.waitForTimeout(5000)
});