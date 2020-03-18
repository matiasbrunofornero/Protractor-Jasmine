const basePage = require('./basePage')

class ingresaPage extends basePage {
    constructor() {
        super()
        this.userInput = element(by.css('.r-1j3t67a.r-1w50u8q:nth-of-type(1) input'))
        this.pwdInput = element(by.css('.r-1j3t67a.r-1w50u8q:nth-of-type(2) input'))
        this.logInBtn = element(by.xpath(`//div[contains(@class, 'r-417010')]//span[text()='Log in']`))
        this.draft = element(by.className(`DraftEditor-root`))
    }

    setUsername(user) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.userInput), 5000)
        return this.userInput.sendKeys(user)
    }

    setPassword(pwd) {
        this.pwdInput.sendKeys(pwd)
        return this.clickLogIn()
    }

    clickLogIn() {
        this.logInBtn.click()
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.draft), 200000)
        return this
    }
}

module.exports = new ingresaPage()
