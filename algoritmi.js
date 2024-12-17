// Fibonacci
//  Given a number n find the first n elements of
//  Fibonacci sequence

function fibonacci(n) {
  let arr = [0, 1]

  for (let i = 2; i < n; ++i) {
    let next = arr[i - 2] + arr[i - 1]
    arr.push(next)
  }

  return arr
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(100))

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

// -------------------------------------------------------------------------

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

// -------------------------------------------------------------------------

function isPowerOfTwo(n) {
  // for (let i = 1; i < n; i++) {
  //   if (n === (2 ^ i)) {
  //     return true
  //   }
  //   return false
  // }

  // for (let i = 1; i < n; i++) {
  //   if (n < 1) return false
  //   if (n % 2) {
  //     return false
  //   }
  //   n /= 2
  //   if (n === 0) return true
  // }
  // return true

  if (n < 1) return false
  while (n > 1) {
    if (n % 2 !== 0) return false
    n /= 2
  }
  return true
}

function isPowerOfTwoBitWise(n) {
  if (n < 1) return false

  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))

// isPowerOfTwo(1) = true(2^0)
// isPowerOfTwo(2) = true(2^1)
// isPowerOfTwo(5) = false

// -------------------------------------------------------------------------
