const nums = [2, 7, 11, 15],
	target = 9;

function twoSum(nums: number[], target: number): number[] | undefined {
	const map = new Map();
	for (const [idx, val] of nums.entries()) {
		if (map.has(target - val)) return [idx, map.get(target - val)];
		else map.set(val, idx);
	}
}

twoSum(nums, target);

export {};
