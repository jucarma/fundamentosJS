// A Number
let x = 9
let y = '3'
y = 'Pepe'
y = true
y = false
let z = x / y
console.log(z)
console.log('Tipo de z:', typeof z)
console.log('Tipo de y:', typeof y)


let v = Infinity
console.log(v)
let w = NaN
console.log(w)

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(10))
console.log(Boolean('Malaga'))
console.log(!!'cadiz') // esto es doble negacion para que funcione como la opcion boolean, pero no se suele usar

let a = 2
let b = '3'
console.log(a * b)
console.log(a + b) // Da 23 como string, por que automaticamente detecta que detras viene un string (b)
// El simbolo + tb vale para concatenar, y siempre usara esta opcion antes de sumar si tiene la opcion a ello

console.log(a + Number(b)) //esto fuerza el casting y convierte el string en numero
console.log(a + +b) // esto hace exactamente lo mismo que el console anterior, lo unico de otra manera, ya que al añadir 
// valor positivo a 'b', js sabe que un string no puede ser ni positivo ni negativo, por lo que entiende que es un numero 
// y realiza el casting


