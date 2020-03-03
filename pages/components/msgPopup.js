const basePage = require('../basePage')

class msgPopup extends basePage {
    constructor() {
        super()
        this.searchPeopleInput = element(by.css(`[data-testid='searchPeople']`))
        this.searchResults = element.all(by.xpath(`//div[@data-testid='TypeaheadUser']`))
        this.nextBtn = element(by.css(`[data-testid='nextButton']`))
        this.loadingBar = element(by.css(`[aria-valuetext='Loading results']`))
        this.progressBar = element(by.css(`[aria-valuetext='Loading results'][role='progressbar']`))
    }

    searchPeople(people) {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.searchPeopleInput), 2000)
        return this.searchPeopleInput.sendKeys(people)
    }

    getSearchUser() {
        var until = protractor.ExpectedConditions
        browser.wait(until.presenceOf(this.searchResults), 2000)
        return this.searchResults.first().element(by.css(`.r-111h2gw.r-18u37iz`))
    }

    selectUser() {
        browser.sleep(500)
        this.searchResults.first().element(by.css(`.r-111h2gw.r-18u37iz`)).click()
    }

    clickNext() {
        this.nextBtn.click()
    }
}

module.exports = new msgPopup()
