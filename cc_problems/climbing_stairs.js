// You are climbing a stair case.
// It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

// Basically asking for the fibonacci sequence

function climbStairs(n) {
  let a = 1;
  let b = 0;
  let temp;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

console.log(climbStairs(5));
