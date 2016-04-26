$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< f1680a46973db2fd18d03c126a3332d196f58170
<<<<<<< fa8f6aaae432239b34af4e6098a41d00be3f2c71
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
<<<<<<< f247abb63056a4b1a13f6bfa5cecdb4432522054
<<<<<<< 096ebbe0b100d1b4a340c4f23ae7865125f80597
=======
=======
=======
=======
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
>>>>>>> ajuste videos
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
>>>>>>> botoes play
<<<<<<< 97cf5bf39550d41552f179a3f6d5c10037de03c7
<<<<<<< fa8f6aaae432239b34af4e6098a41d00be3f2c71
>>>>>>> ajuste videos
=======
=======
<<<<<<< 32de96967b9fe3db6b0baa38859c4424a5352d39
>>>>>>> pull
<<<<<<< f1680a46973db2fd18d03c126a3332d196f58170
>>>>>>> pull
=======
=======
>>>>>>> ajuste videos
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
	$("#showBorder").hide();
	$("#showDivinity").hide();
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
=======
>>>>>>> ajuste videos
<<<<<<< fa8f6aaae432239b34af4e6098a41d00be3f2c71
<<<<<<< b5ef8a5199984e4b204348c65e04b1c51791ce19
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
=======
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 19c5243d32911be96ad3dea283f56172ea7907de
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
=======
<<<<<<< 5f4b5e7dc3274e61ab707152404cd72e096cc79a
>>>>>>> botao video e audio
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> pull
=======
>>>>>>> ajuste videos
=======
=======
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
<<<<<<< e777a6e1fff567e11310c6d89a3746abd9397cb3
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
=======
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
>>>>>>> botoes play
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
=======
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
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
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 5f4b5e7dc3274e61ab707152404cd72e096cc79a
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
<<<<<<< 19c5243d32911be96ad3dea283f56172ea7907de
>>>>>>> botoes play
=======
=======
>>>>>>> botao video e audio
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