

export class MyAccount{
    constructor(page){
        this.page = page;
        this.e_mail = page.locator('[placeholder="E-Mail"]')
        this.passW = page.locator('[placeholder="Password"]')
        this.btnLogin = page.locator('(//button[@type="submit"])[1]')
        this.btnReg = page.locator('(//button[@type="submit"])[2]')

    }


    visit = async ()=>{
        await this.page.goto('http://localhost:2221/login?redirect=/my-account')
    }

    inputEmail = async (email)=>{
        await this.e_mail.click()
        await this.e_mail.fill(email)      
    }
    inputPassword = async (pass)=>{
        await this.passW.click()
        await this.passW.fill(pass)      
    }
    logIn = async ()=>{
        await this.btnLogin.click()
    }

    register= async ()=>{
        await this.btnLogin.click()
    }
    signup = async ()=>{
        await this.btnReg.click()
    }
}