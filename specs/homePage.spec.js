var using = require('jasmine-data-provider')
var productsData = require('../data/productsList')
var citiesData = require('../data/cityList')
var mlData = require('../data/homePageData.json')

var homePage = require('../pages/homePage')
var ingresaPage = require('../pages/ingresaPage')
var resultsPage = require('../pages/resultsPage')
var inmueblesPage = require('../pages/inmueblesPage')

describe("Homepage Test Suite", function () {

    using(productsData, function (data, description) {
        it("Perform '"+ description +"' as Basic Search", function () {
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
    }),

    using(citiesData, function (data, description) {
        it("Search '"+ description +"' from Inmuebles", function () {
            homePage.clickCategoriasLink()
            expect(homePage.categoriasMenu.getAttribute('hidden')).not.toEqual('hidden');
            homePage.goToCategory('Inmuebles')

            inmueblesPage.selectOperation('Alquiler')
            inmueblesPage.selectCategory('PH')
            inmueblesPage.setCity(data.text)

            inmueblesPage.clickSearch()

            resultsPage.waitToPresenceOf(resultsPage.breadcrumbTitle) 
            expect(resultsPage.breadcrumbTitle.isDisplayed()).toBe(true)
            expect(resultsPage.breadcrumbTitle.getText()).toEqual(data.text.toLowerCase());

            homePage.clearSearch()
            expect(homePage.getSearch()).toEqual('');
        })
    }),

    it("Ingresa functionality", function () {
        homePage.clickIngresaBtn()
        ingresaPage.setUsername('AUTOMATEDTESTING')
        ingresaPage.clickSubmit()
        ingresaPage.setPassword('asdasd')
    })
})