$(document).ready(function(){
	$('#imagem').hover(function(){
		$("#body").slideToogle("slow");
	});
	$("imagem").mouseleave({
		$("#body").slideUp();
	});
});