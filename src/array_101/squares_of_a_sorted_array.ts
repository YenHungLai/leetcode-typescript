const A: number[] = [-4, -1, 0, 3, 10];

/**
 * Two pointer technique
 * T: O(N)
 * S: O(1)
 */
function sortedSquares(A: number[]): number[] {
  const result = [];
  let left = 0;
  let right = A.length - 1;

  while (left <= right) {
    const leftAbs = Math.abs(A[left]);
    const rightAbs = Math.abs(A[right]);

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
