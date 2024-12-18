// Problem
// Given an array of integers, sort the array, can be ascending or descending

// Comparing adjacent elements in the array and swap the positions if they are not in the intended order

const arr = [-6, 20, 8, -2, 4]

function bubbleSortAsc(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

function bubbleSortDesc() {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSortAsc(arr)) // [-6, -2, 4, 8, 20]
console.log(bubbleSortDesc(arr)) // [20, 8 , 4, -2, -6]

// BigO = O(n^2) - Linear time complexity
