$(document).ready(function(){	
	
	$('#imagem > *').click(function(){
		var nome = $(this).attr('id');
		if(nome!=undefined){
			$(window.document.location).attr('href','perfil/'+nome);
		}
	});

	$('#imagem > *').mouseover(function(){
		var msg = 'Clique aqui para mais informações sobre ';
		var nome = $(this).attr('id');
		if(nome!=undefined){
			var nbsp = nome.replace('-',' ')
			var firstLetter = nbsp.substring(0,1).toUpperCase();
			var letters = nbsp.substring(1,20);
			var positionNbsp = nbsp.indexOf(' ');
			if(positionNbsp>1){
				letters = nbsp.substring(1,positionNbsp);
				var sobrenome = nbsp.substring(positionNbsp,20);
				var sobFirstLetter = sobrenome.substring(1,2).toUpperCase();
				var sobLetters = sobrenome.substring(2,20);
				$('#imagem > .mensagem').html(msg+firstLetter+letters+' '+sobFirstLetter+sobLetters+".");
			}else{
				$('#imagem > .mensagem').html(msg+firstLetter+letters+".");
			}
			$(this).mouseout(function(){
				$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
			});
		}
	});

	subir();
	descer();
});

function subir(){
	$('#imagem > div.mensagem').css('display', 'block');
	$('#imagem').mouseover(function(){
		$('#imagem > div.mensagem').stop().animate({top: '90%'}),100;
	});
}

function descer(){
	$('#imagem').mouseout(function(){
		$('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
	});
}