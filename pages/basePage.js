module.exports = class BasePage {
        constructor() {
                this.turismoCityDesktopLogo = element(by.id('siteLogo'))
                this.navBarSectionList = element(by.id('PageNavBarSectionList'))
                this.navBarUserOptions = element(by.id('PageNavBarUserOptions'))
        }
}