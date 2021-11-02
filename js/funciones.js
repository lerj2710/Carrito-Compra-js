let articulosCarrito = [];
import { contenedorCarrito } from './selectores.js'
//Funciones
export function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;// escalando de padre a hijo
      //enviando el curso slelecionad
        leerDatoCurso(cursoSeleccionado);
    }
}
export function eliminarX(e) {
    if (e.target.classList.contains('borrar-curso')) {
       const cursosId = e.target.getAttribute('data-id');
        // eliminar el arreglo desde articulosCarrito por el data-id    
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursosId);
        // console.log(articulosCarrito);
    }
    carritoHTML();// volver a mostrar el html ó cargar el html desde cero
    
}
export function vaciarCarrito() {
            articulosCarrito= [];// resetear el html
            limpiarHtml(); // limpiar el html
}

//leer el contenido HTML y al que le dimos click
function leerDatoCurso(curso) {
       // crear un objecto que muestre la informacion del curso
    let infoCurso = {
        // imagen : curso.querySelector('img').src,
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
        // console.log(articulosCarrito);
    
    carritoHTML();
}


// Mostar el contenido en el HTML de el carrito

export function carritoHTML() {

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


export function limpiarHtml() {
 //forma lenta
    //   contenedorCarrito.innerHTML='';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
