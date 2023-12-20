const heights = [1, 1, 4, 2, 1, 3];

function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  let result = 0;

  for (const [idx, val] of heights.entries()) {
    if (val !== expected[idx]) result++;
  }

  return result;
}

console.log(heightChecker(heights));
