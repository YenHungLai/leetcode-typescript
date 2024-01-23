const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

/**
 * Two-pointer technique (my own solution)
 * T: O(n)
 * S: O(1)
 *
 * Both pointers are moving in each iteration
 * Uses the fact that the order of elements can be changed
 */
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[right] === val) right--;
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else left++;
  }

  if (nums[right] === val) right--; // Remember to check the last element
  if (right < 0) return 0;
  return right + 1;
}

/**
 * Two-pointer technique (leetcode solution)
 * Similar to my own solution but only moves one ptr each iteration
 * T: O(n)
 * S: O(1)
 *
 * The number of assignment operations is equal to the number of elements to remove
 */
function _removeElement(nums: number[], val: number): number {
  let left = 0;
  let k = nums.length; // You don't always have to use length - 1

  while (left < k) {
    // Number could still be equal to val after swapping
    if (nums[left] === val) {
      nums[left] = nums[k - 1];
      k--;
    } else {
      left++;
    }
  }

  return k;
}

/**
 * Using two pointers (not two-pointer technique in the common sense)
 * Use of slow-runner and fast-runner
 * T: O(n)
 * S: O(1)
 *
 * Assume the array has a total of n elements, both i and j traverse at most 2n steps
 * This solution will do unnecessary copy operations e.g. nums = [4,1,2,3,5], val = 4
 */
function __removeElement(nums: number[], val: number): number {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

console.log(removeElement(nums, val));
console.log(nums);

export {};
