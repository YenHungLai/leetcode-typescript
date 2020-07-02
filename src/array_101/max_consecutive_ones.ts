const nums = [1, 1, 0, 1, 1, 1];

// function findMaxConsecutiveOnes(nums: number[]): number {
// 	const onesArr = nums.join().replace(/,/g, '').split(/0/g);
// 	return Math.max(...onesArr.map((one) => one.length));
// }

function findMaxConsecutiveOnes(nums: number[]): number {
	let maxCount = 0;
	let count = 0;

	for (let idx = 0; idx <= nums.length; idx++) {
		if (nums[idx]) {
			count++;
		} else {
			if (maxCount < count) maxCount = count;
			count = 0;
		}
	}

	return maxCount;
}

findMaxConsecutiveOnes(nums);

export {};
