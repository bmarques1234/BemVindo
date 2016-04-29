var tamanho = '60px';
$(document).ready(function(){
	$('#menu').hide();
	$('#menu').fadeIn("fast");
});

function alturaIframe() {
	parent.document.getElementById("ifrm").style.height = tamanho;
}

function atualizaIframe(){
	if(tamanho=='60px'){
		tamanho='270px';
	}else{
		tamanho='60px';
	}
	parent.document.getElementById("ifrm").style.height = tamanho;
}