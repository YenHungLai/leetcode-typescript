const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];

function findRestaurant(list1: string[], list2: string[]): string[] {
	const map: any = {};
	let min = Number.MAX_VALUE;

	for (const [idx, val] of list1.entries()) {
		if (list2.includes(val)) map[val] = idx + list2.indexOf(val);
	}

	for (const [_, val] of Object.entries(map)) {
		if ((val as number) < min) min = val as number;
	}

	return [];
}

findRestaurant(list1, list2);

export {};
