// INICIALIZAR ANIMACIONES AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Cuánto dura la animación (1 segundo)
    once: true,     // Que se anime solo la primera vez que bajas (para no marear)
    offset: 100     // Que empiece a animar cuando falten 100px para que aparezca
});

// LÓGICA DE PREGUNTAS FRECUENTES (Acordeón)
const botonesFaq = document.querySelectorAll('.faq-question');

botonesFaq.forEach(boton => {
    boton.addEventListener('click', () => {
        // Seleccionamos el contenedor padre de ese botón específico
        const faqItem = boton.parentElement;

        // Le ponemos o le quitamos la clase 'active' para abrir/cerrar
        faqItem.classList.toggle('active');
    });
});