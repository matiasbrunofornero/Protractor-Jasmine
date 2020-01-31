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
        return this.userInput.sendKeys(user)
    }

    setPassword(pwd) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.pwdInput), 5000)
        return this.pwdInput.sendKeys(pwd)
    }

    clickSubmit() {
        this.submitBtn.click()
        return homePage
    }
}

module.exports = new ingresaPage();
