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
    
    
    
    officialSidePanel: './src/pages/official/fragments/sidePanel.js',
    officialHeader: './src/pages/official/fragments/header.js',
    officialPopup: './src/pages/official/fragments/popup.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
