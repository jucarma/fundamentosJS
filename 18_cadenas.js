const cadena = "Esto es una cadena"

const cadenaSinEspacios = cadena.split(' ').join('').toUpperCase()
const cadenaInversa = cadena.split(' ').reverse().join('').toUpperCase()
console.log(cadenaSinEspacios)
console.log(cadenaInversa)

const aDatos = [12, 3098, 400, 60, 7]
const aDatosOriginal = aDatos.slice(0) // funcion inmutable
aDatos.sort( (a, b) => a - b) // Funcion mutable
console.log(aDatos)
console.log(aDatosOriginal)

const dobles = aDatos.map(item => item * 2)
console.log(dobles)
