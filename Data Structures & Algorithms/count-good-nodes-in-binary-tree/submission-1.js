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
    goodNodes(root) {
        let ans = 0;
        let traversal = (curr, maxSeenSoFar) => {
            if(curr.val >= maxSeenSoFar){
                ++ans;
            }
            let currMax = Math.max(maxSeenSoFar, curr.val);
            curr.left && traversal(curr.left, currMax);
            curr.right && traversal(curr.right, currMax);
        }
        traversal(root, -Infinity);
        return ans;
    }
}
