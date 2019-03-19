const desktopPage = require('../../pages/official/desktopPage'); 
const I = actor();

/**
 * 主站 - 桌面左右边公共部分
 * 
 */
module.exports = {

  leftPanel: {
    root: { css: '.sm-left-panel' },
    dashboard: {xpath: ".//a[text()='工作台'][@class]"},
    desktop: {xpath: ".//a[text()='我的桌面'][@class]"},
    favorite: {xpath: ".//a[text()='我的收藏'][@class]/span"},
    trash: {xpath: ".//a[text()='回收站'][@class]"},
    
    coSpace:{
      root: {xpath: ".//div[./div/span[text()='协作空间']]"},

    }
  },

  rightPanel: {
    root: {css: '.right_panel'},
    newFile:{
      buttonNew: {xpath: ".//div[starts-with(@class,'right_panel')]//button[text()='新建']"},
      options: {css: ".sm-menu-vertical-left"},
      newDoc: {xpath: ".//ul[contains(@class,'sm-menu-vertical-left')]//span[text()='文档']"},
      newSheet: {xpath: ".//ul[contains(@class,'sm-menu-vertical-left')]//span[text()='表格']"},
      newForm: {xpath: ".//ul[contains(@class,'sm-menu-vertical-left')]//span[text()='表单']"},

    } ,
    import:{},

    shortcut:{
      root: {xpath: ".//div[text()='快捷方式']/.."},
      shortcutList:{id: "right-sidebar-shortcuts"},
    },
  },

  myDesktop(){
    I.click(this.leftPanel.desktop)
    desktopPage.waitForPageToLoad()
  }








}
