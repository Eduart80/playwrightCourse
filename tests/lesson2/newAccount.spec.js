import {expect, test} from '@playwright/test'
import { MyAccount } from '../../PageObjectModel/MyAccountPage'
import {getToken} from '../../apiCalls/getLogToken.js'

test('create new user', async ({page}) => {
    const myaccount = new MyAccount(page)
    
    await myaccount.visit()
    await myaccount.inputEmail('test@test.com')
    await myaccount.inputPassword('1234')
    await myaccount.logIn()
});
test('get user token', async ({page}) => {
    const token = await getToken()
    expect(token).toBeTruthy
});
test.only('Mock network test, Get call', async ({page}) => {
    const token = await getToken()
    await page.route('**/api/user**', async (route, request)=>{
       await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify( {message: 'Playwright mock'})
       })
    })

    const myAccount = new MyAccount(page)
    await myAccount.visit()
    await page.pause()
    await page.evaluate(([getToken])=>{
        document.cookie="token="+getToken
    },[token])
    await myAccount.visit()
    await page.waitForTimeout(5000)
    await page.pause()

})