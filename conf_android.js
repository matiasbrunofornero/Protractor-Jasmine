exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',

    capabilities: {
        browserName: 'chrome',
        appiumVersion: '1.15.1',
        chromedriverExecutable: '/Users/matiasgit/Desktop/Protractor-Jasmine/chromedriver',
        platformName: "Android",
        platformVersion: 9,
        deviceName: "Pixel_XL",
        automationName: "UiAutomator2",
        avd: "Pixel_XL",
        deviceReadyTimeout: 20,
        autoGrantPermissions: true,
        newCommandTimeout: "3600"
    },

    framework: 'jasmine',
    specs: ['./specs/android.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: () => {
        browser.ignoreSynchronization = true
        // browser.driver.manage().window().maximize()
        browser.get('https://twitter.com/')
    }
}