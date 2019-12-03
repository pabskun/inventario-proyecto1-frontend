'use strict';

let registrar_producto = async(codigo, nombre, precio, descripcion) => {
    await axios({
                method: 'post',
                url: 'https://proyect01-inventario-produc.herokuapp.com/api/registrar-producto',
                responseType: 'json',
                //body
                data: {
                    codigo: codigo,
                    nombre: nombre,
                    precio: precio,
                    descripcion: descripcion
                }
            }

        )
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let listar_productos = async() => {
    let lista_productos;
    await axios({
            method: 'get',
            url: 'https://proyect01-inventario-produc.herokuapp.com/api/listar-productos',
            responseType: 'json'
        })
        .then(function(res) {
            lista_productos = res.data.productos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_productos;
};