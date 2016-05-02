function click (name,time){
	driver.findElement(By.className(name)).click();
	driver.sleep(time);
}
function switchIframe(name,time){
	driver.switchTo().frame(driver.findElement(By.id("ifrm")));
	driver.sleep(time);
	driver.findElement(By.id(name)).click();
	driver.sleep(time);
}
var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
        until = require('selenium-webdriver').until;
		
var driver = new webdriver.Builder()
	.forBrowser('firefox')
		.build();
	
	driver.manage().window().maximize();
	driver.get('file:///D:/Bruno%20Klein/BemVindo/dist/index.html'); 
	
	click('grupo brunoklein',2000);
	switchIframe('brunomarques',2000);
	switchIframe('brunoklein',2000);
	switchIframe('geison',3000);
	switchIframe('guinter',2000);
	switchIframe('valeria',2000);
	switchIframe('luisa',2000);
	click('close-reveal-modal',2000);
	switchIframe('inicio');