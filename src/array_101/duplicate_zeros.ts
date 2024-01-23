const arr: number[] = [1, 0, 2, 3, 0, 4, 5, 0];

/**
 * This is pretty intuitive but uses builtin method
 * T: O(N)
 * S: O(1)
 */
function _duplicateZeros(arr: number[]): void {
  const length = arr.length;
  let idx = 0;

  while (idx < arr.length - 1) {
    if (arr[idx] === 0) {
      arr.splice(idx + 1, 0, 0);
      idx += 2;
    } else idx++;
  }

  arr.length = length;
}

/**
 * Interesting solution using queue but that is additional memory
 * T: O(N)
 * S: O(K) - K is the number of zeros in the array
 */
function __duplicateZeros(arr: number[]): void {
  const queue = [];
  let idx = 0;

  while (idx < arr.length) {
    if (arr[idx] === 0) {
      queue.push(0, 0);
    } else {
      queue.push(arr[idx]);
    }

    arr[idx] = queue.shift() as number;
    idx++;
  }
}

/**
 * No extra memory solution (best)
 * T: O(N)
 * S: O(1)
 */
function duplicateZeros(arr: number[]): void {
  let duplicates = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    // end - duplicates is the number of elements which would be included in the final array
    if (i > end - duplicates) break;

    if (arr[i] === 0) {
      // Edge case: the last element of the resulting array would be zero, cannot duplicate, no more space
      // E.g. [8, 4, 5, 0, 0, 0, 0, 7]
      if (i === end - duplicates) {
        arr[end] = 0;
        end--;
        break;
      }
      duplicates++;
    }
  }

  const last = end - duplicates;

  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + duplicates] = 0;
      duplicates--;
      arr[i + duplicates] = 0;
    } else {
      arr[i + duplicates] = arr[i];
    }
  }
}
// [ 1, 0, 2, 3, 0, 4, 5, 0 ]
// 								  ^
// [ 1, 0, 2, 3, 0, 4, 5, 4 ]
// 							 ^
// [ 1, 0, 2, 3, 0, 0, 0, 4 ]
// 					  ^
// [ 1, 0, 2, 3, 3, 0, 0, 4 ]
// 				 ^
// [ 1, 0, 2, 2, 3, 0, 0, 4 ]
// 		  ^
// [ 1, 0, 0, 2, 3, 0, 0, 4 ]
//   ^
duplicateZeros(arr);
console.log(arr);
