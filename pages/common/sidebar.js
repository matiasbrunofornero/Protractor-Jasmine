
const basePage = require('../basePage')

class msgPopup extends basePage {
    constructor() {
        super()
        this.sidebar = element(by.css(`[role='banner'] [role='navigation']`))
    }

    clickHome() {
        var el = this.sidebar.element(by.css(`[data-testid='AppTabBar_Home_Link']`))
        return el.click()
    }

    clickExplore() {
        var el = this.sidebar.element(by.css(`[data-testid='AppTabBar_Explore_Link']`))
        return el.click()
    }

    clickNotifications() {
        var el = this.sidebar.element(by.css(`[data-testid='AppTabBar_Notifications_Link']`))
        return el.click()
    }

    clickMessages() {
        var el = this.sidebar.element(by.css(`[data-testid='AppTabBar_DirectMessage_Link']`))
        return el.click()
    }

    clickBookmarks() {
        var el = this.sidebar.element(by.css(`[aria-label='Bookmarks']`))
        return el.click()
    }

    clickLists() {
        var el = this.sidebar.element(by.css(`[aria-label='Lists']`))
        return el.click()
    }

    clickProfile() {
        var el = this.sidebar.element(by.css(`[aria-label='Profile']`))
        return el.click()
    }

    clickMore() {
        var el = this.sidebar.element(by.css(`[data-testid='AppTabBar_More_Menu']`))
        return el.click()
    }
}

module.exports = new msgPopup()
