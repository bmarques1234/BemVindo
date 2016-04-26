$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
<<<<<<< f247abb63056a4b1a13f6bfa5cecdb4432522054
<<<<<<< 096ebbe0b100d1b4a340c4f23ae7865125f80597
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
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< b8fb56975c344690ffb535a0021682d1c0a846a7
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
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< f247abb63056a4b1a13f6bfa5cecdb4432522054
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
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< b8fb56975c344690ffb535a0021682d1c0a846a7
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