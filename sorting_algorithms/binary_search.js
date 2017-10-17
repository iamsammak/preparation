function bSearch(array, target) {
  if (array.length === 0 || array.length === 1 && array[0] != target) {
    // meaning not found
    return -1;
  }

  let middleIdx = Math.floor(array.length / 2);

  if (target === array[middleIdx]) {
    return middleIdx;
  }
  if (target < array[middleIdx]) {
    return binarySearch(array.slice(0, middleIdx), target);
  }
  let subResult = binarySearch(array.slice(middleIdx + 1), target);
  return (subResult === -1) ? -1 : subResult + middleIdx + 1;
}
