// Non comparison sort
// Time Complexity = O(n + k)
// n is num of elements in input array, k is the range of input

// Counting sort is efficient if the range of input data
// is not significantly greater than the number of objects stored

function countingSort(array) {
  let max = array.reduce(function(a,b) {
    return Math.max(a,b);
  });
  let indexArray = new Array(max + 1).fill(0);

  for(let i = 0; i < array.length; i++) {
    indexArray[array[i]] += 1;
  }

  for(let j = 1; j < indexArray.length; j++) {
    indexArray[j] = indexArray[j - 1] + indexArray[j];
  }

  let sorted = [];
  for(let k = 0; k < array.length; k++) {
    let inputNum = array[k];
    let place = indexArray[inputNum];
    sorted[place - 1] = inputNum;
    indexArray[inputNum] -= 1;
  }

  return sorted;
}
