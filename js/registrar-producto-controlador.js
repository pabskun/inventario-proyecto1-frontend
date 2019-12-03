'use strict';

const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_precio = document.querySelector('#txt-precio');
const input_descripcion = document.querySelector('#txt-descripcion');
const btn_guardar = document.querySelector('#btn-guardar');


let validar = () => {
    let error = false;

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error');
    } else {
        input_codigo.classList.remove('error');
    };

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
    } else {
        input_nombre.classList.remove('error');
    };

    if (input_precio.value == '') {
        error = true;
        input_precio.classList.add('error');
    } else {
        input_precio.classList.remove('error');
    };

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error');
    } else {
        input_descripcion.classList.remove('error');
    };

    return error;
};

// function obtener_datos(){}
let obtener_datos = () => {
    let codigo = input_codigo.value;
    let nombre = input_nombre.value;
    let precio = input_precio.value;
    let descripcion = input_descripcion.value;

    // Si hay error entra al if, si no hay error entra al else
    if (validar()) {

        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });



    } else {
        registrar_producto(codigo, nombre, precio, descripcion);
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con éxito',
            text: 'El producto ha sido almacenado',
            confirmButtonText: 'Entendido'
        });
    }


};




// Eventos asociados a los botones o inputs

btn_guardar.addEventListener('click', obtener_datos);