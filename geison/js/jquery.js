$(document).ready(function(){
	$('#header').hide();
	$('#header').css('margin-top', '-5px');
	$('#header>img').hide();
	$('#infoPessoais').hide();
	$('#infoCont').hide();
	$('#infoProf').hide();
	$('#infoAdic').hide();
	$('#backtoindex').hide();
	$('.content-lists > div').hide();
	
	$('#header').slideDown(300,function(){
		$('#header>img').fadeIn(800, function(){
			$('#infoPessoais').slideDown(300, function(){
				$('#infoCont').slideDown(300, function(){
					$('#infoProf').slideDown(300, function(){
						$('#infoAdic').slideDown(300, function(){
							$('.content-lists > div').fadeIn(500);
							$('#backtoindex').slideDown(300);
						});
					});
				});
			});
		});
	});
	
	setInterval(function(){
		$('#header>img').delay(1000).animate({opacity:0.5},1500);
		$('#header>img').delay(500).animate({opacity:1},1500);
	},1500);
	
	
	
});