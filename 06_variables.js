'use strict'

// Declaracion de variables: var | let | const

let alumno = 'pepe'
console.log(alumno)

var interna = 'Soy externa'

function algo (params) {
    var interna = 'Soy interna'
    console.log('desde algo', alumno)
    console.log(interna)
}
algo()
console.log(interna)