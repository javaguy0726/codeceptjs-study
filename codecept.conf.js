exports.config = {
  tests: 'src/tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      waitForTimeout: 20000,
      windowSize: "maximize",
    }, 
    WdHelper: {
      "require": "./src/helpers/wd_helper.js"
    }
  },
  include: {
    I: './src/custom_steps.js',
    officalPages: './src/pages/official',
    
    officialFragments: './src/fragments/official',
    
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
