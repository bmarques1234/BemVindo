
	
/*$(document).ready(function(){
	
	function inicio(){
		$("#menu").hide();
		$("#menu").fadeIn("slow");
	});

	inicio();}
*/
/*window.alert("Seja bem vindo(a).");*/
	
$(document).ready(function(){
		$(".fonteitalico").slideUp();
		$("#flip").click(function(){
			$("#flip>.fonteitalico").stop().slideToggle("slow");
		});
	});
