// Modulos en ES6 (experimental node) import / export
// Modulos en Node require / export

const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')

/*
const data = fs.readFileSync('package.json', 'utf-8')  //este modo es sincrono
const autor = JSON.parse(data).author

console.log(JSON.parse(data))
console.log('Datos leidos')
*/

//Este es el modo asincrono
fs.readFile('package.json', 'utf-8', (err, data) => {
    if(err) {
        console.error(err)
    }else {
        const autor = JSON.parse(data).author
        console.log(autor)
    }
})
console.log('Leyendo Datos')

leerFichero() {
    return new Promise((resolve, rejects))
}