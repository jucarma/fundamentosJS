
// Constantes y valores primitivos
const pi = 3.14
console.log(pi)
// si ahora pusieramos pi = 3.xx, node daria error, ya que una constante no puede variar

const obj = {}
console.log(typeof obj)
console.log(obj)
// obj = 'Pepe' daria error
obj.nombre = 'Pepe'
console.log(obj)

// Notacion JSON u objetos literales
const user = {nombre: 'Maria', edad: 34, fechaDeNacimiento: '23/1/2000'}
console.log(user)

// Funciones constructores

const user2 = Object()
user2.nombre = 'Carlos'
user2.edad = 24
user2.altura = 180
console.log(user2)
delete user2.edad // esto es para eliminar propiedades
console.log(user2)

//arrays

const datos = [1, 2, 3, 4, 5, 6]
console.log(typeof datos)
console.log(datos[3])
const users = Array('Pepe', 'Maria', 'Jose') // esta forma no se usa, pero tb funciona
console.log(users)
console.log(users.length)
console.log(users[2])
users[1] = 'Mariam'  // con esto podemos modificar datos de los arrays
console.log(users)

user.fechaDeNacimiento = new Date('2000/1/23')  //obj especial tipo fecha
console.log(user)
console.log(parseInt(Math.random() * 10))

let cadena = 'Hola'
console.log(cadena.length)
//cadena. //al meter el punto, hace casting, y pasa de ser string a String
console.log(typeof cadena) // muestra que es string por que no hemos modificado nada
const uperCadena = cadena.toUpperCase()
console.log(uperCadena)