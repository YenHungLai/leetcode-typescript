const A: number[] = [-4, -1, 0, 3, 10];

// function sortedSquares(A: number[]): number[] {
// 	const result: number[] = [];
// 	for (const num of A) {
// 		result.push(num ** 2);
// 	}

// 	return result.sort((a, b) => a - b);
// }

// Two pointer technique
function sortedSquares(A: number[]): number[] {
  const result = [];
  let left = 0,
    right = A.length - 1;

  while (left <= right) {
    const leftAbs = Math.abs(A[left]),
      rightAbs = Math.abs(A[right]);

    if (leftAbs > rightAbs) {
      result.unshift(leftAbs ** 2);
      left++;
    } else {
      result.unshift(rightAbs ** 2);
      right--;
    }
  }

  return result;
}

console.log(sortedSquares(A));
