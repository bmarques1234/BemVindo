$(document).ready(function(){
	function aparecer(){
		$('#page').fadeIn("slow");
		$('#caixa').fadeIn("slow");
	}
	
	function aparecertexto(){
		$(".fonteitalico").slideUp();
		$("#flip").click(function(){
			$("#flip>.fonteitalico").stop().slideToggle("slow");
		});
		
		$("#desliza").slideUp();
		$("#aperta").click(function(){
			$("#aperta>#desliza").stop().slideToggle("slow");
		});
		
		$("#desliza2").slideUp();
		$("#aperta2").click(function(){
			$("#aperta2>#desliza2").stop().slideToggle("slow");
		});
	}
	aparecer();
	aparecertexto();
});

$(window).load(function(){ 
	$("#janelaModal").stop().reveal();
});