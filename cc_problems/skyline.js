// https://leetcode.com/problems/the-skyline-problem/description/
// questions to ask
// are the heights and x coord while integers
// would we deal with number integers


let input = [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ];

let temp = {
  2: 10,
  3: 15,
  4: 15,
  5: 15,
  6: 15,
  7: 15,
  8: 12,
  9: 12,
  10: 12,
  11: 12,
  12: 12,
  15: 10,
  16: 10,
  17: 10,
  18: 10,
  19: 10,
  20: 10,
  21: 8,
  22: 8,
  23: 8,
  24: 8
};

let betterHash = {
  2: 10,
  9: 10,
  3: 15,
  7: 15,
  5: 12,
  12: 12,
  15: 10
  20: 10,
  19: 8,
  24: 8
}


let xCoord = function(matrix) {
  let ret = [];
  for (let i = 0; i < matrix.length; i++) {
    ret.push(matrix[i][0]);
  }
  return ret;
};

let maxCoord = function(matrix) {
  let ret = [];
  for (let i = 0; i < matrix.length; i++) {
    ret.push(matrix[i][1]);
  }
  return ret;
};

let min = Math.min(...xCoord(input));
let max = Math.max(...maxCoord(input));

console.log(min);
console.log(max);

// later as you tranverse from lowest x to highest x
// if a number isn't in the hash, it means its value is 0

// naive Solution
// time complexity is O(nm) or O(n^2)
// iterate through each building and update the height obj
// each building iterate from x1 to x2
// nested loop
// then once height hash is built
// iterate from min x Coord to max x Coord + 1
// if there is a height change
// add that as a keypoint
// if its a increase in height, log [x, height]
// but if its a decrease in height, log [x - 1, height]
