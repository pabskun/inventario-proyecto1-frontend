'use strict';

const tbody = document.querySelector('#tbl-productos tbody');
const input_filtro = document.querySelector('#txt-filtro');

let lista_productos;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();

    lista_productos = await listar_productos();

    tbody.innerHTML = '';
    for (let i = 0; i < lista_productos.length; i++) {
        let nombre = lista_productos[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {
            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_productos[i]['codigo'];
            fila.insertCell().innerHTML = lista_productos[i]['nombre'];
            fila.insertCell().innerHTML = lista_productos[i]['precio'];
            fila.insertCell().innerHTML = lista_productos[i]['descripcion'];
            fila.insertCell().innerHTML = lista_productos[i]['estado'];
        }

    };
};


llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);