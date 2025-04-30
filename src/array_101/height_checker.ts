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
  // quickSort(_heights, 0, _heights.length - 1);
  // mergeSort(_heights);
  // insertionSort(_heights);
  selectionSort(_heights);

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

/**
 * Merge sort
 * T: O(n*log(n))
 * S: O(n)
 *
 * Merge sort always divides the array into two halves and takes linear time to merge two halves
 */
function mergeSort(array: number[]) {
  if (array.length <= 1) return;

  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  mergeSort(leftArray);
  mergeSort(rightArray);

  // Start merging
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      array[k] = leftArray[i]; // When it bubbles up, this will eventually update the original array
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < rightArray.length) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

/**
 * Insertion sort
 * T: O(n^2) average case
 * S: O(1)
 *
 * Places an unsorted element at its suitable place in each iteration
 * Worst case occurs when given array is in ascending order and you want descending
 * Best case is when array is already sorted then the for loop runs for n times
 */
function insertionSort(array: number[]) {
  // The first element is assumed to be sorted
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let ptr = i - 1;

    // "Shifts" elements to the right
    while (ptr >= 0 && current < array[ptr]) {
      array[ptr + 1] = array[ptr];
      ptr--;
    }

    // ptr is at minimum -1 so you can move current to index 0
    array[ptr + 1] = current;
  }
}

/**
 * Selection sort
 * T: O(n^2)
 * S: O(1)
 */
function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}

console.log(heightChecker(heights));

export { quickSort, mergeSort };
