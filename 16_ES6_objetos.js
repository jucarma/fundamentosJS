class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar () { console.log(`Hola soy ${this.nombre}`)}
}

const o1 = new Persona('Maria', 26)
const o2 = new Persona('Raul', 43)
o2.altura = 180  
delete o1.edad  // Con esto podemos eliminar propiedades

console.log(o1, o2)
o1.saludar()
o2.saludar()

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio un curso de ${this.curso}`)
    }
}

const o3 = new Alumno ('Raquel', 32, 'JavaScript')
console.log(o3)
o3.saludar()