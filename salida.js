"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cliente = function Cliente(nombre, apellido) {
  _classCallCheck(this, Cliente);

  this.nombre = nombre;
  this.apeliido = apellido;
};

var hola = function hola() {
  console.log('hola mundo desde babel');
};
