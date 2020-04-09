exports.config = {

    capabilities: {
        'browserName': 'chrome'
    },

    directConnect: true,
    framework: 'jasmine',
    specs: ['./specs/homePage.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },

    onPrepare: () => {
        browser.ignoreSynchronization = true
        browser.driver.manage().window().maximize()
        browser.get('https://twitter.com/')
    }
}