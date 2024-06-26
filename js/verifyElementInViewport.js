/**
 * Verifica si un elemento está dentro del viewport.
 *
 * @param {HTMLElement} element - El elemento HTML a verificar.
 * @returns {boolean} - Retorna true si el elemento está dentro del viewport, de lo contrario false.
 *
 * La función obtiene las dimensiones del viewport y posición del elemento en el viewport
 * usando `getBoundingClientRect()` y evalúa si el top y bottom del elemento
 * (superior e inferior) están dentro de los límites del medio inferior del viewport
 * (la mitad inferior de la ventana gráfica visible del navegador).
 */

export function isElementMiddleViewport(element) {
    const midViewPort = window.innerHeight / 2;
    let topElement = element.getBoundingClientRect().top;
    let bottomElement = element.getBoundingClientRect().bottom;
    let heightElement = element.getBoundingClientRect().height / 5;

    if (
        topElement < 0 && bottomElement < (midViewPort - heightElement) || 
        topElement > midViewPort) {

        return false;
    }
    else {
        return true;
    }
}