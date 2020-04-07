module.exports = class BasePage {
	constructor() {
		this.browser = require('protractor').browser
		this.by = require('protractor').by
		this.expectedCondition = require('protractor').ExpectedConditions
	}

	waitForElementToBeVisible(webElement, timeout = 2000) {
		browser.wait(this.expectedCondition.visibilityOf(webElement), timeout)
    }
    
    waitForElementNotToBeVisible(webElement, timeout = 2000) {
		browser.wait(this.expectedCondition.invisibilityOf(webElement), timeout)
	}
}