let Helper = codecept_helper

class WdHelper extends Helper {
  _before() {
  }

  _after() {

  }

  _init(){
  }

  async findElements(strictLocator) {
    return await this.helpers['WebDriver']._locate(strictLocator)
  }

  async findSubElements(fatherLocator, childLocator) {
    return await this.helpers['WebDriver']._locate(fatherLocator).then(_locate(childLocator))
  }

  /**
   * 等待指定时间,元素是否显示
   * 
   * @param {*} locator 元素定位,可以是对象和字符串
   * @param {*} sec 
   * 
   * @returns true=显示 false=不显示
   */
  async waitDisplayed(locator, sec) {
    const browser = await this.helpers['WebDriver'].browser
    let rtn = true
    try {
      await browser.waitUntil(async () => {
        const ele = await browser.$(parseLocator(locator))
        return ele.isDisplayed()
      }, sec * 1000, '等待超时,元素没有显示');
    } catch (err) {
      rtn = false
    }
    return rtn
  }

  /**
   * 元素是否显示
   * 
   * @param {*} locator 
   */
  async elementDisplayed(locator) {
    let rtn = true
    try {
      const ele = await browser.$(parseLocator(locator))
      rtn = ele.isDisplayed()
    } catch (err) {
      rtn = false
    }
    return rtn
  }

  /**
   * 解析元素定位,并返回定位字符串,如果不匹配则返回"error"
   * @param {*} locator 
   */
  parseLocator(locator) {
    let rtn = "error"
    switch (typeof locator) {
      case "object":
        rtn = Object.values(locator)[0]
        break;
      case "string":
        rtn = locator
        break;
    }
    return rtn;
  }

}

module.exports = WdHelper
