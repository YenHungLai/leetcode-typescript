const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
// 	for (let idx = 0; idx <= n - 1; idx++) {
// 		nums1.splice(m++, 1, nums2[idx]);
// 	}
// 	nums1.sort((a, b) => a - b);
// }

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   const _nums1 = [...nums1];
//   let [p1, p2, p3] = [0, 0, 0];

//   while (p3 < nums1.length) {
//     if ((p1 < m && _nums1[p1] <= nums2[p2]) || p2 === n) {
//       nums1[p3] = _nums1[p1];
//       p1++;
//     } else {
//       nums1[p3] = nums2[p2];
//       p2++;
//     }

//     p3++;
//   }
// }

/** Start from the end of array
 *  O(n + m) T
 *  O(1) S
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [p1, p2, p3] = [m - 1, n - 1, m + n - 1];

  while (p3 >= 0) {
    if ((p1 >= 0 && nums1[p1] >= nums2[p2]) || p2 < 0) {
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
