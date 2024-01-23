const nums = [1, 1, 0, 1, 1, 1];

function _findMaxConsecutiveOnes(nums: number[]): number {
  const onesArr = nums.join().replace(/,/g, "").split(/0/g);
  return Math.max(...onesArr.map((one) => one.length));
}

/**
 * T: O(N)
 * S: O(1)
 */
function __findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let count = 0;

  for (let idx = 0; idx <= nums.length; idx++) {
    if (nums[idx]) {
      count++;
    } else {
      if (maxCount < count) maxCount = count;
      count = 0;
    }
  }

  return maxCount;
}

/**
 * Sliding window (variable size)
 * T: O(n)
 * S: O(1)
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let left = 0;
  let right = 0;
  let max = 0;

  while (left < nums.length && right < nums.length) {
    while (nums[left] === 0) left++;
    right = left;
    while (nums[right] === 1) right++;
    if (right - left > max) max = right - left;
    left = right;
  }

  return max;
}

console.log(findMaxConsecutiveOnes(nums));

export {};
