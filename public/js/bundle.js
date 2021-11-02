/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectores.js */ \"./js/selectores.js\");\n/* harmony import */ var _funciones_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funciones.js */ \"./js/funciones.js\");\n\r\n\r\n\r\n//============== Resgistrar los eventos=================\r\n cargarEventListeners();\r\nfunction cargarEventListeners() {// esta funcion carga los eventos por defecto \r\n    \r\n    //Cuando agregas un curso precionado \"Agregar carrito\"\r\n    _selectores_js__WEBPACK_IMPORTED_MODULE_0__.listaCursos.addEventListener('click', _funciones_js__WEBPACK_IMPORTED_MODULE_1__.agregarCurso);\r\n\r\n    // eliminar curso desde el carrito\r\n    _selectores_js__WEBPACK_IMPORTED_MODULE_0__.carrito.addEventListener('click', _funciones_js__WEBPACK_IMPORTED_MODULE_1__.eliminarX);\r\n\r\n    //vaciar carrito\r\n    _selectores_js__WEBPACK_IMPORTED_MODULE_0__.vaciarCarritoBtn.addEventListener('click', _funciones_js__WEBPACK_IMPORTED_MODULE_1__.vaciarCarrito);\r\n}\r\n\n\n//# sourceURL=webpack://carrito-compra/./js/app.js?");

/***/ }),

/***/ "./js/funciones.js":
/*!*************************!*\
  !*** ./js/funciones.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarCurso\": () => (/* binding */ agregarCurso),\n/* harmony export */   \"eliminarX\": () => (/* binding */ eliminarX),\n/* harmony export */   \"vaciarCarrito\": () => (/* binding */ vaciarCarrito),\n/* harmony export */   \"carritoHTML\": () => (/* binding */ carritoHTML),\n/* harmony export */   \"limpiarHtml\": () => (/* binding */ limpiarHtml)\n/* harmony export */ });\n/* harmony import */ var _selectores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectores.js */ \"./js/selectores.js\");\n let articulosCarrito = [];\r\n\r\n//Funciones\r\nfunction agregarCurso(e) {\r\n    e.preventDefault();\r\n\r\n    if (e.target.classList.contains('agregar-carrito')) {\r\n        const cursoSeleccionado = e.target.parentElement.parentElement;// escalando de padre a hijo\r\n      //enviando el curso slelecionad\r\n        leerDatoCurso(cursoSeleccionado);\r\n    }\r\n}\r\nfunction eliminarX(e) {\r\n    if (e.target.classList.contains('borrar-curso')) {\r\n       const cursosId = e.target.getAttribute('data-id');\r\n        // eliminar el arreglo desde articulosCarrito por el data-id    \r\n        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursosId);\r\n        console.log(articulosCarrito);\r\n    }\r\n    carritoHTML();// volver a mostrar el html ó cargar el html desde cero\r\n    \r\n}\r\nfunction vaciarCarrito() {\r\n            articulosCarrito= [];// resetear el html\r\n            limpiarHtml(); // limpiar el html\r\n}\r\n\r\n//leer el contenido HTML y al que le dimos click\r\nfunction leerDatoCurso(curso) {\r\n       // crear un objecto que muestre la informacion del curso\r\n    let infoCurso = {\r\n        // imagen : curso.querySelector('img').src,\r\n        imagen: curso.querySelector('img').src,\r\n        titulo : curso.querySelector('h4').textContent,\r\n        precio : curso.querySelector('.precio span').textContent,\r\n        id     : curso.querySelector('a').getAttribute('data-id'),//seleccionando el id desde el html\r\n        cantidad: 1\r\n    };\r\n\r\n    // verificar si un carrito tiene un objeto duplicado\r\n    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);\r\n        if(existe){\r\n            //Actulizar la cantidad\r\n            const cursos = articulosCarrito.map( curso =>{\r\n               \r\n                if (curso.id === infoCurso.id) {\r\n                    curso.cantidad++;\r\n                    return curso;//retorna el objeto actulizado\r\n                }else{\r\n                    return curso;// // retorna el objeto no son duplicado\r\n                }\r\n            });\r\n            articulosCarrito = [...cursos];\r\n        }else{\r\n            //Agregar elementos al carrito\r\n            articulosCarrito = [...articulosCarrito, infoCurso];// usando express operartor\r\n        }             \r\n        // console.log(articulosCarrito);\r\n    \r\n    carritoHTML();\r\n}\r\n\r\n\r\n// Mostar el contenido en el HTML de el carrito\r\n\r\nfunction carritoHTML() {\r\n\r\n    //  LIMPIAR EL HTML\r\n        limpiarHtml();\r\n    articulosCarrito.forEach( curso => {// iretar sobre cada objeto mas rapido\r\n        //usar distructurar objecto\r\n        const { imagen, titulo,precio,id,cantidad}=curso;\r\n        //generar el HTML\r\n        const row = document.createElement('tr');\r\n        row.innerHTML= `\r\n            <td>  \r\n               <img src=\"${imagen}\" width=100>\r\n            </td>\r\n            <td>\r\n                ${titulo}\r\n            </td>\r\n            <td>\r\n                ${precio}\r\n            </td>\r\n            <td>\r\n                ${cantidad}\r\n            </td>\r\n            <td>\r\n                <a href=\"#\" class=\"borrar-curso\" data-id=\"${id}\">X</a>\r\n            </td>\r\n       \r\n        `;\r\n        //Agrega el HTML del carrito al tbody\r\n        _selectores_js__WEBPACK_IMPORTED_MODULE_0__.contenedorCarrito.appendChild(row);\r\n    })\r\n}\r\n\r\n\r\nfunction limpiarHtml() {\r\n //forma lenta\r\n    //   contenedorCarrito.innerHTML='';\r\n    while (_selectores_js__WEBPACK_IMPORTED_MODULE_0__.contenedorCarrito.firstChild) {\r\n        _selectores_js__WEBPACK_IMPORTED_MODULE_0__.contenedorCarrito.removeChild(_selectores_js__WEBPACK_IMPORTED_MODULE_0__.contenedorCarrito.firstChild);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://carrito-compra/./js/funciones.js?");

/***/ }),

/***/ "./js/selectores.js":
/*!**************************!*\
  !*** ./js/selectores.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carrito\": () => (/* binding */ carrito),\n/* harmony export */   \"vaciarCarritoBtn\": () => (/* binding */ vaciarCarritoBtn),\n/* harmony export */   \"listaCursos\": () => (/* binding */ listaCursos),\n/* harmony export */   \"contenedorCarrito\": () => (/* binding */ contenedorCarrito)\n/* harmony export */ });\n//declarando variables\r\nconst carrito = document.querySelector('#carrito');// selecionando el div del carrito\r\nconst vaciarCarritoBtn = document.querySelector('#vaciar-carrito');// donde puedo vaciar todo los productos\r\nconst listaCursos = document.querySelector('#lista-cursos'); // div donde estan los cursos de los productos\r\nconst contenedorCarrito = document.querySelector('#lista-carrito tbody');// donde se va almacenar los carritos\r\n\n\n//# sourceURL=webpack://carrito-compra/./js/selectores.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;