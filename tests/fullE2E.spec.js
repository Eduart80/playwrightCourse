import {test} from '@playwright/test'
import { ProductPage } from '../Page_Object/ProductPage'
import { Navigation } from '../Page_Object/Navigation'
import { CheckOut } from '../Page_Object/CheckOut'

test('E2E test 1', async ({page})=>{
    const productPage = new ProductPage(page)
    const navigate = new Navigation(page)
    const checkout = new CheckOut(page)

    await productPage.visit()
    await page.mouse.wheel(100,100)
    await productPage.addProduct(0)
    await productPage.addProduct(2)
    await productPage.addProduct(1)

    await navigate.getBascetCount()
    await navigate.goToCheckout()

    await checkout.removeCheapestProduct()
})
