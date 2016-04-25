$(document).ready(function(){
	$('#header').hide();
	$('#header>img').hide();
	$('#infoPessoais').hide();
	$('#infoCont').hide();
	$('#infoProf').hide();
	$('#infoAdic').hide();
	$('#backtoindex').hide();
	$('.content-lists > div').hide();
	
	$('#header').slideDown(200, function(){
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
	
	
});