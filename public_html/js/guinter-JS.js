$(document).ready(function(){
    $(".dados").hide();
    $(".dados").slideUp();
    $("#DadosPessoais").click(function(){
        $("#DadosPessoais>.dados").stop().slideDown();
    });
    
     $("#InformacoesAdicionais").click(function(){
        $("#InformacoesAdicionais>.dados").stop().slideDown();
    });
    
     $("#DadosProfissionais").click(function(){
        $("#DadosProfissionais>.dados").stop().slideDown();
    });
});