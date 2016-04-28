$(document).ready(function(){
    $(".dados").hide();
    $(".dados").slideUp();
    $("#DadosPessoais").click(function(){
        $("#DadosPessoais>.dados").stop().slideToggle();
    });
    
     $("#InformacoesAdicionais").click(function(){
        $("#InformacoesAdicionais>.dados").stop().slideToggle();
    });
    
     $("#DadosProfissionais").click(function(){
        $("#DadosProfissionais>.dados").stop().slideToggle();
    });
});