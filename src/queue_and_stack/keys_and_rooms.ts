/**
 * BFS
 * Each room is a node in the graph
 * Each key in a room represents a directed edge to another room (node)
 * The goal is to determine whether you can traverse all nodes starting from room 0 (whether the graph is connected from node 0)
 */
function canVisitAllRooms(rooms: number[][]): boolean {
  const queue: number[] = [0];
  const keys: boolean[] = Array(rooms.length).fill(false);
  // I was storing keys before [2, 1, ...] but this is better, storing two pieces of data at the same time
  keys[0] = true;

  while (queue.length) {
    const key = queue.shift()!;

    for (const newKey of rooms[key]) {
      if (!keys[newKey]) {
        queue.push(newKey);
        keys[newKey] = true;
      }
    }
  }

  return keys.every((key) => key);
}

console.log(canVisitAllRooms([[2], [], [1]])); // This is an adjacency list
