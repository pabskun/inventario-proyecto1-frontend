'use strict';

const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_precio = document.querySelector('#txt-precio');
const input_descripcion = document.querySelector('#txt-descripcion');
const btn_guardar = document.querySelector('#btn-guardar');



// function obtener_datos(){}
let obtener_datos = () => {
    let codigo = input_codigo.value;
    let nombre = input_nombre.value;
    let precio = input_precio.value;
    let descripcion = input_descripcion.value;

    console.log('código', codigo);
    console.log('nombre', nombre);
    console.log('precio', precio);
    console.log('descripción', descripcion);
};




// Eventos asociados a los botones o inputs

btn_guardar.addEventListener('click', obtener_datos);