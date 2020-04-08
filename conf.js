exports.config = {
    directConnect: true,
    specs: ['./specs/homePage.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true
        browser.driver.manage().window().maximize()
        browser.get('https://twitter.com/')
    }
}