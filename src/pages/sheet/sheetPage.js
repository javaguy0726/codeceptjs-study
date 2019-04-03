const I = actor()

module.exports = {
  root: { id: '#root' },
  header: {
    title: { xpath: './/div[@class="title"]' },
    account: { css: 'input[placeholder="手机号或邮箱"]' },
    password: { css: 'input[placeholder="密码"]' },
    submitButton: { xpath: './/button[text()="立即登录" or text()="登录"]' }
  },

  menu: {

  },

  toolbar: {
    switchBtn:{xpath:".//div[@class='toolBarSwitch ']"},
    switchBtnOpen:{xpath:".//div[@class='toolBarSwitch toolBarSwitch__open']"},

  },

  fx: {
    label: { css: '.fx-left-label' },

  },

  sheet: {
    canvas: { css: '#sm-canvas-container-viewport' },

  },

  sheetTab: {

  },

  dialog:{
    confirm:{
      root: {css: '.confirm-dialog'},
      

    },

  },




  waitForPageToLoad() {
    I.waitForVisible(this.main.account)
  },

  /**
   * 提交登录
   *
   * @param {*} account
   * @param {*} password
   */
  signIn(account, password) {
    I.fillField(this.main.account, account)
    I.fillField(this.main.password, password)
    I.click(this.main.submitButton)
  },

  /**
   * M站提交登录
   *
   * @param {*} account
   * @param {*} password
   */
  mSignIn(account, password) {
    I.fillField(this.m_main.account, account)
    I.fillField(this.m_main.password, password)
    I.click(this.m_main.submitButton)
  }
}
