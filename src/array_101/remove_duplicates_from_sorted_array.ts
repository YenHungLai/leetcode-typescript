const nums = [1, 1, 2];

// function removeDuplicates(nums: number[]): number {
// 	const arr: number[] = [];

// 	for (let idx = 0; idx <= nums.length; idx++) {
// 		if (arr.includes(nums[idx])) {
// 			nums.splice(idx, 1);
// 			idx--;
// 		} else arr.push(nums[idx]);
// 	}

// 	return nums.length;
// }

function removeDuplicates(nums: number[]): number {
	const set = new Set();

	for (let idx = 0; idx <= nums.length; idx++) {
		if (set.has(nums[idx])) {
			nums.splice(idx, 1);
			idx--;
		} else set.add(nums[idx]);
	}

	return nums.length;
}

removeDuplicates(nums);

export {};
