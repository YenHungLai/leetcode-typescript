const nums = [0, 1, 2, 2, 3, 0, 4, 2],
	val = 2;

function removeElement(nums: number[], val: number): number {
	for (let idx = 0; idx <= nums.length; idx++) {
		if (nums[idx] === val) {
			nums.splice(idx, 1);
			idx--;
		}
	}

	return nums.length;
}

removeElement(nums, val);

export {};
