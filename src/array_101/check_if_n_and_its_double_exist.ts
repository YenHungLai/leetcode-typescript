const arr = [10, 2, 5, 3];

/**
 * Use a hash map
 * T: O(n)
 * S: O(n)
 *
 * The size of the Map depends on the number of distinct elements in the input array
 */
function checkIfExist(arr: number[]): boolean {
  const map = new Map();

  for (const [idx, val] of arr.entries()) {
    if ((map.has(val * 2) || map.has(val / 2)) && map.get(val) !== idx)
      return true;
    else map.set(val, idx);
  }

  return false;
}

console.log(checkIfExist(arr));

export {};
