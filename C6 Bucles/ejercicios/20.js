function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   num = 0

   for (i = 0;n >= i; i++) {
      num = num + i
      if (num >= 100) {break}
   }
   return num
}
console.log(sumarHastaNConBreak(5))






module.exports = sumarHastaNConBreak;
