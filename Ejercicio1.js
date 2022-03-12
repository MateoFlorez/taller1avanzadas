// TALLER 1 - EJERCICIO 1
distanciaPlaneta = (num1,num2) => Math.sqrt(Math.pow(num1,2) + Math.pow(num2,2)).toFixed(2)

// Impresion de resultados
console.log(`Distancia planeta Yavin4: ${distanciaPlaneta(0,40)}`)
console.log(`Distancia planeta Hoth: ${distanciaPlaneta(70,-50)}`)
console.log(`Distancia planeta Tatooine: ${distanciaPlaneta(-10,-10)}`)
console.log(`Distancia planeta Endor: ${distanciaPlaneta(50,0)}`)