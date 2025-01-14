/*
Stack is sequential collection of elements that follows the principle of Last In First Out (LIFO).
Last element inserted into the stack is the frist element to be removed of the stack.
Can be viewed as stack of plates, last plate placed on top of the stack is also the first plate to be removed from the stack.
Stack is an abstract data type.
It is defined by its behavior rather than being a mathematical model.
Stack is simply a list and what makes it a stack is how it behaves.
Stack data structure supports two main operations:
  - Push: Adds an element to the collection
  - Pop: Removes the most recently added element from collection
  - Peek: Retrieves the item at the top without removing it.
  - Size: Returns the number of items in the stack.

Stack usage:
  Browser history tracking
  Undo operations
  Expression conversions
  Call stack in JS runtime
*/
class Stack {
  constructor(items = []) {
    // Initialize the stack with an optional array of items.
    this.items = items
  }

  // Adds an item to the top of the stack.
  push(item) {
    this.items.push(item)
    return this.items
  }

  // Removes and returns the item at the top of the stack.
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: Cannot pop from an empty stack.")
    }
    return this.items.pop()
  }

  // Retrieves the item at the top of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty: Cannot peek.")
    }
    return this.items[this.items.length - 1]
  }

  // Returns the number of items in the stack.
  size() {
    return this.items.length
  }

  // Checks if the stack is empty.
  isEmpty() {
    return this.items.length === 0
  }
}

let stack = new Stack()
console.log(stack.push("100")) // ['100']
console.log(stack.push("200")) // ['100', '200']
console.log(stack.push("300")) // ['100', '200', '300']
console.log(stack.pop()) // '300'
console.log(stack.size()) // 2
console.log(stack.peek()) // '200'
console.log(stack) // Stack { items: ['100', '200'] }

/* 
Time Complexities (Big-O Notation):
1. push(item): O(1) - Adding an item to the end of an array is a constant-time operation.
2. pop(): O(1) - Removing the last item from an array is also a constant-time operation.
3. peek(): O(1) - Accessing the last element of the array is direct and takes constant time.
4. size(): O(1) - Accessing the length of an array is constant time.
5. isEmpty(): O(1) - Checking if the array is empty is a simple comparison.
*/
