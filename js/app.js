import {vaciarCarritoBtn, listaCursos, carrito } from './selectores.js'
import {agregarCurso, eliminarX, vaciarCarrito} from './funciones.js';

//============== Resgistrar los eventos=================
 cargarEventListeners();
function cargarEventListeners() {// esta funcion carga los eventos por defecto 
    
    //Cuando agregas un curso precionado "Agregar carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // eliminar curso desde el carrito
    carrito.addEventListener('click', eliminarX);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}
