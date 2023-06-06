/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const arr = [head]
    while(head.next!=null){
        head = head.next
        arr.push(head)
    }
    if(arr.length-n==0)
    return arr[0].next

    if(arr[arr.length-n-1])
    arr[arr.length-n-1].next = arr[arr.length-n].next

    return arr[0]
};