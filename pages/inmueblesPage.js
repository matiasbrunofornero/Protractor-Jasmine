const basePage = require('./basePage')
const homePage = require('./homePage')

class inmueblesPage extends basePage {
    constructor() {
        super()
        this.header1 = element(by.css('.heading__slogan > h1'))
        this.header2 = element(by.css('.heading__slogan > h2'))
        this.operationSel = element(by.id('searchOperations'))
        this.categoriesSel = element(by.id('searchCategories'))
        this.cityInput = element(by.css('.nav-search-classi-content input'))
        this.searchBtn = element(by.css('i.nav-icon-search'))
    }

    selectOperation(oper) {
        this.operationSel.click()
        var el = element(by.xpath(`//option[text()='${oper}']`))
        return el.click()
    }

    selectCategory(cat) {
        this.categoriesSel.click()
        var el = element(by.xpath(`//option[text()='${cat}']`))
        return el.click()
    }

    setCity(city) {
        return this.cityInput.sendKeys(city)
    }

    clickSearch() {
        return this.searchBtn.click()
    }
}
module.exports = new inmueblesPage()
