'use strict';

const contenedor = document.querySelector('#contenedor-cards');
const input_filtro = document.querySelector('#txt-filtro');

let lista_productos;

let mostrar_cards = async() => {
    let filtro = input_filtro.value.toLowerCase();

    lista_productos = await listar_productos();

    contenedor.innerHTML = '';
    for (let i = 0; i < lista_productos.length; i++) {
        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let header = document.createElement('header');

        let titulo = document.createElement('h5');
        titulo.innerText = lista_productos[i]['nombre'];

        let precio = document.createElement('h6');
        precio.innerText = lista_productos[i]['precio'];

        let descripcion = document.createElement('p');
        descripcion.innerText = lista_productos[i]['descripcion'];

        let boton = document.createElement('button');
        boton.classList.add('btn-mas');
        boton.innerText = 'Ver más';
        boton.dataset._id = lista_productos[i]['_id'];

        boton.addEventListener('click', function() {
            localStorage.setItem('id_producto', this.dataset._id);
            window.location.href = 'perfil-producto.html';
        });

        contenedor.appendChild(div_card);
        div_card.appendChild(header);
        div_card.appendChild(titulo);
        div_card.appendChild(precio);
        div_card.appendChild(descripcion);
        div_card.appendChild(boton);



    };
};


mostrar_cards();
input_filtro.addEventListener('keyup', mostrar_cards);