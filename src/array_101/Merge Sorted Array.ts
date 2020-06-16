const nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	for (let idx = 0; idx <= n - 1; idx++) {
		nums1.splice(m++, 1, nums2[idx]);
	}
	nums1.sort((a, b) => a - b);
}

merge(nums1, m, nums2, n);
