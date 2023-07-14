export default class Stack<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  push(item: T): void {
    let node = new Node(item)
    if (!this.tail) {
      this.head = this.tail = node
    } else {
      node.previous = this.tail
      this.tail = node
    }
    this.length++;
  }
  pop(): T | undefined {
    if (!this.tail) {
      return undefined
    }
    let tmp = this.tail
    this.tail = this.tail.previous
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = undefined
    }
    return tmp.value

  }
  peek(): T | undefined {
    if (this.tail) {
      return this.tail.value;
    }
    return undefined;
  }
}

class Node<T> {
  value: T;
  previous?: Node<T>;
  constructor(value: T) {
    this.value = value
  }
}

