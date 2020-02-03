module.exports = class BasePage {
        constructor() {
                this.creaTuCuentaBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Creá tu cuenta']`))
                this.ingresaBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Ingresá']`))
                this.misComprasBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Mis compras']`))

                this.searchBox = element(by.css('input.nav-search-input'))
                this.searchBtn = element(by.className('nav-icon-search'))
                this.appDownloadLink = element(by.id('footer-applink'))

                // this.notificacionBar = element(by.className('notification-fixed-box'))
                // this.turismoCityDesktopLogo = element(by.id('siteLogo'))
                // this.vuelosIcon = element(by.css('a[title="Vuelos"]'))
        }

        clickIngresaBtn() {
                return this.ingresaBtn.click()
        }

        setSearch(search) {
                return this.searchBox.sendKeys(search)
        }

        getSearch() {
                return this.searchBox.getText()
        }

        clearSearch() {
                return this.searchBox.clear()
        }

        clickSearch() {
                this.searchBtn.click()
        }

        downloadApp() {
                this.appDownloadLink.click()
        }
}