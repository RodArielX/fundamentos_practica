// LABORATORIO 6 
// ARIEL ASHQUI

"use strict";

// Guardar un usuario en el LocalStorage
const guardarUsuario = (usuario) => {
    localStorage.setItem("user", JSON.stringify(usuario));
    console.log("Usuario guardado:", usuario);
};

// Obtener el usuario guardado en el LocalStorage
const obtenerUsuario = () => {
    const usuarioGuardado = localStorage.getItem("user");
    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        console.log("Usuario obtenido del LocalStorage:", usuario);
        return usuario;
    } else {
        console.log("No hay usuario guardado en el LocalStorage.");
        return null;
    }
};

// Eliminar el usuario del LocalStorage
const eliminarUsuario = () => {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
        console.log("Usuario eliminado del LocalStorage");
    } else {
        console.log("No hay usuario para eliminar en el LocalStorage.");
    }
};

// Fetch para obtener el usuario de la API y luego guardarlo en el LocalStorage
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        const usuario = data.data[0]; // Obtener el primer usuario
        guardarUsuario(usuario);      // Guardar el usuario en el LocalStorage
        obtenerUsuario();             // Obtener y mostrar el usuario guardado
        eliminarUsuario();            // Eliminar el usuario del LocalStorage
    })
    .catch(error => console.error("Error al obtener los datos:", error));
