const nums = [1, 0, 1, 1, 0];

// Brute force
// function findMaxConsecutiveOnes(nums: number[]): number {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let [ptr, current] = [i - 1, 0];

//       // Count 1s to the left
//       while (ptr >= 0) {
//         if (nums[ptr]) current++;
//         else break;
//         ptr--;
//       }

//       ptr = i + 1;

//       // Count 1s to the right
//       while (ptr < nums.length) {
//         if (nums[ptr]) current++;
//         else break;
//         ptr++;
//       }

//       if (current + 1 > result) result = current + 1;
//     }
//   }

//   // If input is all 1s
//   if (!result) return nums.length;

//   return result;
// }

// Sliding window technique (dynamically-sized sliding window)
function findMaxConsecutiveOnes(nums: number[]): number {
  let [result, numZeroes, left, right] = [0, 0, 0, 0];

  while (right < nums.length) {
    if (nums[right] === 0) numZeroes++;

    // Readjust window
    while (numZeroes === 2) {
      if (nums[left] === 0) numZeroes--;
      left++;
    }

    result = Math.max(result, right - left + 1);

    right++;
  }

  return result;
}

console.log(findMaxConsecutiveOnes(nums));
