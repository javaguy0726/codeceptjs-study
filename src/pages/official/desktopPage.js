const popupFragment = require('../../fragments/official/popup');
const I = actor()

module.exports = {
  header: {
    root: { css: '#filelist-header' },
    list: { xpath: ".//div[text()='列表']" },
    updateTime: {}
  },
  main: {
    fileList: {xpath: ".//div[@class='ReactVirtualized__Grid__innerScrollContainer']"}
  },

  waitForPageToLoad() {
    I.waitForVisible(locate(this.main.fileList).find(".//*[@draggable='true']"))
    I.waitForVisible(this.header.list)

    if(I.elementWaitDisplayed(popupFragment.adPay.payButton,3)){
      I.pressKey('ESC')
      I.waitForInvisible(popupFragment.adPay.payButton)
    }
  }
}