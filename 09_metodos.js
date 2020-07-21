const usuario = {nombre: 'Pepe', edad: 23}
console.log(usuario)
usuario.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}
console.log(usuario)
usuario.saludar()