function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
if (num% 5 == 0 && num % 3 == 0) return "fizzbuzz"
else if (num % 5 == 0 )return "buzz"
else if (num % 3 == 0) return "fizz"
else return false

}
console.log(fizzBuzz(15))

module.exports = fizzBuzz;
