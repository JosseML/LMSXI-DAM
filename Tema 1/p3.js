function validarFormulario(formulario) {
	

   var usuarioCorrecto= comprobacionNombre(formulario);
   var apellidosCorrecto= comprobacionApellidos(formulario);
   var dniCorrecto= comprobacionDni(formulario);
   var contrasenaCorrecto= comprobacionContrasena(formulario);

    
   enviar(formulario);

    if(usuarioCorrecto){
        return true;
    } else {
        return false;
    }

}

function comprobacionUsuario(formulario){
	
	if(formulario.usuario.value.length>=1 && formulario.usuario.value.length<=30){
		return true;
	}else{
		formulario.usuario.focus();
		alert("Formato Nombre incorrecto");
		return false;
	}
}
