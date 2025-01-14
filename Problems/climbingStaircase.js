// Given a staircase of n steps, count the number of distinct ways to climb to the top. Either climb 1 step or 2 steps at a time

// If there is 1 step there is only 1 way to climb, if there is 2 steps there is 2 ways to climb etc...

function climbingStaircase(n) {
  const numOfWays = [1, 2]

  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
  }

  return numOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))

// Big = O(n) - Linear time complexity
