const basePage = require('./basePage')

class resultsPage extends basePage {
    constructor() {
        super()
        this.breadcrumbTitle = element(by.className('breadcrumb__title'))
    }
}

module.exports = new resultsPage()
