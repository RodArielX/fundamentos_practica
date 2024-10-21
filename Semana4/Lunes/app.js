// ARIEL ASHQUI

// Simulación de canciones de varios artistas
const baseDeDatosCanciones = {
    'Feid': [
        { id: 1, name: 'Luna' },
        { id: 2, name: 'Le Pido a Dios' }
    ],
    'Mora': [
        { id: 3, name: 'Donde se aprende a Querer' },
        { id: 4, name: 'La Inocente' }
    ],
    'Bad Bunny': [
        { id: 5, name: 'Monaco' },
        { id: 6, name: 'Haciendo que me Amas' }
    ],
    'Rels B': [
        { id: 7, name: 'La Ultima Cancion' },
        { id: 8, name: 'Pretty Girl' }
    ]
};

// Función asincrónica que simula la búsqueda de un artista
async function buscarArtista() {
    const artistaInput = document.getElementById('artista').value;
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    
    resultadoBusqueda.innerHTML = 'Buscando canciones...'; // Mostrar mensaje de búsqueda
    
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de una demora (2 segundos)
    
    if (baseDeDatosCanciones[artistaInput]) {
        const canciones = baseDeDatosCanciones[artistaInput];
        mostrarCanciones(canciones);
    } else {
        resultadoBusqueda.innerHTML = 'No se encontraron canciones para el artista ingresado.';
    }
}

// Función para mostrar las canciones encontradas
function mostrarCanciones(canciones) {
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    resultadoBusqueda.innerHTML = ''; // Limpiar resultados anteriores

    canciones.forEach(cancion => {
        const cancionDiv = document.createElement('div');
        cancionDiv.classList.add('cancion');
        cancionDiv.textContent = `${cancion.name}`;
        cancionDiv.dataset.id = cancion.id;

        cancionDiv.addEventListener('click', () => seleccionarCancion(cancion));
        resultadoBusqueda.appendChild(cancionDiv);
    });
}

// Función para seleccionar canción
function seleccionarCancion(cancion) {
    const cancionActual = document.getElementById('cancion-actual');
    cancionActual.textContent = `Reproduciendo: ${cancion.name}`;
    cancionActual.dataset.id = cancion.id;
    document.querySelector('.botones-reproduccion').style.display = 'block'; // Mostrar botones de reproducción/pausa
}

// Función para reproducir canción
function reproducirCancion() {
    const cancionActual = document.getElementById('cancion-actual');
    if (cancionActual.dataset.id) {
        cancionActual.textContent += ' (Reproduciendo)';
    } else {
        alert('Selecciona una canción primero.');
    }
}

// Función para pausar canción
function pausarCancion() {
    const cancionActual = document.getElementById('cancion-actual');
    if (cancionActual.dataset.id && cancionActual.textContent.includes('(Reproduciendo)')) {
        cancionActual.textContent = cancionActual.textContent.replace(' (Reproduciendo)', ' (Pausado)');
    }
}

// Asociar eventos a los botones
document.getElementById('buscar').addEventListener('click', buscarArtista);
document.getElementById('reproducir').addEventListener('click', reproducirCancion);
document.getElementById('pausar').addEventListener('click', pausarCancion);


  
  
  