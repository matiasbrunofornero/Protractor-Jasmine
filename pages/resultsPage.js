const basePage = require('./basePage')

class resultsPage extends basePage {
    constructor() {
        super()
        this.breadcrumbTitle = element(by.className('breadcrumb__title'))
    }

    clickResult(result) {
        var el = element(by.css(`.results-item:nth-of-type(${result}) .main-title`))
        return el.click()
    }
}

module.exports = new resultsPage()
