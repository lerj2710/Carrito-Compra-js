//declarando variables
const carrito = document.querySelector('#carrito');// selecionando el div del carrito
const contedorCarrito = document.querySelector('#lista-carrito tbody');// donde se va almacenar los carritos
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');// donde puedo vaciar todo los productos
const listaCursos = document.querySelector('#lista-cursos'); // div donde estan los cursos de los productos
let articulosCarrito = [];

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
    // console.log(curso)
    // crear un objecto que muestre la informacion del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),//seleccionando el id desde el html
        cantidad: 1
    };
    //Agregar elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];// usando express operartor
    // console.log(articulosCarrito);
    carritoHTML();
}


// Mostar el contenido en el HTML de el carrito

function carritoHTML() {

    articulosCarrito.forEach( curso => {// iretar sobre cada objeto mas rapido
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            ${curso.titulo}
        </td>
        `;
        //Agrega el HTML del carrito al tbody
        contedorCarrito.appendChild(row);
    })
}