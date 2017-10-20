function quickSort(arr, left = 0, right = arr.length - 1){
   let len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   let pivotValue = arr[pivot],
       partitionIndex = left;

   for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){ //apply comparison here
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function qsort(array, start, end) {
  if (start === undefined) {
    start = 0;
    end = array.length - 1;
  } else if (start >= end) {
    return array;
  }
  let realStart = start, realEnd = end;
  let pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
  while (start < end) {
    while (array[start] <= pivot) start++;
    while (array[end] > pivot) end--;
    if (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
  }
  qsort(array, realStart, start - 1);
  qsort(array, start, realEnd);
  return array;
}
