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
    I: './src/steps_file.js',
    loginPage: './src/pages/official/loginPage.js',
    dashboardPage: './src/pages/official/dashboardPage.js',
    desktopPage: './src/pages/official/desktopPage.js',
    officialSidePanel: './src/fragments/official/sidePanel.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
