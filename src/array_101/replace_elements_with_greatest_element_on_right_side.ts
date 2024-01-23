const arr = [17, 18, 5, 4, 6, 1];

/**
 * Start from end of the array, keep track of the largest value
 *
 * T: O(n)
 * S: O(1)
 */
function replaceElements(arr: number[]): number[] {
  let greatest = 0;

  for (let idx = arr.length - 1; idx >= 0; idx--) {
    if (idx === arr.length - 1) {
      greatest = arr[idx];
      arr[idx] = -1;
      continue;
    }

    const temp = arr[idx];
    arr[idx] = greatest;

    if (temp > greatest) greatest = temp;
  }

  return arr;
}

console.log(replaceElements(arr));

export {};
