/**
 * Using properties of stack
 */
function decodeString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      const str = [];
      const digit = [];

      while (stack[stack.length - 1] !== "[") {
        str.unshift(stack.pop());
      }
      stack.pop();

      while (stack.length && /\d/.test(stack[stack.length - 1])) {
        digit.unshift(stack.pop());
      }

      stack.push(...str.join("").repeat(+digit.join("")));
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

console.log(decodeString("3[a2[c]]")); // "accaccacc"
