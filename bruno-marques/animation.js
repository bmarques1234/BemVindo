$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
<<<<<<< 97cf5bf39550d41552f179a3f6d5c10037de03c7
=======
<<<<<<< 32de96967b9fe3db6b0baa38859c4424a5352d39
>>>>>>> pull
=======
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 7ded62a50e0602f53b6ef38ef4968b985a72045c
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
	$("#showBorder").hide();
	$("#showDivinity").hide();
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
=======
>>>>>>> ajuste videos
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 5f4b5e7dc3274e61ab707152404cd72e096cc79a
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
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
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
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
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
<<<<<<< 7ded62a50e0602f53b6ef38ef4968b985a72045c
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
<<<<<<< 9a3c904bc9cd5f3e6a79adf8eac2532fb3344744
>>>>>>> botoes play
=======
=======
>>>>>>> botao video e audio
>>>>>>> botao video e audio
});