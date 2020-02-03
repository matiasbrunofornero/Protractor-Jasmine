var using = require('jasmine-data-provider')
var objectDataProvider = require('../data/productsList')
var mlData = require('../data/homePageData.json')

var homePage = require('../pages/homePage')
var ingresaPage = require('../pages/ingresaPage')
var resultsPage = require('../pages/resultsPage')

describe("Homepage Test Suite", function () {

    using(objectDataProvider, function (data, description) {
        it("Search functionality: " + description, function () {
            const placeholder = mlData.searchboxPlaceholder

            expect(homePage.searchBox.isDisplayed()).toBe(true)
            expect(homePage.searchBox.getAttribute('placeholder')).toEqual(placeholder);
            homePage.setSearch(data.text)
            homePage.clickSearch()

            expect(resultsPage.breadcrumbTitle.isDisplayed()).toBe(true)
            expect(resultsPage.breadcrumbTitle.getText()).toEqual(data.text.toLowerCase());

            homePage.clearSearch()
            expect(homePage.getSearch()).toEqual('');
        })
    })

    xit("Ingresa functionality", function () {
        homePage.clickIngresaBtn()
        ingresaPage.setUsername('AUTOMATEDTESTING')
        ingresaPage.clickSubmit()
        ingresaPage.setPassword('asdasd')
    })
})