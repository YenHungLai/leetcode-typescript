/**
 * BFS
 */
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const queue: [number, number][] = [];
  const starting = image[sr][sc];
  if (starting !== color) queue.push([sr, sc]);

  while (queue.length) {
    const [r, c] = queue.shift()!;
    if (r < 0 || c < 0 || r >= image.length || c >= image[0].length || image[r][c] !== starting) continue;

    image[r][c] = color;
    queue.push([r + 1, c]);
    queue.push([r - 1, c]);
    queue.push([r, c - 1]);
    queue.push([r, c + 1]);
  }

  return image;
}

/**
 * Recursive solution
 */
function floodFill2(image: number[][], sr: number, sc: number, color: number): number[][] {
  const starting = image[sr][sc];
  if (starting !== color) dfs(sr, sc);

  function dfs(r: number, c: number) {
    if (r < 0 || c < 0 || r >= image.length || c >= image[0].length || image[r][c] !== starting) return;

    image[r][c] = color;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]
