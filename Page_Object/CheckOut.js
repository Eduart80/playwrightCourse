import {expect} from '@playwright/test'

export class CheckOut {
  constructor(page) {
    this.page = page;
    this.basketCart = page.locator('[data-qa="basket-card"]');
    this.basketPrice = page.locator('[data-qa="basket-item-price"]');
    this.basketRemoval = page.locator('[data-qa="basket-card-remove-item"]');
  }
  removeCheapestProduct = async () => {
    await this.basketCart.first().waitFor();
    const bsketCountNumber = await this.basketCart.count()
    await this.basketPrice.first().waitFor();
    const allPrice = await this.basketPrice.allInnerTexts();
    let listArray = [];
    allPrice.forEach((price) => {
      listArray.push(parseInt(price));
    });
    console.log(listArray);
    const smallNumber = Math.min(...listArray);
    const smallPriceIndx = listArray.indexOf(smallNumber);
    const removeCard = this.basketRemoval.nth(smallPriceIndx);
    await removeCard.waitFor();
    await removeCard.click();
    await expect(this.basketCart).toHaveCount(bsketCountNumber - 1);
  };
}
