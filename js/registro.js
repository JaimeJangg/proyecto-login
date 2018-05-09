function registrar() {
    if (validaCampos()) {
        alert('todo chido, ahora que?');
        //Mandas info al server
        let losDatos = {
            'nombre': $('#textoNombre').val(),
            'github': $('#correo').val(),
            'foto': $('#Foto').val(),
            'password': $('#contraseña').val(),
            'email': $('#correo').val(),
        };

        $.post('https://cb-api-gdl.herokuapp.com/api/alumnos',losDatos)
            .done(function(respuesta){
                console.log('done',respuesta)
            }).fail(function(respuesta){
                console.log('errrrrror',respuesta)
            });

    }
}

function validaCampos() {
    let nombre = $('#textoNombre').val();
    if (nombre.length > 0) {
        let correo = $('#correo').val();
        if (correo.length > 0) {
            let github = $('#GitHub').val();
            if (github.length > 0) {
                let foto = $('#Foto').val();
                if (foto.length > 0) {
                    let contraseña = $('#contraseña').val();
                    if (contraseña.length > 0) {
                        let contraseña2 = $('#contraseña2').val();
                        if (contraseña2 == contraseña) {
                            return true;
                        }
                        else alert('he compa y la validacion de la contraseña?')
                    }
                    else aletrt('eh compa y la contraseña?')
                }
                else alert('eh compa y la foto que?')
            }
            else alert('eh compra y el github que?');
        }
        else alert('eh compra, y el correo que?');
    }
    else alert('eh compa, y el nombre donde?');
    return false;
}