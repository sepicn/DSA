// Problem
// Given a sorted array of n elements and a target element t find the index of t in the array.
// Return -1 if the target element is not found

arr = [-5, 2, 4, 6, 10]

function binarySearchRecursion(arr, t) {
  return search(arr, t, 0, arr.length - 1)
}

function search(arr, t, left, right) {
  if (left > right) return -1
  let middle = Math.floor((left + right) / 2)
  if (t === arr[middle]) return middle

  if (t < arr[middle]) {
    return search(arr, t, left, middle - 1)
  } else {
    return search(arr, t, middle + 1, right)
  }
}

console.log(binarySearchRecursion(arr, 10)) // 4
console.log(binarySearchRecursion(arr, 6)) // 3
console.log(binarySearchRecursion(arr, 20)) // -1

// Big = O(log n) - Logarithmic time complexity
