function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  num = num.toString()
  if (num.length == 3 ){
  console.log(num.length)
return true
}
  else {
  console.log(num.length)
    return false}
}
console.log(tieneTresDigitos(100))
module.exports = tieneTresDigitos;
