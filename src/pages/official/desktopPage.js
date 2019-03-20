const popupFragment = require('./fragments/popup')
const customSteps = require('../../custom_steps')
const I = actor(customSteps())

module.exports = {
  header: {
    root: { css: '#filelist-header' },
    list: { xpath: ".//div[text()='列表']" },
    updateTime: {}
  },
  main: {
    fileList: {
      xpath: ".//div[@class='ReactVirtualized__Grid__innerScrollContainer']",
    }
  },

  /**
   * 等待页面加载
   */
  async waitForPageToLoad() {
    I.waitForVisible(locate(this.main.fileList).find(".//*[@draggable='true']"))
    I.waitForVisible(this.header.list)

    if (await I.waitDisplayed(popupFragment.adPay.payButton, 2) === true) {
      I.pressKey('Escape')
      I.waitForInvisible(popupFragment.adPay.payButton)
    }else{
      console.log("弹出类页面没有显示.")
    }
  },

  /**
   * 进入本页面（也可当做刷新）
   */
  async enter(){
    const url = await I.grabCurrentUrl()
    I.amOnPage(url)
    await this.waitForPageToLoad()
  },

  

}
