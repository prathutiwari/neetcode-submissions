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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = null;
        let count = k;
        let traversal = (curr) => {
            if(curr < 0) return;
            curr.left && traversal(curr.left);
            --count;
            if(count == 0){
                return ans = curr.val;
            }
            curr.right && traversal(curr.right);
        }
        traversal(root);
        return ans;
    }
}
