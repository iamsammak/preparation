/**
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.
Example 1:
11110
11010
11000
00000
Answer: 1
Example 2:
11000
11000
00100
00011
Answer: 3
*/

// Solution
// Using Depth First Search (DFS) on each component
// In each DFS call, a component or a sub-graph is visited. We will call DFS on the next
// un-visted component. The num of DFS gives the number of connected componenets

// In order to get neighbor coordinates:

// [x - 1, y - 1],  [x - 1, y],  [x - 1, y + 1]
// [x, y - 1]    ,    self    ,  [x, y + 1]
// [x + 1, y - 1],  [x + 1, y],  [x + 1, y + 1]

// ex input
let sampleInput = [['1', '1', '0', '0' ,'0'],
                   ['0', '1', '0', '0', '1'],
                   ['1', '0', '0', '1', '1'],
                   ['0', '0', '0', '0', '0'],
                   ['1', '0', '1', '0', '1']];
// Output: 5

function countIslands(input) {
  let rows = input.length;
  let cols = input[0].length;
  let result = 0;

  if (rows === 0) {
    return 0;
  } // break if input === []
  if (cols === 0) {
    return 0;
  } // break if input === [[]] or [[],[],[]]

  // if didn't want to destroy input matrix
  // dup input matrix, by creating visited
  // let visited =  new Array(5).fill(new Array(5));
  // let visited = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (input[i][j] !== '1') {
        continue;
      }

      result++;
      dfs(input, i, j, rows, cols);
      // dfs(input, i, j, rows, cols, visited);

      // with visited matrix implementation
      // if (visited[i][j] !== '1' && input[i][j] === '1') {
      //   result++;
      //   dfs(input, i, j, rows, cols, visited);
      // }
    }
  }
  return result;
}

function dfs(input, i, j, rows, cols) {
// function dfs(input, i, j, rows, cols, visited) {
  // boundary check
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }

  if (input[i][j] === '1') {
    input[i][j] = '0';

    // dfs(input, i - 1, j - 1, rows, cols);
    // dfs(input, i - 1, j, rows, cols);
    // dfs(input, i - 1, j + 1, rows, cols);
    // dfs(input, i, j - 1, rows, cols);
    // dfs(input, i, j + 1, rows, cols);
    // dfs(input, i + 1, j - 1, rows, cols);
    // dfs(input, i + 1, j, rows, cols);
    // dfs(input, i, j + 1, rows, cols);
    for (let r = i - 1; r <= i + 1; r++) {
      for (let c = j - 1; c <= j + 1; c++) {
        dfs(input, r, c, rows, cols);
        // dfs(input, r, c, rows, cols, visited);
      }
    }
  }
}

console.log(countIslands(sampleInput));
