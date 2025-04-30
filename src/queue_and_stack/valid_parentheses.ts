/**
 * Stack solution
 * Use stack to keep track of the next open bracket that needs to be closed
 * FIFO is exactly what this problem requires
 * T: O(n), note that pushing onto stack is O(1) operation
 * S: O(n), worst case: input is all open brackets e.g. "(((((((("
 */
function isValid(s: string): boolean {
  const pairs: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack = [];

  for (const char of s) {
    if (Object.keys(pairs).includes(char)) {
      stack.push(char);
    } else {
      const bracket = stack.pop()!;
      if (char !== pairs[bracket]) return false;
    }
  }

  return stack.length === 0; // No remaining open brackets to close, valid
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
