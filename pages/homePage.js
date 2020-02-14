const basePage = require('./basePage')

class homePage extends basePage {
	constructor() {
		super()
		this.carousel = element(by.css('.carousel-container'))
	}

	waitToPageBeLoaded() {
		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.carousel), 5000)
	}
}

module.exports = new homePage()