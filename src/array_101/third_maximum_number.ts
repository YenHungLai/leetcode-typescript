const nums = [2, 2, 3, 1];

/**
 * Sort first then find third largest number
 */
function thirdMax(nums: number[]): number {
  const arr: number[] = [];

  quickSort(nums, 0, nums.length - 1);
  console.log(nums);

  for (let idx = 0; idx < nums.length; idx++) {
    if (!arr.includes(nums[idx])) arr.push(nums[idx]);
  }

  return arr.length >= 3 ? arr[2] : arr[0];
}

//TODO: try heap

console.log(thirdMax(nums));

function quickSort(array: number[], left: number, right: number) {
  if (left >= right) return;

  const pivot = partition(left, right);

  // Recursively sort the left/right subarray
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);

  // This sorts the array like elements < pivot < elements
  function partition(left: number, right: number) {
    const pivot = right; // Here I choose the end as pivot (can be start or middle)
    right--;

    while (left <= right) {
      if (array[left] < array[pivot] && array[right] > array[pivot]) {
        const temp = array[left];
        array[left++] = array[right];
        array[right--] = temp;
      }

      if (array[left] >= array[pivot]) left++;
      if (array[right] <= array[pivot]) right--;
    }

    [array[left], array[pivot]] = [array[pivot], array[left]];
    return left;
  }
}

export {};
