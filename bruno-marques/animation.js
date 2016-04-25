$(document).ready(function(){
<<<<<<< 46170c1aa70248ecfe5b1d7bf282b9453d51b415
<<<<<<< 597b8b00780b6d92fc6fdf490ff0d2508d2592d9
=======
>>>>>>> botao video e audio
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 03dc6747501e80fbcf21d336f1c15ed272e77db9
<<<<<<< 9d91ea78995d5cdc8ef743b774ec6c32dd59f987
<<<<<<< d07716992b5a15d8f1e26a37978507aeef21c1c9
<<<<<<< 3bf43a72cfa6943a3c49b0344fa4d8506732e48c
<<<<<<< 12d65ce198e762c70f9f701e9ab4cebca4abfa73
<<<<<<< 9c4093889bb0675d0b43b53becd0db41a3d4f403
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f7fc348215c9bc1e21845418f0a8428a9b7a5a4d
<<<<<<< f56023b243ff363b8b9435a639dc43f65fb1f2af
<<<<<<< 17293cd98d977d99c2532caa9402b82f93e0a259
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
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
>>>>>>> ajuste videos
=======
=======
<<<<<<< 32de96967b9fe3db6b0baa38859c4424a5352d39
>>>>>>> pull
<<<<<<< 9c4093889bb0675d0b43b53becd0db41a3d4f403
>>>>>>> pull
=======
=======
>>>>>>> ajuste videos
>>>>>>> ajuste videos
=======
=======
=======
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
>>>>>>> ajuste videos
<<<<<<< f247abb63056a4b1a13f6bfa5cecdb4432522054
>>>>>>> botoes play
<<<<<<< 096ebbe0b100d1b4a340c4f23ae7865125f80597
<<<<<<< 03dc6747501e80fbcf21d336f1c15ed272e77db9
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 7ded62a50e0602f53b6ef38ef4968b985a72045c
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
	$("#showBorder").hide();
	$("#showDivinity").hide();
<<<<<<< d07716992b5a15d8f1e26a37978507aeef21c1c9
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
=======
>>>>>>> ajuste videos
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f7fc348215c9bc1e21845418f0a8428a9b7a5a4d
=======
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< ad3f02912bc37d351a6812732ff484ddffe5931d
<<<<<<< f34f76672c63e21cf5ad8366911538a0514967fe
<<<<<<< 2976652da3f2a7977fede7a3f2d3cfebe8fc813d
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
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> ajuste videos
=======
=======
=======
<<<<<<< 97cf5bf39550d41552f179a3f6d5c10037de03c7
>>>>>>> ajuste videos
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 46170c1aa70248ecfe5b1d7bf282b9453d51b415
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
=======
>>>>>>> ajuste videos
<<<<<<< 9d91ea78995d5cdc8ef743b774ec6c32dd59f987
>>>>>>> ajuste videos
<<<<<<< 1df10c35c29195582f3ee1feaa3c9627789cbd89
=======
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
>>>>>>> botoes play
=======
<<<<<<< b8fb56975c344690ffb535a0021682d1c0a846a7
>>>>>>> botao video e audio
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> ajuste videos
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
<<<<<<< 9d91ea78995d5cdc8ef743b774ec6c32dd59f987
<<<<<<< 3bf43a72cfa6943a3c49b0344fa4d8506732e48c
<<<<<<< 8443819509602a5b1ce2a7ebb06534bb5c37dcd5
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f56023b243ff363b8b9435a639dc43f65fb1f2af
=======
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
<<<<<<< 3bf43a72cfa6943a3c49b0344fa4d8506732e48c
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
=======
<<<<<<< f247abb63056a4b1a13f6bfa5cecdb4432522054
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
<<<<<<< 46170c1aa70248ecfe5b1d7bf282b9453d51b415
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
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< 2976652da3f2a7977fede7a3f2d3cfebe8fc813d
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
<<<<<<< f34f76672c63e21cf5ad8366911538a0514967fe
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
=======
	$("#clickBorder").click(function(){
		$("#border").fadeToggle();
		
	});
	$("#clickDivinit").click(function(){
		$("#divinit").fadeToggle();
		
>>>>>>> botoes play
	});
<<<<<<< 7ded62a50e0602f53b6ef38ef4968b985a72045c
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
<<<<<<< 3bf43a72cfa6943a3c49b0344fa4d8506732e48c
>>>>>>> botoes play
<<<<<<< 9a3c904bc9cd5f3e6a79adf8eac2532fb3344744
>>>>>>> botoes play
=======
=======
>>>>>>> botao video e audio
>>>>>>> botao video e audio
=======
    var videoSoja=document.getElementById("soja");
    var videoManeva=document.getElementById("maneva");
    $("video").fadeOut();
    $(".content").hide();
    $(".content").slideUp();
    $("#pauseSoja").hide();
    $("#pauseManeva").hide();
    $("#showBorder").hide();
    $("#showDivinity").hide();
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
>>>>>>> barra menu
=======
>>>>>>> botoes play
=======
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
<<<<<<< 9d91ea78995d5cdc8ef743b774ec6c32dd59f987
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
<<<<<<< b8fb56975c344690ffb535a0021682d1c0a846a7
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
<<<<<<< ad3f02912bc37d351a6812732ff484ddffe5931d
>>>>>>> botoes play
=======
=======
>>>>>>> botao video e audio
>>>>>>> botao video e audio
});