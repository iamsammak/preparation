import StaticArray from "./static_array";

class DynamicArray {
  constructor() {
    this.store = new StaticArray(8);
    this.capacity = 8;
    this.length = 0;
  }

  get(index) {
    this.store[index];
  }

  set(index, value) {
    this.store[index] = value;
  }

  pop() {
    lastItem = this.store[length - 1]
    this.store[length - 1] = null;
    this.length -= 1;

    lastItem;
  }

  push(value) {
    if (this.length == this.capacity) {
      this.resize();
    }

    this.length += 1;
    this.store[length - 1] = value;

    this.store;
  }



  checkIndex(index) {

  }
}
