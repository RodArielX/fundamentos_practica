// ARIEL ASHQUI

// Obtener un usuario de Facebook
export const obtenerUsuarioFacebook = async (userId) => {
    try {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const data = await response.json();
        const usuario = data.data;
        console.log("Usuario de Facebook:", usuario);
        return usuario;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
};

// Obtener una publicacion aleatoria
export const obtenerPublicacionFacebook = async (postId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        console.log("Publicación de Facebook:", post.title, post.body);
        return post;
    } catch (error) {
        console.error("Error al obtener la publicación:", error);
    }
};
