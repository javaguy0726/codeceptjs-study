Feature('My First Test');

Scenario('login', (I, loginPage) => {
  I.amOnPage("https://shimo.im/login")
  loginPage.sendForm('autotest1@shimo.im','123456')
  I.see('Hello, John')
});