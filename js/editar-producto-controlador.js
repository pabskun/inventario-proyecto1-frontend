'use strict';

const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_precio = document.querySelector('#txt-precio');
const input_descripcion = document.querySelector('#txt-descripcion');
const btn_guardar = document.querySelector('#btn-guardar');

input_codigo.disabled = true;

let _idproducto = sessionStorage.getItem('_idproducto');


let llenarformulario = async() => {
    let producto = await obtener_producto_id(_idproducto);

    input_codigo.value = producto['codigo'];
    input_nombre.value = producto['nombre'];
    input_precio.value = producto['precio'];
    input_descripcion.value = producto['descripcion'];
}


if (_idproducto) {
    llenarformulario();
} else {
    console.log('Seleccione un producto antes de editarlo');
}