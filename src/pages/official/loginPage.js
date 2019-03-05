const I = actor();

module.exports = {

  main: {
    title: { xpath: './/div[@class="title"]' },
    account: 'input[placeholder="手机号或邮箱"]',
    password: 'input[placeholder="密码"]',
    submitButton: { xpath: './/button[text()="立即登录" or text()="登录"]' }
  },

  m_main:{
    title: { xpath: './/div[@class="title"]' },
    account: 'input[placeholder="手机号或邮箱"]',
    password: 'input[placeholder="密码"]',
    submitButton: { xpath: './/a[text()="登录"]' }
  },

  waitForPageToLoad(){
    
  },

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}
