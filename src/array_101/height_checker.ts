const heights = [1, 1, 4, 2, 1, 3];

/**
 * Use built-in sorting method
 */
function _heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  let result = 0;

  for (const [idx, val] of heights.entries()) {
    if (val !== expected[idx]) result++;
  }

  return result;
}

/**
 * Sort then compare
 */
function heightChecker(heights: number[]): number {
  const _heights = Array.from(heights);
  let count = 0;

  // bubbleSort(_heights);
  quickSort(_heights, 0, _heights.length - 1);

  for (let i = 0; i < _heights.length; i++) {
    if (_heights[i] !== heights[i]) count++;
  }

  return count;
}

/**
 * Bubble sort is O(n^2)
 * Compare adjacent elements, the greater one is placed at right side
 */
function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    // Minus 1 here so you don't go out of bounds
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break; // Not swapped means the element is at the correct position
  }
}

/**
 * Quick sort is best/average case O(n*log(n))
 * Worst case O(n^2)
 */
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
      if (array[left] > array[pivot] && array[right] < array[pivot]) {
        const temp = array[left];
        array[left++] = array[right];
        array[right--] = temp;
      }

      if (array[left] <= array[pivot]) left++;
      if (array[right] >= array[pivot]) right--;
    }

    [array[left], array[pivot]] = [array[pivot], array[left]];
    return left;
  }
}

console.log(heightChecker(heights));
