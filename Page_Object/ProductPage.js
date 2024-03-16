import {expect} from '@playwright/test'

export class ProductPage {
    // @param {import('@playwright/test').Page} page
    constructor(page){
        this.page=page;
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.sortDropDown = page.locator('[data-qa="sort-dropdown"]')
    }

    visit = async ()=>{
        await this.page.goto('http://localhost:2221/')
    }
    addProduct = async (index)=>{
        await this.addButtons.nth(index).waitFor()
        await expect(await this.addButtons.nth(index)).toHaveText('Add to Basket')
        await this.addButtons.nth(index).click()
        await expect(await this.addButtons.nth(index)).toHaveText('Remove from Basket')
    }

    sortByPrice = async ()=>{
        await this.sortDropDown.waitFor()
        await this.sortDropDown.selectOption('price-asc')
    }
    
}