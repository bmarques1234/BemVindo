function click (name,time){
	driver.findElement(By.className(name)).click();
	driver.sleep(time);
}
function switchIframe(name){
	driver.switchTo().frame(driver.findElement(By.id("ifrm")));
	driver.sleep(2000);
	driver.findElement(By.id(name)).click();
	driver.sleep(2000);
}
var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
        until = require('selenium-webdriver').until;
		
var driver = new webdriver.Builder()
	.forBrowser('firefox')
		.build();
	
	driver.manage().window().maximize();
	driver.get('file:///D:/Bruno%20Klein/BemVindo/dist/index.html');
	
	click('grupo brunoklein',3000);
	switchIframe('brunomarques');
	switchIframe('brunoklein');
	switchIframe('geison');
	switchIframe('guinter');
	switchIframe('valeria');
	switchIframe('luisa');
	click('close-reveal-modal',2000);
	switchIframe('inicio');