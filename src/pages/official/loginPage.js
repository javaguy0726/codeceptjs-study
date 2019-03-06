const I = actor()

module.exports = {
  main: {
    title: { xpath: './/div[@class="title"]' },
    account: 'input[placeholder="手机号或邮箱"]',
    password: 'input[placeholder="密码"]',
    submitButton: { xpath: './/button[text()="立即登录" or text()="登录"]' }
  },

  m_main: {
    title: { xpath: './/div[@class="title"]' },
    account: 'input[placeholder="手机号或邮箱"]',
    password: 'input[placeholder="密码"]',
    submitButton: { xpath: './/a[text()="登录"]' }
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
  signIn: (account, password) => {
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
  mSignIn: (account, password) => {
    I.fillField(this.m_main.account, account)
    I.fillField(this.m_main.password, password)
    I.click(this.m_main.submitButton)
  }
}
