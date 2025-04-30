/**
 * Stack solution
 * Whenever you see an operator, pop twice, evaluate, and push result back onto stack
 */
function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  const operators = ["+", "-", "*", "/"];

  for (const token of tokens) {
    if (operators.includes(token)) {
      const n1 = stack.pop();
      const n2 = stack.pop();
      const res = Math.trunc(eval(`${n2} ${token} ${n1}`)).toString();
      stack.push(res);
    } else stack.push(token);
  }

  return +stack.pop()!;
}

console.log(evalRPN(["4", "13", "5", "/", "+"]));

export {};
