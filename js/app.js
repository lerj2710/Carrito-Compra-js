//declarando variables
const carrito = document.querySelector('#carrito');// selecionando el div del carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody');// donde se va almacenar los carritos
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
      //enviando el curso slelecionad
        leerDatoCurso(cursoSeleccionado);
    }
}

//leer el contenido HTML y al que le dimos click
function leerDatoCurso(curso) {
       // crear un objecto que muestre la informacion del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        imagen: curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),//seleccionando el id desde el html
        cantidad: 1
    };

    // verificar si un carrito tiene un objeto duplicado
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
        if(existe){
            //Actulizar la cantidad
            const cursos = articulosCarrito.map( curso =>{
               
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;//retorna el objeto actulizado
                }else{
                    return curso;// // retorna el objeto no son duplicado
                }
            });
            articulosCarrito = [...cursos];
        }else{
            //Agregar elementos al carrito
            articulosCarrito = [...articulosCarrito, infoCurso];// usando express operartor
        }             
    console.log(articulosCarrito);
    carritoHTML();
}


// Mostar el contenido en el HTML de el carrito

function carritoHTML() {

    //  LIMPIAR EL HTML
        limpiarHtml();
    articulosCarrito.forEach( curso => {// iretar sobre cada objeto mas rapido
        //usar distructurar objecto
        const { imagen, titulo,precio,id,cantidad}=curso;
        //generar el HTML
        const row = document.createElement('tr');
        row.innerHTML= `
            <td>  
               <img src="${imagen}" width=100>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
       
        `;
        //Agrega el HTML del carrito al tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHtml() {
 //forma lenta
    //   contenedorCarrito.innerHTML='';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}