/*
Map is an unordered collection of key-value pairs.
Keys and values can be of any data type.
To retrieve a value, you can use the corresponding key.
Maps are iterables. 

Maps vs Objects
Objects are unordered whereas maps are ordered.
Keys in objects can only be string or symbol type.
In Maps keys can be of any type.
Objects have a prototype and may contain few default keys which may collide with our own keys. 
Maps does not contain any keys by default.
Objects are not iterables but maps are iterables.
Number of items in an object must be determined manually, but in maps we have size property.
Objects can store data and attach functionality whereas maps are restricted to just storing data.
*/

const map = new Map([
  ["a", 1],
  ["b", 2],
]) // a and b are keys

map.set("c", 3) // Adding value
console.log(map.has("a")) // Checking if key is in map
console.log(map.size) // Checking the size of the map
map.delete("b") // Deleting value
map.clear() // Deleting all key value pairs in map

for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}
