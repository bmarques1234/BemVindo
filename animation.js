$(document).ready(function(){
<<<<<<< 1012bfc2cf66d9fe2fb001a5b5280342cd71003d
	$('#imagem').hover(function(){
		$("#body").slideToogle("slow");
	});
	$("imagem").mouseleave({
		$("#body").slideUp();
=======
	$('#foto').hide();
	$('#imagem').hover(function(){
		$('#foto').fadeIn("slow");
	});
	$('#imagem').mouseleave(function(){
		$('#foto').fadeOut("fast");
>>>>>>> animação
	});
});