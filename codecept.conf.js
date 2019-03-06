exports.config = {
  tests: 'src/tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      waitForTimeout: 20000
    }
  },
  include: {
    I: './src/steps_file.js',
    loginPage: './src/pages/official/loginPage.js',
    dashboardPage: './src/pages/official/dashboardPage.js',
    officialLeftSide: './src/fragments/official/leftSide.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}
