/*
Queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).
First element inserted in queue is first element to be removed.
Analogy: Queue of people - People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
The queue data structure supports these operations:
  - Enqueue: Adds an element to the rear/tail of the collection
  - Dequeue: Removes an element from the front/head of the collection
  - Peek: get the value of the element at the front of the queue without removing it
  - isEmpty(): check if the queue is empty
  - size(): get the number of elements in the queue
  - print(): visualize the elements in the queue

Queue Usage:
  Printers
  CPU task scheduling
  Callback queue in JS runtime
*/

// class Queue {
//   constructor() {
//     this.items = []
//   }

//   enqueue(element) {
//     this.items.push(element)
//   }

//   dequeue() {
//     return this.items.shift()
//   }

//   isEmpty() {
//     return this.items.length === 0
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0]
//     }
//     return null
//   }

//   size() {
//     return this.items.length
//   }

//   print() {
//     console.log(this.items.toString())
//   }
// }

class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  peek() {
    return this.items[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    console.log(this.items)
  }
}

const queue = new Queue()

console.log(queue.isEmpty()) // true
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size()) // 3
queue.print() // '10,20,30'
console.log(queue.dequeue()) // 10
console.log(queue.peek()) // 20
