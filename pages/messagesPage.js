const basePage = require('./basePage')

class messagesPage extends basePage {
    constructor() {
        super()
        this.newMsgBtn = element(by.xpath(`//span[text()='New message']`))
        this.msgPopup = element(by.css(`[aria-labelledby='modal-header']`))
        this.msgInput = element(by.css(`[data-testid='dmComposerTextInput']`))
    }

    clickNewMessage() {
        return this.newMsgBtn.click()
    }

    setMessage() {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.msgInput), 5000)
        return this.msgInput.sendKeys('asldkjadjqwioeuqioeuoqiuweoiuqowieu918u39182739817293719823798123719823iashdkahjdkahskjd')
    }
}

module.exports = new messagesPage()
