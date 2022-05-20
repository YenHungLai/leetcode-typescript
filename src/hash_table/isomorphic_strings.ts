const s = 'egg',
	t = 'add';

function isIsomorphic(s: string, t: string): boolean {
	const map = new Map();
	for (let idx = 0; idx < s.length; idx++) {
		if (map.has(s[idx]) && map.get(s[idx]) !== t[idx]) return false;
		else map.set(s[idx], t[idx]);
	}

	// If there are duplicates in map.values(), it means two characters are mapped to the same character.
	if (new Set(map.values()).size !== Array.from(map.values()).length)
		return false;

	return true;
}

isIsomorphic(s, t);

export {};
