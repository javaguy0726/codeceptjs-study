let Helper = codecept_helper

class WdHelper extends Helper {
  _before() { }

  _after() { }

  async findElements(strictLocator) {
    return await this.helpers['WebDriver']._locate(strictLocator)
  }

  async findSubElements(fatherLocator, childLocator) {
    return await this.helpers['WebDriver']._locate(fatherLocator).then(_locate(childLocator))
  }

  async waitDisplayed(locator, sec) {
    const browser = await this.helpers['WebDriver'].browser
    const rtn = true
    try{
      await browser.waitUntil(async () => {
        const ele = await browser.$(Object.values(locator)[0])
        return  ele.isDisplayed()
      }, sec*1000, '等待超时,元素没有显示');
    }catch(err){
      rtn = false
    }
    return rtn
  }

}

module.exports = WdHelper
