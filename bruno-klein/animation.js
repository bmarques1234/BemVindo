$(document).ready(function(){
    $(".conteudo").hide();
    $(".conteudo").slideUp();
    $("#animacaopessoais").click(function(){
        $("#animacaopessoais>.conteudo").stop().slideToggle();
    });
    
     $("#animacaoprofissionais").click(function(){
        $("#animacaoprofissionais>.conteudo").stop().slideToggle();
    });
    
     $("#animacaoadicionais").click(function(){
        $("#animacaoadicionais>.conteudo").stop().slideToggle();
    });
});