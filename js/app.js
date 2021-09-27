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
        const cursoSeleccionado = e.target.parentElement.parentElement;// escalando de padre a hijo
        leerDatoCurso(cursoSeleccionado);
    }
}

//leer el contenido HTML y al que le dimos click
function leerDatoCurso(curso) {
    console.log(curso)
    // crear un objecto que muestre la informacion del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),//seleccionando el id desde el html
    };
    console.log(infoCurso);
}