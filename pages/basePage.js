module.exports = class BasePage {
        constructor() {
                // this.creaTuCuentaBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Creá tu cuenta']`))
                // this.ingresaBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Ingresá']`))
                // this.misComprasBtn = element(by.xpath(`//*[@id='nav-header-menu']/a[text()='Mis compras']`))

                // this.searchBox = element(by.css('input.nav-search-input'))
                // this.searchBtn = element(by.className('nav-icon-search'))
                // this.appDownloadLink = element(by.id('footer-applink'))

                // this.categoriasLink = element(by.className('nav-menu-categories-link'))
                // this.categoriasMenu = element(by.className('nav-categs'))

                // this.inmueblesLink = element(by.xpath(`//a[text()='Inmuebles']`)) 
        }

        waitToPresenceOf(element) {
                var until = protractor.ExpectedConditions
                browser.wait(until.presenceOf(element), 5000)
        }

        // clickCategoriasLink() {
        //         this.waitToPresenceOf(this.categoriasLink)
        //         return this.categoriasLink.click()
        // }

        // goToCategory(cat) {
        //         var el = element(by.xpath(`//a[text()='${cat}']`))
        //         this.waitToPresenceOf(el)
        //         return el.click()
        // }

        // clickIngresaBtn() {
        //         return this.ingresaBtn.click()
        // }

        // setSearch(search) {
        //         return this.searchBox.sendKeys(search)
        // }

        // getSearch() {
        //         return this.searchBox.getText()
        // }

        // clearSearch() {
        //         return this.searchBox.clear()
        // }

        // clickSearch() {
        //         this.searchBtn.click()
        // }

        // downloadApp() {
        //         this.appDownloadLink.click()
        // }
}