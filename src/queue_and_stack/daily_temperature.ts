// Brute force
// function dailyTemperatures(T: number[]): number[] {
// 	const result: number[] = [];

// 	for (let i = 0; i < T.length; i++) {
// 		for (let j = i + 1; j < T.length; j++) {
// 			if (T[j] > T[i]) {
// 				result.push(j - i);
// 				break;
// 			} else if (j === T.length - 1) result.push(0);
// 		}
// 	}

// 	result.push(0);
// 	return result;
// }

/**
 * Stack solution
 * Use stack to keep track of the days(indices) of which there hasn't been a warmer day
 * Storing indices because we need to calculate the number of days waited
 * Remember that stack allows for backtracking
 *
 * Apparently this is a monotonic stack, elements are in either increasing or decreasing order (increasing in this case)
 * Monotonic stacks are a good option when a problem involves comparing the size of numeric elements, with their order being relevant
 */
function dailyTemperatures(T: number[]): number[] {
  const stack = [0];

  for (let i = 1; i < T.length; i++) {
    // If current temperature is higher than top most node in the stack, keep popping
    while (T[stack[stack.length - 1]] < T[i]) {
      const index = stack.pop()!;
      T[index] = i - index;
    }

    stack.push(i);
  }

  stack.forEach((index) => (T[index] = 0));

  return T;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
