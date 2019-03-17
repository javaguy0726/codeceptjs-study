// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    
    elementWaitDisplayed: function(locator, sec) {
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
