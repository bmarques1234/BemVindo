$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 1e2a6313fdac50f238198a19be4af7e1035e0481
<<<<<<< 84107c4896c5dbffb83b39bbc43a562ede14d879
<<<<<<< 1c743e7d3504a446e9580fa5f69919e4d1eb0723
=======
=======
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
>>>>>>> botoes play
<<<<<<< 97cf5bf39550d41552f179a3f6d5c10037de03c7
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
	$("#showBorder").hide();
	$("#showDivinity").hide();
=======
>>>>>>> ajuste videos
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 1e2a6313fdac50f238198a19be4af7e1035e0481
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 86da4620c054afafe3f47f5b8cfba91e49785ae7
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> ajuste videos
=======
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
>>>>>>> botoes play
>>>>>>> botoes play
	$("#personal").click(function(){
		$("#personalTitle>.content").stop().slideToggle("slow");
	});
	$("#professional").click(function(){
		$("#professionalTitle>.content").stop().slideToggle("slow");
	});
	$("#hobby").click(function(){
		$("#hobbyTitle>.content").stop().slideToggle("slow");
	});
	$("#contact").click(function(){
		$("#contactTitle>.content").stop().slideToggle("slow");
	});
	$("#playSoja").click(function(){
		videoSoja.play();
		$("#playSoja").hide();
		$("#pauseSoja").show();
	});
	$("#pauseSoja").click(function(){
		videoSoja.pause();
		$("#pauseSoja").hide();
		$("#playSoja").show();
	});
	$("#replaySoja").click(function(){
		videoSoja.load();
		$("#pauseSoja").hide();
		$("#playSoja").show();
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 84107c4896c5dbffb83b39bbc43a562ede14d879
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
=======
=======
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
>>>>>>> botoes play
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 86da4620c054afafe3f47f5b8cfba91e49785ae7
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
=======
>>>>>>> botao video e audio
=======
=======
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#clickBorder").click(function(){
		$("#border").fadeToggle();
		
	});
	$("#clickDivinit").click(function(){
		$("#divinit").fadeToggle();
		
	});
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
>>>>>>> botoes play
});