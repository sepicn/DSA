// Recursion
// 1. Break down problem into smaller versions of the same problem
// 2. Identify base case for recursion

// Fibonacci Recursive
//  Given a number n find nth element of the Fibonacci sequence
// Fibonacci sequence is sequence in which each number is the sum of the two preceding ones
//  Fn = Fn-1 + Fn-2

function recursiveFibonacci(n) {
  if (n < 2) return n
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8

// BigO - O(2^n) - Exponential time complexity
