// TALLER 1 - EJERCICIO 3
let promedio = (temperatura) => {
    let temperaturaMaxima = Math.max(...temperatura) // Uso el operador spread (...) para que pueda leer el array
    let temperaturaMinima = Math.min(...temperatura)

    let promedio = (temperaturaMaxima + temperaturaMinima) / 2 // La

    console.log(`Temperatura promedio: ${promedio}°C`)
}

// Imprimir promedio de valores del array de temperaturas
promedio([-250,-629,-400,-800])