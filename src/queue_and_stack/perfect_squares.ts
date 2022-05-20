function numSquares(n: number): number {
	const isPerfSquare = (num: number): Boolean => {
		for (let i = 1; i < num; i++) {
			if (i ** 2 === num) return true;
		}

		return false;
	};

	return 1;
}

console.log(numSquares(12));
