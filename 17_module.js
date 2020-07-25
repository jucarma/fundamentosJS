const createUsers = function (name, codigo) {
    let puestoPriv = ''
    return {
      // puesto: '',
      saludar: function () {
        console.log(`Hola soy ${name} y trabajo como ${puestoPriv}`)
      },
      verCodigo: function () {
        console.log(`${codigo}`)
      },
      setPuesto: (puesto) => { puestoPriv = puesto }
    }
  }
  
  const u1 = createUsers('Pepe', 234)
  const u2 = createUsers('Maria', 24)
  u1.puesto = 'Programador'
  u1.puestoPriv = 'Programador'
  u1.setPuesto('Programador')
  u1.saludar()
  u1.verCodigo()
  console.log(u1.codigo)
  u2.saludar()
  u2.verCodigo()
  