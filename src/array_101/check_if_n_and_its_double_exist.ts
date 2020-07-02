const arr = [7, 1, 14, 11];

// function checkIfExist(arr: number[]): boolean {
// 	for (const [idx, val] of arr.entries()) {
// 		if (arr.some((number, index) => number === val * 2 && index !== idx))
// 			return true;
// 	}
// 	return false;
// }

function checkIfExist(arr: number[]): boolean {
	const map = new Map();
	for (const [idx, val] of arr.entries()) {
		if ((map.has(val * 2) || map.has(val / 2)) && map.get(val) !== idx)
			return true;
		else map.set(val, idx);
	}
	return false;
}

console.log(checkIfExist(arr));

export {};
