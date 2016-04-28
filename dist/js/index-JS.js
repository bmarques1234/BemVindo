$(document).ready(function(){
	
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
	
	subir();
	descer();
	
	$('.luisa').click(function(){
		$(window.document.location).attr('href','perfil/luisa/index.html');
	});
	$('.luisa').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Luisa.");
	});
	$('.luisa').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.geison').click(function(){
		$(window.document.location).attr('href','perfil/geison/index.html');
	});
	$('.geison').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Geison.");
	});
	$('.geison').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.guinter').click(function(){
		$(window.document.location).attr('href','perfil/guinter/index.html');
	});
	$('.guinter').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Guinter.");
	});
	$('.guinter').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.valeria').click(function(){
		$(window.document.location).attr('href','perfil/valeria-mattos/index.html');
	});
	$('.valeria').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Valéria.");
	});
	$('.valeria').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.brunomarques').click(function(){
		$(window.document.location).attr('href','perfil/bruno-marques/index.html');
	});
	$('.brunomarques').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Bruno Marques.");
	});
	$('.brunomarques').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.brunoklein').click(function(){
		$(window.document.location).attr('href','perfil/bruno-klein/index.html');
	});
	$('.brunoklein').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Bruno Klein.");
	});
	$('.brunoklein').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
});