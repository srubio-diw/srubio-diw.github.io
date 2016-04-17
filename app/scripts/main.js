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

/*eslint-enable no-unused-vars*/
