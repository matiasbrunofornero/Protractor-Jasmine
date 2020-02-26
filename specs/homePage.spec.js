var using = require('jasmine-data-provider')
var people = require('../data/people')
var data = require('../data/data.json')
var tweets = require('../data/tweets.json')

var homePage = require('../pages/homePage')
var ingresaPage = require('../pages/ingresaPage')
var profilePage = require('../pages/profilePage')
var resultsPage = require('../pages/resultsPage')

describe("Homepage Test Suite", function () {

    beforeAll(function () {
        homePage.clickLogIn()
        ingresaPage.setUsername(data.user)
        ingresaPage.setPassword(data.password)
    })

    using(people, function (data, description) {
        xit("Follow and Unfollow '" + description + "' Page", function () {

            homePage.setSearch(data.text)
            resultsPage.clickPeople()

            resultsPage.clickVerifiedAccount()
            profilePage.followUnfollow('Follow')

            expect(profilePage.followBtn.getText()).toEqual('Following')

            profilePage.followUnfollow('Following')
            expect(profilePage.unfollowPopup.isDisplayed()).toBe(true)
            profilePage.confirmUnfollow()

            expect(profilePage.followBtn.getText()).toEqual('Follow')

            profilePage.clickHome()
            expect(profilePage.homePageIsDisplayed()).toBe(true)
        })
    })

    it("Tweet about something funny that happened recently", function () {
        var random = homePage.newTweet().setTweet()
        homePage.sendTweet()
        expect(homePage.sentAlert.isDisplayed()).toBe(true)

        homePage.goToProfile()
        var tweet = profilePage.getLastTweet()
        expect(tweet.getText()).toEqual(tweets[['e' + [random]]])

        //Delete tweets before each functionality 
        // profilePage.openMoreMenu()
    })

    // using(citiesData, function (data, description) {
    //     it("Search '" + description + "' from Inmuebles", function () {
    //         homePage.clickCategoriasLink()
    //         expect(homePage.categoriasMenu.getAttribute('hidden')).not.toEqual('hidden');
    //         homePage.goToCategory('Inmuebles')

    //         inmueblesPage.selectOperation('Alquiler')
    //         inmueblesPage.selectCategory('PH')
    //         inmueblesPage.setCity(data.text)

    //         inmueblesPage.clickSearch()

    //         resultsPage.waitToPresenceOf(resultsPage.breadcrumbTitle)
    //         expect(resultsPage.breadcrumbTitle.isDisplayed()).toBe(true)
    //         expect(resultsPage.breadcrumbTitle.getText()).toEqual(data.text.toLowerCase());

    //         homePage.clearSearch()
    //         expect(homePage.getSearch()).toEqual('');
    //     })
    // }),

    //     it("BACKUP DATA", function () {
    //         homePage.clickIngresaBtn()
    //         ingresaPage.setUsername('AUTOMATEDTESTING')
    //         ingresaPage.clickSubmit()
    //         ingresaPage.setPassword('asdasd')

    //         expect(homePage.searchBox.isDisplayed()).toBe(true)
    //         expect(homePage.searchBox.getAttribute('placeholder')).toEqual(placeholder);
    //         homePage.setSearch(data.text)
    //         homePage.clickSearch()

    //         expect(resultsPage.breadcrumbTitle.isDisplayed()).toBe(true)
    //         expect(resultsPage.breadcrumbTitle.getText()).toEqual(data.text.toLowerCase());

    //         homePage.clearSearch()
    //         expect(homePage.getSearch()).toEqual('');
    //     })
})