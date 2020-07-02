const arr = [17, 18, 5, 4, 6, 1];

// function replaceElements(arr: number[]): number[] {
// 	for (let i = 0; i < arr.length; i++) {
// 		let largest = arr[i + 1];
// 		for (let j = i + 2; j < arr.length; j++) {
// 			if (largest < arr[j]) largest = arr[j];
// 		}
// 		arr[i] = largest;
// 	}

// 	arr[arr.length - 1] = -1;
// 	return arr;
// }

// Start from end of array, O(n)
function replaceElements(arr: number[]): number[] {
	let largest = null;
	for (let idx = arr.length - 1; idx >= 0; idx--) {
		if (largest) {
			const temp = arr[idx];
			arr[idx] = largest;
			if (temp > largest) {
				largest = temp;
			}
		} else {
			largest = arr[idx];
		}
	}

	arr[arr.length - 1] = -1;
	return arr;
}

replaceElements(arr);

export {};
