import { NumericLiteral } from 'typescript';

// DFS
function numIslands(grid: string[][]): number {
	let numOfIsland = 0;
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === '1') {
				numOfIsland++;
				dfs(row, col, grid);
			}
		}
	}

	return numOfIsland;

	function dfs(r: number, c: number, grid: string[][]) {
		if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;

		grid[r][c] = '0';

		dfs(r - 1, c, grid);
		dfs(r + 1, c, grid);
		dfs(r, c - 1, grid);
		dfs(r, c + 1, grid);
	}
}

// BFS
function numIslands2(grid: string[][]): number {
	let numOfIslands = 0;
	const queue: Array<[number, number]> = [];

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === '1') {
				queue.push([row, col]);
				while (queue.length) {
					const [r, c] = queue.shift()!;
					grid[r][c] = '0';
					if (r > 0 && grid[r - 1][c] === '1') queue.push([r - 1, c]);
					if (r < grid.length - 1 && grid[r + 1][c] === '1') queue.push([r + 1, c]);
					if (c > 0 && grid[r][c - 1] === '1') queue.push([r, c - 1]);
					if (c < grid[0].length - 1 && grid[r][c + 1] === '1') queue.push([r, c + 1]);
				}
				numOfIslands++;
			}
		}
	}

	return numOfIslands;
}

export {};
