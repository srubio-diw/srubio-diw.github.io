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
	// comprobar que haya valores
	var nombre = $('#nombre').val();
	var email = $('#email').val();
	var telefono = $('#telefono').val();
	var mensaje = $('#mensaje').val();

	if (nombre === undefined || nombre === '') {
		$('#grupoNombre').addClass('has-error');
		$('#nombreError').show();
	}
	if (email === undefined || email === '') {
		$('#grupoEmail').addClass('has-error');
		$('#emailError').show();
	}
	if (mensaje === undefined || mensaje === '') {
		$('#grupoMensaje').addClass('has-error');
		$('#mensajeError').show();
	}

	/* eslint-disable no-alert */
	alert('Nombre: ' + nombre + '. Correo: ' + email + '. Telefono: ' + telefono + '. Mensaje: ' + mensaje);
	/* eslint-enable no-alert */
}

/*eslint-enable no-unused-vars*/
