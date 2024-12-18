// Problem
// Given an array of n elements and a target element of t, find the index of t in the array.
// Return -1 if the target element is not found.

let array = [-5, 2, 10, 4, 6]
let target = 2 // Should return 2

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return -1
}

console.log(linearSearch(array, 10))
console.log(linearSearch(array, 6))
console.log(linearSearch(array, 20))

// BigO = O(n) - Linear time complexity
