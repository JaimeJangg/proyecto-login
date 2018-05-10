function ingresar(){
    if (validaLogin()) {
        alert('Estas entrando a tu perfil');
        let losDatosLogin = {
            "email": $('#usuario').val(),
            "password": $('#contra').val()
        };
        $.post('https://cb-api-gdl.herokuapp.com/api/alumnos/login',losDatosLogin)
            .done(function(respuesta){
                console.log('done',respuesta)
                location.href="perfil.html?id="+respuesta.userId+"&token="+respuesta.id;
            }).fail(function(respuesta){
                console.log('error',respuesta)
            });
    }
}

function validaLogin(){
    let login = $('#usuario').val();
    if (login.length >0) {
        let pass = $('#contra').val();
        if (pass.length >0){
            return true;

        }
        else alert('La contraseña no es correcta');
}
else alert('El usuario no es correcto');
return false;
}
