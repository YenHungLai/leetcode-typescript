const A = [0, 3, 2, 1];

/**
 * My own solution, similar to leetcode solution
 * T: O(n)
 * S: O(1)
 */
function validMountainArray(A: number[]): boolean {
  if (A.length < 3) return false;

  let ptr = 0;

  while (A[ptr] < A[ptr + 1]) ptr++; // Walk up
  // Peak (mountain top) should not be at the start/end of the array
  if (ptr === 0 || ptr === A.length - 1) return false;
  while (A[ptr] > A[ptr + 1]) ptr++; // Walk down

  return ptr === A.length - 1;
}

console.log(validMountainArray(A));

export {};
