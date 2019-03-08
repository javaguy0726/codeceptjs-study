const I = actor();

/**
 * 官网 - 桌面左右边公共部分
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

    }
  },

  rightPanel: {
    css: '.right_panel',
    
  },


}
