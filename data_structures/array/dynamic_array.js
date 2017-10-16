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

  checkIndex(index) {

  }
}
