$(document).ready(function(){
	$('#menu').hide();
	$('#menu').fadeIn("slow");
	$('#btn_menu').click(function(){
		$('#menu').animate({
			height: '318px'
		});
	});
});