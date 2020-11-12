// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the 
// first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 
// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// reassign next nodes 
// keep track of a current node in each linked list, start at head of both
// increment based on which node has a smaller next node 
// keep adding smallest node (comparing both l1 & l2) to new linkedList

var mergeTwoLists = function(l1, l2) {

    if(l1 === null) return l2;
    if(l2 === null) return l1;

    // let newList = new ListNode(0)

    while (l1 !== null || l2 !== null){
        if (l1 === null){
            // assign l2 to our new list 
            l2 = l2.next
        } else if (l2 === null){
            // assign l1 to our new list
            l1 = l1.next
        } else {
            if (l1.val < l2.val){
                // assign l1 to our new list
                l1 = l1.next
            } else {
                // assign l2 to our new list
                l2 = l2.next    
            }
        }
        // increment down our newList to new added node

    }
    
    // return newList 
};

// [{
//     val: 1,
//     next: 2
// }  
// ] 


class Solution:
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2



class Solution:
    def mergeTwoLists(self, l1, l2):
        # maintain an unchanging reference to node ahead of the return node.
        prehead = ListNode(-1)

        prev = prehead
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next            
            prev = prev.next

        # exactly one of l1 and l2 can be non-null at this point, so connect
        # the non-null list to the end of the merged list.
        prev.next = l1 if l1 is not None else l2

        return prehead.next