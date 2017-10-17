class BinaryMinHeap {
  constructor() {
    this.store = [];
    this.comparison = function(a,b){return a-b};
  }

  count() {
    return this.store.length;
  }

  remove() {
    if (this.count() === 0) {
      console.log("heap is empty");
    }

    let removeValue = this.store[0]; //remove the first element

    if (this.count() > 1) {
      this.store[0] = this.store.pop(); //move last element to the root
      this.heapifyDown(this.store, 0); //heapify down to fix heap
    } else {
      this.store.pop(); // if heap array is only one element now, then no need to heapify
    }

    return removeValue;
  }

  peek() {
    if (this.count() === 0) {
      console.log("heap is empty");
    }
    return this.store[0]; //this is the smallest number in a binary min heap
  }

  push(value) {
    this.store.push(value);
    this.heapifyUp(this.store, this.count() - 1);
  }

  childIndices(length, parentIdx) {
    let left = 2 * parentIdx + 1;
    let right = 2 * parentIdx + 2;

    let ret = [left, right];
    ret.filter(function(childIdx) { return childIdx < length })
    return ret;
  }

  parentIndex(childIndex) {
    if (childIndex === 0) {
      console.log("root has no parent index");
    }
    return Math.floor((childIndex - 1) / 2);
  }

  heapifyDown(array, parentIdx, length = array.length) {
    let leftChildIdx, rightChildIdx;
    [leftChildIdx, rightChildIdx] = childIndices(length, parentIdx);

    let parentValue = array[parentIdx];

    let childrenValues = [];
    if (leftChildIdx) {
      childrenValues.push(array[leftChildIdx]);
    }
    if (rightChildIdx) {
      childrenValues.push(array[rightChildIdx]);
    }

    if (childrenValues.every((childValue) => {return parentValue < childValue }) {
      return array;
    }

    let swapIdx = null;
    if (childrenValues.length == 1) {
      swapIdx = leftChildIdx;
    } else {
      swapIdx = childrenValues.indexOf(Math.min(childrenValues[0], childrenValues[1]));
    }

    let temp = array[parentIdx];
    array[parentIdx] = array[swapIdx];
    array[swapIdx] = temp;

    this.heapifyDown(array, swapIdx, length);
  }
}
