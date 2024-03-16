export class Navigation{

    constructor(page){
        this.page = page;
        this.bascetCount = page.locator('[data-qa="header-basket-count"]')
        this.checkoutLink = page.getByRole('link', {name: 'Checkout'})
    }

    getBascetCount = async ()=>{
        // return text
        const text = await this.bascetCount.innerText()
        let inNumber = parseInt(text)
        console.log(typeof(inNumber) , inNumber);
    }

    goToCheckout = async ()=>{
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
    }
}