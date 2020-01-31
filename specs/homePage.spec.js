// var using = require('jasmine-data-provider');
// var objectDataProvider = require('../../data/headerListProducts');
// var homePageData = require('../../data/homePageData.json');
var homePage = require('../pages/homePage');

describe("Homepage Test Suite", function () {

    it("Search functionality", function () {
        var text = 'Buscar productos, marcas y más…'
        expect(homePage.searchBox.isDisplayed()).toBe(true)
        expect(homePage.searchBox.getAttribute('placeholder')).toEqual(text);

        homePage.setSearch(text)
        homePage.clickSearch()
    })

    it("Ingresa functionality", function () {
        homePage.clickIngresaBtn()
    })
})