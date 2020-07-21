// declaracion
function suma (a = 0, b = 0) {
    return +a + +b
}

// Invocaccion ejecucion uso
console.log(suma(2, 3))

console.log(suma())


// Asignacion
const resta = function (a = 0, b = 0) {
    return a - b
}
console.log(resta())
console.log(resta(2, 7))


// ES6 Arrow functions (lambdas)

/*const prod = (a = 1, b = 1) => {
    return a * b
}*/
const prod = (a = 1, b = 1) => a * b
console.log(prod(3, 6))

const cuadrado = a => a * a
console.log(cuadrado(5))