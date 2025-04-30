/**
 * BFS
 * Shortest path from n to perfect square number
 */
function numSquares(n: number): number {
  const queue: number[] = [n];
  const squares: number[] = [];
  let result = 1;

  // E.g. 1, 4, 9, 16, 25 ...
  for (let i = 1; i <= n; i++) {
    const isSquare = Number.isInteger(Math.sqrt(i));
    if (isSquare) squares.push(i);
  }

  while (queue.length) {
    const size = queue.length;

    for (let _ = 0; _ < size; _++) {
      const num = queue.shift()!;

      if (squares.includes(num)) return result; // This is O(n), bad??

      // Process the next level, e.g. 12 - 1, 12 - 4, 12 - 9
      squares.forEach((square) => {
        if (square < num && !queue.includes(num - square)) queue.push(num - square);
      });
    }

    result++;
  }

  return result;
}

console.log(numSquares(12));
