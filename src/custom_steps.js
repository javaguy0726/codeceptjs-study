// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // elementWaitDisplayed: function(locator, sec) {
    //   let rtn = true
    //   this.waitUntil(
    //     async () => {
    //       await this.elementDisplayed(locator)
    //     },
    //     sec,
    //     '元素没有显示.'
    //   ).catch(() => rtn = false)

    //   return rtn
    // },

    test1(){
      console.log("+++++++")
    }

  })
}
