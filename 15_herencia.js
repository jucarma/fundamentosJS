const padre = {
    name: 'Pepe',
    apellido: 'Perez',
    edad: 22,
    saludar: function() {console.log(`Hola soy ${this.name} ${this.apellido}`)}
}
padre.saludar()
console.log(padre)

const hijo = Object.create(padre)
hijo.name = 'Pepito'
hijo.edad = 13
hijo.saludar()
console.log(hijo)