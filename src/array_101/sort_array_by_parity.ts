const A = [3, 1, 2, 4];

// function sortArrayByParity(A: number[]): number[] {
// 	let insertPos = 0;
// 	const oddNums = [];
// 	for (const num of A) {
// 		if (num % 2 === 0) A[insertPos++] = num;
// 		else oddNums.push(num);
// 	}
// 	while (insertPos <= A.length - 1) A[insertPos++] = oddNums.pop() as number;

// 	console.log(A);
// 	return A;
// }

// // Quick sort
// function sortArrayByParity(A: number[]): number[] {
// 	let i = 0,
// 		j = A.length - 1;

// 	while (i < j) {
// 		// i is odd, j is even
// 		if (A[i] % 2 > A[j] % 2) {
// 			const temp = A[i];
// 			A[i] = A[j];
// 			A[j] = temp;
// 		}
// 		if (A[i] % 2 === 0) i++;
// 		if (A[j] % 2 === 1) j--;
// 	}

// 	return A;
// }

function sortArrayByParity(A: number[]): number[] {
	let oddPtr = 0;
	for (let idx = 0; idx < A.length; idx++) {
		if (A[idx] % 2 === 0) {
			const temp = A[oddPtr];
			A[oddPtr++] = A[idx];
			A[idx] = temp;
		}
	}

	return A;
}

sortArrayByParity(A);

export {};
