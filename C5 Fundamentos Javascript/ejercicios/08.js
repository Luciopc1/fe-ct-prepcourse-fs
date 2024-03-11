function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
 return Number.isInteger(numero)
}
esNumeroEntero(10)
module.exports = esNumeroEntero;