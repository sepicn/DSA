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

// Big = O(n) - Linear time complexity
