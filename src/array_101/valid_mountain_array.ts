const A = [0, 3, 2, 1];

// function validMountainArray(A: number[]): boolean {
// 	if (A.length < 3) return false;

// 	let isMountain = false;

// 	for (let index = 0; index <= A.length - 1; index++) {
// 		if (index !== A.length - 1 && A[index] === A[index + 1]) return false;
// 		if (
// 			index !== 0 &&
// 			index !== A.length - 1 &&
// 			A[index - 1] > A[index] &&
// 			A[index] < A[index + 1]
// 		)
// 			return false;

// 		if (
// 			index !== 0 &&
// 			index !== A.length - 1 &&
// 			A[index - 1] < A[index] &&
// 			A[index] > A[index + 1]
// 		)
// 			isMountain = true;
// 	}

// 	return isMountain;
// }

function validMountainArray(A: number[]): boolean {
	if (A.length < 3) return false;

	let ptr = 0;
	// Walk up
	while (ptr + 1 < A.length && A[ptr] < A[ptr + 1]) ptr++;

	if (ptr === 0 || ptr === A.length - 1) return false;

	// Walk down
	while (ptr + 1 < A.length && A[ptr] > A[ptr + 1]) ptr++;

	return ptr === A.length - 1;
}

console.log(validMountainArray(A));

export {};
