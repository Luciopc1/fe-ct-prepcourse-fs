// La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
// de nacimiento de una persona.
// Determina si esta persona es mayor de edad (tiene 18 años o más).
// Devuelve true si lo es, caso contrario, retorna false.
// PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
// Tu código:
function esMayorDeEdad(fechaNacimiento) {
  var fecha = new Date(fechaNacimiento)
  var Actualidad = new Date()
  if (fecha.getFullYear() <= Actualidad.getFullYear() - 18) {
    return true
  } else {
    console.log(fecha.getFullYear() - Actualidad.getFullYear()   )
    return false
  }
}
console.log(esMayorDeEdad("2006-10-20"))
  module.exports = esMayorDeEdad;