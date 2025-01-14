// Tower of Hanoi is a puzzle which object is to move the entire stack to the last rod, obeying following rules:
// - Only one disk may be moved at a time
// - Each move consists of taking the upper disk from one of the stacks and placing it to the top of another stack or on ana empty rod
// No disk may be placed on top of a disk that is smaller

// Idea

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
  }
}

console.log(towerOfHanoi(3, "A", "C", "B"))
