// Problem
// Given a sorted array of n elements and a target element of t, find the index of t in the array.
// Return -1 if the target element is not found.

let array = [-5, 2, 4, 6, 10] // Should return 4

function binarySearch(array, target) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === array[middleIndex]) {
      return middleIndex
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch(array, 10)) // 4
console.log(binarySearch(array, 6)) // 3
console.log(binarySearch(array, 20)) // -1

// Big = O(log n) - Logarithmic time complexity
