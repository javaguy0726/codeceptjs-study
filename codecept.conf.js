exports.config = {
  tests: 'src/tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      // host: '172.16.20.168',
      // port: 4443,
      // path: '/wd/hub',
      restart: false,
      keepBrowserState: true,
      // keepCookies: false,
      // manualStart: false,
      waitForTimeout: 20000,
      timeouts: {},
      desiredCapabilities: {
        chromeOptions: {
          args: [
            // "--headless",
            "--disable-gpu",
            "--window-size=1920,1080"
          ]
        }
      }

    },
    WdHelper: {
      "require": "./src/helpers/wd_helper.js"
    }
  },
  include: {
    I: './src/custom_steps.js',
    officalPages: './src/pages/official',
    sheetPages:'./src/pages/sheet',
    officialFragments: './src/fragments/official',

  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
