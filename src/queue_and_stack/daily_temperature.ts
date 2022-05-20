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

// Stack solution
function dailyTemperatures(T: number[]): number[] {
	const result = new Array(T.length).fill(0);
	const stack = [];

	for (const [idx, val] of T.entries()) {
		while (stack.length && T[stack[stack.length - 1]] < val) {
			const current = stack.pop()!;
			result[current] = idx - current;
		}
		stack.push(idx);
	}

	return result;
}

const ans = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(ans);
