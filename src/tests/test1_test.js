Feature('My First Test')

Scenario('login', async (I, officalPages, officialFragments) => {
  I.amOnPage('https://shimo.im/login')
  
  officalPages.loginPage.waitForPageToLoad()
  officalPages.loginPage.signIn('autotest1@shimo.im', '123456')
  
  officalPages.dashboardPage.waitForPageToLoad()
  
  officialFragments.sidePanel.myDesktop()
  
  await officalPages.desktopPage.waitForPageToLoad()

})  
