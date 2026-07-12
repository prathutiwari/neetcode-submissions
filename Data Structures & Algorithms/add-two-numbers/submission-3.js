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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode();
        let headCopy = head;
        let carry = 0;

        while(l1 || l2 || carry){
            let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
            carry = Math.floor(sum/10);
            let digit = sum%10;

            let newNode =  new ListNode(digit);
            head.next = newNode;
            head = head.next;

            l1 = l1 && l1.next;
            l2 = l2 && l2.next;
        }

        return headCopy.next;
    }
}
