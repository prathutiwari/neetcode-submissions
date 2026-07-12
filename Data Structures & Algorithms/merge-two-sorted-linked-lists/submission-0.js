/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        let newNode = new ListNode();
        let newNodeCopy = newNode;

        while(l1 && l2){
            if(l1.val > l2.val){
                newNode.next = l2;
                l2 = l2.next;
            }else{
                newNode.next = l1;
                l1 = l1.next
            }
            newNode = newNode.next;
        }

        if(l1){
            newNode.next = l1;
        }
        if(l2){
            newNode.next = l2;
        }

        return newNodeCopy.next;
    }
}
