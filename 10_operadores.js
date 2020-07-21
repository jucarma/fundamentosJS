
// Asignacion
let x = 23
let y = 4

// Aritmeticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(parseInt(x / y)) // Esto es la division entera
console.log(x % y) // esto muestra el resto
console.log(x ** y) // esto eleva a potencia

// Asignacion (con aritmeticos)
x += 3 // x = x + 3

// Comparacion

let a = 2
let b = '2'
let c = 3
console.log(a == b)
console.log(a === b) // para comprobar que son identicos
console.log(a != b)  //
console.log(a !== b) //exactamente igual que arriba pero para comprobar si son diferentes

// 
console.log(a == b || b > c) // O
console.log(a == b && b > c) // Y

let edad = 18
let tipo

/*if(edad > 18) {
    tipo = 'adulto'
} else {
    tipo = 'menor'
}*/

// Operador ternario
tipo = edad >= 18 ? 'adulto' : 'menor'

console.log(tipo)