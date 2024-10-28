// ARIEL ASHQUI

// Función para obtener un usuario
const obtenerUsuarioFacebook = async (userId) => {
    const fetch = (await import('node-fetch')).default; 

    try {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const data = await response.json();
        return data.data; // Devolvemos solo el objeto de usuario
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        return null;
    }
};

const obtenerReaccionesFacebook = async (postId) => {
    try {
        const reacciones = {
            postId: postId,
            likes: Math.floor(Math.random() * 100),
            loves: Math.floor(Math.random() * 50),
            wow: Math.floor(Math.random() * 30)
        };
        return reacciones; 
    } catch (error) {
        console.error("Error al obtener las reacciones:", error);
        return null;
    }
};

module.exports = { obtenerUsuarioFacebook, obtenerReaccionesFacebook };
