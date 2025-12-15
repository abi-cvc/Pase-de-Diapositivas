// Variable global que controla el slide actual
let slideActual = 1;

window.onload = function() {
    let totalSlides = document.querySelector('#num_slides').value;
    
    document.querySelector('#totalSlides').textContent = totalSlides;
    
    mostrarSlide(slideActual);
    
    document.querySelector('#btnAvanzar').onclick = avanzar;
    document.querySelector('#btnRetroceder').onclick = retroceder;
    
    configurarMenuLateral(totalSlides);
    
    document.querySelector('.toggle-btn').onclick = toggleMenu;
};

function mostrarSlide(numeroSlide) {
    let imagen = document.querySelector('#imagenDiapositiva');
    
    imagen.setAttribute('src', 'recursos/img/Diapositiva' + numeroSlide + '.jpeg');
    
    document.querySelector('#slideActual').textContent = numeroSlide;
    
    slideActual = numeroSlide;
}

// Función para avanzar al siguiente slide
function avanzar() {
    let totalSlides = document.querySelector('#num_slides').value;
    if (slideActual < totalSlides) {
        mostrarSlide(slideActual + 1);
    }
}

function retroceder() {
    if (slideActual > 1) {
        mostrarSlide(slideActual - 1);
    }
}

function configurarMenuLateral(totalSlides) {
    let itemsMenu = document.querySelectorAll('#lista ul li');
    
    itemsMenu.forEach(function(item, index) {
        item.onclick = function() {
            mostrarSlide(index + 1);
            cerrarMenu();
        };
    });
}

function toggleMenu() {
    let menu = document.querySelector('#lista');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

function cerrarMenu() {
    let menu = document.querySelector('#lista');
    menu.classList.remove('active');
}