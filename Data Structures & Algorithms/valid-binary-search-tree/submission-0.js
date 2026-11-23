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
    isValidBST(root) {
        let isBST = (curr, low, high) => {
            if (!curr) return true;

            if ((low != null && low >= curr.val) || (high != null && high <= curr.val)) {
                return false;
            }

            let isLeftBST = isBST(curr.left, low, curr.val);
            let isRightBST = isBST(curr.right, curr.val, high);

            return isLeftBST && isRightBST;
        };

        return isBST(root, null, null);
    }
}
