// Given an array of integers, sort the array

// Quick sort idea
// * Pick first element as pivot
// * Pick last element  as pivot
// * Pick a random element as pivot
// * Pick median as pivot

// Put everything that is smaller than the pivot into a 'left' array and everything that is greater than the pivot into a 'right' array

// Repeat the process for the individual 'left' and 'right' arrays till there is ana array of length 1 which is sorted by definition

// Reapeatedly concatenate left array, pivot and right array till one sorted array remains

const arr = [-6, 20, 8, -2, 4]

function quickSort(arr) {
  if (arr.length < 2) return arr
  // Picking last number of arr as pivot
  let pivot = arr[arr.length - 1]

  // Putting elements in left and right array
  let left = []
  let right = []

  // Traverse array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

function qckSort(arr) {
  let pivot = arr[arr.length - 1]
}

console.log(quickSort(arr))

// Big = O(n) - Linear time complexity
// Avg case = 0(nlogn)
