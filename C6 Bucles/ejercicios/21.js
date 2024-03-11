function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
potencia = 1
resultado = 1
  while (resultado < numero){
    resultado = Math.pow(2,potencia)
    potencia++
    if (resultado == numero) return true
    console.log (resultado)
  }
return false


}
console.log (esPotenciaDeDos())
module.exports = esPotenciaDeDos;
