function openLock(deadends: string[], target: string): number {
	const deadendsSet = new Set(deadends);
	const seen = new Set('0000');
	const queue = ['0000'];
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
				const s1 = current.substring(0, i) + (current[i] === '9' ? '0' : +current[i] + 1) + current.substring(i + 1);
				const s2 = current.substring(0, i) + (current[i] === '0' ? '9' : +current[i] - 1) + current.substring(i + 1);

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

console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
