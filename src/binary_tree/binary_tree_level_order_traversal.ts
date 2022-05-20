class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// BFS
function levelOrder(root: any | null): number[][] {
	if (!root) return [];

	const result = [];
	const queue = [];
	queue.push(root);

	while (queue.length) {
		const size = queue.length;
		const level = [];
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		result.push(level);
	}

	return result;
}
