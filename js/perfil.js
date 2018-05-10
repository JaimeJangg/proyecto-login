$(document).ready(function(){
    let url='https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search= new URLSearchParams(window.location.search)

    url += search.get('id');
    url += '?access_token=' + search.get('token');

    $.getJSON(url,function(resp){
        $('.nombre').text(resp.nombre);
        $('#github').text(resp.github);
        $('.fotoPerfil img').attr('src',resp.foto);
        $('.musica').text(resp.musica);
        //$('.info').text(resp.social);
    });
});
