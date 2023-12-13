document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');

    // Función para alternar la visibilidad de un elemento y conservar el estilo display
    function toggleVisibilityAndStyle(elementId) {
        var element = document.getElementById(elementId);
        var currentDisplay = window.getComputedStyle(element).display;

        // Oculta/Muestra el elemento y aplica display: grid solo al elemento con el ID "redes"
        element.style.display = (currentDisplay === "none") ? (elementId === "redes" ? "grid" : "block") : "none";
    }

    // Llama a la función para cada elemento que deseas alternar
    toggleVisibilityAndStyle("Muestra");
    toggleVisibilityAndStyle("redes");
    toggleVisibilityAndStyle("select");
});



async function cargarJSON() {
    try {
        const respuesta = await fetch('data/InfoDrinks.json'); 
        const datosBebidas = await respuesta.json();
        return datosBebidas;
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
    }
}

async function cambiarContenido(indice) {
    const datosBebidas = await cargarJSON();
    const bebida = datosBebidas.bebidas[indice];

    document.getElementById("Nombre").textContent = bebida.nombre;
    document.getElementById("Descripcion").textContent = bebida.descripcion;
    document.getElementById("imagen").src = bebida.imagen;

    document.getElementById("Nombre").classList.remove('verde', 'azul', 'amarillo');

    const colores = ['#238668', '#4178a4', '#e2aa58'];
    const coloresTransparentes = ['rgba(104, 180, 120, 0.5)', 'rgba(65, 120, 164, 0.5)', 'rgba(226, 170, 88, 0.5)'];
    document.getElementById("Nombre").style.color = colores[indice];
    document.getElementById("Descripcion").style.color = colores[indice];
    document.getElementById("Muestra").style.backgroundColor = coloresTransparentes[indice];
    document.getElementById("Muestra").style.borderColor = colores[indice];
    document.getElementById("redes").style.backgroundColor = coloresTransparentes[indice];
    document.getElementById("redes").style.borderColor = colores[indice];

}

function toggleMenu() {
    const imagen = document.getElementById("cambiable");

    if (imagen.src.endsWith("images/menu.png")) {
        imagen.src = "images/close.png";
    } else {
        imagen.src = "images/menu.png";
    }
}

cargarJSON();