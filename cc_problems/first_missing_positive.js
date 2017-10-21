// find the first missing positive integer

// O(n) time, O(n) space

function firstMissingPositive(array) {
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }

  let j = 1; // start at 1
  while (j) {
    if (!set.has(j)) {
      return j;
    }
    j++; // don't forgot increment when uses while loop
  }
}

let test1 = [-3, 0, 4, 2]; // should return 1
let test2 = [2, 3, 1, -1, 5]; // should return 4
let test3 = []; // should return 1
let test4 = [0]; // shoud return 1

console.log(firstMissingPositive(test1));
console.log(firstMissingPositive(test2));
console.log(firstMissingPositive(test3));
console.log(firstMissingPositive(test4));

// Goal is O(n) time and uses constant space

// The idea
// is to use the index of the array as a representation of the first missing positive integer's presence
// for example if input array is [-2, 2, 5, 3]
// you will iterate down the array once
// three checks
  // big num check, number is greater than input array length which means its definitely not the first missing
  // negative number check
  // duplicate number check
  // if a number passes the three checks it means that its the first occurrence of
  // a positive num, that is smaller than length of the array and needs to be
  // "swapped" into its rightful spot in the array
// using a while loop, we would essentially repeat the above process swapping numbers into their right place
// or leaving a negative integer or duplicate num or huge number in the index spot (to represent a 'False')

function inPlace(array) {
  if (array.length === 0) {
    return 1;
  }

  let length = array.length;
  let temp, i;

  // first for loop to sort positive integer into there rightful index place
  // pseudo true/false presence check
  for (i = 0; i < length; i++) {
    while (array[i] != i + 1) {
      if ( array[i] > length // big num check
          || array[i] < 1 // negative int check
          || array[i] == array[array[i] - 1] // duplicate num check
        ) {
          break; // move onto next iteration if any of the checks are true
        }

        temp = array[array[i] - 1];
        array[array[i] - 1] = array[i];
        array[i] = temp;
    }
  }

  // second for loop to find missing positive integer
  for (i = 0; i < length; i++) {
    if (array[i] != i + 1) {
      return i + 1;
    }
  }
}
