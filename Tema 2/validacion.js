function validarFormulario(formulario) {
	
  	var usuarioCorrecto= comprobacionUsuario(formulario);
  	var usuarioContrasena= comprobacionContrasena(formulario);
	var usuarioContrasena2= comprobacionContrasena2(formulario);
	var dniCorrecto= comprobacionDni(formulario);
	var apellidosCorrecto= comprobacionApellidos(formulario);
	var telefonoCorrecto= comprobacionTelefono(formulario);
 	var emailCorrecto= comprobacionCorreo(formulario);
    
	enviar(formulario);
	   
	if(usuarioCorrecto && usuarioContrasena && usuarioContrasena2 && dniCorrecto &&
		apellidosCorrecto && telefonoCorrecto && emailCorrecto ){
        return true;
    } else {
        return false;
    }

}


function comprobacionDni(formulario){
	var patron=/^\d{8}[a-zA-Z]{1}/;
	var dni= formulario.dni.value;
	if(!dni.match(patron)){
		formulario.dni.focus();
		alert("Formato DNI incorrecto");
		return false;
	}else{
		  // Separar el número y la letra
		  const numeroDni = parseInt(dni.substring(0, 8));
		  const letraDni = dni.charAt(8);
		
		  // Calcular la letra de control
		  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
		  const letraCalculada = letras.charAt(numeroDni % 23);
		
		  // Comparar la letra calculada con la letra proporcionada
		  if(letraDni == letraCalculada){
			return true;
		  } else {
			formulario.dni.focus();
			alert("Formato DNI incorrecto");
			return false;
		  }
	}
}


function comprobacionUsuario(formulario){
	var usuario=/^\S+$/;
	if(formulario.usuario.value.match(usuario) && 
	(formulario.usuario.value.length>=1 && formulario.usuario.value.length<=10)){
		return true;
	}else{
		formulario.usuario.focus();
		alert("Formato Usuario incorrecto");
		return false;
	}
}


function comprobacionContrasena(formulario){
	var pass=/^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
	if(formulario.contrasena.value.match(pass)) {
		if(	formulario.contrasena.value==formulario.contrasena2.value){
			return true;
		} else{
			formulario.contrasena.focus();
			alert("Las contraseñas debe coincidir");
			return false;
		}
	} else{
		formulario.contrasena.focus();
		alert("Formato de contraseña incorrecto");
		return false;

	}

}

function comprobacionContrasena2(formulario){
	var pass=/^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
	if(formulario.contrasena2.value.match(pass)) {
		if(	formulario.contrasena2.value==formulario.contrasena.value){
			return true;
		} else{
			formulario.contrasena2.focus();
			alert("Las contraseñas debe coincidir");
			return false;
		}
	}
	else{
		formulario.contrasena2.focus();
		alert("Formato de contraseña incorrecto");
		return false;

	}

}

function comprobacionNombre(formulario){
	if(formulario.nombre.value.length>=1 && formulario.nombre.value.length<=30){
		return true;
	}else{
		formulario.nombre.focus();
		alert("Formato Nombre incorrecto");
		return false;
	}
}



function comprobacionApellidos(formulario){
	if(formulario.apellidos.value.length>=1 && formulario.apellidos.value.length<=50){
		return true;
	} else{
		formulario.apellidos.focus();
		alert("Formato Apellidos incorrecto");
		return false;
	}
}


function comprobacionTelefono(formulario){
	var patron=/^\+?\d{1,15}$/;
	if(formulario.telefono.value.match(patron)){
		return true;
	}else{
		formulario.telefono.focus();
		alert("Formato teléfono incorrecto");
		return false;
	}
}


function comprobacionCorreo(formulario){
	var patron=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(formulario.email.value.match(patron)){
		return true;
	}else{
		formulario.email.focus();
		alert("Formato email incorrecto");
		return false;
	}
}


function enviar(formulario){

	formulario.navegador.value=navigator.userAgent;
	var aux = new Date();
	var hora = aux.getHours() + ':' + aux.getMinutes() + ':' + aux.getSeconds();
	formulario.hora.value= hora;
	return;
}
