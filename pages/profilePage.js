const basePage = require('./basePage')

class profilePage extends basePage {
    constructor() {
        super()
        this.tweets = element.all(by.css(`.r-bnwqim > span:nth-of-type(1)`))
        // this.followBtn = element(by.xpath(`//div[contains(@data-testid, 'primaryColumn')]//span[text()='Follow']`))
        this.followBtn = element(by.css(`[data-testid='placementTracking'] span:not(.css-bfa6kz)`))
        this.unfollowPopup = element(by.css(`.r-1sxzll1`))
    }

    followUnfollow(act) {
        var el = element(by.xpath(`//div[contains(@data-testid, 'placementTracking')]//span[text()='${act}']`))
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(el), 5000)

        return el.click()
    }

    getTweet() {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.tweets), 10000)
        return this.tweets.first()
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