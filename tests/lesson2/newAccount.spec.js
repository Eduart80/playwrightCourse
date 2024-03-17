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
test.only('get user token', async ({page}) => {
    const token = await getToken()
    expect(token).toBeTruthy
});