/**
 * BFS
 * Run BFS from multiple starting points (0s)
 *
 * Whenever you have a matrix where you can move between adjacent cells, you should immediately think about graphs
 * If you simply do a BFS for all 1s, it's crazy slow
 * Think about a matrix where the entire matrix is 1 except for one of the corners (worst case)
 *
 * See BFS approach in number_of_islands, it's clean, easy to read but it exceeds time limit here
 * It processes too many cells repeatedly (filters them out using that continue line)
 */
function updateMatrix(mat: number[][]): number[][] {
  const queue: [number, number, number][] = [];
  const seen: boolean[][] = Array.from({ length: mat.length }, () => Array(mat[0].length).fill(false));

  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[0].length; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c, 0]);
        seen[r][c] = true; // Mark as seen immediately to avoid adding redundant cell to queue
      }
    }
  }

  while (queue.length) {
    const [r, c, distance] = queue.shift()!;
    mat[r][c] = distance;

    if (r + 1 < mat.length && !seen[r + 1][c]) {
      queue.push([r + 1, c, distance + 1]);
      seen[r + 1][c] = true;
    }
    if (r - 1 >= 0 && !seen[r - 1][c]) {
      queue.push([r - 1, c, distance + 1]);
      seen[r - 1][c] = true;
    }
    if (c + 1 < mat[0].length && !seen[r][c + 1]) {
      queue.push([r, c + 1, distance + 1]);
      seen[r][c + 1] = true;
    }
    if (c - 1 >= 0 && !seen[r][c - 1]) {
      queue.push([r, c - 1, distance + 1]);
      seen[r][c - 1] = true;
    }
  }

  return mat;
}

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
