/**
 *  Reference: https://shimo.im/sheet/eWfmuFibciI9EJkl/eLoOW
 * 
 */

Feature('字符串存储的数字')

Scenario('row2', async (I, officalPages, officialFragments) => {
  I.amOnPage('https://shimo.im/login')
  
  officalPages.loginPage.waitForPageToLoad()
  officalPages.loginPage.signIn('autotest1@shimo.im', '123456')
  
  officalPages.dashboardPage.waitForPageToLoad()
  
  

})  
