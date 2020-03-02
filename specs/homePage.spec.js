var using = require('jasmine-data-provider')
var people = require('../data/people')
var data = require('../data/data.json')
var tweets = require('../data/tweets.json')

var homePage = require('../pages/homePage')
var ingresaPage = require('../pages/ingresaPage')
var profilePage = require('../pages/profilePage')
var resultsPage = require('../pages/resultsPage')
var messagesPage = require('../pages/messagesPage')
var msgPopup = require('../pages/components/msgPopup')

describe("Homepage Test Suite", function () {

    beforeAll(function () {
        homePage.clickLogIn()
        ingresaPage.setUsername(data.user)
        ingresaPage.setPassword(data.password)
    })

    // using(people, function (data, description) {
    //     xit("Follow and Unfollow '" + description + "' Page", function () {

    //         homePage.setSearch(data.text)
    //         resultsPage.clickPeople()

    //         resultsPage.clickVerifiedAccount()
    //         profilePage.followUnfollow('Follow')

    //         expect(profilePage.followBtn.getText()).toEqual('Following')

    //         profilePage.followUnfollow('Following')
    //         expect(profilePage.unfollowPopup.isDisplayed()).toBe(true)
    //         profilePage.confirmUnfollow()

    //         expect(profilePage.followBtn.getText()).toEqual('Follow')

    //         profilePage.clickHome()
    //         expect(profilePage.homePageIsDisplayed()).toBe(true)
    //     })
    // })

    // xit("Tweet about something funny that happened recently", function () {
    //     var random = homePage.newTweet().setTweet()
    //     homePage.sendTweet()
    //     expect(homePage.confirmationAlert.isDisplayed()).toBe(true)

    //     homePage.goToProfile()
    //     var tweet = profilePage.getLastTweet()
    //     expect(tweet.getText()).toEqual(tweets[['e' + [random]]])

    //     profilePage.openMoreMenu()
    //     expect(profilePage.moreMenu.isDisplayed()).toBe(true)
    //     profilePage.selectOption('Delete')
    //     expect(profilePage.deletePopup.isDisplayed()).toBe(true)

    //     profilePage.deleteTweet()
    //     expect(tweet.getText()).not.toEqual(tweets[['e' + [random]]])
    // })

    it("Send a message by day is important!", function () {
        var user = 'MatBF2'
        homePage.goToMessages()
        expect(browser.getCurrentUrl()).toEqual("https://twitter.com/messages")

        messagesPage.clickNewMessage()
        expect(messagesPage.msgPopup.isDisplayed()).toBe(true)

        msgPopup.searchPeople(user)
        expect(msgPopup.getSearchUser().getText()).toEqual('@' + user)
        expect(msgPopup.nextBtn.getAttribute('aria-disabled')).toEqual('true')

        msgPopup.selectUser()
        // expect(msgPopup.nextBtn.isEnabled()).toBe(true)

        // msgPopup.clickNext()
        // messagesPage.setMessage()
    })

})