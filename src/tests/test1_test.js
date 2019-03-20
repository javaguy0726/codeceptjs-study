Feature('My First Test')

Scenario('login', async (I, loginPage, dashboardPage, officialSidePanel, desktopPage) => {
  I.amOnPage('https://shimo.im/login')
  
  loginPage.waitForPageToLoad()
  loginPage.signIn('autotest1@shimo.im', '123456')
  
  dashboardPage.waitForPageToLoad()
  
  officialSidePanel.myDesktop()
  
  await desktopPage.waitForPageToLoad()

})  
