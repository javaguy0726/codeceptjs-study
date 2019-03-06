const I = actor()

module.exports = {
  header: {
    rencent_update: { xpath: ".//a[text()='最近更新']"}
  },

  waitForPageToLoad() {
    I.waitForVisible(this.header.rencent_update)
  },




}
