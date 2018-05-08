$(document).ready(function(){
    let url='https://cb-api-gdl.herokuapp.com/api/alumnos/5aebaa77818aba0014ae9c8c'

    $.getJSON(url,function(resp){
        $('.nombre').text(resp.nombre);
        $('#github').text(resp.github);
        $('.fotoPerfil img').attr('src',resp.foto);
        $('.musica').text(resp.musica);
        //$('.info').text(resp.social);
    });
});
