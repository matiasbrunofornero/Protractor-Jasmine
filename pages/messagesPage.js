const basePage = require('./basePage')

class messagesPage extends basePage {
    constructor() {
        super()
        this.newMsgBtn = element(by.xpath(`//span[text()='New message']`))
        this.msgPopup = element(by.css(`[aria-labelledby='modal-header']`))
        this.msgInput = element(by.css(`[data-testid='dmComposerTextInput']`))
        this.sendBtn = element(by.css(`[data-testid='dmComposerSendButton']`))
        this.lastMessage = element(by.css(`[data-testid='conversation'] .r-bnwqim > span`))
    }

    clickNewMessage() {
        return this.newMsgBtn.click()
    }

    setMessage(string) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.msgInput), 1000)
        return this.msgInput.sendKeys(string)
    }

    sendMessage() {
        return this.sendBtn.click()
    }

    getLatestMessage(msg) {
        var until = protractor.ExpectedConditions
        var el = element(by.xpath(`//div[@data-testid='conversation']//span[text()='${msg}']`))
        browser.wait(until.presenceOf(el), 4000)
        return el
    }
}

module.exports = new messagesPage()
