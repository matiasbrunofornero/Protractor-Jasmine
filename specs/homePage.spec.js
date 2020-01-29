var using = require('jasmine-data-provider');
var objectDataProvider = require('../../data/headerListProducts');
var homePageData = require('../../data/homePageData.json');
var homePage = require('../../pages/homePage');

describe("Homepage Test Suite", function () {
    it("Turismo City Logo Visibility", function () {
        expect(homePage.turismoCityDesktopLogo.isDisplayed()).toBe(true, 'Page logo is not displayed')
    })
})