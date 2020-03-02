const basePage = require('../basePage')

class msgPopup extends basePage {
    constructor() {
        super()
        this.searchPeopleInput = element(by.css(`[data-testid='searchPeople']`))
        this.searchResults = element.all(by.css(`[data-testid='TypeaheadUser']`))
        this.nextBtn = element(by.css(`[data-testid='nextButton']`))
        this.loadingBar = element(by.css(`[aria-valuetext='Loading results']`))
        this.progressBar = element(by.css(`[aria-valuetext='Loading results'][role='progressbar']`))
        this.aaaa = element(by.css(`aaa`))
    }

    searchPeople(people) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.searchPeopleInput), 2000)
        return this.searchPeopleInput.sendKeys(people)
    }

    getSearchUser() {
        var until = protractor.ExpectedConditions
        // browser.wait(until.presenceOf(this.searchResults), 2000)
        browser.wait(until.invisibilityOf(this.progressBar), 5000)
        return this.searchResults.first().element(by.css(`.r-111h2gw.r-18u37iz`))
    }

    selectUser() {
        var until = protractor.ExpectedConditions
        browser.wait(until.invisibilityOf(this.progressBar), 5000)
        return this
        // return this.searchResults.first().element(by.css(`.r-111h2gw.r-18u37iz`)).click()
    }

    clickNext() {
        this.nextBtn.click()
        var until = protractor.ExpectedConditions
        return browser.wait(until.presenceOf(this.aaaa), 30000)
    }
}

module.exports = new msgPopup()
