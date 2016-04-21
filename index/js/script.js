$(document).ready(function(){
	$("#imagem").mouseover(function(){
		$("#imagem > div").stop().animate({top: '90%'}),100;
	});
	$("#imagem").mouseout(function(){
		$("#imagem > div").stop().animate({top: '100%'}),100;
	});
});