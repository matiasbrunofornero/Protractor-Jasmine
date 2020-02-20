const basePage = require('./basePage')
var tweets = require('../data/tweets.json')

class homePage extends basePage {
	constructor() {
		super()
		this.logInBtn = element(by.css(`[data-testid="loginButton"]`))
		this.profileBtn = element(by.xpath(`//span[text()='Profile']`))
		this.sidebarTweet = element(by.css(`[data-testid='SideNav_NewTweet_Button']`))
		this.tweetTextArea = element(by.css(`[data-testid="tweetTextarea_0"]`))
		this.tweetBtn = element(by.css(`[data-testid='tweetButton']`))
		this.searchInput = element(by.css(`[data-testid='SearchBox_Search_Input']`))
		this.clearBtn = element(by.css(`.r-5soawk`))
	}

	clickLogIn() {
		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.logInBtn), 5000)
		return this.logInBtn.click()
	}

	newTweet() {
		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.sidebarTweet), 5000)
		this.sidebarTweet.click()
		return this
	}

	setTweet(text = '') {
		if (text !== '') {
			return this.tweetTextArea.sendKeys(text)
		}
		else {
			const random = Math.floor((Math.random() * 10) + 1)
			this.tweetTextArea.sendKeys(tweets[['e' + [random]]])
			return random
		}
	}

	sendTweet() {
		return this.tweetBtn.click()
	}

	goToProfile() {
		return this.profileBtn.click()
	}

	setSearch(search) {
		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.searchInput), 5000)

		this.searchInput.sendKeys(search)
		return this.searchInput.sendKeys(protractor.Key.ENTER)
	}

	clearSearch() {
		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.searchInput), 1000)

		this.searchInput.click()

		var until = protractor.ExpectedConditions
		browser.wait(until.presenceOf(this.clearBtn), 2000)

		return this.clearBtn.click()
	}
}

module.exports = new homePage()