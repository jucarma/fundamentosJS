let edad
let tipo
if (edad < 18) {
    tipo = 'menor'
} else if (edad < 30){
    tipo = 'joven'
} else {
    tipo = 'adulto'
}


const datos = [30, 50, 43, 13]
for (let i = 0; i < datos.length; i++) {
    const item = datos[i];
    console.log(`El valor ${i + 1} es ${item}`)
    
}

// ES6
for (const iterator of datos) {
    console.log(`El valor es ${iterator}`)
}

// ES5.1
datos.forEach(item => {
    console.log(`El valor es ${item}`)

})

let usr = {nombre: 'Pepe', edad: 12, altura: 120}

for (const key in usr) {
    const element = usr[key]
    console.log(`La propiedad ${key} vale ${element}`)
}

let dia
switch (dia) {
    case 'lunes':
        //....
        break;
    case 'martes':
        //...
        break;

    default:
        break;
}