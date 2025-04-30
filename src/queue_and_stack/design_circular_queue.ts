// Implement the MyCircularQueue class:
// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.

/**
 * T: O(1)
 * All of the methods is of constant time complexity
 */
class MyCircularQueue {
  queue: number[];
  head: number;
  tail: number;

  constructor(k: number) {
    this.queue = new Array(k);
    this.head = -1;
    this.tail = -1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    if (this.isEmpty()) this.head = 0;
    // % size ensures that values wrap around after hitting a maximum
    this.tail = (this.tail + 1) % this.queue.length;
    this.queue[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }

    this.head = (this.head + 1) % this.queue.length;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.head === -1;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.queue.length === this.head;
  }
}

// Your MyCircularQueue object will be instantiated and called as such:
//var obj = new MyCircularQueue(k);
//var param_1 = obj.enQueue(value);
//var param_2 = obj.deQueue();
//var param_3 = obj.Front();
//var param_4 = obj.Rear();
//var param_5 = obj.isEmpty();
//var param_6 = obj.isFull();
