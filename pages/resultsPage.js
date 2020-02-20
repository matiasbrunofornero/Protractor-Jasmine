const basePage = require('./basePage')

class resultsPage extends basePage {
  constructor() {
    super()
    this.peopleTab = element(by.css(`[role='navigation'] > [role='tablist'] > [role='presentation']:nth-of-type(3) span`))
    // this.verifiedFollow = element(by.xpath(`//*[contains(@class, 'r-9cviqr')]/../../../../../..//span[text()='Follow']`))
    this.verifiedAccount = element(by.xpath(`(//*[contains(@data-testid, 'primaryColumn')]//*[contains(@aria-label, 'Verified account')]/../../../parent::a)`))
    this.clearBtn = element(by.css(`.r-5soawk`))
    this.loadedPage = element(by.css(`[data-testid='primaryColumn'] [role='region']`))
  }

  clickPeople() {
    var until = protractor.ExpectedConditions
    browser.wait(until.presenceOf(this.peopleTab), 5000)
    
    return this.peopleTab.click()
  }

  clickVerifiedAccount() {
    var until = protractor.ExpectedConditions
    browser.wait(until.presenceOf(this.loadedPage), 5000)
    this.verifiedAccount.click()

    return this
  }
}

module.exports = new resultsPage()
