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
   * @param {*} sec 秒
   * 
   * @returns true=显示 false=不显示
   */
  async waitDisplayed(locator, sec) {
    const browser = await this.driver.browser
    let rtn = true
    try {
      await browser.waitUntil(async () => {
        const ele = await browser.$(this.parseLocator(locator))
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
   * @param {*} act 要执行的操作,EX:
   * [
        { action: 'press', x: 200, y: 200 },
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ]
   */
  async touchAction(act) {
    const browser = await this.driver.browser
    await browser.touchAction(act)
  }

  /**
   * 获取元素大小
   * 
   * @param {*} locator 
   * @returns { width: 32, height: 32 }
   */
  async elementGetSize(locator) {
    const browser = await this.driver.browser
    const ele = await browser.$(this.parseLocator(locator))
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
      const ele = await browser.$(this.parseLocator(locator))
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
    const ele = await browser.$(this.parseLocator(locator))
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
      return sheetApi.getActiveSheet().getCellRect(r, c)
    }, row, col)

    return rect
  }

  /**
   * api获取总列数
   */
  async apiGetColumnCount() {
    const browser = await this.driver.browser
    const colCounts = await browser.execute(() => {
      return sheetApi.getActiveSheet().getColumnCount()
    })

    return colCounts
  }

  /**
   * api获取总行数
   */
  async apiGetRowCount() {
    const browser = await this.driver.browser
    const rowCounts = await browser.execute(() => {
      return sheetApi.getActiveSheet().getRowCount()
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
      return sheetApi.getActiveSheet().getRowHeight(r)
    }, row)

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
      return sheetApi.getActiveSheet().getColumnWidth(c)
    }, col)

    return cWidth
  }

  /**
   * api获取数据验证的个数
   */
  async apiGetValidatorLength() {
    const browser = await this.driver.browser
    const valiLen = await browser.execute(() => {
      return sheetApi.getActiveSheet()._validations._validators.length
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
      return  sheetApi.editor.spread.gcSpread.getActiveSheetIndex()
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
      return sheetApi.getActiveSheet()._name
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
  async apiSetSelection(row, col, rowCount, colCount) {
    const browser = await this.driver.browser
    await browser.execute((r, c, rc, cc) => {
      sheetApi.setSelection(r, c, rc, cc)
    }, row, col, rowCount, colCount)

  }

  /**
   * 撤销
   */
  async apiUndo() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.undo()
    })

  }

  /**
   * 重做
   */
  async apiRedo() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.redo()
    })

  }

  /**
   * 获取cell的attr
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async apiGetCellAttrs(row, col) {
    const browser = await this.driver.browser
    await browser.execute((r, c) => {
      sheetApi.getCellAttrs(sheetApi.getActiveSheet(), r, c)
    }, row, col)

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
    await browser.execute((r, rc, drt) => {
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
    await browser.execute((c, cc, drt) => {
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
    await browser.execute((c, cc) => {
      sheetApi.editor.spread.getActiveSheet().removeColumns(c, cc);
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
    await browser.execute((r, rc) => {
      sheetApi.editor.spread.getActiveSheet().removeRows(r, rc);
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
    await browser.execute((r, rc) => {
      sheetApi.selectRows(r, rc)
    }, row, rowCount)
  }

  /**
   * 获取随机的单元格区域
   * 
   * @returns 数组: [25, 7, 175, 11]
   */
  async apiGetRandomRange() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      return sheetApi.randomRange()
    })
  }

  /**
   * 删除cell, 同cell上按下Delete键
   * 
   */
  async apiDeleteCell() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.deleteCell()
    })
  }

  /**
   * 
   * 选中列
   * @param {*} col 
   * @param {*} colCount 
   */
  async apiSelectCols(col, colCount) {
    const browser = await this.driver.browser
    await browser.execute((c, cc) => {
      sheetApi.selectCols(c, cc);
    }, col, colCount)
  }

  /**
   * 设置样式
   * @param {*} type 
   * @param {*} value 
   */
  async apiSetStyle(type, value) {
    const browser = await this.driver.browser
    await browser.execute((t, v) => {
      sheetApi.setStyle(t, v)
    }, type, value)
  }

  /**
   * 设置默认样式数据(写死在api方法中)
   */
  async apiSetStyleData() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      automatedTest.utils.setCellStyle()
    })
  }

  /**
   * 添加一组包含各种格式的数据
   * @param  {...any} data 
   */
  async apiSetFormatData(...data) {
    const browser = await this.driver.browser
    await browser.execute(() => {
      if (data.length > 0) {
        automatedTest.utils.setFormatData(data)
      } else {
        automatedTest.utils.setFormatData()
      }
    })
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
    await browser.execute((r, c, i) => {
      sheetApi.addCellImage(r, c, i)
    }, row, col, info)
  }

  /**
   * 给区域设置值,默认是从1开始递增
   * 
   * @param  {...any} values 
   */
  async apiSetRangeValues(...values) {
    const browser = await this.driver.browser
    await browser.execute((v) => {
      if (v.length === 0) {
        automatedTest.utils.setRangeValues()
      } else {
        automatedTest.utils.setRangeValues(values)
      }
    }, values)
  }

  /**
   * 合并单元格
   */
  async apiMergeCells() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.mergeCells()
    })
  }

  /**
   * 解除合并单元格
   */
  async apiUnMergeCells() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.unMergeCells()
    })
  }

  /**
   * api设置链接
   * 
   * @param {*} info 链接的信息, 如:
   * {
          url: 'http://www.gagaga.com',
          text: 'baidu',
          row:1,
          col:2,
        }
   */
  async apiSetLink(info) {
    const browser = await this.driver.browser
    await browser.execute((i) => {
      sheetApi.setLink(i)
    }, info)
  }

  /**
   * 取消选择区域内的link
   */
  async apiCancelLinks() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.cancelLinks()
    })
  }

  /**
   * 获取区域的value
   */
  async apiGetRangeValues() {
    const browser = await this.driver.browser
    const rtnVal = await browser.execute(() => {
      return automatedTest.utils.getRangeValues()
    })

    return rtnVal
  }

  /**
   * 获取区域的Text
   */
  async apiGetRangeTexts() {
    const browser = await this.driver.browser
    const rtnVal = await browser.execute(() => {
      return automatedTest.utils.getRangeTexts()
    })

    return rtnVal
  }

  /**
   * 获取区域的rect
   */
  async apiGetRangeRects() {
    const browser = await this.driver.browser
    const rtnVal = await browser.execute(() => {
      return automatedTest.utils.getRangeCellRects()
    })

    return rtnVal
  }

  /**
   * 获取区域的attr
   */
  async apiGetRangeAttrs() {
    const browser = await this.driver.browser
    const rtnVal = await browser.execute(() => {
      return automatedTest.utils.getRangeAttrs()
    })

    return rtnVal
  }

  /**
   * 获取区域的actual styles
   */
  async apiGetRangeActualStyle() {
    const browser = await this.driver.browser
    const rtnVal = await browser.execute(() => {
      return automatedTest.utils.getRangeActualStyles()
    })

    return rtnVal
  }

  /**
   * 获取sheet的个数
   */
  async apiGetSheetNumber() {
    const browser = await this.driver.browser
    const rtnLen = await browser.execute(() => {
      return sheetApi.editor.spread.sheets.length
    })

    return rtnLen
  }

  /**
   * 获取指定sheet tab的信息, 如:
   * {i: 0, x(相对于canvas的x坐标): 82, w(tab宽度): 93, tw(文字宽度): 56, t(表名): "工作表129", …}
   * 
   * @param {*} index 
   */
  async apiGetSheetTabInfo(index) {
    const browser = await this.driver.browser
    const tabInfo = await browser.execute((idx) => {
      return sheetApi.editor.spread.gcSpread._tab._tabs[idx]
    }, index)

    return tabInfo
  }

  /**
   * 冻结行或列
   * 
   * @param {*} pos 要冻结的类型,如:
   *  { row: 3, col: 4 }
   */
  async apiFreezeRowOrCol(pos) {
    const browser = await this.driver.browser
    await browser.execute((p) => {
      sheetApi.freezeRowOrCol(p)
    }, pos)
  }

  /**
   * api取消冻结
   */
  async apiCancelFreeze() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      sheetApi.cancelFreeze()
    })
  }

  /**
   * 获取选择区域内的条件格式
   * 
   * @returns 条件格式数组
   * {
   *  selections: Array(1), ruleType: "equalsTo", value: "1", background: "#e88080", guid: "FZ9bKTn1h1vzK2f0"
   * }
   */
  async apiGetCondiFormat() {
    const browser = await this.driver.browser
    await browser.execute(() => {
      return sheetApi.getConditionalFormat()
    })
  }

  /**
   * 给选中区域设置多个条件格式
   * 
   * @param {*} rules 条件
   *  [
        {
          background: '#e88080',
          ruleType: 'equalsTo',
          sortIndex: 1,
          value: 11,
          selections: [{ row: 6, col: 7, rowCount: 1, colCount: 1 }],
        },
        {
          background: '#e88080',
          ruleType: 'equalsTo',
          sortIndex: 1,
          value: 11,
          selections: [{ row: 6, col: 7, rowCount: 1, colCount: 1 }],
        },
      ]
   * 
   */
  async apiSetCondiFormat(rules) {
    const browser = await this.driver.browser
    await browser.execute((r) => {
      return sheetApi.setConditionalFormat(r)
    }, rules)
  }

  /**
   * 删除选中区域的所有条件格式
   * 
   * @param {*} guids 条件的guids数组
   */
  async apiDeleteCondiFormat(guids) {
    const browser = await this.driver.browser
    await browser.execute((gs) => {
      let removedRules = {}
      gs.forEach((g) => {
        removedRules['condition-format-' + g] = null
      })

      const sheet = sheetApi.editor.srpead.getActiveSheet()
      sheet.actions.applyConditionalFormat(sheet.gcSheet, removedRules)

    }, guids)
  }

  /**
   * 删除选中区域指定索引的条件格式
   * 
   * @param {*} index 
   */
  async apiDeleteCondiFormatByIndex(index) {
    const browser = await this.driver.browser
    await browser.execute((idx) => {
      sheetApi.deleteConditionalFormatByIndex(idx)
    }, index)
  }

  /**
   * 获取cell的评论
   * 
   * @param {*} pos 位置对象,如{ row: 1; col: 2 } 
   * 
   * @returns comment数组
   */
  async apiGetComment(pos) {
    const browser = await this.driver.browser
    const cmmt = await browser.execute((p) => {
      return sheetApi.getComment(p)
    }, pos)

    return cmmt
  }

  /**
   * 添加评论
   * 
   * @param {*} content 
   */
  async apiAddComment(content) {
    const browser = await this.driver.browser
    await browser.execute((cnt) => {
      sheetApi.addComment(cnt)
    }, content)

  }

  /**
   * 删除评论项
   * 
   * @param {*} row 
   * @param {*} col 
   * @param {*} index 
   */
  async apiDeleteComment(row, col, index) {
    const browser = await this.driver.browser
    await browser.execute((r, c, idx) => {
      const cmmt = sheetApi.getComment({ r, c })
      sheetApi.deleteComment(cmmt[idx]['comment_guid'])
    }, row, col, index)

  }

  /**
   * 结束评论
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async apiCloseComment(row, col) {
    const browser = await this.driver.browser
    await browser.execute((r, c) => {
      const cmmt = sheetApi.closeComment({ r, c })
    }, row, col)

  }

  //TBD 待添加更多api方法

  /**
   * 获取sheet的当前顺序
   * @param {*} index 
   */
  async apiGetSheetTabOrder(index) {
    const browser = await this.driver.browser
    const tabOrder = await browser.execute((idx) => {
      return sheetApi.editor.spread.sheets[idx].order
    }, index)

    return tabOrder
  }

  /**
   * 行是否可见
   * 
   * @param {*} row 
   */
  async apiIsRowVisible(row) {
    const browser = await this.driver.browser
    const vis = await browser.execute((idx) => {
      return sheetApi.getActiveSheet().getRowVisible(idx)
    }, row)

    return vis
  }

  /**
   * 列是否可见
   * @param {*} col 
   */
  async apiIsColVisible(col) {
    const browser = await this.driv
    er.browser
    const vis = await browser.execute((idx) => {
      return sheetApi.getActiveSheet().getColumnVisible(idx)
    }, col)

    return vis
  }

  /**
   * 数据验证单元格是否显示箭头
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async apiHasValiArrow(row, col) {
    const browser = await this.driver.browser
    const vis = await browser.execute((r, c) => {
      return sheetApi.getActiveSheet().getDataValidator(r, c).inCellDropdown()
    }, row, col)

    return vis
  }

  /**
   * 获取备选的列的索引
   */
  async apiGetSelectedColIndex() {
    const browser = await this.driver.browser
    const rtnIdx = await browser.execute(() => {
      return sheetApi.getActiveSheet().getActiveColumnIndex()
    })

    return rtnIdx
  }

  /**
   * 获取备选的行的索引
   */
  async apiGetSelectedRowIndex() {
    const browser = await this.driver.browser
    const rtnIdx = await browser.execute(() => {
      return sheetApi.getActiveSheet().getActiveRowIndex()
    })

    return rtnIdx
  }

  /**
   * 单元格输入内容
   * 
   * @param {*} content 
   */
  async apiEditCell(content) {
    const browser = await this.driver.browser
    const rtnIdx = await browser.execute(() => {
      return sheetApi.editCell(content)
    })

    return rtnIdx
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

  /**
   * 生成区间的随机数
   * 
   * @param {*} max 
   * @param {*} min 
   */
  genRandom(min, max) {
    return (Math.random() * (max - min + 1) | 0) + min
  }

}

module.exports = WdHelper
