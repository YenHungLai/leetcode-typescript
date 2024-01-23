const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * Two pointers, one reader and one writer (Leetcode solution)
 * T: O(n)
 * S: O(1)
 */
function _removeDuplicates(nums: number[]): number {
  // Start at 1 because the 1st element is for sure included
  let insertIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    // Look for the "edge" between two sequences of numbers
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}

/**
 * Use two pointers, slow and fast runner
 * T: O(n)
 * S: O(1)
 */
function removeDuplicates(nums: number[]): number {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Move the pointer to the next distinct number
    if (nums[right] === nums[left]) right++;
    else {
      nums[left + 1] = nums[right];
      left++;
    }
  }

  return left + 1;
}

removeDuplicates(nums);
console.log(nums);

export {};
