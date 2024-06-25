/**
 * Verifica si un elemento está dentro del viewport.
 *
 * @param {HTMLElement} element - El elemento HTML a verificar.
 * @returns {boolean} - Retorna true si el elemento está dentro del viewport, de lo contrario false.
 *
 * La función obtiene las dimensiones y posición del elemento en el viewport
 * usando `getBoundingClientRect()` y evalúa si todas las caras del elemento
 * (superior, izquierdo, inferior y derecho) están dentro de los límites del viewport
 * (ventana gráfica visible del navegador).
 */
export function isElementInViewport(element) {
    // Obtenemos las dimensiones y posición del elemento
    let rect = element.getBoundingClientRect();
    // Evaluamos si todas las caras del elemento están dentro del viewport
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
