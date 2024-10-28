// ARIEL ASHQUI

// Importar los objetos
import { obtenerUsuarioFacebook, obtenerPublicacionFacebook } from './FacebookES.js';

const iniciar = async () => {
    // Obtener el usuario de Facebook
    const usuario = await obtenerUsuarioFacebook(1);

    // Obtener una publicación de Facebook
    const publicacion = await obtenerPublicacionFacebook(2);

    console.log("Datos cargados de Facebook:");
    console.log("Usuario:", usuario);
    console.log("Publicación:", publicacion);
};

iniciar();
