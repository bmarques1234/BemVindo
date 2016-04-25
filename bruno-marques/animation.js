$(document).ready(function(){
<<<<<<< 3d0cdb58daea8d41e1555fada252deb702c89561
<<<<<<< cb92b84a83038230adcb96981d057223c84a5b3f
=======
>>>>>>> botao video e audio
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 65cfd830d36038607e919e58fd321a3f1df8c50b
<<<<<<< 22973c397e32a1409276f1b9a2185bfd6943b8be
<<<<<<< 43e43532c542cb7251ae8e14650881083721ac96
<<<<<<< 97a0ad70b906c6f11cf065fd5e83055cc68dc066
<<<<<<< 4eb8b082388e71c9847158cfce3f90610f0d5213
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 1e2a6313fdac50f238198a19be4af7e1035e0481
<<<<<<< 84107c4896c5dbffb83b39bbc43a562ede14d879
<<<<<<< 1c743e7d3504a446e9580fa5f69919e4d1eb0723
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
<<<<<<< 4eb8b082388e71c9847158cfce3f90610f0d5213
>>>>>>> ajuste videos
=======
=======
<<<<<<< 32de96967b9fe3db6b0baa38859c4424a5352d39
>>>>>>> pull
<<<<<<< 97a0ad70b906c6f11cf065fd5e83055cc68dc066
>>>>>>> pull
=======
=======
>>>>>>> ajuste videos
>>>>>>> ajuste videos
=======
<<<<<<< 096ebbe0b100d1b4a340c4f23ae7865125f80597
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 7ded62a50e0602f53b6ef38ef4968b985a72045c
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
	$("#showBorder").hide();
	$("#showDivinity").hide();
<<<<<<< 65cfd830d36038607e919e58fd321a3f1df8c50b
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
=======
>>>>>>> ajuste videos
<<<<<<< 4eb8b082388e71c9847158cfce3f90610f0d5213
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 1e2a6313fdac50f238198a19be4af7e1035e0481
=======
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< ca66303b5047eb7e6a159a3345542bbbfff24f0a
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
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 3d0cdb58daea8d41e1555fada252deb702c89561
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
=======
>>>>>>> ajuste videos
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
<<<<<<< 22973c397e32a1409276f1b9a2185bfd6943b8be
<<<<<<< 7bbe8e47af24302a546572a3a4cd1dad1c341db6
<<<<<<< 57445bcba5ed89b51f89f90ac7739877acebc094
<<<<<<< 84107c4896c5dbffb83b39bbc43a562ede14d879
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
<<<<<<< 22973c397e32a1409276f1b9a2185bfd6943b8be
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
<<<<<<< 3d0cdb58daea8d41e1555fada252deb702c89561
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
<<<<<<< ca66303b5047eb7e6a159a3345542bbbfff24f0a
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
<<<<<<< 22973c397e32a1409276f1b9a2185bfd6943b8be
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
>>>>>>> botao video e audio
});