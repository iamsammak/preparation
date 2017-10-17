// Google Software Engineer Interview
//
// Given an array whose elements are sorted,
// return the index  of a the first occurrence of a specific integer.
// Do this in sub-linear time.
// I.e. do not just go through each element searching for that element.

// Binary Search is O(log n)

// One caveat is that if you find the integer, keep searching left because its not the first occurrence

function findFirstIdx(array, target) {
  for (let i = array.length -1; i >= 0; i--) {
    if (array[i] != target) {
      return i + 1;
    }
  }
  // means every integer in the array is equal to the target therefore the first occurrence is idx 0
  return 0;
}

function caveatBinarySearch(array, target) {
  if (array.length === 0 || array.length === 1 && array[0] != target) {
    return -1;
  }

  let middleIdx = Math.floor(array.length / 2);

  if (target === array[middleIdx]) {
    let temp = findFirstIdx(array.slice(0, middleIdx), target);
    if (temp == -1) {
      return -1;
    } else {
      return temp;
    }
  }

  if (target < array[middleIdx]) {
    return binarySearch(array.slice(0, middleIdx), target);
  }

  let subResult = binarySearch(array.slice(middleIdx + 1), target);
  return (subResult === -1) ? -1 : subResult + middleIdx + 1;
}
