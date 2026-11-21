/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSumPath = -Infinity;
        let currMax = 0;
        let traversal = (curr) => {
            if(!curr) return 0;
            let maxLeft = Math.max(0, traversal(curr.left));
            let maxRight = Math.max(0, traversal(curr.right));
            currMax = curr.val + maxLeft + maxRight;
            maxSumPath = Math.max(currMax, maxSumPath);

            return curr.val + Math.max(maxLeft, maxRight);
        }
        traversal(root);
        return maxSumPath;
    }
}
