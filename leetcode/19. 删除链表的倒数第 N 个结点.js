/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function getLengthByHead(head){
    if(head === null) return 0
    let current = head
    let len = 1
    while(current.next){
        current = current.next
        len ++
    }
    return len
}


var removeNthFromEnd = function (head, n) {
    let listLength = getLengthByHead(head)
    let deleteIndex = listLength - n
    let current = head
    let previous = null
    let index = 0
    
    if(deleteIndex === 0) {
        head = head.next
    } else{
        while(index < deleteIndex){
            previous = current
            current = current.next
            index ++
        }
        previous.next = current.next
    }
    return head
};

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}

console.log(removeNthFromEnd(head,2))