const popupFragment = require('../../fragments/official/popup')
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
      xpath: ".//div[@class='ReactVirtualized__Grid__innerScrollContainer']"
    }
  },

  /**
   * 等待页面加载
   */
  waitForPageToLoad() {
    I.waitForVisible(locate(this.main.fileList).find(".//*[@draggable='true']"))
    I.waitForVisible(this.header.list)

    if (I.waitDisplayed(popupFragment.adPay.payButton, 5)) {
      I.pressKey('Escape')
      I.waitForInvisible(popupFragment.adPay.payButton)
    }
  }
}
