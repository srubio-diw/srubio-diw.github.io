'use strict';

// jQuery
// Activar el menú seleccionado
$('.nav > li').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $(this).addClass('active');
});

// FUNCIONES

/*eslint-disable no-unused-vars*/

// Función para cargar un HTML en un elemento
function loadPage (path) {
	$('#page').load(path);
}

// Funcion para validar el formulario de contacto
function validateForm() {
	// Limpio errores previos
	$('#mensajeRecibido').hide();
	$('#grupoNombre').removeClass('has-error');
	$('#nombreError').hide();
	$('#grupoEmail').removeClass('has-error');
	$('#emailError').hide();
	$('#emailInvalidError').hide();
	$('#grupoMensaje').removeClass('has-error');
	$('#mensajeError').hide();

	// comprobar que haya valores
	var nombre = $('#nombre').val();
	var email = $('#email').val();
	var telefono = $('#telefono').val();
	var mensaje = $('#mensaje').val();

	var error = false;

	if (nombre === undefined || nombre === '') {
		$('#grupoNombre').addClass('has-error');
		$('#nombreError').show();
		error = true;
	}
	if (email === undefined || email === '') {
		$('#grupoEmail').addClass('has-error');
		$('#emailError').show();
		error = true;
	} else {
		// Patrón que pide un correo en formato cuenta@dominio.extension
		// Siendo cuenta una cadena de texto formada por números, letras, -, _ y .
		// Siendo dominio una cadena de texto formada por números y letras
		// Siendo extensión una o dos letras o números, una o dos veces
		var pattern = /[0-9a-zA-Z_\.-]+\@\w+(\.\w{2,3}){1,2}/;
		var regexp = new RegExp(pattern);
		if (!regexp.test(email)) {
			$('#grupoEmail').addClass('has-error');
			$('#emailInvalidError').show();
			error = true;
		}
	}
	if (mensaje === undefined || mensaje === '') {
		$('#grupoMensaje').addClass('has-error');
		$('#mensajeError').show();
		error = true;
	}

	if (!error) {
		$('#mensajeRecibido').show();
		$('#nombre').val(null);
		$('#telefono').val(null);
		$('#email').val(null);
		$('#mensaje').val(null);
	}
}

/*eslint-enable no-unused-vars*/
