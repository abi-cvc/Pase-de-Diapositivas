// Variable global que controla el slide actual
let slideActual = 1;

// Carga de toda la página
window.onload = function() {
    // Obtener número total de slides del input hidden
    let totalSlides = document.querySelector('#num_slides').value;
    
    // Mostrar total en el contador
    document.querySelector('#totalSlides').textContent = totalSlides;
    
    // Mostrar slide inicial
    mostrarSlide(slideActual);
    
    // Se configuran los botones de avanzar y retroceder
    document.querySelector('#btnAvanzar').onclick = avanzar;
    document.querySelector('#btnRetroceder').onclick = retroceder;
    
    // Se configura el menú lateral
    configurarMenuLateral(totalSlides);
    
    // Se configura el botón del menú de hamburguesa
    document.querySelector('.toggle-btn').onclick = toggleMenu;
};

// Función que muestra una diapositiva específica
function mostrarSlide(numeroSlide) {
    // Obtener el elemento de la imagen
    let imagen = document.querySelector('#imagenDiapositiva');
    
    // Se cambia la ruta de la imagen
    imagen.setAttribute('src', 'recursos/img/Diapositiva' + numeroSlide + '.jpeg');
    
    // Se actualiza el contador
    document.querySelector('#slideActual').textContent = numeroSlide;
    
    // Se guarda el slide actual
    slideActual = numeroSlide;
}

// Función para avanzar al siguiente slide
function avanzar() {
    let totalSlides = document.querySelector('#num_slides').value;
    
    // Si no está en el último slide (la 8), entonces se puede avanzar
    if (slideActual < totalSlides) {
        mostrarSlide(slideActual + 1);
    }
}

// Función para retroceder al slide anterior
function retroceder() {
    // Si no está en el primer slide, se puede retroceder
    if (slideActual > 1) {
        mostrarSlide(slideActual - 1);
    }
}

// Función para configurar el menú lateral
function configurarMenuLateral(totalSlides) {
    // Obtener todos los elementos li del menú
    let itemsMenu = document.querySelectorAll('#lista ul li');
    
    // Se agrega el evento click a cada item con un forEach
    itemsMenu.forEach(function(item, index) {
        item.onclick = function() {
            // El index empieza en 0, pero los slides empiezan en 1
            mostrarSlide(index + 1);
            // Cerrar el menú después de seleccionar
            cerrarMenu();
        };
    });
}

// Función para abrir/cerrar el menú
function toggleMenu() {
    let menu = document.querySelector('#lista');
    
    // Si el menú tiene la clase 'active', se la quita. Si no, se la agrega
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

// Función para cerrar el menú
function cerrarMenu() {
    let menu = document.querySelector('#lista');
    menu.classList.remove('active');
}