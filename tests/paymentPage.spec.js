import {test} from '@playwright/test'
import { PaymentPage } from "../Page_Object/PaymentPage";
import { ProductPage } from '../Page_Object/ProductPage';
import { Navigation } from '../Page_Object/Navigation';


test('activate discount', async ({page}) => {
    const productPage = new ProductPage(page)
    const navigate = new Navigation(page)
    const paymentPage = new PaymentPage(page)

    await productPage.visit()
    
    await productPage.addProduct(0)
    await productPage.addProduct(1)

    await navigate.goToCheckout()

    await paymentPage.activateDiscount()
   
});