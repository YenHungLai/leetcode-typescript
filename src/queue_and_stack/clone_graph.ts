class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * DFS with stack
 */
function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const stack = [node];
  const visited = new Map();

  while (stack.length) {
    const node = stack.pop()!;
    if (visited.has(node.val)) continue;

    const clone = new _Node(node.val, []);
    visited.set(clone.val, clone);

    for (const neighbor of node.neighbors) {
      if (visited.has(neighbor.val)) {
        const _neighbor = visited.get(neighbor.val);
        _neighbor.neighbors.push(clone);
        clone.neighbors.push(_neighbor);
      } else stack.push(neighbor);
    }
  }

  return visited.get(node.val);
}

/**
 * DFS with recursion
 */
function cloneGraph2(node: _Node | null): _Node | null {
  if (!node) return null;

  const visited = new Map();

  function dfs(node: _Node) {
    if (visited.has(node)) return visited.get(node);

    const clone = new _Node(node.val, []);
    visited.set(node, clone); // Store the original node and its clone
    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node!);
}
