/*
Object is an unordered collection of key-value pairs.
Key must be string or symbol data type
Value can be of any data type
Retrieving a value is done using a corresponding key, with dot or bracket notation.
Object is not iterable.

Insertion - O(1)
Deletion - O(1)
Accessing property - O(1)
Searching - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)

*/

const obj = {
  name: "Nikola",
  key: "value",
  "key-two": "value2",
  print: function () {
    console.log(`My name is ${this.name}`)
  },
}
obj.age = 14

console.log(obj)
console.log(obj.key)
console.log(obj["key"])
console.log(obj["key-two"])

delete obj.age

console.log(obj)
obj.print()
