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
   * api获取行高
   * 
   * @param {*} row 
   */
  async apiGetRowHeight(row) {
    const browser = await this.driver.browser
    const rHeight = await browser.execute((r) => {
      sheetApi.editor.spread.gcSpread.getActiveSheet().getRowHeight(r)
    },row)

    return rHeight
  }

  /**
   * api获取列宽
   * 
   * @param {*} col 
   */
  async apiGetRowHeight(col) {
    const browser = await this.driver.browser
    const cWidth = await browser.execute((c) => {
      sheetApi.editor.spread.gcSpread.getActiveSheet().getColumnWidth(c)
    }, col)

    return cWidth
  }

  /**
   * api获取数据验证的个数
   */
  async apiGetValidatorLength() {
    const browser = await this.driver.browser
    const valiLen = await browser.execute(() => {
      return sheetApi.editor.spread.gcSpread.getActiveSheet()._validations._validators.length
    })

    return valiLen
  }

  /**
   * 添加sheet
   */
  async apiAddSheet() {
    const browser = await this.driver.browser
    const curSheet = await browser.execute(() => {
      sheetApi.addSheet()
      sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    })

    return curSheet
  }

  /**
   * 切换到sheet
   * @param {*} index 
   */
  async apiSwitchToSheet(index) {
    const browser = await this.driver.browser
    const curSheet = await browser.execute((idx) => {
      const sheetId = sheetApi.editor.spread.sheets[idx].id
      sheetApi.editor.spread.setActiveSheet(sheetId);
      return sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    }, index)

    return curSheet
  }

  /**
   * 重命名sheet
   * 
   * @param {*} index 
   * @param {*} name 
   */
  async apiRenameSheet(index, name) {
    const browser = await this.driver.browser
    const curSheet = await browser.execute((idx, n) => {
      const sheetId = sheetApi.editor.spread.sheets[idx].id
      sheetApi.editor.spread.setActiveSheet(sheetId);
      sheetApi.editor.spread.renameSheet(sheetApi.editor.spread.getActiveSheet().id, n)
      return sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    }, index, name)

    return curSheet
  }

  /**
   * 删除sheet
   * 
   * @param {*} index 
   */
  async apiDeleteSheet(index) {
    const browser = await this.driver.browser
    const curSheet = await browser.execute((idx) => {
      const sheetId = sheetApi.editor.spread.sheets[idx].id
      sheetApi.editor.spread.setActiveSheet(sheetId)
      sheetApi.deleteSheet()
      return sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    }, index)

    return curSheet
  }

  /**
   * 获取激活sheet的编号
   */
  async apiGetActiveSheetIndex() {
    const browser = await this.driver.browser
    const curSheet = await browser.execute(() => {
      return sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    })

    return curSheet
  }

  /**
   * 获取激活sheet的名字
   */
  async apiGetActiveSheetName() {
    const browser = await this.driver.browser
    const sheetName = await browser.execute(() => {
      return sheetApi.editor.spread.gcSpread.getActiveSheet()._name
    })

    return sheetName
  }

  /**
   * api创建sheet副本
   * @param {*} index 
   */
  async apiCopySheet(index) {
    const browser = await this.driver.browser
    const curIndex = await browser.execute((idx) => {
      typeof idx === 'number' || (idx = sheetApi.editor.spread.gcSpread.getActiveSheetIndex())
      sheetApi.editor.spread.copySheet(sheetApi.editor.spread.getSheetByIndex(idx).id)
      return sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
    }, index)

    return curIndex
  }


  /**
   * 选择区域(可无视可视范围)
   * 
   * @param {*} row 
   * @param {*} col 
   * @param {*} rowCount 
   * @param {*} colCount 
   */
  async apiSetSelection(row, col , rowCount, colCount) {
    const browser = await this.driver.browser
     await browser.execute((r, c, rc, cc) => {
      sheetApi.setSelection(r, c ,rc, cc)
    }, row, col , rowCount, colCount)

  }

  /**
   * 插入行
   * 
   * @param {*} row 
   * @param {*} rowCount 
   * @param {*} direction 方向，可选值['up','down'] 
   */
  async apiAddRows(row, rowCount, direction) {
    const browser = await this.driver.browser
     await browser.execute((r,rc,drt) => {
      sheetApi.editor.spread.getActiveSheet().addRows(r, rc, drt)     
    }, row, rowCount, direction)

  }

  /**
   * 添加列
   * 
   * @param {*} col 
   * @param {*} colCount 
   * @param {*} direction 方向, 可选值 ['right' , 'left']
   */
  async apiAddCols(col, colCount, direction) {
    const browser = await this.driver.browser
     await browser.execute((c,cc,drt) => {
      sheetApi.editor.spread.getActiveSheet().addColumns(c, cc, drt)     
    }, col, colCount, direction)

  }

  /**
   * 删除列
   * 
   * @param {*} col 
   * @param {*} colCount 
   */
  async apiDeleteCols(col, colCount) {
    const browser = await this.driver.browser
     await browser.execute((c,cc) => {
      sheetApi.editor.spread.getActiveSheet().removeColumns(c,cc);     
    }, col, colCount)

  }

  /**
   * 删除行
   * 
   * @param {*} row 
   * @param {*} rowCount 
   */
  async apiDeleteRows(row, rowCount) {
    const browser = await this.driver.browser
     await browser.execute((r,rc) => {
      sheetApi.editor.spread.getActiveSheet().removeRows(r,rc);     
    }, row, rowCount)
  }

  /**
   * 选中行
   * 
   * @param {*} row 
   * @param {*} rowCount 
   */
  async apiSelectRows(row, rowCount) {
    const browser = await this.driver.browser
     await browser.execute((r,rc) => {
      sheetApi.selectRows(r,rc);     
    }, row, rowCount)
  }

  /**
   * 
   * 选中列
   * @param {*} col 
   * @param {*} colCount 
   */
  async apiSelectCols(col, colCount) {
    const browser = await this.driver.browser
     await browser.execute((c,cc) => {
      sheetApi.selectCols(c,cc);     
    }, col, colCount)
  }

  /**
   * 设置样式
   * @param {*} type 
   * @param {*} value 
   */
  async apiSetStyle(type, value) {
    const browser = await this.driver.browser
     await browser.execute((t,v) => {
      sheetApi.setStyle(t,v)    
    }, type, value)
  }

  /**
   * 添加图片
   * 
   * @param {*} row 
   * @param {*} col 
   * @param {*} info 图片信息:{
          height: '120',
          width: '120',
          images: 'https://dn-shimo-image-dev.qbox.me/6LJiJufOd3oGN3pf/avatar.jpg',
          url: 'https://dn-shimo-image-dev.qbox.me/6LJiJufOd3oGN3pf/avatar.jpg',
        }
   */
  async apiSetCellImage(row, col, info) {
    const browser = await this.driver.browser
     await browser.execute((r,c,i) => {
      sheetApi.addCellImage(r,c,i)    
    }, row, col,info)
  }

  /**
   * 给区域设置值,默认是从1开始递增
   * 
   * @param  {...any} values 
   */
  async apiSetRangeValues(...values) {
    const browser = await this.driver.browser
     await browser.execute((v) => {
       if(v.length===0){
         automatedTest.utils.setRangeValues()  
        }else{
          automatedTest.utils.setRangeValues(values)  
       }
    }, values)
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
