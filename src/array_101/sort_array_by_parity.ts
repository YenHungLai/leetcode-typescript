const A = [3, 1, 2, 4];

function _sortArrayByParity(A: number[]): number[] {
  let oddPtr = 0;

  for (let idx = 0; idx < A.length; idx++) {
    if (A[idx] % 2 === 0) {
      const temp = A[oddPtr];
      A[oddPtr++] = A[idx];
      A[idx] = temp;
    }
  }

  return A;
}

/**
 * Not in-place but interesting solution
 * Write even first then odd, use a pointer to mark location
 * T: O(n)
 * S: O(n)
 */
function __sortArrayByParity(A: number[]): number[] {
  const ans: number[] = new Array(A.length);
  let ptr: number = 0;

  for (let i = 0; i < A.length; ++i) if (A[i] % 2 === 0) ans[ptr++] = A[i];
  for (let i = 0; i < A.length; ++i) if (A[i] % 2 === 1) ans[ptr++] = A[i];

  return ans;
}

/**
 * My own solution, two pointer technique
 * This is quicksort??
 * T: O(n)
 * S: O(1)
 */
function sortArrayByParity(A: number[]): number[] {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    // Left is odd and right is even
    if (A[left] % 2 > A[right] % 2) {
      const temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left++;
      right++;
    }

    if (A[left] % 2 === 0) left++;
    if (A[right] % 2 !== 0) right--;
  }

  return A;
}

console.log(sortArrayByParity(A));

export {};
