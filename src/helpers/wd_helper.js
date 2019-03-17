class WdHelper extends Helper {
  _before() {}

  _after() {}

  async findElements(strictLocator) {
    return await this.helpers['WebDriver']._locate(strictLocator)
  }

  async findSubElements(fatherLocator, childLocator){
    return await this.helpers['WebDriver']._locate(fatherLocator).then(_locate(childLocator))
  }

  async elementDisplayed(locator){
    const browser = await this.helpers['WebDriver'].browser
    const ele = await browser.$(locator)
    console.log(ele.isDisplayed())
    return ele.isDisplayed()
  }

}

module.exports = WdHelper
