const cadena = "Esto es una cadena"

const cadenaSinEspacios = cadena.split(' ').join('').toUpperCase()
const cadenaInversa = cadena.split(' ').reverse().join('').toUpperCase()
console.log(cadenaSinEspacios)
console.log(cadenaInversa)