/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if(!root) return root;
        let traversal = (curr) => {
            if(curr.left){
                curr.left.next = curr.right;
            }
            if(curr.right && curr.next){
                curr.right.next = curr.next.left;
            }
            curr.left && traversal(curr.left);
            curr.right && traversal(curr.right);
        }
        traversal(root);
        return root;
    }
}
