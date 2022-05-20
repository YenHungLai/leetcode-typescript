const s = 'leetcode';

function firstUniqChar(s: string): number {
	const map = new Map();
	for (let idx = 0; idx < s.length; idx++) {
		if (map.has(s[idx])) map.set(s[idx], -1);
		else map.set(s[idx], idx);
	}

	// Map keeps insertion-order.
	for (const val of map.values()) {
		if (val !== -1) return val;
	}

	return -1;
}

firstUniqChar(s);

export {};
