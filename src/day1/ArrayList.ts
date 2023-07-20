export default class ArrayList<T> {
  public length: number;
  public capacity: number;
  public array: Array<T>;

  constructor() {
    this.length = 0;
    this.capacity = 10;
    this.array = new Array(this.capacity);
  }

  prepend(item: T): void {
    if (this.length === this.capacity) {
      this.capacity *= 2
      let newArray = new Array(this.capacity)
      newArray[0] = item;
      for (let i = 0; i < this.length; i++) {
        newArray[i + 1] = this.array[i]
      }
      this.array = newArray
      length++
      return;
    } else {
      for (let i = this.length; i >= 0; i--) {
        this.array[i] = this.array[i - 1]
      }
      this.array[0] = item;
      length++
    }

  }
  insertAt(item: T, idx: number): void {
    this.array[idx] = item;
  }
  append(item: T): void {
    if (this.length === this.capacity) {
      this.capacity *= 2
      let newArray = new Array(this.capacity)
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i]
      }
      this.array = newArray
      length++
      this.array[this.length] = item;
      return;
    }
    else {
      this.array[this.length] = item;
      length++
    }
  }
  remove(item: T): T | undefined {
    for (let i = 0; i < this.length; i++){
      if (this.array[i] === item) {
        let removed = this.array[i]
        for (let j = i; j < this.length; j++) {
          this.array[j] = this.array[j + 1]
        }
        length--
        return removed;
      }
    }
    return undefined;
  }
  get(idx: number): T | undefined {
    return this.array[idx]
  }
  removeAt(idx: number): T | undefined {
    let removed = this.array[idx]
    for (let i = idx; i < this.length; i++) {
      this.array[i] = this.array[i + 1]
    }
    length--
    return removed;
  }
}
