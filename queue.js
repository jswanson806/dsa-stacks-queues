/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    // if the queue is empty
    if(!this.first){
      // set first and last to be new Node
      this.first = newNode;
      this.last = newNode;
      // increment size
      this.size++;
      // queue is not empty
    } else {
      // set last to be new Node
      this.last = newNode;
      // increment size
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // throw error if there is no value in queue
    if(!this.first){
      throw Error('Queue is empty')
    }
    
    // initialize targetVal to value of first Node
    const targetVal = this.first.val;
    // if there is only one value in queue
    if(this.first.next === this.last){
      // set first and last to null
      this.first = null;
      this.last = null;
      // decrement size
      this.size--;
      return targetVal;
      // more than one value in queue
    } else {
      // sever connection of first Node
      this.first.next = null
      // decrement size
      this.size--;
      return targetVal;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(!this.first) {
      return true;
    } 
    return false;
  }
}

module.exports = Queue;
