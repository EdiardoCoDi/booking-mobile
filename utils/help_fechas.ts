export function obtenerRangoFechas(): string {
    // Obtener la fecha actual
    const fechaActual: Date = new Date();

    // Obtener la fecha para mañana
    const fechaManana: Date = new Date();
    fechaManana.setDate(fechaManana.getDate() + 1);

    // Definir los nombres de los días y los meses
    const diasSemana: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const meses: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Construir el formato deseado
    const resultado = `${diasSemana[fechaActual.getDay()]}, ${meses[fechaActual.getMonth()]} ${fechaActual.getDate()} - ${diasSemana[fechaManana.getDay()]}, ${meses[fechaManana.getMonth()]} ${fechaManana.getDate()}`;

    return resultado;
}

// Imprimir el resultado
console.log(obtenerRangoFechas());
