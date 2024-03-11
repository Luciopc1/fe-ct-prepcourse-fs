function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
cero = 0
for (i = cero; i <= n; i++){
  cero = cero + i
}
return cero
}

module.exports = sumarHastaN;
