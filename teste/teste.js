var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
        until = require('selenium-webdriver').until;
		
var driver = new webdriver.Builder()
	.forBrowser('firefox')
		.build();
	
	driver.manage().window().maximize();
	driver.get('http://www.traineedigitaldesk.pe.hu');
	
	
	driver.findElement(By.className('grupo valeria')).click();
	driver.sleep(1000);
	driver.findElement(By.id('back')).click();
	driver.findElement(By.className('grupo geison')).click();
	driver.sleep(3000);
	driver.findElement(By.id('back')).click();
	driver.findElement(By.className('grupo guinter')).click();
	driver.sleep(1000);
	driver.findElement(By.id('back')).click();
	driver.findElement(By.className('grupo luisa')).click();
	driver.sleep(3000);
	driver.findElement(By.className('close-reveal-modal')).click();
	driver.sleep(1000);
	driver.findElement(By.id('back')).click();
	driver.sleep(1000);
	driver.findElement(By.className('grupo brunomarques')).click();
	driver.findElement(By.id('personalTitle')).click();
	driver.sleep(3000);
	driver.findElement(By.id('professionalTitle')).click();
	driver.sleep(3000);
	driver.findElement(By.id('hobbyTitle')).click();
	driver.sleep(3000);
	driver.findElement(By.id('contactTitle')).click();
	driver.sleep(3000);
	driver.findElement(By.id('back')).click();
	driver.findElement(By.className('grupo brunoklein')).click();
	driver.findElement(By.id('animacaopessoais')).click();
	driver.sleep(3000);
	driver.findElement(By.id('animacaoprofissionais')).click();
	driver.sleep(3000);
	driver.findElement(By.id('animacaoadicionais')).click();
	driver.sleep(3000);
	driver.findElement(By.id('back')).click();
	driver.sleep(1000);
	driver.findElement(By.className('grupo brunoklein')).click();
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('brunomarques')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('brunoklein')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('geison')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('guinter')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('valeria')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('luisa')).click();
	driver.sleep(1000);
	driver.findElement(By.className('close-reveal-modal')).click();
	driver.sleep(1000);
	driver.switchTo().frame(driver.findElement(By.id("ifrm")))
	driver.findElement(By.id('inicio')).click();
	driver.sleep(1000);