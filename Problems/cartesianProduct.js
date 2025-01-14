// Problem
// Given two finite non-empty sets, find their Cartesian Product.

// Idea
// Traverse each array and pair each element in the first array with each element in the second array

function cartesianProduct(arr1, arr2) {
  const res = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]])
    }
  }

  return res
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]

console.log(cartesianProduct(arr1, arr2))

// BigO = O(n^2) - Quadratic Time Complexity
