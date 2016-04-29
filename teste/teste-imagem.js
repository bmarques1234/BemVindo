function click (name,time){
	driver.findElement(By.className(name)).click();
	driver.sleep(time);
}
function voltar(){
	driver.findElement(By.id('back')).click();
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
	
	
	click('grupo valeria',3000);
	voltar();
	click('grupo geison',4000);
	voltar();
	click('grupo guinter',3000);
	voltar();
	click('grupo luisa',3000);
	click('close-reveal-modal',2000);
	click('fotoluisa',3000);
	voltar();
	click('close-reveal-modal',2000);
	voltar();
	click('grupo brunomarques',3000);
	voltar();
	click('grupo brunoklein',3000);
	voltar();