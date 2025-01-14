// Given an array of integers, sort the array

// Insertion sort - virtually splitting the array into a sorted and an unsorted part
// Assumption is that the first element in the array is sorted and the remaining elements are unsorted
// Selecting an unsorted element and comparing it with all the elements in the sorted part
// If elements in the sorted part are smaller than the selected element proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right

const arr = [-6, 20, 8, -2, 4]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = numToInsert
  }
  return arr
}

console.log(insertionSort(arr))

function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j - 1] > arr[j]) {
      let t = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = t
      j = j - 1
    }
  }
  return arr
}

function insertionSortDesc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j - 1] < arr[j]) {
      let t = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = t
      j = j - 1
    }
  }
  return arr
}

console.log(insertionSortAsc(arr)) // [-6, -2, 4, 8, 20]
console.log(insertionSortDesc(arr)) // [20, 8, 4, -2, -6]

// BigO = O(n^2) - Quadratic Time Complexity
