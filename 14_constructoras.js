const o1 = {
    name: 'Pepe',
    edad: 22,
    decirHola: function() {console.log(`Hola soy ${o1.name}`)}
}
o1.decirHola()
console.log(o1)

function Usuario (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    //this.saludar = function() {console.log(`Hola soy ${this.name}`)}
}

Usuario.prototype.saludar = function() {console.log(`Hola soy ${this.name}`)}

const o2 = new Usuario('Maria', 26)
console.log(o2)
console.log(o2.constructor)
console.log(o2.__proto__)

const o3 = new Usuario('Elena', 33)
const o4 = new Usuario('Raul', 43)
console.log(o3)
console.log(o4)

o2.saludar()
o3.saludar()
o4.saludar()