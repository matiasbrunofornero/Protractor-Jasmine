const basePage = require('./basePage')

class profilePage extends basePage {
    constructor() {
        super()
        this.tweets = element.all(by.xpath(`//div[contains(@data-testid, 'tweet')]`))
        this.followBtn = element(by.css(`[data-testid='placementTracking'] span:not(.css-bfa6kz)`))
        this.unfollowPopup = element(by.css(`.r-1sxzll1`))
        this.moreMenu = element(by.xpath(`//div[@role='menu']`))
        this.deletePopup = element(by.css(`.r-1ye8kvj.r-1rnoaur.r-d9fdf6`))
    }

    followUnfollow(act) {
        var el = element(by.xpath(`//div[contains(@data-testid, 'placementTracking')]//span[text()='${act}']`))
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(el), 5000)

        return el.click()
    }

    getLastTweet() {
        var txt = this.tweets.first().element(by.xpath(`//div[contains(@class, 'r-bnwqim')]`))
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(txt), 2000)
        return txt
    }

    openMoreMenu() {
        var moreBtn = this.tweets.first().element(by.xpath(`//div[contains(@data-testid, 'caret')]`))
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(moreBtn), 2000)
        return moreBtn.click()
    }

    deleteTweet() {
        var until = protractor.ExpectedConditions
        var deleteBtn = this.tweets.first().element(by.xpath(`//div[@role='button']//span[text()='Delete']`))
        deleteBtn.click()
        return browser.wait(until.invisibilityOf(element(by.xpath(`//span[text()='Your Tweet was deleted']`))), 6000)
    }

    selectOption(opt) {
        var opt = element(by.xpath(`//div[@role='menuitem']//span[text()='${opt}']`))
        return opt.click()
    }

    confirmUnfollow() {
        var el = this.unfollowPopup.element(by.xpath(`//span[text()='Unfollow']`))
        var btn = element(by.css(`.r-15d164r.r-bcqeeo`))
        var until = protractor.ExpectedConditions

        el.click()
        return browser.wait(until.presenceOf(btn), 2000)
    }
}

module.exports = new profilePage()
