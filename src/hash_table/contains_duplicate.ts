const nums = [1, 2, 3, 1];

function containsDuplicate(nums: number[]): boolean {
	const set = new Set(nums);
	return set.size !== nums.length;
}

containsDuplicate(nums);

export {};
