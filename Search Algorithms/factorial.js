// Factorial of num
// Given a int n find the factorial of that int
function factorial(n) {
  let res = 1

  for (let i = 2; i <= n; i++) {
    res = res * i
  }
  return res
}
console.log(factorial(0))
console.log(factorial(3))
console.log(factorial(5))

// Big = O(n) - Linear time complexity
