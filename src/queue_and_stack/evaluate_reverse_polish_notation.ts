// Brute force
function evalRPN(tokens: string[]): number {
	const stack = [];
	const operators = ['+', '-', '*', '/'];

	for (const token of tokens) {
		if (operators.includes(token)) {
			const num1 = stack.pop();
			const num2 = stack.pop();
			const val = Math.trunc(eval(`${num2} ${token} ${num1}`));
			stack.push(val);
		} else stack.push(token);
	}

	return stack.pop() as number;
}

const ans = evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
console.log(ans);

export {};
