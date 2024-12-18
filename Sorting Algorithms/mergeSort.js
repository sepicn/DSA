// Given an array of integers, sort the array

const arr = [-6, 20, 8, -2, 4]

function mergeSort(arr) {
  if (arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2)

  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(letfArr, rightArr) {
  const sortedArr = []

  while (letfArr.length && rightArr.length) {
    if (letfArr[0] >= rightArr[0]) {
      sortedArr.push(letfArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...letfArr, ...rightArr]
}

console.log(mergeSort(arr))

// BigO = O(n^2) - Linear time complexity
