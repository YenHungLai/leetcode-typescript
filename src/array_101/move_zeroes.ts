const nums = [0, 1, 0, 3, 12];

/**
 * Interesting leetcode solution
 * T: O(n)
 * S: O(1)
 *
 * The total operations (array writes) that code does = total number of elements in the array
 */
function _moveZeroes(nums: number[]): void {
  let insertPos = 0;
  // Shift non-zero elements to the front
  for (const num of nums) {
    if (num !== 0) nums[insertPos++] = num;
  }
  while (insertPos !== nums.length) nums[insertPos++] = 0;
}

/**
 * Using two pointers (my own solution)
 * T: O(n)
 * S: O(1)
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] === 0) {
      if (nums[fast] === 0) fast++;
      else {
        nums[slow] = nums[fast];
        nums[fast] = 0;
        slow++;
        fast++;
      }
    } else {
      slow++;
      fast++;
    }
  }
}

moveZeroes(nums);
console.log(nums);

export {};
