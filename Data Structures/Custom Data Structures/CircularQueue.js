/*
Size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.

Also reffered to as circular buffler or ring buffer and follows he FIFO principle.

Circular queue will reuse empty block created during dequeue operation.

When working with queues of fixed maximum size circular queue is a great implementation choice.


Circular queue data structure supports these operations:
  - Enqueue: Adds an element to the rear/tail of the collection
  - Dequeue: Removes an element from the front/head of the collection
  - Peek: get the value of the element at the front of the queue without removing it
  - isEmpty(): check if the queue is empty
  - size(): get the number of elements in the queue
  - print(): visualize the elements in the queue

Circular Queue Usage:
  Clock
  Streaming data
  Traffic lights

*/

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0
    this.rear = -1
    this.front = -1
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = element
      this.currentLength++
      if (this.front === -1) {
        this.front = this.rear
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength--
    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
    return item
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
    return null
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty")
    } else {
      let i
      let str = ""
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " "
      }
      str += this.items[i]
      console.log(str)
    }
  }
}

const queue = new CircularQueue(5)
console.log(queue.isEmpty()) // true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isEmpty())
console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())

queue.print()

queue.enqueue(60)
queue.print()
