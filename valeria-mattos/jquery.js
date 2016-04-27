$(document).ready(function(){
	 $("#meunome").mouseover(function(){
        $("#dados").slideUp(800);
    });
    $("#meunome").mouseout(function(){
        $("#dados").slideDown(800);
    });
});