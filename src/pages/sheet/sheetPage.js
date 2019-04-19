const I = actor()

module.exports = {
  root: { id: '#root' },

  //header栏
  header: {
    saving: { xpath: ".//span[text()='正在保存...']" },
    back: { xpath: ".//div[@data-test='page-header-left']/button[1]" },
    sheetName: { xpath: ".//div[@data-test='page-header-left']//input" },

    //+号新建文件部分
    new: {
      plusBtn: { css: "[data-test='create-file']" },
      dropdown: { css: ".sm-dropdown-menu-vertical" },

    },

    quickAccess: {
      arrow: { xpath: ".//div[@data-test='page-header-left']/button[2]" },
      dropdown: { css: ".qa-content" },
    },

    moreOptions: {
      button: { xpath: ".//div[@data-test='page-header-right']/button[last()]" },
      dropdown: { css: "ul[role].sm-menu" },

      help: {
        dropdown: { xpath: ".//ul[@id='file-menu-help$Menu']" },
      },
      favorite: { xpath: ".//div[text()='收藏']/.." },
      unFavorite: { xpath: ".//div[text()='已收藏']/.." },
    },


  },

  //菜单栏
  menu: {

  },

  toolbar: {
    switchBtnClose: { xpath: ".//div[@class='toolBarSwitch ']" },
    switchBtnOpen: { xpath: ".//div[@class='toolBarSwitch toolBarSwitch__open']" },

    //加粗
    bold: {
      button: { css: '.icon--bold' },
    },

    //斜体
    italic: {
      button: { css: '.icon--italic' },
    },

    //下划线
    underline: {
      button: { css: '.icon--underline' },
    },

    //删除线
    strike: {
      button: { css: '.icon--strike' },
    },

    //字体
    font: {
      button: { css: '.toolBar--fontSize' },
      dropdown: { css: "[data-tooltip='字号'] + .menu--body" },
    },

    //前景色
    frontColor: {
      button: { css: '.icon--font_color' },
      panel: { css: ".sm-sheet-popover-placement-bottom:not(.sm-sheet-popover-hidden) .color-picker-list" },
    },

    //背景色
    backColor: {
      button: { css: '.icon--back_color' },
      panel: { css: ".sm-sheet-popover-placement-bottom:not(.sm-sheet-popover-hidden) .color-picker-input-wrap" },
    },

    //边框线
    border: {
      button: { css: '.icon--border' },
      dropdown: { css: "[data-tooltip='边框线'] + .menu--body" },
      colorPanel: { css: ".sm-sheet-popover-placement-bottom:not(.sm-sheet-popover-hidden) .color-picker-list" },
      colorInput: { css: ".sm-sheet-popover-placement-bottom:not(.sm-sheet-popover-hidden) .color-picker-input-wrap>input" },
      stylePanel: { css: "[data-tooltip='边框线'] + div .menu--body" },
    },

    //文本换行
    wrap: {
      singleLine: { css: "[data-tooltip='单行溢出']" },
      multiLine: { css: "[data-tooltip='多行溢出']" },
      autowrap: { css: "[data-tooltip='自动换行']" },
    },

    //横向对齐方式
    hAlign: {
      left: { css: "[data-tooltip='左对齐']" },
      center: { css: "[data-tooltip='居中对齐']" },
      right: { css: "[data-tooltip='右对齐']" },
      actived: { xpath: ".//span[contains(@class,'selected indicator')][./span[contains(@class,'icon--align')]]" },
    },

    //纵向对齐方式
    vAlign: {
      button: { css: "[data-tooltip='垂直对齐']" },
      dropdown: { css: "[data-tooltip='垂直对齐'] + div > .menu--content" },
    },

    //格式刷、清除格式
    brushClear: {
      brush: { css: ".icon--brush" },
      clear: { css: ".icon--format_clear" },
    },

    //数据验证
    validation: {
      button: { css: ".icon--validator" },
      errorTip: { xpath: ".//div[@class='validation-tip-item'][./strong]" },
      normalTip: { xpath: ".//div[contains(@class,'validation-normal-tip')][.//p[text()]]" },

    },

    //合并单元格
    merge: {
      button: { css: ".icon--merge_cell" },
      errorTip: { xpath: ".//div[@class='validation-tip-item'][./strong]" },
      normalTip: { xpath: ".//div[contains(@class,'validation-normal-tip')][.//p[text()]]" },

    },

    //排序
    sort: {
      button: { css: ".icon--sort" },
      dropdown: { css: "[data-tooltip='排序'] + .menu--body" },
    },

    //冻结
    freeze: {
      button: { css: ".icon--frozen" },
      dropdown: { css: "[data-tooltip='冻结'] + .menu--body" },
    },

    //条件格式
    condFormat: {
      buttonAdd: { xpath: ".//span[contains(@class,'icon--cond_format')][.//span[text()='创建条件格式']]" },
      buttonUpdate: { xpath: ".//span[contains(@class,'icon--cond_format')][.//span[contains(text(),'条规则')]]" },
    },

    //插入链接
    link: {
      buttonAdd: { css: ".icon--link" },
      dialog: {
        inputText: { xpath: ".//input[@placeholder='输入文本']" },
        lintUrl: { xpath: ".//input[@placeholder='插入链接，回车确认']" },
      },
      container: {
        root: { css: ".cell-link-container" },
      }
    },

    //查找替换
    searchReplace: {
      button: { css: ".icon--find_replace" },
      container: {
        root: { css: ".search-replace-container" },
        searchBzititn: { xpath: ".//div[contains(@class,'search-container')]//div[text()='查找']" },
        notFounzitidText: { xpath: ".//div[text()='未找到']" },
        searchFzitiield: { xpath: ".//input[@placeholder='在工作表中搜索']" },
        searchRzitiesult: { css: ".matches-navigator>.text" },
        pre: { css: ".matches-navigator>.icon-prev" },
        next: { css: ".matches-navigator>.icon-next" },
        replaceField: { css: ".replace-container input" },
        replaceLabel: { xpath: ".//div[contains(@class,'replace-container')]//div[text()='替换为']" },
        beginSearch: { xpath: ".//div[contains(@class,'search-replace-actions')]/div[text()='开始查找']" },
        beginReplace: { xpath: ".//div[contains(@class,'search-replace-actions')]/div[text()='替换']" },
        beginReplaceAll: { xpath: ".//div[contains(@class,'search-replace-actions')]/div[text()='全部替换']" },
        close: { css: ".close-button" },
      }
    },

    //评论
    comment: {
      button: { css: ".icon--comment" },
    },

    //图片
    image: {
      button: { css: ".icon--img_float" },
      dropdown: {
        root: { css: "[data-tooltip='上传图片'] + .menu--body" },

      }
    },

    //撤销
    undo: {
      button: { css: ".icon--undo" },
    },

    //重做
    redo: {
      button: { css: ".icon--redo" },
    },

    //格式
    format: {
      button: { css: ".toolBar--formatter" },
      downArrow: { css: ".toolBar--formatter + .toolBar--arrow" },
      toolTip: { css: ".toolBar--formatter ~ .tooltip__down" },
      dropdown: {
        root: { xpath: ".//span[./span[@class='toolBar--formatter']]/following-sibling::div[@class='menu--body']" },
      },
    },

  },

  fx: {
    label: { css: '.fx-left-label' },

  },


  //表格主体部分
  sheet: {
    canvas: { css: '#sm-canvas-container-viewport' },

    //滚动条
    scrollBar: {
      horizontal: { css: "#sm-sheet-scroll-container-h .sm-sheet-scroll-bar" },
      vertical: { css: "#sm-sheet-scroll-container-v .sm-sheet-scroll-bar" },
      numTip: { css: ".sm-sheet-spread-toolTip" },
    },

    //右键菜单
    contextMenu: {
      root: { xpath: ".//ul[@class='spread-contextmenu-list'][./li]" },
      copy: { xpath: ".//ul[@class='spread-contextmenu-list']//li[text()='复制']" },
      paste: { xpath: ".//ul[@class='spread-contextmenu-list']//li[text()='粘贴']" },
      cut: { xpath: ".//ul[@class='spread-contextmenu-list']//li[text()='剪切']" },
      comment: { xpath: ".//ul[@class='spread-contextmenu-list']//li[text()='添加评论']" },
      link: { xpath: ".//ul[@class='spread-contextmenu-list']//li[text()='插入链接']" },
      validation: { xpath: ".//ul[@class='spread-contextmenu-list']//span[text()='数据验证']" },
    },

    //行
    row: {
      heightNum: { xpath: ".//body/div[last() and starts-with(text(),'高度')]" },
      expandBtn: { css: ".expand-row-col-floating-object-row" },
    },

    //列
    col: {
      widthNum: { xpath: ".//body/div[last() and starts-with(text(),'宽度')]" },
      expandBtn: { css: ".expand-row-col-floating-object-col" },
    },

  },

  //sheet操作栏
  sheetTab: {

    canvas: { css: "#null_tabStrip" },
    addBlankBtn: { css: "" },
    listSheetBtn: { css: "" },
    listWrap: {
      root: { css: '.sheet-tab-list-wrap' },

    },

    context: {
      dropdown: { xpath: ".//ul[contains(@class,'spread-contextmenu-list')][./li]" },

    },


  },

  //确认框
  confirmDialog: {
    root: { css: '.confirm-dialog' },
    title: {
      uploadImg: { xpath: ".//div[contains(@class,'confirm-dialog ')]//span[text()='上传图片']" },
      merge: { xpath: ".//div[./div[contains(text(),'确定合并吗')]]" },
      replaceAll: { xpath: "" },
    },
    button: {
      confirm: { xpath: ".//div[contains(@class,'confirm-dialog ')]//button[text()='确认']" },
      cancel: { xpath: ".//div[contains(@class,'confirm-dialog ')]//button[text()='取消']" },
    },


  },

  //模块框
  modalContent: {
    //匿名编辑
    anonymousEdit: {
      body: { css: '.sm-modal-body' },
      edit: { xpath: ".//div[text()='匿名编辑']" },

    },



  },

  //提示条
  tips: {
    failDelLastSheet: { xpath: ".//span[text()='无法删除最后一个工作表']" },
    sheetNameExist: { xpath: ".//p[text()='工作表名称已经存在!']" },
    pasting: { xpath: ".//p[text()='正在粘贴，请稍等...']" },
    fileMoved: { xpath: ".//span[contains(text(),'个文件已移动至')]" },
    favorited: { xpath: ".//span[contains(text(),'」已收藏')]" },
    unFavorited: { xpath: ".//span[contains(text(),'」已取消收藏')]" },
    shortcutAdded: { xpath: ".//span[contains(text(),'已添加到快捷方式')]" },
    shortcutRemoved: { xpath: ".//span[contains(text(),'已从快捷方式移除')]" },
    cpoied: { xpath: ".//span[contains(text(),'副本已保存到「')]" },
    syncing: { xpath: ".//p[contains(text(),'正在同步离线数据')]" },
    synced: { xpath: ".//p[contains(text(),'同步成功')]" },
    uploadingImg: { xpath: ".//p[contains(text(),'图片正在上传')]" },

    newFunc: {
      moreFormat: { xpath: ".//p[text()='新增更多格式']" },
      filterView: { xpath: ".//p[contains(text(),'新增筛选视图功能，协作者可独立创建筛选')]" },
      switchToolBar: { xpath: ".//p[contains(text(),'点击切换工具栏')]" },
      customFormula: { xpath: ".//p[contains(text(),'新增范围列表和自定义公式')]" },
      deleteRepeat: { xpath: ".//p[contains(text(),'删除重复项')]" },
    },
  },


  /**
   * 等待页面加载
   */
  async waitForPageToLoad() {
    I.waitForFunction(() => typeof window.postMessage === "function" && typeof sheetApi === "object", 20)

    if (await I.waitDisplayed(this.modalContent.anonymousEdit.edit, 1) === true) {
      I.click(this.modalContent.anonymousEdit.edit)
      I.waitForInvisible(this.modalContent.anonymousEdit.edit)
    }

  },

  /**
   * 处理新功能弹出提示框(如果有)
   */
  async handleHintBars() {
    let bars = []
    bars.push(this.tips.newFunc.moreFormat)
    bars.push(this.tips.newFunc.filterView)
    bars.push(this.tips.newFunc.switchToolBar)
    bars.push(this.tips.newFunc.customFormula)
    bars.push(this.tips.newFunc.deleteRepeat)

    bars.forEach(async (b) => {
      if (await I.elementDisplayed(b)) {
        I.click(b)
        I.waitForInvisible(b, 1)
      }
    })
  },

  /**
   * 重新进入本页
   */
  async enter() {
    let url = await I.grabCurrentUrl()
    url = url.indexOf('?test=true') === -1 ? url + '?test=true' : url
    I.amOnPage(url)
    await this.waitForPageToLoad()
  },

  /**
   * 展开toolbar
   */
  async expandToolbar() {
    if (await I.elementDisplayed(this.toolbar.switchBtnClose)) {
      I.click(this.toolbar.switchBtnClose)
    }
    I.waitForVisible(this.toolbar.switchBtnOpen)
  },

  /**
   * 折叠toolbar
   */
  async encloseToolbar() {
    if (await I.elementDisplayed(this.toolbar.switchBtnOpen)) {
      I.click(this.toolbar.switchBtnOpen)
    }
    I.waitForVisible(this.toolbar.switchBtnClose)
  },


  /**
   * 鼠标移动到屏幕的左上角
   */
  async mouseToStart(){
    I.moveCursorTo(this.root)
    const rootSize = await I.elementGetSize(this.root) 
    await I.touchAction({
     action: 'moveTo', x: - rootSize.width/2, y: - rootSize.height/2
    })
  },


  /**
    * cell的中心点坐标
    * 
    * @param {*} row 
    * @param {*} col 
    */
  async coorCellCenter(row, col) {
    const { x: cellX, y: cellY, width: cellWidth, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX + cellWidth / 2,
      y: cellY + canvasY + cellHeight / 2
    }

  },

  /**
    * cell左上
    * 
    * @param {*} row 
    * @param {*} col 
    */
  async coorCellLeftTop(row, col) {
    const { x: cellX, y: cellY } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX,
      y: cellY + canvasY
    }

  },

  /**
   * cell接近左上角（出现手型的位置）
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async coorCellNearlyLeftTop(row, col) {
    const { x: cellX, y: cellY, width: cellWidth, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX + cellWidth / 20,
      y: cellY + canvasY + cellHeight / 20
    }
  },

  /**
   * cell靠近右中（三角下拉箭头显示的位置）
   * @param {*} row 
   * @param {*} col 
   */
  async coorCellNearlyRightMiddle(row, col) {
    const { x: cellX, y: cellY, width: cellWidth, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX + cellWidth * 7 / 8,
      y: cellY + canvasY + cellHeight / 2
    }


  },

  /**
   * cell右中
   * @param {*} row 
   * @param {*} col 
   */
  async coorCellRightMiddle(row, col) {
    const { x: cellX, y: cellY, width: cellWidth, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX + cellWidth,
      y: cellY + canvasY + cellHeight / 2
    }

  },

  /**
   * cell下中
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async coorCellCenterBottom(row, col) {
    const { x: cellX, y: cellY, width: cellWidth, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX + cellWidth / 2,
      y: cellY + canvasY + cellHeight
    }

  },

  /**
   * cell左中
   * 
   * @param {*} row 
   * @param {*} col 
   */
  async coorCellLeftMiddle(row, col) {
    const { x: cellX, y: cellY, height: cellHeight } = await I.apiGetCellRect(row, col)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX + canvasX,
      y: cellY + canvasY + cellHeight / 2
    }
  },

  /**
   * row头部中间
   * 
   * @param {*} row 
   */
  async coorRowHeadMiddle(row) {
    const { x: cellX, y: cellY,  height: cellHeight } = await I.apiGetCellRect(row, 0)
    const {  y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX / 2,
      y: cellY + canvasY + cellHeight / 2
    }

  },

  /**
   * row头部底线
   * 
   * @param {*} row 
   */
  async coorRowHeadBottom(row) {
    const { x: cellX, y: cellY,  height: cellHeight } = await I.apiGetCellRect(row, 0)
    const {  y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX / 2,
      y: cellY + canvasY + cellHeight
    }

  },

  /**
   * col头部中间
   * 
   * @param {*} col 
   */
  async coorColHeadCenter(col) {
    const { x: cellX, y: cellY, width: cellWidth} = await I.apiGetCellRect(0, col)
    const { y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX+cellWidth/2,
      y: canvasY+cellY/2
    }

  },


  /**
   * col 头部右边线
   * 
   * @param {*} col 
   */
  async coorColHeadRight(col) {
    const { x: cellX, y: cellY, width: cellWidth} = await I.apiGetCellRect(0, col)
    const {  y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX+cellWidth,
      y: canvasY+cellY/2
    }

  },

  /**
   * 全选表格按钮的坐标
   */
  async coorFullSelect() {
    const { x: cellX, y: cellY } = await I.apiGetCellRect(0, 0)
    const { x: canvasX, y: canvasY } = await I.elementGetLocation(this.sheet.canvas)

    return {
      x: cellX/2+canvasX,
      y: cellY/2+canvasY
    }

  },

}
