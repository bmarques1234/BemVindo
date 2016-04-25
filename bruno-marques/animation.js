$(document).ready(function(){
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
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
	$("#sojaVideo").click(function(){
		playSoja();
	});
	$("#manevaVideo").click(function(){
		playManeva();
	});
	$(".clickBorder").click(function(){
		$("#border").fadeToggle();
		
	});
	$(".clickDivinit").click(function(){
		$("#divinit").fadeToggle();
		
	});
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	function playSoja(){
		if(videoSoja.paused){
			videoSoja.play();
			videoManeva.pause();
		}
		else videoSoja.pause();
	}
	function playManeva(){
		if(videoManeva.paused){
			videoManeva.play();
			videoSoja.pause();
		}
		else videoManeva.pause();
	}
});