exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
    },

    onPrepare: function() {
        global.nav = browser.driver;
        global.URL = 'http://localhost:9000/'
    }

}
