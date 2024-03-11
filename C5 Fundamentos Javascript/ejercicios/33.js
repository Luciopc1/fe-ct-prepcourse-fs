// La función recibe un argumento "numero".
// Determina si este corresponde a un número primo.
// De ser así, retorna true.
// De lo contrario, retorna false.
// IMPORTANTE: Recuerda que un número primo es aquel que
// solo es divisible por sí mismo y por 1.
// Tu código:
function esNumeroPrimo(numero) {
  veces = 0
  i = 2
  while(numero % i > 0){
i++
veces++
  }
  if (veces == numero - 2){
    return true
  }else {return false}
}
module.exports = esNumeroPrimo;
