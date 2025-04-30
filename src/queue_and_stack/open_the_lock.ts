/**
 * BFS
 *
 * This is a pretty standard BFS code
 */
function openLock(deadends: string[], target: string): number {
  const deadendsSet = new Set(deadends);
  const seen = new Set("0000");
  const queue = ["0000"];
  let turns = 0;

  while (queue.length) {
    const size = queue.length;

    // Process all nodes currently in the queue.
    for (let _ = 0; _ < size; _++) {
      const current = queue.shift() as string;

      if (current === target) return turns;
      if (deadendsSet.has(current)) continue;

      // Try all possible neighboring nodes.
      for (let i = 0; i < current.length; i++) {
        const s1 = current.substring(0, i) + (current[i] === "9" ? "0" : +current[i] + 1) + current.substring(i + 1);
        const s2 = current.substring(0, i) + (current[i] === "0" ? "9" : +current[i] - 1) + current.substring(i + 1);

        if (!deadendsSet.has(s1) && !seen.has(s1)) {
          queue.push(s1);
          seen.add(s1);
        }
        if (!deadendsSet.has(s2) && !seen.has(s2)) {
          queue.push(s2);
          seen.add(s2);
        }
      }
    }

    turns++;
  }

  return -1;
}

/**
 * Pretty much the same as above
 */
function openLock2(deadends: string[], target: string): number {
  let turns = 0;
  const queue: string[][] = [];
  const seen = new Set<string>();

  queue.push(["0", "0", "0", "0"]);
  while (queue.length) {
    const size = queue.length;

    // This is what I was missing when I almost had it, process all the nodes currently in the queue
    for (let _ = 0; _ < size; _++) {
      const lock = queue.shift()!;

      if (lock.join("") === target) return turns;
      if (deadends.includes(lock.join("")) || seen.has(lock.join(""))) continue;
      seen.add(lock.join(""));

      for (let i = 0; i < 4; i++) {
        const _lock = [...lock];
        const forward = _lock[i] === "9" ? "0" : String.fromCharCode(_lock[i].charCodeAt(0) + 1);
        const backward = _lock[i] === "0" ? "9" : String.fromCharCode(_lock[i].charCodeAt(0) - 1);

        _lock.splice(i, 1, forward);
        queue.push([..._lock]);
        _lock.splice(i, 1, backward);
        queue.push([..._lock]);
      }
    }

    // It's considered a turn when you've processed neighboring nodes for all the nodes currently in the queue
    turns++;
  }

  return -1;
}

console.log(openLock2(["0201", "0101", "0102", "1212", "2002"], "0202"));

/**
 * Notes:
 *
 * BFS guarantees the shortest path in an unweighted graph, so as soon as we find an answer, we know it is the optimal one
 */
