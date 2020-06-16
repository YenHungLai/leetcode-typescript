const arr: number[] = [1, 0, 2, 3, 0, 4, 5, 0];

function duplicateZeros(arr: number[]): void {
	for (let idx = 0; idx <= arr.length; idx++) {
		if (arr[idx] === 0) {
			arr.splice(idx + 1, 0, 0);
			arr.pop();
			idx += 1;
		}
	}
}

duplicateZeros(arr);
