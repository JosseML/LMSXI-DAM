function validarFormulario(formulario) {
	

   var nombreCorrecto= comprobacionNombre(formulario);
   var apellidosCorrecto= comprobacionApellidos(formulario);
   var dniCorrecto= comprobacionDni(formulario);
   var contrasenaCorrecto= comprobacionContrasena(formulario);

    
   enviar(formulario);

    if(nombreCorrecto && apellidosCorrecto && dniCorrecto){
        return true;
    } else {
        return false;
    }

}


function comprobacionDni(formulario){
	var DNI=/^\d{8}[a-zA-Z]{1}/;
	if(formulario.dni.value.match(DNI)||formulario.dni.value.length==0){
		return true;
	}else{
		formulario.dni.focus();
		alert("Formato DNI incorrecto");
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
	}else{
		formulario.apellidos.focus();
		alert("Formato Apellidos incorrecto");
		return false;
	}
}

function comprobacionContrasena(formulario){
	
	if(formulario.contrasena.value.length==0 || formulario.contrasena.value.length<=10){
		return true;
	}else{
		formulario.contrasena.focus();
		alert("Formato Contraseña incorrecto");
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

