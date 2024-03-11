function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  resultado = 1
  for (let i = a  ; i <= b; i++){
    resultado *= i
    console.log(resultado)
  }
  if (a < 0 || b < 0){return 0}
  return resultado
}
console.log(productoEntreNúmeros(2 ,4))


module.exports = productoEntreNúmeros;