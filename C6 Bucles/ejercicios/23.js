function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  for (i= 0 ; i < 8 ;i++){
    num += 5
  }
  return num
  }
  console.log(doWhile(5))

module.exports = doWhile;