const arr = [-5, 2, 4, 6, 10]

function bSR(arr, t) {
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

console.log(bSR(arr, 10))
console.log(bSR(arr, 6))
console.log(bSR(arr, 20))
