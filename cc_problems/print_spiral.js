// Given a square matrix in the form of a 2D array of arrays,
// return an array consisting of the values of the array in
// "spiral order" (top row, then right hand side, then bottom in reverse, then up, the back again...)

function printSpiral(input, result) {
  if (input.length == 0) {
    return result;
  }

  // add the first row to result
  result = result.concat(input.shift());

  // add the last element of each remaining row
  input.forEach(function(rightEnd) {
    result.push(rightEnd.pop());
  });

  // add the last row in reverse order
  result = result.concat(input.pop().reverse());

  // add the first element in each remaining row (going upwards)
  let temp = [];
  input.forEach(function(leftEnd) {
    temp.push(leftEnd.shift());
  });
  // reverse to make it "going upwards"
  result = result.concat(temp.reverse());

  return printSpiral(input, result);
}

let test = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

console.log(printSpiral(test, []));
