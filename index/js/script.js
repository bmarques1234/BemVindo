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
	
	function ocultar(){
		$('.close').stop().animate({top: '-20px'}),100;
	}

	$('.open').on("click", function(){
		$('.close').fadeIn(100);
		$('#imagem > div.mensagem').css('display', 'none');
		$('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
		$('#imagem > div.fundo').stop().fadeIn(100);
		$('#imagem > div.nomes').stop().fadeIn(100);
	});
	
	$('.close').on("click", function(){
		$('#imagem > div.nomes').stop().fadeOut(100);
		$('#imagem > div.fundo').stop().fadeOut(100);
		$('#imagem > div.mensagem').stop().fadeOut(100);
		$('#imagem > div.mensagem').css('display', 'none');
		$('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
		$('.close').fadeOut(100);
		subir();
		
	});
	
	subir();
	descer();
	
	$('.luisa').click(function(){
		$(window.document.location).attr('href','luisa/index.html');
	});
	$('.luisa').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Luisa.");
	});
	$('.luisa').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.geison').click(function(){
		$(window.document.location).attr('href','geison/index.html');
	});
	$('.geison').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Geison.");
	});
	$('.geison').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.guinter').click(function(){
		$(window.document.location).attr('href','guinter/index.html');
	});
	$('.guinter').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Guinter.");
	});
	$('.guinter').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.valeria').click(function(){
		$(window.document.location).attr('href','valeria-mattos/index.html');
	});
	$('.valeria').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Valéria.");
	});
	$('.valeria').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.brunomarques').click(function(){
		$(window.document.location).attr('href','bruno-marques/index.html');
	});
	$('.brunomarques').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Bruno Marques.");
	});
	$('.brunomarques').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
	
	$('.brunoklein').click(function(){
		$(window.document.location).attr('href','bruno-klein/index.html');
	});
	$('.brunoklein').mouseover(function(){
		$('#imagem > .mensagem').html("Clique aqui para mais informações sobre Bruno Klein.");
	});
	$('.brunoklein').mouseout(function(){
		$('#imagem > .mensagem').html("Clique sobre os rostos para mais informações:");
	});
});