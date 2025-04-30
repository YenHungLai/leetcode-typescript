/**
 * DFS, recursion
 */
function numIslands(grid: string[][]): number {
  let numOfIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        dfs(row, col, grid);
        numOfIslands++;
      }
    }
  }

  function dfs(row: number, col: number, grid: string[][]) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") return;

    grid[row][col] = "0";
    dfs(row - 1, col, grid);
    dfs(row + 1, col, grid);
    dfs(row, col - 1, grid);
    dfs(row, col + 1, grid);
  }

  return numOfIslands;
}

/**
 * DFS, using stack
 */
function numIslands2(grid: string[][]): number {
  let numOfIslands = 0;
  const stack: number[][] = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        numOfIslands++;
        stack.push([row, col]);

        while (stack.length) {
          const [r, c] = stack.pop()!;

          // This is nice, instead of those ugly ass checks like below
          if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === "0") continue;
          grid[r][c] = "0";
          stack.push([r - 1, c]);
          stack.push([r + 1, c]);
          stack.push([r, c - 1]);
          stack.push([r, c + 1]);
        }
      }
    }
  }

  return numOfIslands;
}

/**
 * BFS
 * Sink the island, change all connected 1s to 0
 */
function numIslands3(grid: string[][]): number {
  let numOfIslands = 0;
  const queue: Array<[number, number]> = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        queue.push([row, col]);
        while (queue.length) {
          const [r, c] = queue.shift()!;
          grid[r][c] = "0";
          if (r > 0 && grid[r - 1][c] === "1") queue.push([r - 1, c]);
          if (r < grid.length - 1 && grid[r + 1][c] === "1") queue.push([r + 1, c]);
          if (c > 0 && grid[r][c - 1] === "1") queue.push([r, c - 1]);
          if (c < grid[0].length - 1 && grid[r][c + 1] === "1") queue.push([r, c + 1]);
        }
        numOfIslands++;
      }
    }
  }

  return numOfIslands;
}

console.log(
  numIslands2([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);

export {};
