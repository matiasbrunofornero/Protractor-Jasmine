const basePage = require('./basePage')

class followingPage extends basePage {
    constructor() {
        super()
        this.followingTab = element(by.xpath(`//div[@role='tablist'][contains(@class, 'r-hbs49y')]//a[contains(@href, 'following')]`))
        this.followersTab = element(by.xpath(`//div[@role='tablist'][contains(@class, 'r-hbs49y')]//a[contains(@href, 'followers')]`))
        this.alertDialog = element(by.css(`[role='alertdialog']`))
        this.unfollowCancel = element(by.css(`[data-testid='confirmationSheetCancel']`))
        this.unfollowConfirm = element(by.css(`[data-testid='confirmationSheetConfirm']`))
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

    getFollowedUser(usr) {
        var el = element(by.xpath(`//div[@data-testid='UserCell']//span[text()='${usr}']`))
        return el
    }

    unfollow(usr) {
        var el = element(by.xpath(`//div[@data-testid='UserCell']//span[text()='${usr}']`))
        var unf = el.element(by.xpath(`//..//..//..//..//..//..//..//..//div[contains(@data-testid, 'unfollow')]`))
        return unf.click()
    }

    confirmUnfollow() {
        return this.unfollowConfirm.click()
    }
}

module.exports = new followingPage()
