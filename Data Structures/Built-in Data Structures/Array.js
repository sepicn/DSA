/*
Arrays
  Data structure that can hold a collection of values
  Arrays can contain mix of different data types: strings, booleans, numbers, objects all in the same array
  Arrays are zero-indexed
*/

const array = [1, 2, 3, "Nik", false]
console.log(array[0])

// Adding element to the end of an array
array.push(4)
console.log(array)

// Looping trough array
for (const item of array) {
  console.log(item)
}

// Adding element to the start of an array
array.unshift(0)
console.log(array)

// Removing element from the end of an array
const removedElEnd = array.pop()
console.log(array, removedElEnd)

// Removing element from the beginning of an array
const removedElBeginning = array.shift()
console.log(array, removedElBeginning)

function getRkt(zez, pez) {
  console.log("Hello")
}
