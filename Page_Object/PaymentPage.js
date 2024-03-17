export class PaymentPage{
    constructor(page){
        this.page = page;

        this.discountCode = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountInput = page.locator('[data-qa="discount-code-input"]')

    }
    activateDiscount = async ()=>{
        this.discountCode.waitFor()
        const discNumber = await this.discountCode.innerText()
        this.discountCode.waitFor()
        await this.discountInput.fill(discNumber)
        await expect(this.discountInput).toHaveValue(discNumber)
    }
}
/**
 * test@test.com
 * 1234
 * Tom
 * Jerry
 * 123 Main st
 * 11230
 * NY
 * US
 */