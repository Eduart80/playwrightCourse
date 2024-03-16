import {expect, test} from '@playwright/test'
    

test.skip('add to card test', async ({page}) => {
    await page.goto('http://localhost:2221/')
    let addCart = page.locator("(//div[contains(text(),'Add to Basket')])[2]")
    await addCart.waitFor()
    await addCart.click()
    await page.pause(5000)
});

test('add to card and remove', async ({ page }) => {
    await page.goto('http://localhost:2221/');
    await page.locator('div').filter({ hasText: /^499\$Add to Basket$/ }).getByRole('button').click();
    await page.getByRole('link', { name: 'Checkout' }).click();
    await page.getByRole('button', { name: 'Remove from basket' }).click();

    
    const dollars = page.locator("//span[@class='font-bold']")
    await dollars.waitFor()

    let res = await dollars.textContent()
    
    expect(res).toEqual('499$')
  });