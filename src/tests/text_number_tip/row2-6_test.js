/**
 *  Reference: https://shimo.im/sheet/eWfmuFibciI9EJkl/eLoOW
 * 
 */

Feature('test')

Before((I, officalPages) => { 
  I.amOnPage('https://shimo.im/login')
  
  officalPages.loginPage.waitForPageToLoad()
  officalPages.loginPage.signIn('autotest1@shimo.im', '123456')
  
  officalPages.dashboardPage.waitForPageToLoad()
});


Scenario('1',  (I,  sheetPages) => {
  
  I.amOnPage('https://shimo.im/sheet/WlQHGfFxpgEQGxn5/X9jjY?test=true')
  sheetPages.sheetPage.waitForPageToLoad()

})  

