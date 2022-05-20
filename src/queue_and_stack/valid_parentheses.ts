function isValid(s: string): boolean {
	const combos = { '(': ')', '{': '}', '[': ']' };
	const stack: string[] = [];

	for (const char of s) {
		if (!Object.keys(combos).includes(char)) {
			const match = stack.pop() as string;
			// @ts-ignore
			if (combos[match] !== char) return false;
		} else stack.push(char);
	}

	return stack.length === 0;
}

console.log(isValid('()[]{}'));
