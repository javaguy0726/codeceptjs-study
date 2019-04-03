const I = actor()

module.exports = {
  root: { id: '#root' },
  header: {
    saving: { xpath: ".//span[text()='正在保存...']" },

  },

  menu: {

  },

  toolbar: {
    switchBtnClose:{xpath:".//div[@class='toolBarSwitch ']"},
    switchBtnOpen:{xpath:".//div[@class='toolBarSwitch toolBarSwitch__open']"},

  },

  fx: {
    label: { css: '.fx-left-label' },

  },

  sheet: {
    canvas: { css: '#sm-canvas-container-viewport' },

    scrollBar:{
      horizontal:{css:"#sm-sheet-scroll-container-h .sm-sheet-scroll-bar"},
      vertical:{css:"#sm-sheet-scroll-container-v .sm-sheet-scroll-bar"},
      numTip:{css:".sm-sheet-spread-toolTip"},
    },

    contextMenu:{
      root:{xpath:".//ul[@class='spread-contextmenu-list'][./li]"},
      copy:{xpath:".//ul[@class='spread-contextmenu-list']//li[text()='复制']"},
      paste:{xpath:".//ul[@class='spread-contextmenu-list']//li[text()='粘贴']"},
      cut:{xpath:".//ul[@class='spread-contextmenu-list']//li[text()='剪切']"},
      comment:{xpath:".//ul[@class='spread-contextmenu-list']//li[text()='添加评论']"},
      link:{xpath:".//ul[@class='spread-contextmenu-list']//li[text()='插入链接']"},
      validation:{xpath:".//ul[@class='spread-contextmenu-list']//span[text()='数据验证']"},
    },


  },

  sheetTab: {

  },

  confirmDialog:{
      root: {css: '.confirm-dialog'},
      title:{
        uploadImg:{xpath:".//div[contains(@class,'confirm-dialog ')]//span[text()='上传图片']"}
      },
      button:{
        confirm:{xpath:".//div[contains(@class,'confirm-dialog ')]//button[text()='确认']"},
        cancel:{xpath:".//div[contains(@class,'confirm-dialog ')]//button[text()='取消']"},
      },


  },

  modalContent:{
    //匿名编辑窗口
    anonymousEdit:{
      body:{css:'.sm-modal-body'},
      edit:{xpath:".//div[text()='匿名编辑']"},

    },
    


  },

  tips:{
    failDelLastSheet:{xpath:".//span[text()='无法删除最后一个工作表']"},
    sheetNameExist:{xpath:".//p[text()='工作表名称已经存在!']"},
    pasting:{xpath:".//p[text()='正在粘贴，请稍等...']"},
    fileMoved:{xpath:".//span[contains(text(),'个文件已移动至')]"},
    favorited:{xpath:".//span[contains(text(),'」已收藏')]"},
    unFavorited:{xpath:".//span[contains(text(),'」已取消收藏')]"},
    shortcutAdded:{xpath:".//span[contains(text(),'已添加到快捷方式')]"},
    shortcutRemoved:{xpath:".//span[contains(text(),'已从快捷方式移除')]"},
    cpoied:{xpath:".//span[contains(text(),'副本已保存到「')]"},
    syncing:{xpath:".//p[contains(text(),'正在同步离线数据')]"},
    synced:{xpath:".//p[contains(text(),'同步成功')]"},
    uploadingImg:{xpath:".//p[contains(text(),'图片正在上传')]"},

    newFunc:{
      addMoreFormat:{xpath:".//p[text()='新增更多格式']"},
      addFilterView:{xpath:".//p[contains(text(),'新增筛选视图功能，协作者可独立创建筛选')]"},
      addSwitchToolBar:{xpath:".//p[contains(text(),'点击切换工具栏')]"},

    },
  },


  waitForPageToLoad() {
    I.waitForVisible(this.main.account)
  },

  /**
   * 提交登录
   *
   * @param {*} account
   * @param {*} password
   */
  signIn(account, password) {
    I.fillField(this.main.account, account)
    I.fillField(this.main.password, password)
    I.click(this.main.submitButton)
  },

  /**
   * M站提交登录
   *
   * @param {*} account
   * @param {*} password
   */
  mSignIn(account, password) {
    I.fillField(this.m_main.account, account)
    I.fillField(this.m_main.password, password)
    I.click(this.m_main.submitButton)
  }
}
