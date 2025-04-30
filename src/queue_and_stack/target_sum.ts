/**
 * DFS with stack
 * You can push additional data into the stack to keep track
 * Think of it like you are keeping track of the state/path of your graph?
 * BFS approach is pretty much the same just with different traversal order of the tree
 */
function findTargetSumWays(nums: number[], target: number): number {
  let ways = 0;
  const stack: { index: number; sum: number }[] = [{ index: 0, sum: 0 }];

  while (stack.length) {
    const { index, sum } = stack.pop()!;

    if (index > nums.length - 1) {
      if (sum === target) ways++;
    } else {
      stack.push({ index: index + 1, sum: sum + nums[index] });
      stack.push({ index: index + 1, sum: sum - nums[index] });
    }
  }

  return ways;
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
