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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let hashRoot = this.serialize(root);
        let hashSubRoot = this.serialize(subRoot);

        return hashRoot.includes(hashSubRoot);
    }

    serialize(root){
        let hash = "";
        let traversal = (curr) => {
            if(!curr){
                hash = hash +'-#';
                return;
            }
            hash = hash + "-" + curr?.val;
            traversal(curr.left);
            traversal(curr.right);
        }
        traversal(root);
        return hash;
    }
}
