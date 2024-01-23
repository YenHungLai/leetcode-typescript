const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

/**
 * Merge nums2 into nums1 then use built-in sorting
 * T: O((n+m)log(n+m))
 * S: O(n)
 *
 * The cost of sorting a list of length x using a built-in sorting algorithm is O(x*log(x))
 * Most programming languages have a built-in sorting algorithm that uses O(n) space
 */
function _merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let idx = 0; idx <= n - 1; idx++) {
    nums1.splice(m++, 1, nums2[idx]);
  }
  nums1.sort((a, b) => a - b);
}

/**
 * Two-pointer technique
 * T: O(n+m)
 * S: O(m)
 *
 * We are performing n+2m reads and n+2m writes so O(n+m)
 * We are allocating an additional array of length m
 */
function __merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const _nums1 = [...nums1];
  let [p1, p2, p3] = [0, 0, 0];

  while (p3 < nums1.length) {
    if ((p1 < m && _nums1[p1] <= nums2[p2]) || p2 >= n) {
      nums1[p3] = _nums1[p1];
      p1++;
    } else {
      nums1[p3] = nums2[p2];
      p2++;
    }

    p3++;
  }
}

/**
 * Start from the end of array
 * T: O(n + m)
 * S: O(1)
 *
 * Whenever you need to solve array problem in place, always consider iterating backwards
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [p1, p2, p3] = [m - 1, n - 1, m + n - 1];

  while (p3 >= 0) {
    if ((p1 >= 0 && nums1[p1] > nums2[p2]) || p2 < 0) {
      nums1[p3] = nums1[p1];
      p1--;
    } else {
      nums1[p3] = nums2[p2];
      p2--;
    }

    p3--;
  }
}

merge(nums1, m, nums2, n);
console.log(nums1);
