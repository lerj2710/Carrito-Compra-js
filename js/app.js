//declarando variables
const carrito = document.querySelector('#carrito');// selecionando el div del carrito
const contedorCarrito = document.querySelector('#lista-carrito tbody');// donde se va almacenar los carritos
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');// donde puedo vaciar todo los productos
const listaCursos = document.querySelector('#lista-cursos'); // div donde estan los cursos de los productos

//============== Resgistrar los eventos=================
cargarEventListeners();
function cargarEventListeners() {// esta funcion carga los eventos por defecto 
    //Cuando agregas un curso precionado "Agregar carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        
        console.log(e.target);
    }
}