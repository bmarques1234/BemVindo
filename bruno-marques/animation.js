$(document).ready(function(){
	$(".content").slideUp();
	$("#personalTitle").click(function(){
		$("#personalTitle>.content").stop().slideToggle("slow");
	});
	$("#professionalTitle").click(function(){
		$("#professionalTitle>.content").stop().slideToggle("slow");
	});
	$("#hobbyTitle").click(function(){
		$("#hobbyTitle>.content").stop().slideToggle("slow");
	});
	$("#contactTitle").click(function(){
		$("#contactTitle>.content").stop().slideToggle("slow");
	});
	$("#sojaVideo").click(function(){
		playSoja();
	});
	$("#manevaVideo").click(function(){
		playManeva();
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