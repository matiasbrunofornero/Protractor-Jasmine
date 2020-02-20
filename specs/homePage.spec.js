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
        it("Follow and Unfollow'" + description + "' Page", function () {

            // expect(homePage.searchBox.isDisplayed()).toBe(true)
            // expect(homePage.searchBox.getAttribute('placeholder')).toEqual(placeholder);
            // homePage.setSearch(data.text)
            // homePage.clickSearch()

            // expect(resultsPage.breadcrumbTitle.isDisplayed()).toBe(true)
            // expect(resultsPage.breadcrumbTitle.getText()).toEqual(data.text.toLowerCase());

            // homePage.clearSearch()
            // expect(homePage.getSearch()).toEqual('');

            if (data.text == 'FC Barcelona') {
                homePage.clearSearch()
            }

            homePage.setSearch(data.text)
            resultsPage.clickPeople()

            resultsPage.clickVerifiedAccount()

            profilePage.followUnfollow('Follow')


            // homePage.clearSearch()

            // resultsPage.clickPeople()

        })
    })

    // it("Tweet about something funny that happened recently", function () {
    //     //Delete tweets before each functionality 

    //     var random = homePage.newTweet().setTweet()
    //     homePage.sendTweet()

    //     homePage.goToProfile()
    //     var tweet = profilePage.getTweet()
    //     expect(tweet.getText()).toEqual(tweets[['e' + [random]]])
    // })


    // using(citiesData, function (data, description) {
    //     it("Search '"+ description +"' from Inmuebles", function () {
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

    // it("Ingresa functionality", function () {
    //     homePage.clickIngresaBtn()
    //     ingresaPage.setUsername('AUTOMATEDTESTING')
    //     ingresaPage.clickSubmit()
    //     ingresaPage.setPassword('asdasd')
    // })
})