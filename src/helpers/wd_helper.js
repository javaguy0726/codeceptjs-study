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
    const browser = this.helpers['WebDriver'].browser
    return await browser.$(locator).isDisplayed()
  }

}

module.exports = WdHelper
