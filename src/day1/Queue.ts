export default class Queue<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = this.tail = undefined;
  }

  enqueue(item: T): void {
    if (!this.tail) {
      this.head = this.tail = new Node(item);
    } else {
      this.tail.next = new Node(item)
      this.tail = this.tail.next
    }
    this.length++;
  }
  deque(): T | undefined {
    if (this.head) {
      let tmp = this.head.value
      this.head = this.head.next
      this.length--;

      // if our list has a 1 length tail = head
      if (this.length === 0) {
        this.tail = this.head
      }

      return tmp;
    }
    return undefined;
  }
  peek(): T | undefined {
    if (this.head) {
      return this.head.value;
    }
    return undefined;
  }
}

class Node<T> {
  value: T;
  next?: Node<T>;
  constructor(value: T) {
    this.value = value;
  }
}

