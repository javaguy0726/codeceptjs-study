// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    /**
     * 等待指定时间判断元素是否显示
     */
    elementWaitDisplayed: (locator, sec) => {
      try {
        this.waitUntil(
          () => {
            this.elementDisplayed(locator)
          },
          sec,
          '元素没有显示.'
        )
      } catch (error) {
        return false
      }

      return true
    }
  })
}
