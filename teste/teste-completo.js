function click (name,time){
	driver.findElement(By.className(name)).click();
	driver.sleep(time);
}
function voltar(){
	driver.findElement(By.id('back')).click();
	driver.sleep(2000);
}
function slideContent(name,time){
	driver.findElement(By.id(name)).click();
	driver.sleep(time);
}
function switchIframe(name){
	driver.switchTo().frame(driver.findElement(By.id("ifrm")));
	driver.sleep(2000);
	driver.findElement(By.id(name)).click();
	driver.sleep(2000);
}
function resizeWindow(){
	driver.manage().window().setSize(550,700);
	driver.sleep(3000);
	driver.manage().window().maximize();
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
	resizeWindow();
	voltar();
	click('grupo geison',4000);
	resizeWindow();
	voltar();
	click('grupo guinter',3000);
	resizeWindow();
	slideContent('DadosPessoais',3000);
	slideContent('InformacoesAdicionais',3000);
	slideContent('DadosProfissionais',3000);
	voltar();
	click('grupo luisa',3000);
	click('close-reveal-modal',2000);
	resizeWindow();
	click('fotoluisa',3000);
	resizeWindow();
	slideContent('aperta',3000);
	slideContent('aperta2',3000);
	voltar();
	click('close-reveal-modal',2000);
	voltar();
	click('grupo brunomarques',3000);
	resizeWindow();
	slideContent('personalTitle',3000);
	slideContent('professionalTitle',3000);
	slideContent('hobbyTitle',3000);
	slideContent('contactTitle',3000);
	voltar();
	click('grupo brunoklein',3000);
	resizeWindow();
	slideContent('animacaopessoais',3000);
	slideContent('animacaoprofissionais',3000);
	slideContent('animacaoadicionais',3000);
	voltar();
	click('grupo brunoklein',3000);
	switchIframe('brunomarques');
	switchIframe('brunoklein');
	switchIframe('geison');
	switchIframe('guinter');
	switchIframe('valeria');
	switchIframe('luisa');
	click('close-reveal-modal',2000);
	switchIframe('inicio');