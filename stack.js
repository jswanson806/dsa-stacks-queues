/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.first = newNode;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first){
      throw Error('Stack is empty');
    }

    const targetVal = this.first.val;
    // only one value in stack
    if(this.first === this.last) {
      // set first and last to null
      this.first = null;
      this.last = null;
      // decrement stack size
      this.size--;
      return targetVal;
      // stack has multiple values
    } else {
      // sever connection of first Node
      this.first.next = null;
      // decrement stack size
      this.size--;
      return targetVal;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(!this.first){
      return true;
    }
    return false;
  }
}

module.exports = Stack;
