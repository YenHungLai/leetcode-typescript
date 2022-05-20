/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// DFS
function preorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];

	const result = [];
	const stack = [root];

	while (stack.length) {
		const current = stack.pop() as TreeNode;
		result.push(current.val);
		// Push left last so it will get popped first.
		if (current.right) stack.push(current.right);
		if (current.left) stack.push(current.left);
	}

	return result;
}

// Recursive

