// square root

// implement a square root function that uses only addition, subtraction, multiplication and division
// in less than linear time. You may assume input is always a perfect square

// square root is (sqRoot * sqRoot = num)

// naive solution
// iterating form 0 to square root
// time complexity is O(sqrt n) which is less than O(n) (linear)

function naiveSqRoot(num) {
  for (let i = 0; i < num/2; i++) {
    if (i*i == num) {
      return i;
    }
  }
}

// binary search square root implementation (still assuming perfect squares only)

// [...Array(5).keys()];
// => [0, 1, 2, 3, 4]

function squareRoot(num, candidates = null) {
  if (num == 1) {
    return num;
  }
  if (num < 0) {
    return "you can't square root a negative number";
  }

  candidates = candidates || [...Array(Math.floor(num/2)).keys()];
  let middle = Math.floor(candidates.length / 2);
  let target = candidates[middle] * candidates[middle]
  if (num == target) {
    return middle;
  }
  if (num < target) {
    return squareRoot(num, candidates.slice(0, middle));
  }
  let subResult = squareRoot(num, candidates.slice(middle + 1));
  return (subResult == null) ? null : (middle + 1) + subResult;
}

console.log("square root of 100:", squareRoot(100));
console.log("square root of 1:", squareRoot(1));
console.log("square root of -10:", squareRoot(-10));

// for non perfect squares
// function _sqrt(number, lowBound, highBound) {
//   let guess = (lowBound + highBound) / 2;
//   let approx = guess * guess;
//
//   if (Math.abs(number - approx) < 0.01) {
//     return guess;
//   }
//
//   if (approx > number) {
//     highBound = guess;
//   } else {
//     lowBound = guess;
//   }
//
//   return _sqrt(number, lowBound, highBound);
// }
//
// function sqrt(number) {
//   if (number < 0) {
//     return -1;
//   }
//
//   return _sqrt(number, 0, number);
// }
