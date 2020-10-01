var octavio = {
    nombre: 'Octavio',
    apellido: 'Cuellar',
    edad: 32
  }
  
  var santiago = {
    nombre: 'Santiago',
    apellido: 'Cuellar',
    edad: 3
  }
  
  function imprimirNombreEnMayuscula({ nombre }) {
    //var nombre = persona.nombre
    console.log(nombre.toUpperCase())
    console.log(nombre.toUpperCase())
  }
  
  imprimirNombreEnMayuscula(octavio)
  imprimirNombreEnMayuscula(santiago)

  function cumpleanos(persona) {
    return {
      ...persona,
      edad: persona.edad + 1
    }
  }