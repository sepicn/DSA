// Prime number
// Number is a natural number greater than 1 that is not a product of two smaller natural numbers
function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))

// Big = O(n) - Linear time complexity
