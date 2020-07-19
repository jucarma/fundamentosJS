/* eslint-disable no-unused-expressions*/

// Tipos de primitivos
console.log('Datos de tipos primitivos')
console.log(typeof undefined) //undefined
console.log(typeof 32)  //number
console.log(typeof 'Pepe') //string
console.log(typeof true) //boolean
console.log(typeof 321561321n) //bigint es para almacenar numeros grandes

// Tipos referenciados
console.log('Datos de tipos referenciados')
console.log(typeof null)
console.log(typeof { nombre: 'Pepe', edad: 32 }) //object
console.log(typeof [1, 133, 65, 32]) //object

console.log('Creamos una variable')

let variable
console.log(typeof variable)  // undefined
variable = 32
console.log(typeof variable) // number


// Numeros especiales

let x = 2e500
console.log(x) //infinity

let y = BigInt(2e200)
console.log(y * y)  //BigInt  numero completo, se usa para operaciones con grandes cantidades de numero

let a = 0
let b = -0
console.log(a)
console.log(b)
console.log(a / b) //numero indefinido

// strings
let nombre = 'Juan'
// ES6 notacion template string
let saludo = 
    `Hola ${nombre}
    ¿Como estas?`
console.log(saludo)
