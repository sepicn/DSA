// Given an intiger n find the factorial of n

// Factorial of non-negative intiger n (n!), is the product of all positive intigers less that or equal to n

function recursiveFactorial(n) {
  if (n === 0) return 1
  return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))

// Big = O(n) - Linear time complexity
