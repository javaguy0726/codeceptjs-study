let Helper = codecept_helper

class WdHelper extends Helper {
  _before() {

  }

  _after() {
  }

  _init() {

  }

  _beforeSuite() {
    this.driver = this.helpers['WebDriver']
  }

  _beforeStep() {
  }

  _afterStep() {

  }

  _beforeSuite() {
  }

  _afterSuite() {
  }

  _passed() {
  }

  _failed() {
  }

  async findElements(strictLocator) {
    return await this.driver._locate(strictLocator)
  }

  async findSubElements(fatherLocator, childLocator) {
    return await this.driver._locate(fatherLocator).then(_locate(childLocator))
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
    const browser = await this.driver.browser
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
   * 执行action操作
   * 
   * @param {*} action 要执行的操作,EX:
   * [
        { action: 'press', x: 200, y: 200 },
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ]
   */
  async touchAction(action) {
    const browser = await this.driver.browser
    await browser.touchAction(action)
  }

  /**
   * 获取元素大小
   * 
   * @param {*} locator 
   * @returns { width: 32, height: 32 }
   */
  async elementGetSize(locator){
    const browser = await this.driver.browser
    const ele = await browser.$(parseLocator(locator))
    return ele.getSize()
  }
  /**
   * 元素是否显示
   * 
   * @param {*} locator 
   */
  async elementDisplayed(locator) {
    const browser = await this.driver.browser
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
   * 获取元素左上角的坐标
   * 
   * @param {*} locator 
   * 
   * @returns ex:{ x: 150, y: 20 }
   */
  async elementGetLocation(locator) {
    const browser = await this.driver.browser
    const ele = await browser.$(parseLocator(locator))
    const location = ele.getLocation()

    return location
  }

  /**
   * api获取单元格的rect
   * 
   * @param {*} row 行数（0开始）
   * @param {*} col 列数
   * 
   * @returns rect, ex: {x: 50, y: 22, width: 100, height: 22}
   */
  async apiGetCellRect(row, col) {
    const browser = await this.driver.browser
    const rect = await browser.execute((r, c) => {
      sheetApi.editor.spread.gcSpread.getActiveSheet().getCellRect(r, c)
    }, row, col)

    return rect
  }

  /**
   * api获取总列数
   */
  async apiGetColumnCount() {
    const browser = await this.driver.browser
    const colCounts = await browser.execute(() => {
      sheetApi.editor.spread.gcSpread.getActiveSheet().getColumnCount()
    })

    return colCounts
  }

  /**
   * api获取总行数
   */
  async apiGetRowCount() {
    const browser = await this.driver.browser
    const rowCounts = await browser.execute(() => {
      sheetApi.editor.spread.gcSpread.getActiveSheet().getRowCount()
    })

    return rowCounts
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
