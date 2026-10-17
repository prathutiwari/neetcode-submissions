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
     * @return {boolean}
     */
    isBalanced(root) {
        let ans = true;

        let calculateHeight = (curr) => {
            if(!curr) return 0;

            let leftHeight = calculateHeight(curr.left);
            let rightHeight = calculateHeight(curr.right);

            if(Math.abs(leftHeight - rightHeight) > 1){
                ans = ans && false;
            }
            return 1 + Math.max(leftHeight, rightHeight);
        }
        calculateHeight(root);
        return ans;
    }
}
