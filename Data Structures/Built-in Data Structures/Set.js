/*

Data structure that can hold a collection of values.
Values must be unique.
Set can contain mix of different data types.
Strings, booleans, numbers, objects can be stored all at the same time.
Sets are dynamically sized. 
Sets do not maintain insertion order, item inserted first does not necessarily mean it is the first element in the set.
Sets are iterables, can be iterated with for of loop.
Searching and deleteting an element in the set is faster compared to arrays.

*/

const set = new Set([1, 2, 3])

set.add(4)
set.add(4) // It is ignored because there can't be duplicates.

console.log(set.has(4)) // Returns boolean depending on if the item is in the set

set.delete(4) // Deletes the set value

console.log(set.size) // Returns the size of the set

set.clear() // Clears all items in the set

for (const item of set) {
  console.log(item)
}
