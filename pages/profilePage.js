const basePage = require('./basePage')

class profilePage extends basePage {
    constructor() {
        super()
        this.tweets = element.all(by.css(`.r-bnwqim > span:nth-of-type(1)`))
        this.followBtn = element(by.xpath(`//div[contains(@data-testid, 'primaryColumn')]//span[text()='Follow']`))
    }

    followUnfollow(act) {
        var el = element(by.xpath(`//div[contains(@data-testid, 'primaryColumn')]//span[text()='${act}']`))
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(el), 5000)

        return el.click()
    }

    getTweet() {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.tweets), 10000)
       return this.tweets.first()

    }
}

module.exports = new profilePage()
