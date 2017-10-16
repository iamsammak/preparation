class StaticArray {
  constructor(length) {
    this.store = new Array(length).fill(null);
  }

  get(index) {
    return this.store[index]
  }

  set(index, value) {
    return this.store[index] = value;
  }
}

export default StaticArray;
