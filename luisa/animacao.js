$(document).ready(function(){
	
	$(".fonteitalico").slideUp();
	$("#flip").click(function(){
		$("#flip>.fonteitalico").stop().slideToggle("slow");
	});
});
