// La función recibe un argumento "fecha".
// Comprueba si este corresponde a una fecha válida.
// Si es así, retorna true, sino retorna false.
// Tu código:
function esFechaValida(fecha) {
  console.log (new Date(fecha))
  console.log (new Date())


    if (fecha <= new Date(fecha)){
      if (new Date(fecha) <= new Date() ){
      return true
    }else{
      return false
      }
    }else{
    return false
    }
}
console.log(esFechaValida("200-10-20"))

module.exports = esFechaValida;