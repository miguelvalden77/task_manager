
export function calcularTiempoTranscurrido(desde: number): string {
    const ahora = Date.now();
    const diferencia = ahora - desde;

    if (diferencia < 60000) {
        return `${Math.floor(diferencia / 1000)} segundos`;
    } else if (diferencia < 3600000) {
        return `${Math.floor(diferencia / 60000)} minutos`;
    } else if (diferencia < 86400000) {
        return `${Math.floor(diferencia / 3600000)} horas`;
    } else if (diferencia < 2592000000) {
        return `${Math.floor(diferencia / 86400000)} días`;
    } else if (diferencia < 31536000000) {
        return `${Math.floor(diferencia / 2592000000)} meses`;
    } else {
        return `${Math.floor(diferencia / 31536000000)} años`;
    }
}

// // Ejemplo de uso
// const fechaMilisegundos = 1628364000000; // Inserta aquí la fecha en milisegundos
// const tiempoTranscurrido = calcularTiempoTranscurrido(fechaMilisegundos);
// console.log(`Tiempo transcurrido: ${tiempoTranscurrido}`);
