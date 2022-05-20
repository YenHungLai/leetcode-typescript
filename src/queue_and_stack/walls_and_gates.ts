// DFS, recursive.

/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
	let distance = 0;
	for (let row = 0; row < rooms.length; row++) {
		for (let col = 0; col < rooms[0].length; col++) {
			if (rooms[row][col] === 0) dfs(row, col, distance, rooms);
		}
	}

	function dfs(r: number, c: number, distance: number, rooms: number[][]) {
		if (r < 0 || c < 0 || r >= rooms.length || c >= rooms[0].length || rooms[r][c] < distance)
			return;

		rooms[r][c] = distance;
		dfs(r + 1, c, distance + 1, rooms);
		dfs(r - 1, c, distance + 1, rooms);
		dfs(r, c + 1, distance + 1, rooms);
		dfs(r, c - 1, distance + 1, rooms);
	}
}

// BFS
function wallsAndGates2(rooms: number[][]): void {
	const queue: Array<[number, number]> = [];
	const INF = 2147483647;
	for (let row = 0; row < rooms.length; row++) {
		for (let col = 0; col < rooms[0].length; col++) {
			if (rooms[row][col] === 0) queue.push([row, col]);
		}
	}

	while (queue.length) {
		const [r, c] = queue.shift()!;
		// Up
		if (r > 0 && rooms[r - 1][c] === INF) {
			rooms[r - 1][c] = rooms[r][c] + 1;
			queue.push([r - 1, c]);
		}
		// Down
		if (r < rooms.length - 1 && rooms[r + 1][c] === INF) {
			rooms[r + 1][c] = rooms[r][c] + 1;
			queue.push([r + 1, c]);
		}
		// Left
		if (c > 0 && rooms[r][c - 1] === INF) {
			rooms[r][c - 1] = rooms[r][c] + 1;
			queue.push([r, c - 1]);
		}
		// Right
		if (c < rooms[0].length - 1 && rooms[r][c + 1] === INF) {
			rooms[r][c + 1] = rooms[r][c] + 1;
			queue.push([r, c + 1]);
		}
	}
}

export {};
