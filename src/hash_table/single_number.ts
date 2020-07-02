const nums = [4, 1, 2, 1, 2];

function singleNumber(nums: number[]): number {
	const arr: number[] = [];
	for (const [idx, val] of nums.entries()) {
		if (arr.includes(val)) arr.splice(arr.indexOf(val), 1);
		else arr.push(val);
	}

	return arr.pop() as number;
}

// function singleNumber(nums: number[]): number | undefined {
// 	nums = nums.sort((a, b) => a - b);
// 	for (const [idx, val] of nums.entries()) {
// 		if (idx === 0 && val !== nums[idx + 1]) return val;
// 		if (idx === nums.length - 1 && val === nums[idx - 1]) return val;
// 		if (val !== nums[idx - 1] && val !== nums[idx + 1]) return val;
// 	}
// }

// function singleNumber(nums: number[]): number | undefined {
// 	const map = new Map();
// 	for (const [idx, val] of nums.entries()) {
// 		if (map.has(val)) map.set(val, map.get(val) + 1);
// 		else map.set(val, 1);
// 	}

// 	for (const key of map.keys()) {
// 		if (map.get(key) === 1) return key;
// 	}
// }

console.log(singleNumber(nums));

export {};
