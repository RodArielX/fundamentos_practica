// ARIEL ASHQUI

const { obtenerUsuarioFacebook, obtenerReaccionesFacebook } = require('./FacebookCommon.cjs');

const iniciar = async () => {
    const userId = 1;
    const postId = 1;

    // Obtener el usuario de Facebook 
    const usuario = await obtenerUsuarioFacebook(userId);
    if (usuario) {
        console.log("Usuario de Facebook:", usuario);
    } else {
        console.log("No se pudo obtener el usuario.");
    }

    // Obtener las reacciones de Facebook 
    const reacciones = await obtenerReaccionesFacebook(postId);
    if (reacciones) {
        console.log(`Reacciones para el post ${postId}:`);
        console.log("Likes:", reacciones.likes);
        console.log("Loves:", reacciones.loves);
        console.log("Wows:", reacciones.wow);
    } else {
        console.log("No se pudieron obtener las reacciones.");
    }
};

iniciar();
