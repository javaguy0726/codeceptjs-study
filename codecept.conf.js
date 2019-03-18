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
    loginPage: './src/pages/official/loginPage.js',
    dashboardPage: './src/pages/official/dashboardPage.js',
    desktopPage: './src/pages/official/desktopPage.js',
    
    
    
    officialSidePanel: './src/fragments/official/sidePanel.js',
    officialHeader: './src/fragments/official/header.js',
    officialPopup: './src/fragments/official/popup.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
