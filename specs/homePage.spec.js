var using = require('jasmine-data-provider')
var people = require('../data/people')
var data = require('../data/data.json')
var tweets = require('../data/tweets.json')

var homePage = require('../pages/homePage')
var ingresaPage = require('../pages/ingresaPage')
var profilePage = require('../pages/profilePage')
var resultsPage = require('../pages/resultsPage')
var messagesPage = require('../pages/messagesPage')
var followingPage = require('../pages/followingPage')

var msgPopup = require('../pages/components/msgPopup')

describe("Homepage Test Suite", function () {

    beforeAll(function () {
        homePage.clickLogIn()
        ingresaPage.setUsername(data.user)
        ingresaPage.setPassword(data.password)
    })

    using(people, function (data, description) {
        it("Search and go to '" + description + "' profile", function () {
            homePage.setSearch(data.text)
            resultsPage.clickPeople()

            resultsPage.clickVerifiedAccount()

            expect(profilePage.getProfileTitle().getText()).toEqual(data.text)

            profilePage.clickHome()
            expect(profilePage.homePageIsDisplayed()).toBe(true)

            browser.sleep(1000)
        })
    })

    it("Hey, try to follow (and unfollow) your favorite artist!", function () {
        var user = 'Gustavo Cerati'
        homePage.setSearch(user)
        resultsPage.clickPeople()

        resultsPage.clickVerifiedAccount()

        // WIP if button text is 'following' do unfollow

        profilePage.followUnfollow('Follow')

        homePage.goToProfile()
        profilePage.goToFollowing()

        expect(followingPage.followingTab.getAttribute('aria-selected')).toEqual('true')
        expect(followingPage.getFollowedUser(user).isDisplayed()).toBe(true)

        followingPage.unfollow(user)
        expect(followingPage.alertDialog.isDisplayed()).toBe(true)

        followingPage.confirmUnfollow()

        profilePage.clickHome()
        expect(profilePage.homePageIsDisplayed()).toBe(true)

        browser.sleep(3000)
    })

    it("Tweet about something funny that happened recently", function () {
        var random = homePage.newTweet().setTweet()
        homePage.sendTweet()
        expect(homePage.confirmationAlert.isDisplayed()).toBe(true)

        homePage.goToProfile()
        var tweet = profilePage.getLastTweet()
        expect(tweet.getText()).toEqual(tweets[['e' + [random]]])

        profilePage.openMoreMenu()
        expect(profilePage.moreMenu.isDisplayed()).toBe(true)
        profilePage.selectOption('Delete')
        expect(profilePage.deletePopup.isDisplayed()).toBe(true)

        profilePage.deleteTweet()
        expect(tweet.getText()).not.toEqual(tweets[['e' + [random]]])
    })

    it("Send a message by day is important!", function () {
        var user = 'MatBF2'
        var msg = 'Automated Message #'
        var ran = Math.floor((Math.random() * 100000) + 1)

        homePage.goToMessages()
        expect(browser.getCurrentUrl()).toEqual("https://twitter.com/messages")

        messagesPage.clickNewMessage()
        expect(messagesPage.msgPopup.isDisplayed()).toBe(true)

        msgPopup.searchPeople(user)
        expect(msgPopup.getSearchUser().getText()).toEqual('@' + user)
        expect(msgPopup.nextBtn.getAttribute('aria-disabled')).toEqual('true')

        msgPopup.selectUser()
        expect(msgPopup.nextBtn.isEnabled()).toBe(true)

        msgPopup.clickNext()
        messagesPage.setMessage(msg + ran)
        messagesPage.sendMessage()
        expect(messagesPage.getLatestMessage(msg + ran).isDisplayed()).toBe(true)
    })
})