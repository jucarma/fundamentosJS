'use strict'
//^| esto de arriba es para usar modo estricto. 



function saludar() {
    let saludo = 'Hola Mundo'
    const saludo2 = 'Hola Extramundo'

    // Las variables hay que declararlas con let
    // Se puede declarar con const, en caso de que la variable no vaya a variar
    // "Hola Mundo" No es una buena practica, porque ha de usarse las comillas simples
    // los nombre de variables han de ser en camelcase, es decir en minusculas y una mayuscula cuando cambien de palabra
    // ej saludoEnCastellano
    // ';' al final es completamente opcional

    console.log(saludo)
    console.log(saludo2)
}

saludar()