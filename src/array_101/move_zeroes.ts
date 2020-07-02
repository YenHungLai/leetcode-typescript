const nums = [0, 1, 0, 3, 12];

// function moveZeroes(nums: number[]): void {
// 	let count = 0;
// 	for (const num of nums) if (num === 0) count++;
// 	for (let i = 0; i <= count; i++)
// 		nums.push(nums.splice(nums.indexOf(0), 1)[0]);
// }

function moveZeroes(nums: number[]): void {
	let insertPos = 0;
	// Shift non-zero elements to the front.
	for (const num of nums) {
		if (num !== 0) nums[insertPos++] = num;
	}
	while (insertPos !== nums.length) nums[insertPos++] = 0;
}

moveZeroes(nums);

export {};
