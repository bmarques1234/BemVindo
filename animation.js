
$(document).ready(function(){
    
    function subir(){
        $('#imagem > div.mensagem').css('display', 'block');
        $('#imagem').mouseover(function(){
            $('#imagem > div.mensagem').stop().animate({top: '90%'}),100;
        });
    }

    function descer(){
        $('#imagem').mouseout(function(){
            $('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
        });
    }
    
    function ocultar(){
        $('.close').stop().animate({top: '-20px'}),100;
    }

    $('.open').on("click", function(){
        $('.close').fadeIn(100);
        $('#imagem > div.mensagem').css('display', 'none');
        $('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
        $('#imagem > div.fundo').stop().fadeIn(100);
        $('#imagem > div.nomes').stop().fadeIn(100);
    });
    
    $('.close').on("click", function(){
        $('#imagem > div.nomes').stop().fadeOut(100);
        $('#imagem > div.fundo').stop().fadeOut(100);
        $('#imagem > div.mensagem').stop().fadeOut(100);
        $('#imagem > div.mensagem').css('display', 'none');
        $('#imagem > div.mensagem').stop().animate({top: '100%'}),100;
        $('.close').fadeOut(100);
        subir();
        
    });
    
    subir();
    descer();
});