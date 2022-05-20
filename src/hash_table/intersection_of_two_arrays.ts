const nums1 = [1, 2, 2, 1],
	nums2 = [2, 2];

function intersection(nums1: number[], nums2: number[]): number[] {
	const set = new Set<number>();
	for (const [idx, val] of nums1.entries()) {
		if (nums2.includes(val)) set.add(val);
	}

	return Array.from(set);
}

intersection(nums1, nums2);

export {};
