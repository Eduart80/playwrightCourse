import {test} from '@playwright/test'
import { ProductPage } from '../Page_Object/ProductPage'
import { Navigation } from '../Page_Object/Navigation'
import { CheckOut } from '../Page_Object/CheckOut'

test('drop down selection', async ({page})=>{
    const productPage = new ProductPage(page)

    await productPage.visit()
    await productPage.sortByPrice()
})
