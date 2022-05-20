const n = 19;

const calcNext = (number: number): number => {
	let result = 0;
	for (const digit of number.toString()) {
		result += parseInt(digit) ** 2;
	}
	return result;
};

function isHappy(n: number): boolean {
	const set = new Set();
	let temp = n;
	while (!set.has(1)) {
		temp = calcNext(temp);
		if (set.has(temp)) return false;
		set.add(temp);
	}

	return true;
}

isHappy(n);

export {};
