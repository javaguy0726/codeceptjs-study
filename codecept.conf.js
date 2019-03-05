exports.config = {
  tests: 'src/tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './src/steps_file.js',
    loginPage: './src/pages/official/loginPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-study'
}