function bSearch(array, target) {
  if (array.length === 0 || array.length === 1 && array[0] != target) {
    // meaning not found
    return -1;
  }

  let middle = Math.floor(array.length / 2);

  if (target === array[middle]) {
    return middle;
  }
  if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target);
  }
  let subResult = binarySearch(array.slice(middle + 1), target);
  return (subResult === -1) ? -1 : subResult + middle + 1;
}
