const basePage = require('./basePage')
const homePage = require('./homePage')

class ingresaPage extends basePage {
    constructor() {
        super()
        this.userInput = element(by.id('user_id'))
        this.pwdInput = element(by.id('password'))
        this.submitBtn = element(by.css('button[type="submit"]'))
    }

    setUsername(user) {
        this.userInput.sendKeys(user)
        return this.clickSubmit()
    }

    setPassword(pwd) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.pwdInput), 5000)
        this.pwdInput.sendKeys(pwd)
        this.clickSubmit()
    }

    clickSubmit() {
        this.submitBtn.click()
        return homePage
    }
}

module.exports = new ingresaPage()
