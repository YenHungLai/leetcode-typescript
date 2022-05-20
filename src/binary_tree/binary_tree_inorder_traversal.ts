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
function inorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];

	const result = [];
	const stack = [root];
	let ptr: TreeNode | null = root;

	while (stack.length) {
		while (ptr!.left) {
			stack.push(ptr!.left);
			ptr = ptr!.left;
		}
		const current = stack.pop() as TreeNode;
		result.push(current.val);
		if (current.right) {
			stack.push(current.right as TreeNode);
			ptr = current.right;
		}
	}

	return result;
}
