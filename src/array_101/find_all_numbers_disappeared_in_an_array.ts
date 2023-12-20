const nums = [4, 3, 2, 7, 8, 2, 3, 1];

// function findDisappearedNumbers(nums: number[]): number[] {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (!nums.includes(i + 1)) result.push(i + 1);
//   }

//   return result;
// }

// In-place, no extra space solution
function findDisappearedNumbers(nums: number[]): number[] {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const position = Math.abs(nums[i]) - 1; // The correct position for this number
    if (nums[position] > 0) nums[position] = -nums[position]; // Mark this number as negative (visited)
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1); // Positive means the number thats supposed to be in this position was not found
  }

  return result;
}

console.log(findDisappearedNumbers(nums));
