$(document).ready(function(){
	$('.content').hide();
	$('.content').fadeIn("slow");
	
	$("#meunome").mouseover(function(){
        $("#dados").slideUp(800);
    });
    $("#meunome").mouseleave(function(){
        $("#dados").slideDown(800);
    });
	
	$(".dadosefoto").mouseover(function(){
        $(".dadosefoto").animate({borderWidth: "10px"});
    });
    $(".dadosefoto").mouseleave(function(){
        $(".dadosefoto").animate({borderWidth: "3px"});
    });
	
	$(".dadosprofissionais").mouseover(function(){
        $(".dadosprofissionais").animate({borderWidth: "10px"});
    });
    $(".dadosprofissionais").mouseleave(function(){
        $(".dadosprofissionais").animate({borderWidth: "3px"});
    });
	
	$(".informacoesadicionais").mouseover(function(){
        $(".informacoesadicionais").animate({borderWidth: "10px"});
    });
    $(".informacoesadicionais").mouseleave(function(){
        $(".informacoesadicionais").animate({borderWidth: "3px"});
    });
	
	$(".contatos").mouseover(function(){
        $(".contatos").animate({borderWidth: "10px"});
    });
    $(".contatos").mouseleave(function(){
        $(".contatos").animate({borderWidth: "3px"});
    });
});