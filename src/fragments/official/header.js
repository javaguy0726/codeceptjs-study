const I = actor()

/**
 * 主站 - 桌面header部分
 *
 */
module.exports = {
  root: { xpath: ".//div[./*[@class='left']]" },
  left: {},

  right: {
    user: {
      icon: { xpath: ".//*[@id='header']//img" },
      dropdown: { css: '.sm-menu-vertical' },
      logout: { xpath: ".//li[text()='退出登录']" }
    }
  }


  
}
