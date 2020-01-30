const basePage = require('./basePage')

class homePage extends basePage {
	constructor() {
		super()

		this.headerListProducts = element(by.id('PageNavBarSectionList'))
		this.headerElements = this.headerListProducts.all(by.css('.HeaderLink'))
		this.outboundInput = element(by.css('.e2e-outbound-input .tc-placeholder'))
		this.inboundInput = element(by.css('.e2e-inbound-input .tc-placeholder'))
	}

	getIconLink(index) {
		expect(homePage.headerElements.get(currentElement).getText()).toContain(data.text)
		return this.headerElements.get(index).element(by.tagName('a')).getAttribute('href');
	}

	getIconClassName(index) {
		var a = this.headerElements.get(index).element(by.tagName('a'))
		return a.element(by.tagName('i')).getAttribute('class');
	}
}
module.exports = new homePage();