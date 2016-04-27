$(document).ready(function(){
	$('.content').hide();
	$('.content').fadeIn("slow");
	
	$("#meunome").mouseover(function(){
        $("#dados").slideUp(800);
    });
    $("#meunome").mouseout(function(){
        $("#dados").slideDown(800);
    });
});