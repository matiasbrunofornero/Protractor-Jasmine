const basePage = require('./basePage')

class summaryPage extends basePage {
    constructor() {
        super()
        this.buyBtn = element(by.id('BidButtonTop'))
    }

    clickBuy() {
        return this.buyBtn.click()
    }
}

module.exports = new summaryPage()
