// Metodos de invocaciones
'use strict'


const algo = function () {
    console.log(this)
}

// Invocacion tipo Function
algo()

// Invocacion tipo Constructor
const o = new algo()

// Invocacion tipo Method
const o2 = {
    name: 'Pepe',
    saludar: function () {
        console.log('Hola')
    },
    metodo: algo
}
o2.metodo()

// Invocacion tipo Call/Apply
const o3 = {
    usuario: 'Maria'
}

o2.metodo.call(o3)

// Uso this dentro de los callback asincronos
const usarThis = {
    nombre: 'Ejemplo de this',
    ver: function() {
        console.log(this)
    },
    verAsync: function() {
        setTimeout(() => {
            console.log(this)
        }, 3000);
    },
    verAsyncBind: function() {
        setTimeout(function() {
            console.log(this)
            
        }.bind(this), 5000);
    },
    verAsyncArrow: function () {
        setTimeout(() => {
            console.log(this)
        }, 3000);
    }
}
usarThis.ver()
usarThis.verAsync()
usarThis.verAsyncBind()
usarThis.verAsyncArrow()