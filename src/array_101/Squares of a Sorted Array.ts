const A: number[] = [-4, -1, 0, 3, 10];

function sortedSquares(A: number[]): number[] {
	const result: number[] = [];
	for (const num of A) {
		result.push(num ** 2);
	}

	return result.sort((a, b) => a - b);
}

sortedSquares(A);
