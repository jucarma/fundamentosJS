//Ejemplo de JSDOC

/**
 * Muestra los calculos de lo que recibe como callback
 * @param {number} a 
 * @param {number} b 
 * @param {function} callback 
 */

const calcular = function (a, b, callback) {
    console.log(callback(a, b))
}

calcular(6, 5, (a, b) => a + b)
calcular(6, 5, (a, b) => a - b)

const producto = (a = 1, b = 1) => a * b
console.log(producto(2, 50))
calcular(6, 50, producto)

const data = [2, 6, 7, 4]

// const cubos = data.map (funtion (item) {return item * item * item})    Esta forma no se suele usar

const cubos = data.map(item => item * item * item)
console.log(cubos)

