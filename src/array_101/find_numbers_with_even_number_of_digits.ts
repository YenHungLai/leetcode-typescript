const nums: number[] = [12, 345, 2, 6, 7896];

/**
 * Different methods of finding the number of digits in a number
 * Convert to string
 * T: O(n)
 * S: O(1)
 */
function _findNumbers(nums: number[]): number {
  let count = 0;
  for (const num of nums) {
    if (num.toString().length % 2 === 0) count++;
  }

  return count;
}

/**
 * Extract digits
 * T: O(N*log(M)) - M is the maximum integer in nums
 * S: O(1)
 *
 * When dividing an integer x by y, there can be at most O(logy(x)) divisions
 * The time complexity of hasEvenDigits is O(log(M))
 */
function hasEventDigits(num: number) {
  let digitCount = 0;
  while (num) {
    digitCount++;
    num = Math.floor(num / 10);
  }
  // Use bitwise AND to check parity
  return (digitCount & 1) === 0;
}

function __findNumbers(nums: number[]): number {
  let count = 0;
  for (const num of nums) {
    if (hasEventDigits(num)) count++;
  }

  return count;
}

/**
 * Use logarithm
 * T: O(N*logM) - M is the maximum integer in nums
 * S: O(1)
 *
 * The time complexity of computing logarithm is O(log(⁡M)) (worst case)
 * The time complexity of computing floor is O(1) (worst case)
 */
function findNumbers(nums: number[]): number {
  let count = 0;
  for (const num of nums) {
    if ((Math.floor(Math.log10(num)) + 1) % 2 === 0) count++;
  }

  return count;
}

console.log(findNumbers(nums));

export {};
