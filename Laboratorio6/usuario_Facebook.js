// LABORATORIO 6 
// ARIEL ASHQUI

"use strict";

// Obtener el primer usuario de Facebook
fetch('https://reqres.in/api/users/1')
    .then(response => response.json())
    .then(data => {
        const usuario = data.data;
        console.log("Usuario de Facebook:", usuario);
    })
    .catch(error => console.error("Error al obtener el usuario:", error));

const obtenerUsuarioFacebook = async (userId) => {
    try {
        const peticion = await fetch(`https://reqres.in/api/users/${userId}`);
        const response = await peticion.json();
        const usuario = response.data;
        console.log("Otro usuario de Facebook:", usuario.first_name, usuario.last_name);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
};

obtenerUsuarioFacebook(1);

