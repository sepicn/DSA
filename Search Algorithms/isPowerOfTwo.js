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

// BigO = O(1) - Constant time complexity
